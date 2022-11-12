import {useState} from "react";
import Button from "../Button/Button";

export default function FilterInput(props: FilterInputProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const onKeyPress = (e: any) => {
    if (e.charCode === 13) {
      props.onSearchQueryChange(searchQuery)
    }
  }
  return (
    <div className="relative w-[400px]">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input type="search" id="default-search" onChange={e => setSearchQuery(e.currentTarget.value)} onKeyPress={onKeyPress}
             className="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Search Movies..." required />
      <Button onClick={() => props.onSearchQueryChange(searchQuery)} positionClass="absolute">Search</Button>
    </div>
)
}

export interface FilterInputProps {
  onSearchQueryChange: (args: string) => void
}