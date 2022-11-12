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
    <div className="relative w-[300px]">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input type="search" id="default-search" onChange={e => setSearchQuery(e.currentTarget.value)} onKeyPress={onKeyPress}
             className="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
             placeholder="Filter Movies..." required />
      <button onClick={() => props.onSearchQueryChange(searchQuery)}
              className="flex text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 absolute">
        Filter
      </button>
    </div>
)
}

export interface FilterInputProps {
  onSearchQueryChange: (args: string) => void
}