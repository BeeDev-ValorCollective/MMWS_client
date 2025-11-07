import { Link } from 'react-router-dom'


export default function ServicesMiniCard({ services }) {



    return (
        <>
            <div className="mini_services">
                {services.map(({ id, img, service }) => (
                    <Link to="/services" className="service" key={id}>
                        <img className="the_service" src={img} alt={service} />
                        <h4 className="service_name">{service}</h4>
                    </Link>
                ))}
            </div>
        </>
    )
}