import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Button from '../Header/Button'
import './home.css'

const Home = () => {
  return (
    <div className='home_page' id='home'>
        <div className="content">
            <h1>I'm <span>Wallew,</span><br />a frontend developer</h1>
            <p>I constructs a realistic user interface.<br />Ready to build for the future.</p>
            <div className="socials">
              <a href="https://github.com/olanrewajuyusuf" target='_blank' rel='noreferrer'><FaGithub className='icon'/></a>
              <a href="https://twitter.com/WaliyyullahY" target='_blank' rel='noreferrer'><FaTwitter className='icon'/></a>
              <a href="https://www.linkedin.com/in/waliyyullah-yusuf-64548922b/" target='_blank' rel='noreferrer'><FaLinkedin className='icon'/></a>
              <a href="https://facebook.com" target='_blank' rel='noreferrer'><FaFacebook className='icon'/></a>              
            </div>
            <div className="button">
              <Button label="Download CV" width='150px' height='55px' margin="0" fontSize="25px" />
            </div>
        </div>
        <div className="_picture">
        </div>
        <div className="_pics">
          <img src="PhotoRoom-20230510_093014.png" alt="" />
        </div>
    </div>
  )
}

export default Home