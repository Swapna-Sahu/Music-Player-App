import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Media from '../components/SocialMedia'
import SubFooter from '../components/SubFooter'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Hello World</h1>
      <SubFooter />

      <div className="row d-flex justify-content-end mt-5 pt-5">
        <Media/> 
      </div>
      <Footer />
    </div>
  )
}
