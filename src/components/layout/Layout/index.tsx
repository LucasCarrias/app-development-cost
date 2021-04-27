import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './styles.module.scss'

type HomeComponentProps = {
    children: ReactNode
}

export default function Home({ children }: HomeComponentProps) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer/>
    </div>
  )
}