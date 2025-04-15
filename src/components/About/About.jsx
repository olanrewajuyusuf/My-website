import Button from '../Header/Button'
import './about.css'

function About() {
  return (
    <div id='about'>
        <div className="_picture-2"></div>
        <div className="content_2">
            <h2>About me</h2>
            <hr />
            <p>My name is <span>Waliyyullah Olanrewaju Yusuf</span>. <br />I am a dedicated and passionate frontend developer with ability to collaborate effectively with designers and backend developers. I possess excellent problem-solving abilities and a keen eye for detail. <br />My journey in the world of web development began several years ago, and I have since honed my skills to become a proficient in this field. In addition to my technical skills, I value effective communication and teamwork.</p>
            <div className="button">
               <Button label="Read more" width='150px' height='55px' margin="0 auto" fontSize="25px" className="button"/>
            </div>
        </div>
    </div>
  )
}

export default About