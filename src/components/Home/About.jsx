import Jeff from '../../assets/about_img.jpg'
import './Home.css'

export default function HomeAbout() {

    return(
        <>
        <div className="about">
            <img className='jeff' src={ Jeff } alt="Jeff" />
            <div className="content">
                <h3>Jeff & Bobbi Jo</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae placeat quas consectetur laudantium possimus voluptates beatae fugiat eum, cumque quam quasi animi voluptatem voluptate quod. Laborum quas nobis voluptatum!</p>
            </div>
        </div>
        </>
    )
}