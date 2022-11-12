export default function Select(props: SelectProps) {

  const items: any = {
    "Most Popular": "popularity.desc",
    "Least Popular": "popularity.asc",
    "Recently Released": "release_date.desc",
    "First Released": "release_date.asc",
    "High Revenue": "revenue.desc",
    "Low Revenue": "revenue.asc",
    "Most Votes": "vote_count.desc",
    "Least Votes": "vote_count.asc"
  }
  return (
    <div className="flex whitespace-nowrap items-center gap-2" >
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">
        Sort By
      </label>
      <select id="countries" onChange={e => props.onChange(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
        {Object.keys(items).map(key => <option key={key} value={items[key]}>{key}</option>)}
      </select>
    </div>
  )
}

interface SelectProps {
  onChange: (args: string) => void
}

