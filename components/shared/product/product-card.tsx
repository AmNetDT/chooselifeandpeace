import Image from 'next/image'
import Link from 'next/link'
import ProductPrice from './product-price'
import Rating from './rating'
//import React from 'react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Product } from '@/types'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm radius-0">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            alt={product.name}
            className="aspect-square object-cover"
            height={300}
            src={product.images![0]}
            width={300}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="grid gap-1.5 text-sm leading-4">
          <Link
            href={`/product/${product.slug}`}
            className="hover:text-lavender hover:underline"
          >
            <p style={{ fontSize: '1.3rem' }}>{product.brand}</p>
          </Link>
        </div>
        <div className="grid gap-1.5 text-sm leading-4">
          <Link
            href={`/product/${product.slug}`}
            className="hover:text-lavender hover:underline"
          >
            <h1 style={{ fontSize: '1.0rem' }}>{product.name}</h1>
          </Link>
        </div>
        <div className="flex-between gap-4">
          {/* <p>{product.rating} stars</p> */}
          <Rating value={Number(product.rating)} />
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
