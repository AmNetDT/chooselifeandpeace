import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getAllCategories } from '@/lib/actions/product.actions'
import { SearchIcon } from 'lucide-react'
export default async function Search() {
  const categories = await getAllCategories()
  return (
    <form action="/search" method="GET">
      <div className="flex w-full" style={{ color: '#ffffff' }}>
        <Select name="category">
          <SelectTrigger
            style={{
              backgroundColor: '#ffffff',
              color: '#1d132d',
              width: '100px',
              padding: '25px',
            }}
          >
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key={'All'} value={'all'}>
              All
            </SelectItem>
            {categories.map((category: { name: string }) => (
              <SelectItem key={category.name} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          name="q"
          type="text"
          placeholder="Search..."
          style={{
            backgroundColor: '#ffffff',
            width: '450px',
            padding: '25px 3px',
          }}
        />
        <Button style={{ backgroundColor: '#F5BF77', padding: '26px' }}>
          <SearchIcon />
        </Button>
      </div>
    </form>
  )
}
