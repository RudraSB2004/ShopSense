import { ReactNode } from "react";
import "../../app/globals.css"
interface ContainerProps {
    children: ReactNode
}
export default function Container({children} : ContainerProps) {
    return (
     <div className="mx-auto max-w-7xl px-6">
      {children}
    </div>   
    )
}