import CategoryType from '../components/CategoryType'
import Layout from '../components/layout/Layout'
import styles from './home.module.scss'

export default function Home() {
  return (
    <Layout>
      <main className={styles.container}>
        <h1>How much does it cost to make an App? </h1>
        <ul>
          <li>
            <CategoryType
            title="Like existing Apps"
            description="Uber, Instagram, Airbnb, Whatsapp etc."
            imageSrc="/images/mobile.png"
            themeClass="dark"/>
          </li>
          <li>
            <CategoryType
            title=" For my own business"
            description="Cars & Transport, Social networking, Travel, Health & Beauty etc. "
            imageSrc="/images/pasta.png" />
          </li>
        </ul>
      </main>
    </Layout>
  )
}
