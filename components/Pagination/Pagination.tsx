import Button from "../Button/Button";

export default function Pagination(props: PaginationProps) {
  const isFirstPage = props.currentPage === 1
  const isLastPage = props.currentPage >= props.totalPages
  return (
    <div className="flex items-center justify-end gap-4">
      {!isFirstPage && <Button onClick={props.onClickPrev}>
        <svg aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"></path>
        </svg>
        Previous
      </Button>}
      {!isLastPage && <Button onClick={props.onClickNext}>
          Next
        <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
      </Button>}
    </div>
  )
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onClickNext: () => void
  onClickPrev: () => void
}