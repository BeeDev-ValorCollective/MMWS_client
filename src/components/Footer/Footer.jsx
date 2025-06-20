
import FooterLogo from '../../assets/logo_footer_sticker.png'
import './Footer.css'


export default function Footer() {
    const PhoneLink = import.meta.env.VITE_LINK_PHONE
    const PhoneDisplay = import.meta.env.VITE_DISPLAY_PHONE
    const EmailLink = import.meta.env.VITE_LINK_EMAIL
    const AddressLine2 = import.meta.env.VITE_ADDRESS_LINE2

    return(
        <>
        <footer>
            <div className="left">
                <img src={ FooterLogo } alt="MMWS Logo" />
                <div className="text">
                    <h3>Metal Man Welding Services LLC</h3>
                    <h4>Mobile and Creative Welding Services for over 55 years experience</h4>
                </div>
            </div>
            <div className="center">
                <h3>Services</h3>
                <ul>
                    <li>Ornamental Welding</li>
                    <li>Structural Welding</li>
                    <li>Fabrication</li>
                    <li>Blacksmithing</li>
                    <li>Machinist Services</li>
                </ul>
            </div>
            <div className="right">
                <h3>Contact</h3>
                <div className="phone">
                    <h5>Phone:</h5>
                    <a href={ PhoneLink }>{ PhoneDisplay }</a>
                </div>
                <div className="email">
                    <h5>E-Mail:</h5>
                    <a href={`mailto:${ EmailLink }`}>
                            { EmailLink }
                        </a>
                </div>
                <div className="address">
                    <h5>Address:</h5>
                    <p>{ AddressLine2 }</p>
                </div>
                <div className="socials">
                    <h5>LinkedIn:</h5>
                    <p></p>
                </div>
                <div className="socials">
                    <h5>Facebook:</h5>
                    <p></p>
                </div>
            </div>
        </footer>
        </>
    )
}