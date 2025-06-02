import { HTMLAttributes } from "react"

import styles from "./styles.module.css"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export function Heading(props: HeadingProps) {
  return (
    <h1
      {...props}
      className={`${styles.heading} ${props.className}`}
    />
  )
}
