// pages/api/products/delete.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { deleteProduct } from '@/lib/actions/product.actions'
import { desc } from 'drizzle-orm'
import db from '@/db/drizzle'
import { products } from '@/db/schema'
import { and, count, eq, ilike, sql } from 'drizzle-orm/sql'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { PAGE_SIZE } from '@/lib/constants'
import { insertProductSchema, updateProductSchema } from '@/lib/validator'
import { formatError } from '@/lib/utils'
// CREATE
export async function createProduct(data: z.infer<typeof insertProductSchema>) {
  try {
    const product = insertProductSchema.parse(data)
    await db.insert(products).values(product)
    revalidatePath('/admin/products')
    return {
      success: true,
      message: 'Product created successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}
// UPDATE
export async function updateProduct(data: z.infer<typeof updateProductSchema>) {
  try {
    const product = updateProductSchema.parse(data)
    const productExists = await db.query.products.findFirst({
      where: eq(products.id, product.id),
    })
    if (!productExists) throw new Error('Product not found')
    await db.update(products).set(product).where(eq(products.id, product.id))
    revalidatePath('/admin/products')
    return {
      success: true,
      message: 'Product updated successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}
// GET
export async function getProductById(productId: string) {
  return await db.query.products.findFirst({
    where: eq(products.id, productId),
  })
}

export async function getLatestProducts() {
  const data = await db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    //limit: 4,
  })
  return data
}

export async function getProductBySlug(slug: string) {
  return await db.query.products.findFirst({
    where: eq(products.slug, slug),
  })
}

export async function getAllCategories() {
  const data = await db
    .selectDistinctOn([products.category], { name: products.category })
    .from(products)
    .orderBy(products.category)
  return data
}
export async function getFeaturedProducts() {
  const data = await db.query.products.findMany({
    where: eq(products.isFeatured, true),
    orderBy: [desc(products.createdAt)],
    //limit: 4,
  })
  return data
}

export async function getAllProducts({
  query,
  limit = PAGE_SIZE,
  page,
  category,
  price,
  rating,
  sort,
}: {
  query: string
  category: string
  limit?: number
  page: number
  price?: string
  rating?: string
  sort?: string
}) {
  const queryFilter =
    query && query !== 'all' ? ilike(products.name, `%${query}%`) : undefined
  const categoryFilter =
    category && category !== 'all' ? eq(products.category, category) : undefined
  const ratingFilter =
    rating && rating !== 'all'
      ? sql`${products.rating} >= ${rating}`
      : undefined

  // 100-200
  const priceFilter =
    price && price !== 'all'
      ? sql`${products.price} >= ${price.split('-')[0]} AND ${
          products.price
        } <= ${price.split('-')[1]}`
      : undefined
  const order =
    sort === 'lowest'
      ? products.price
      : sort === 'highest'
      ? desc(products.price)
      : sort === 'rating'
      ? desc(products.rating)
      : desc(products.createdAt)
  const condition = and(queryFilter, categoryFilter, ratingFilter, priceFilter)
  const data = await db
    .select()
    .from(products)
    .where(condition)
    .orderBy(order)
    .offset((page - 1) * limit)
    .limit(limit)

  const dataCount = await db
    .select({ count: count() })
    .from(products)
    .where(condition)

  return {
    data,
    totalPages: Math.ceil(dataCount[0].count / limit),
  }
}

// DELETE
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' })
  }

  const { id } = req.body
  if (!id) {
    return res.status(400).json({ success: false, message: 'ID is required' })
  }

  try {
    const result = await deleteProduct(id)
    return res.status(200).json(result)
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Failed to delete product' })
  }
}