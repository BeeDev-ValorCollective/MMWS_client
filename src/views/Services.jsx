import { useEffect, useState } from "react";

import ServicesInfoCard from "../components/Services/Cards/ServicesInfoCard";
import ServicesHeader from "../components/Services/ServicesHeader";

const SERVICES_URL = import.meta.env.VITE_JSON_API + 'services.json'

export default function Services() {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(SERVICES_URL)
            .then(res => res.json())
            .then(data => {
                const active = data.filter(item => item.is_active);
                setServices(active);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <>
        <ServicesHeader services={services} />
        <ServicesInfoCard services={services} />
        </>
    )
}