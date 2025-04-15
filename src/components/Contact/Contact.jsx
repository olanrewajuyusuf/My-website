import './contact.css'
import {FaPhone} from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact'>
        <div className="contact_container">
          <form action="#">
              <div>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="Olaas Yousuph" />
              </div>
              <div>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="olaas@gmail.com" />
              </div>
              <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="number" name="phone" id="phone" placeholder="+234 916 122 865 4" />
              </div>
              <textarea name="subject" id="" cols="30" rows="10" placeholder="Your message"></textarea>
              <input type="button" value="Send Message" className="_btn" />
          </form>
          <div className="phone-wrapper">
            <h2>Contact Me</h2>
            <hr />
            <p>I will gladly discuss how my present experience can lead to growth for both paties involved.
            </p>
            <p className="phone"><span><FaPhone className='icon' /></span> +234 9161 228 654</p>
          </div>
        </div>
        
    </div>
  )
}

export default Contact