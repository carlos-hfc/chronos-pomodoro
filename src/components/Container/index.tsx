import { HTMLAttributes } from "react"

import styles from "./styles.module.css"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container(props: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}
