import {FaExternalLinkAlt, FaStreetView} from 'react-icons/fa'
import './potfolio.css'

const Potfolio = () => {
  return (
    <div id='works'>
        <h2>My Works</h2>
        <hr />
        <div className='potfolio'>
            <div className="work">
                <img src="easyb.jpg" alt="Easy bank" />
                <div className="overlay">
                    <h3>EASY BANK LANDING PAGE</h3>
                    <p>This landing page is a challenge that provide a nice test for layout skills with a little Javascript</p>
                    <strong>React</strong>
                    <div className="icons">
                        <a href="https://github.com/olanrewajuyusuf/Easybank_landing_page" target='-balnk' rel='noreferrer'>
                          <FaExternalLinkAlt />
                          <span>Visit github repo</span>
                        </a>
                        <a href="https://wallewdev-easybank-landingpage.netlify.app" target='-balnk' rel='noreferrer'>
                          <FaStreetView />
                          <span>View live site</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="work">
                <img src="advice.jpg" alt="Advice Generator" />
                <div className="overlay">
                    <h3>ADVICE GENERATOR</h3>
                    <p>The app generates series of advice using the Advice Slip API to generate random quotes of advice.</p>
                    <strong>Javascript, HTML & CSS</strong>
                    <div className="icons">
                        <a href="https://github.com/olanrewajuyusuf/Advice-generator" target='-balnk' rel='noreferrer'>
                          <FaExternalLinkAlt />
                          <span>Visit github repo</span>
                        </a>
                        <a href="https://wallewdev-advice-generator.netlify.app" target='-balnk' rel='noreferrer'>
                          <FaStreetView />
                          <span>View live site</span>
                        </a>
                    </div>    
                </div>
            </div>
            <div className="work">
                <img src="multi-step.jpg" alt="Multistep form" />
                <div className="overlay">
                    <h3>MULTISTEP FORM</h3>
                    <p>This multistep for m allows you to sign in and fill the reqired sections to purchase your game.</p>
                    <strong>React, Redux</strong>
                    <div className="icons">
                        <a href="https://github.com/olanrewajuyusuf/Multi-step-form" target='-balnk' rel='noreferrer'>
                          <FaExternalLinkAlt />
                          <span>Visit github repo</span>
                        </a>
                        <a href="https://wallewdev-multistep-form.netlify.app" target='-balnk' rel='noreferrer'>
                          <FaStreetView />
                          <span>View live site</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="work">
                <img src="sneaker.jpg" alt="snaeaker" />
                <div className="overlay">
                    <h3>E-COMMERCE PRODUCT PAGE</h3>
                    <p>A product page with a lightbox product gallery and cart functionality</p>
                    <strong>React</strong>
                    <div className="icons">
                        <a href="https://github.com/olanrewajuyusuf/Ecommerce-product-page" target='-balnk' rel='noreferrer'>
                          <FaExternalLinkAlt />
                          <span>Visit github repo</span>
                        </a>
                        <a href="https://ecom-productpage.netlify.app/" target='-balnk' rel='noreferrer'>
                          <FaStreetView />
                          <span>View live site</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="work">
                <img src="tip.jpg" alt="Tip calculator" />
                <div className="overlay">
                    <h3>TIP CALCULATOR</h3>
                    <p>Calculates the correct tip and total cost of the bill per person</p>
                    <strong>Javascript, HTML & CSS</strong>
                    <div className="icons">
                        <a href="https://github.com/olanrewajuyusuf/Tip_calculator_app" target='-balnk' rel='noreferrer'>
                          <FaExternalLinkAlt />
                          <span>Visit github repo</span>
                        </a>
                        <a href="https://wallewdev-tip-calculator.netlify.app" target='-balnk' rel='noreferrer'>
                          <FaStreetView />
                          <span>View live site</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="work">
                <img src="movie.png" alt="Movie box" />
                <div className="overlay">
                    <h3>MOVIE DISCOVERY</h3>
                    <p>A movie discovery app where you will be able to search your top rated movies and view it's details.</p>
                    <strong>React</strong>
                    <div className="icons">
                        <a href="https://github.com/olanrewajuyusuf/Movies-Discovery-App" target='-balnk' rel='noreferrer'>
                          <FaExternalLinkAlt />
                          <span>Visit github repo</span>
                        </a>
                        <a href="https://wallewdev-movies-discovery.netlify.app/" target='-balnk' rel='noreferrer'>
                          <FaStreetView />
                          <span>View live site</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Potfolio