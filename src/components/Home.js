import logos from '../assests/logos.png';

const Home = ()=>{
    return (
        <div className="introduction">
            <h4 className="intro-welcome">Welcome to my profile!</h4>
            <p>I'm a resourceful Front End Web Developer bringing in-depth knowledge of latest technology
               trends to produce clean website design. <br/>
              Consider my profile if you're looking for a developer building high 
              performance applications. </p> 
              <img className='logo-img' src={logos} alt='tech-logo'/> 
            <p className='paragraph'>Excited to start my journey as a Frontend developer.<br/>
                I have attended an online boot camp and have been learning HTML,
                CSS, JavaScript, and React and have gained well-versed knowledge. <br/>
                Though I'm an entry-level applicant, I'm passionate about work and 
                can solve the coding challenges.<br/>
                 I'm very much attracted to the user interactivity 
                in an application, and this made me very enthusiastic to learn in-depth knowledge
                 of programming and workflow of web applications. 
            </p>
            <p>My curiosity, enthusiasm and love for learning new technology made me
                 to jump start my career in software development.<br/>
            </p>
            
        </div>
    )
}
export default Home;

