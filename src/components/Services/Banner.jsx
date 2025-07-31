

import Quality from '../../assets/quality_icon.png'
import Affordable from '../../assets/affordable_icon.png'
import Professional from '../../assets/professional_icon.png'
import Reliable from '../../assets/reliable_icon.png'
import Trustworthy from '../../assets/trustworthy_icon.png'



export default function Banner() {


    return(
        <>
        <div className="banner">
            <div className="icon">
                <img src={Quality} alt="Top Quality Icon" />
                <p>Top Quality</p>
            </div>
            <div className="icon">
                <img src={Affordable} alt="Affordable Icon" />
                <p>Affordable</p>
            </div>
            <div className="icon">
                <img src={Professional} alt="Professional Icon" />
                <p>Professional</p>
            </div>
            <div className="icon">
                <img src={Reliable} alt="Reliable Icon" />
                <p>Reliable</p>
            </div>
            <div className="icon">
                <img src={Trustworthy} alt="Trustworthy Icon" />
                <p>Trustworthy</p>
            </div>
        </div>
        </>
    )
}