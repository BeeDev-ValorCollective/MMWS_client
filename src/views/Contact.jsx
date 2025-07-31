import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
import ContactArea from '../components/Contact/ContactArea'

export default function Contact() {

    return(
        <main>
            <ContactInfo />
            <div>
                <ContactArea />
                <ContactForm />
            </div>
        </main>
    )
}