import { Link } from 'react-router-dom'
// Home View Page
import CTA from '../components/Home/CallToAction'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import Testimonials from '../components/Home/Testimonials'

import '../components/Home/Home.css'

export default function Home() {

    return(
        <main>
            <CTA />
            <About />
            <Services />
            <Testimonials />
            <Link to='/contact'>
                <button className="contact_button contact-gradient">Contact Us Today and Get a Quote</button>
            </Link>
        </main>
    )
}