import image from '../assests/image.png'

const Title = ()=>{
    return (
        <div className='title'>
            <img className = 'title-img' src= {image} alt= "Vanisha's pic"/>
            <h3 className='title-role'>Frontend Developer</h3>
            <ul className='title-list'>
                <li>Home</li>
                <li>Skills</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Title;