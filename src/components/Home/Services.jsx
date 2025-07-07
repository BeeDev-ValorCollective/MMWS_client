import Ornamental from '../../assets/service_01.jpg'
import Structural from '../../assets/service_01.jpg'
import Fabrication from '../../assets/service_01.jpg'
import Blacksmithing from '../../assets/service_01.jpg'
import Machinist from '../../assets/service_01.jpg'

export default function HomeServices() {

    return(
        <>
        <div className="services_wrapper">
            <h3>Services</h3>
            <div className="home_services">
                <div className="service">
                    <img className='the_service' src={ Ornamental } alt="Ornamental" />
                    <h4 className='service_name'>Ornamental</h4>
                </div>
                <div className="service">
                    <img className='the_service' src={ Structural } alt="Structural" />
                    <h4 className='service_name'>Structural</h4>
                </div>
                <div className="service">
                    <img className='the_service' src={ Fabrication } alt="Fabrication" />
                    <h4 className='service_name'>Fabrication</h4>
                </div>
                <div className="service">
                    <img className='the_service' src={ Blacksmithing } alt="Blacksmithing" />
                    <h4 className='service_name'>Blacksmithing</h4>
                </div>
                <div className="service">
                    <img className='the_service' src={ Machinist } alt="Machinist" />
                    <h4 className='service_name'>Machinist</h4>
                </div>
            </div>
        </div>
        </>
    )
}