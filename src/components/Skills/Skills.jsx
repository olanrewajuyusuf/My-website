import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaSass } from 'react-icons/fa'
import { SiJavascript, SiStorybook, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux, TbBrandVite } from "react-icons/tb";
import './skills.css'

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills_content">
        <h2>My Skills</h2>
         <p>Clean and maintainable code is tailored with these following skills</p>
      </div>
      <div className="skills">
        <div>
            <span>HTML</span>
            <FaHtml5 />
        </div>
        <div>
            <span>CSS</span>
            <FaCss3Alt />
        </div>
        <div>
            <span>Javascript</span>
            <SiJavascript />
        </div>
        <div>
            <span>Typescript</span>
            <SiTypescript />
        </div>
        <div>
            <span>React</span>
            <FaReact />
        </div>
        <div>
            <span>Vite</span>
            <TbBrandVite />
        </div>
        <div>
            <span>Next.js</span>
            <TbBrandNextjs />
        </div>
        {/* <div>
            <span>Remix.js</span>
            <RiRemixRunFill />
        </div> */}
        <div>
            <span>Tailwindcss</span>
            <SiTailwindcss />
        </div>
        <div>
            <span>Sass</span>
            <FaSass />
        </div>
        <div>
            <span>Node.js</span>
            <FaNodeJs />
        </div>
        <div>
            <span>Storybook</span>
            <SiStorybook />
        </div>
        <div>
            <span>Redux</span>
            <TbBrandRedux />
        </div>
      </div>
    </div>
  )
}

export default Skills