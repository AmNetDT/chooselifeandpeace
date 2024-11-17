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
      <div className="flex w-full" style={{ color: '#000000' }}>
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
            <SelectItem
              key={'All'}
              value={'all'}
              style={{
                fontSize: '1.0rem',
                color: 'black', // Text color remains black
              }}
              className="hover:text-black" // Ensure text remains black on hover
            >
              All
            </SelectItem>
            {categories.map((category: { name: string }) => (
              <SelectItem
                key={category.name}
                value={category.name}
                style={{
                  fontSize: '1.0rem',
                  color: 'black', // Text color remains black
                }}
                className="hover:text-black" // Ensure text remains black on hover
              >
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          name="q"
          type="text"
          style={{
            backgroundColor: 'lavender',
            color: '#000000',
            width: '450px',
            padding: '25px 3px',
            fontSize: '1.0rem',
          }}
        />
        <Button
          style={{
            backgroundColor: '#F5BF77',
            padding: '26px',
            fontSize: '1.0rem',
          }}
        >
          <SearchIcon />
        </Button>
      </div>
    </form>
  )
}
