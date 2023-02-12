import image from '../assests/image.png';
import { Link } from 'react-router-dom';

const Title = ()=>{
    return (
        <div className='title'>
            <img className = 'title-img' src= {image} alt= "Vanisha's pic"/>
            <h3 className='title-role'>Frontend Developer</h3>
            <ul className='title-list'>
                <Link to= "/" style={{textDecoration:'none'}}><li>Home</li></Link>
                <Link to= "/projects" style={{textDecoration:'none'}}><li>Projects</li></Link>
                <Link to= "/contact" style={{textDecoration:'none'}}><li>Contact</li></Link>
            </ul>
        </div>
    )
}
export default Title;