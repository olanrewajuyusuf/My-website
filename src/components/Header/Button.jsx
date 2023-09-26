import './header.css'

function Button({label, width, height, margin, fontSize}) {
  return (
    <div
    style={{width: width, height: height, margin: margin, fontSize: fontSize}}
    className="_btn-wrap"
    >
      <a
      href="http://" 
      target="_blank" 
      rel="noopener noreferrer" 
      className='_resume_btn' 
      >
        {label}
      </a>
    </div>
  )
}

export default Button