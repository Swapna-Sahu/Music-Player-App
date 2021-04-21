import Image from 'next/image'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-1">
                    <Image src="/Assets/Logo/Mark/White@2x.png" width={130} height={50} />
                </div>
                <div className="col">
                    <p>© 2021 Moodagent</p>
                </div>
                <div className="col-sm-8">
            <ul className="footer_nav">
                <li>Privacy policy</li>
                <li>Terms of Use</li>
                <li>Newsroom</li>
                <li>Cookies</li>
                <li>Contact</li>
                    </ul>
                    </div>
            </div>
        </footer>
     );
}
 
export default Footer;