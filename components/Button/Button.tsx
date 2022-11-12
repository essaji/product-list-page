import {ReactNode} from "react";

export default function Button(props: ButtonProps) {
  return (
    <button type="button" onClick={props.onClick}
            className="flex text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
      {props.children}
    </button>
  )
}

interface ButtonProps {
  onClick: () => void
  children: ReactNode
}