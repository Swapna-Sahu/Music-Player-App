import Image from 'next/image'
import styles from '../styles/Home.module.css'

const SubFooter = () => {
    return (
        <section className="row mt-5">
        <div className="col-sm-3 mt-5">
          <div >
            <p className={styles.navline} ><span className="fw-bold">Get Started</span></p>
            <p  className={styles.navline} >Download</p>
            <p>How to get started</p>
            <p>Support</p>
          </div>
        </div>
        <div className="col-sm-3 mt-5">
          <div>
            <p><span className="fw-bold">Account</span></p>
            <p>Manage account</p>
            <p>Redeem Voucher</p>
            <p>Subscribtion</p>
          </div>
        </div>
        <div className="col-sm-3 mt-5">
          <div>
            <p><span className="fw-bold">Behind the Screen</span></p>
            <p>Where we are</p>
            <p>About</p>
            <p>News</p>
          </div>
        </div>
        <div className="col-sm-3 mt-5">
          <div>
            <div><Image src="/Assets/app_store_badge.png" width={200} height={50} alt="app store"></Image></div>
            <div><Image src="/Assets/google_play.png" width={200} height={50} alt="google play"></Image></div>
            <div><Image src="/Assets/huawei_badge@2x.png" width={200} height={50} alt="app gallery"></Image></div>
          </div>
        </div>

      </section>
    );
}
 
export default SubFooter;