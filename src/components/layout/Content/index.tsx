import { ReactNode } from "react"

import styles from './styles.module.scss'

type ContentComponentProps = {
    children: ReactNode
}

export default function Content({ children }: ContentComponentProps) {
    return <main className={styles.main}>
        { children }
    </main>
}