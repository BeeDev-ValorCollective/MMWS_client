import './about.css'
import Jeff from '../../assets/jeff.jpg'

export default function AboutUs() {



    return(
        <>
        <div className="about">
            <img src={Jeff} alt="Jeff" />
            <div className="about_card">
                <h3>About Metal Man Welding Services</h3>
                <p></p>
            </div>
        </div>
        </>
    )
}