

import ServicesMiniCard from './Cards/ServicesMiniCard'
import Banner from './Banner'


export default function ServicesHeader({ services }) {


    return(
        <>
        <h1>Sparking Possibilities for you:</h1>
        <h2>Services for you</h2>
        <ServicesMiniCard services={services} />
        <Banner /> 
        </>
    )
}