// Home View Page
import CTA from '../components/Home/CallToAction'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import Testimonials from '../components/Home/Testimonials'

import MMWSIcon from "../assets/MMWS_logo_transparent.png"
import '../components/Home/Home.css'

export default function Home() {

    return(
        <main>
            <CTA />
            <About />
            <Services />
            <Testimonials />
            <button className="contact_button">Contact Us Today and Get a Quote</button>
        </main>
    )
}