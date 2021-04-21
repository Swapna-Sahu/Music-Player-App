import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div className={styles.menu}>
            <nav className="navbar bg-dark fixed-top">
                <div>
                    <a className="navbar-brand ml-5" href="#">
                    <Image src="/Assets/Logo/Full/Horizontal/Color-white@2x.png" width={150} height={30} alt="logo"/>
                    </a>
                </div>
                <Link href="#"><a className={styles.navline}><small>Home</small></a></Link>
                <Link href="#"><a className={styles.navline}><small>Download</small></a></Link>
                <Link href="#"><a className={styles.navline}><small>Support</small></a></Link>
                <button className="btn btn-dark">Login</button>
                <button className="btn btn-light rounded-pill m-2">Start free trail</button>
                
            </nav>
        </div>
     );
}
 
export default Navbar;