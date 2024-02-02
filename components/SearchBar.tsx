import { Search } from 'lucide-react'

export default function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div className="relative w-full">
      <label>
        <span className="sr-only">Search articles</span>
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="border-muted-foreground text-muted-foreground focus:border-primary dark:border-muted block w-full rounded-md border bg-black px-4 py-2 focus:ring-orange-100"
        />
      </label>
      <Search className="text-muted-foreground absolute right-3 top-3 h-5 w-5" />
    </div>
  )
}
