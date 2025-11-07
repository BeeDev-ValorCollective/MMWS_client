import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SERVICES_URL = import.meta.env.VITE_JSON_API + 'services.json'

export default function HomeServices() {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(SERVICES_URL)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch services');
                }
                return res.json();
            })
            .then(data => {
                const activeServices = data.filter(item => item.is_active);
                setServices(activeServices);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return(
        <>
        <div className="services_wrapper">
            <h3>Services</h3>
            <div className="home_services">
                {loading && <p>Loading services...</p>}
                {error && <p>Error: {error}</p>}

                    {services.map(({ id, img, service }) => (
                    <Link to="/services" className="service" key={id}>
                        <img className="the_service" src={img} alt={service} />
                        <h4 className="service_name">{service}</h4>
                    </Link>
                ))}

            </div>
        </div>
        </>
    )
}