import {Link} from 'react-router-dom'

export default function ServicesInfoCard({ services }) {





    return (
        <>
            {services.map(({ id, img, service, description }) => (
                <Link to="/services" className="service" key={id}>
                    <img src={img} alt={service} />
                    <div>
                        <h4>{service}</h4>
                        <p>{description}</p>
                    </div>
                </Link>
            ))}
        </>
    )
}