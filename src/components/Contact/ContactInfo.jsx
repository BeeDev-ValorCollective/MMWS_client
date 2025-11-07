

// IMPORT ENV DATA
const PhoneLink = import.meta.env.VITE_LINK_PHONE;
const PhoneDisplay = import.meta.env.VITE_DISPLAY_PHONE;
const EmailLink = import.meta.env.VITE_INFO_EMAIL;

export default function ContactInfo() {

    return(
        <>
        <h1>Contact Us</h1>
        <div className="links">
            <div className="link">
                <img src="" alt="" />
                <h3>Email</h3>
                <a href={`mailto:${EmailLink}?subject=Request%20For%Information...`}>{EmailLink}</a>
            </div>
        </div>
        </>
    )
}