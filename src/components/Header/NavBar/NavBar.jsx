import { Link } from 'react-router-dom'
import { MainLinks } from '../../../config/main_nav'

export default function NavBar({currentPath}) {


    return(
        <>
        <nav>
            {MainLinks
                // filter out the path of the current view page
                .filter(link => link.is_active && link.url !== currentPath)
                .map(link => (
                    <span key={ link.id }>
                        <Link to={ link.url }>
                            { link.name }
                        </Link>
                    </span>
                ))
            }
        </nav>
        </>
    )
}