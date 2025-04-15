import { TbLivePhoto } from "react-icons/tb";
import { FaCodeBranch } from "react-icons/fa";
import './potfolio.css'

const Potfolio = () => {

  const projects = [
    {
      name: "Vettme",
      desc: "Vettme is a comprehensive verification platform designed to help organizations securely verify and manage critical information about individuals such as employees, loan applicants, logistics drivers, field agents, and more.",
      code: "https://github.com/olanrewajuyusuf/vettme",
      live: "https://app.vettme.ng",
      stacks: ["React", "Vite", "JavaScript", "Tailwind", "Typescript", "Shadcn ui", "axios"],
      img: "vettme.png",
    },
    {
      name: "ijm global landing page",
      desc: "Landing page for Tech Security Company in Nigeria for Fleet Management, Personnel Identity Verification, Security Management Solution and Security Gadgets.",
      code: "https://github.com/olanrewajuyusuf/vettme_pro",
      live: "https://ijmgloballimited.com/",
      stacks: ["React", "Vite", "JavaScript", "HTML", "Tailwind"],
      img: "ijm.png",
    },
    {
      name: "Todo Manager",
      desc: "This Todo app helps you manage your day-to-day activities with smooth CRUD operations. You can add subtasks and easily keep track of your to-do list with a drag-and-drop feature for reordering.",
      code: "https://github.com/olanrewajuyusuf/Todo-Manager",
      live: "https://wallew-todomanager.netlify.app/",
      stacks: ["React", "JavaScript", "Sass/SCSS", "HTML"],
      img: "todo.png",
    },
    {
      name: "Multi step form",
      desc: "This application features a user-friendly multi-step form that guides users through a structured process to complete their tasks efficiently",
      code: "https://github.com/olanrewajuyusuf/Multi-step-form",
      live: "https://wallewdev-multistep-form.netlify.app/",
      stacks: ["React", "Redux", "JavaScript", "HTML", "CSS"],
      img: "multi.png",
    },
    {
      name: "Movie Discovery",
      desc: "A movie discovery app that allows users to search for top-rated movies, explore trending titles, and view detailed information about each film. Users can access movie overviews, cast and crew information, ratings, release dates, and trailers.",
      code: "https://github.com/olanrewajuyusuf/Movies-Discovery-App",
      live: "https://wallewdev-movies-discovery.netlify.app/",
      stacks: ["React", "JavaScript", "HTML", "Redux", "Axios"],
      img: "movie.png",
    },
    {
      name: "E-Commerce product page",
      desc: "A fully responsive product page featuring an interactive lightbox product gallery and robust cart functionality.",
      code: "https://github.com/olanrewajuyusuf/Ecommerce-product-page",
      live: "https://ecom-productpage.netlify.app/",
      stacks: ["React", "JavaScript", "HTML"],
      img: "sneaker.jpg",
    },
  ]
  return (
    <div id='works'>
        <h2>My Works</h2>
        <hr />
        <div className='potfolio'>
          {projects.map((project, index)=> (
            <div className="work" key={index}>
              <div className='frame'><img src={project.img} alt={project.name} /></div>
                <div className="overlay">
                  <div>
                    <h3>{project.name.toUpperCase()}</h3>
                    <p>{project.desc}</p>
                    <span>
                      {project?.stacks.map((stack, idx)=>(
                        <button key={idx}>{stack}</button>
                      ))}
                    </span>
                  </div>
                    <div className="icons">
                        <a href={project.code} target='-blank' rel='noreferrer'>
                        <FaCodeBranch />
                          Code
                        </a>
                        <a href={project.live} target='-blank' rel='noreferrer'>
                          <TbLivePhoto />
                          Live
                        </a>
                    </div>
                </div>
            </div>))}
        </div>
    </div>
  )
}

export default Potfolio;