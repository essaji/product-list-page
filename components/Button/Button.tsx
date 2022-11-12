import {ReactNode} from "react";

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick}
            className={`flex text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${props.positionClass || "relative"}`}>
      {props.children}
    </button>
  )
}

interface ButtonProps {
  onClick: () => void
  children: ReactNode
  positionClass?: string
}