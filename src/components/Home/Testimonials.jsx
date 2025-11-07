import { useState, useEffect } from 'react'

import Stars from '../Helpers/Stars'

// import Data from './Testimonials.json'
const TESTIMONIAL_URL = import.meta.env.VITE_JSON_API + 'testimonials.json'

export default function Testimonials() {
    
    console.log(TESTIMONIAL_URL)
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const visible = Data.filter(t => t.is_active);

    useEffect(() => {
        fetch(TESTIMONIAL_URL)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Failed to fetch data')
                }
                return res.json()
            })
            .then(data => {
                const visible = data.filter(t => t.is_active)
                setTestimonials(visible)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])


    return (
        <>
            <div className="testimonial_wrapper">
                <h3>Testimonials</h3>
                <div className="testimonials">
                    {loading && <p>Loading testimonials...</p>}
                    {error && <p>Error: {error}</p>}

                    {testimonials.map(({ id, rating, quote, author }) => (
                        <div className="testimonial" key={id}>
                            <Stars rating={rating} />
                            <span className="quote">{quote}</span>
                            <span className="author">-- {author}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}