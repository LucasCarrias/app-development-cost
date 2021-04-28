import { ReactNode } from 'react'

import Content from '../Content'
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
      <Content>
        {children}
      </Content>
      <Footer/>
    </div>
  )
}