import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Media from '../components/SocialMedia'
import SubFooter from '../components/SubFooter'
import Question from '../components/question'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container-sm">
      <Navbar />
      <section className="row" >
        <div className="col-sm m-5 " >
          <h3 className={styles.title}>Getting Started</h3>
          <h5 className={styles.subtitle}>Moodagent on mobile:</h5>
          <ol >
            <li className={styles.steps}>Download the Moddagent app here:<br/>
             <span className="btn btn-light rounded-pill">Install</span>
            </li>
            <li className={styles.steps}>Follow the on-screen instructions to create your account.</li>
            <li className={styles.steps}>Tell us what you like to listen to.
            You can choose from the suggested artist or search for anyone you want, as long as you pick at least three. You might wanne pick even more- this will be the foundation of your  personalized experience on Moodagent.
            </li>
            <li className={styles.steps}>Start listening. The more you listen, the more you love. the more moodagents you create , the better your personalized recommendation will become.</li>
          </ol>
        </div>
        <div className="col-sm">
          <div className={[styles.right,styles.image1].join(" ")}>
            <Image
              src="/Assets/Device Image/Moodagent@2x.png"
              width={180}
              height={400}
            />
          </div>
        </div>
      </section>
      
      <section className="row">
        <div className="col-sm pl-3" >
          <div className={[styles.left,styles.image2].join(" ")}>
            <Image
              src="/Assets/Device Image/Desktop player.png"
              width={470}
              height={270}
            />
          </div>
        </div>
        <div className="col-sm">
          <h5 className={styles.subtitle}>Moodagent on desktop:</h5>
          <ol >
            <li className={styles.steps}>If you already have a Moodagent account, continue to the next step. If not, follow the steps above to create your account using our mobile app.
            </li>
            <li className={styles.steps}>Download the Moodagent desktop app for Mac or Windows here:<br/>
              <button className="btn btn-light rounded-pill m-1">macOS</button>
              <button className="btn btn-light rounded-pill">Windows</button>
            </li>
            <li className={styles.steps}>Install as directed on your device.</li>
            <li className={styles.steps}>Launch the desktop app and log in with your email and password. Hint: If you created your account using Apple or Facebook , you never had to choose a password . Just click "Forgot password?" to get a verification code and enter that along with your chosen password.</li>
            <li className={styles.steps}>Start listening. The more you listen, the more you love. the more moodagents you create , the better your personalized recommendation will become.</li>
          </ol>
        </div>
      </section>

      <section className={styles.questions}>
        <h2 className={styles.questions_title}>Got other <span className="text-warning">question</span> about Moodagent? We have answers.</h2>
        <Question />
      </section>

      <div className={styles.details}>
        <h4 className="text-center fw-bold mb-5">Didn't find what you were looking for?</h4>
        <div className="row">
          <div className="col-sm-4 text-center ">
            <p>Checkout the full FAQ</p>
          </div>
          <div className="col-sm-1 text-center"> 
            <Image src="/Assets/Icon/Arrow/Right.png" width={20} height={15} alt="Arrow down"/>
          </div>
          <div className="col-sm-4 text-center">
          <p> Drop us a line</p>
          </div>
          <div className="col-sm-1 text-center"> 
            <Image src="/Assets/Icon/Arrow/Right.png" width={20} height={15} alt="Arrow down"></Image>
          </div>
        </div>
      </div>
      

      <SubFooter />
      
      <div className="row d-flex justify-content-end mt-5 pt-5">
        <Media/> 
      </div>
      <Footer />
    </div>
  )
}
