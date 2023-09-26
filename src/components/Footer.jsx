import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaCopyright, FaArrowAltCircleUp } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-logo">
          <p>Designed & coded by Wallew_dev</p>
          <div className="socials">
              <a href="https://github.com/olanrewajuyusuf" target='_blank' rel='noreferrer'><FaGithub className='icon'/></a>
              <a href="https://twitter.com/WaliyyullahY" target='_blank' rel='noreferrer'><FaTwitter className='icon'/></a>
              <a href="https://www.linkedin.com/in/waliyyullah-yusuf-64548922b/" target='_blank' rel='noreferrer'><FaLinkedin className='icon'/></a>
              <a href="https://facebook.com" target='_blank' rel='noreferrer'><FaFacebook className='icon'/></a>              
            </div>
            <p>Copyright <span><FaCopyright style={{fontSize: 15}} /></span> 2023</p>
        </div>
        <div className="arrow">
            <a href="#home"><FaArrowAltCircleUp className='arrow-up'/></a>
        </div>
    </footer>
  )
}

export default Footer