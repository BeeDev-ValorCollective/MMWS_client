import Stars from '../Helpers/Stars'
import Data from './Testimonials.json'

export default function Testimonials() {
    const visible = Data.filter(t => t.is_active);


    return (
        <>
            <div className="testimonial_wrapper">
                <h3>Testimonials</h3>
                <div className="testimonials">
                    {visible.map(({ id, rating, quote, author }) => (
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