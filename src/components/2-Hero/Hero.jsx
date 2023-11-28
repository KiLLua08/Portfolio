// @ts-nocheck
import './Hero.css'
import me from '../../assets/cv7.jpg';
import linkedin from '../../assets/linkedin.png';
import gmail from '../../assets/gmail.png';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import verified from '../../assets/icons/verified.png';
const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left border'>
        <div className="up">
          <div className='broder'>
            <img className='me' src={me} alt="profile img" width={200} height={200}/>
          </div>
          <img src={verified} alt="verified" width={25} height={25} />
        </div>
        <p className='title'>Junior Software Engineer </p>
        <br />
        <p className='lilte'>🚀 Recent Computer Engineering graduate (2023) with a passion for crafting innovative solutions through code.<br/> At 22, I bring a fresh perspective and a tenacious attitude to overcome challenges in the world of software engineering.</p>
        <div className="down">
          <ul className='socials'>
            <li><a href=""><img src={gmail} alt="gml" /></a></li>
            <li><a href=""><img src={linkedin} alt="lnkd" /></a></li>
            <li><a href=""><img src={instagram} alt="ig" /></a></li>
            <li><a href=""><img src={github} alt="git" /></a></li>
          </ul>
        </div>
      </div>
      <div className='right border'>
        ****
      </div>
    </section>
  )
}

export default Hero

