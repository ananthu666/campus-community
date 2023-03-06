import logo from '../src/images/2205_w046_n004_121a_p1_121 1.png'
import './App.css';
import stars from '../src/images/stars.png'
import arrow from '../src/images/arrow.png'
import about1 from '../src/images/about1.png'
import about2 from '../src/images/about2.png'
import skill1 from '../src/images/skill1.png'
import skill2 from '../src/images/skill2.png'
import skill3 from '../src/images/skill3.png'
import skill4 from '../src/images/skill4.png'

 

function App(){
  return (
    <div className="App">
      <div className="section-1">
        <img 
         className='pic-1'
         src={logo} alt="pic-1" 
         />

         <div className='section-1-1'>

          <h3>EETI Foundation</h3>

          <div className="section-1-container">
            <h1 className='Campus'>
            Campus <span>
              <img src={stars} alt="" /></span>
              <br /> Communities
            </h1>
            <div className='reg'>
              <div className="reg-con">
              <p className='register'>
                Register Now
              </p>
              <button>
              <img className='arrow' src={arrow} alt="" />
              </button>
              
              </div>
            </div>
            
        
          </div>
          <hr />
         </div>

      </div>


      <div className="about">
        <div className="about-1">
          <h2>About EETI Foundation</h2>
          <div className='about-container'>
            <div className='img-about'>
            <img src={about1} alt="" />
            </div>
            <div className='about-description'>
              <p>
              Tinkerhub campus communities is a tinkerhub programme encouraging a tech learning culture on campuses so that students 
              can grow their abilities and further their careers. Campus communities will help college students who don't think they're 
              getting enough exposure to technology or don't have the ideal environment to study it
              </p>
            </div>
            
          </div>

        </div>
        <div className="about-2">
          <h2>About EETI Foundation</h2>
          <div className='about-container'>
          <div className='img-about'>
            <img src={about2} alt="" />
              </div>
            <div className='about-description'>
              <p>
              campus communities is a tinkerhub programme encouraging a tech learning culture on campuses 
              so that students can grow their abilities and further their careers. Campus communities will 
              help college students who don't think they're getting enough exposure to technology or don't 
              have the ideal environment to study it.
              </p>
              </div>
          </div>
            
        </div>


      </div>



      <div className="for-you">
        <h1 >What's in it for you?</h1>
        <div className='you-container'>

          <div className="skill">
            <h2 className='heading'> 
              Skill Development <span>
                <img className='skill-img' src={skill2} alt="" />
              </span>
            </h2>
            <p>
              Improve your communication and management skills by 
              being a part of the largest student network in the nation
            </p>

          </div>

          <div className="skill">
          <h2 className='heading'> 
              Organize Events <span>
                <img className='skill-img' src={skill2} alt="" />
              </span>
            </h2>
            <p>
            Get a chance to conduct events in
             your college in collaboration with the EETI Foundation
            </p>
          </div>


          <div className="skill">
          <h2 className='heading'> 
            Get verified<span>
                <img className='skill-img' src={skill3} alt="" />
              </span>
          </h2>
            <p>
            Get a certificate of appreciation from The EETI Chairperson
             on successfully completing the tenure
            </p>
          </div>

          
          <div className="skill">
          <h2 className='heading'> 
          Get Prizes<span>
                <img className='skill-img' src={skill4} alt="" />
              </span>   
            </h2>
            <p>
            Get Prizes and Goodies
            </p>
          </div>

        </div>
      </div>


      <div className="our-events">
        <h1 className='events-heading'>Our events</h1>

      </div>
      <div className="gallery">

      </div>
      <div className="freq-ques">

      </div>
    </div>
  );
}

export default App;
