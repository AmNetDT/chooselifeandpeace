import Image from 'next/image'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

import Menu from './menu'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { getAllCategories } from '@/lib/actions/product.actions'
import Search from './search'

const Header = async () => {
  const categories = await getAllCategories()
  return (
    <header className="w-full border-b" style={{ backgroundColor: '#1d132d' }}>
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/assets/icons/logo.png"
              width={70}
              height={70}
              alt={`${APP_NAME} logo`}
            />
            {/* {APP_NAME} */}
          </Link>
        </div>
        <div className="wrapper flex items-center justify-between">
          <div className="flex items-center">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  style={{
                    padding: '23px',
                    backgroundColor: '#1d132d',
                    color: '#ffffff',
                    border: 'solid 1px #ffffff',
                  }}
                >
                  <MenuIcon />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Select a category</DrawerTitle>
                  <div className="space-y-1">
                    {categories.map((category: { name: string }) => (
                      <Button
                        className="w-full justify-start"
                        variant="ghost"
                        key={category.name}
                        asChild
                        style={{
                          fontSize: '1.2rem', // Corrected font-size to fontSize in camelCase
                        }}
                      >
                        <DrawerClose asChild>
                          <Link href={`/search?category=${category.name}`}>
                            {category.name}
                          </Link>
                        </DrawerClose>
                      </Button>
                    ))}
                  </div>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </div>

          <div className="hidden md:block">
            <Search />
          </div>
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header
