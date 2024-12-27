import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
        <>
         <div className="footer">
            {/* <Link href="mailto:areebasheikh27.as@gmail.com" className="btn-outline-primary">Let’s Talk</Link> */}
        
         {/* Social Media Links  */}
        <div className="social-media">
            <Link href="https://www.facebook.com/areeba.sheikh.92?mibextid=ZbWKwL" target="_blank" className="icon1" > <FaFacebook /></Link> 
            <Link href="https://www.instagram.com" target="_blank" className="icon2"> <FaInstagram /></Link>
            <Link href="https://www.linkedin.com/in/areeba-sheikh-618283213" target="_blank" className="icon3"><FaLinkedin />
</Link>
          </div>
          <p className="copyright">&copy; 2024 Areeba Sheikh. All rights reserved.</p>
          </div>

        </>
    );
};
export default Footer;