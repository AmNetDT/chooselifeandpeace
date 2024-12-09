import { auth } from '@/auth'
import DeleteDialog from '@/components/shared/delete-dialog'
import Pagination from '@/components/shared/pagination'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { deleteUser, getAllUsers } from '@/lib/actions/user.actions'
import { APP_NAME } from '@/lib/constants'
import { formatId } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: `Admin Users - ${APP_NAME}`,
}

export default async function AdminUser({
  searchParams,
  children,
}: {
  searchParams: { page: string }
  children: React.ReactNode
}) {
  const session = await auth()
  if (session?.user.role !== 'admin')
    throw new Error('admin permission required')
  const page = Number(searchParams.page) || 1
  const users = await getAllUsers({
    page,
  })

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold text-gray-300 my-4">
        Users Manager
      </h1>
      <div className="p-4 bg-white shadow-sm rounded-lg border border-gray-400 hover:bg-gray-200">
        <div className="overflow-x-auto">
          <Table className="w-full text-gray-800">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="text-black">ID</TableHead>
                <TableHead className="text-black">NAME</TableHead>
                <TableHead className="text-black">EMAIL</TableHead>
                <TableHead className="text-black">ROLE</TableHead>
                <TableHead className="text-black">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{formatId(user.id)}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="flex gap-1">
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={`/admin/users/${user.id}`}
                        className="hover:bg-gray-500"
                      >
                        Edit
                      </Link>
                    </Button>
                    <DeleteDialog id={user.id} action={deleteUser} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {users?.totalPages! > 1 && (
            <Pagination page={page} totalPages={users?.totalPages!} />
          )}
        </div>

        {/* Render children */}
        {children}
      </div>
    </div>
  )
}
