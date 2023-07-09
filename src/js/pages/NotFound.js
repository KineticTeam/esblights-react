import { Link } from 'react-router-dom';
import spotlight from 'js/../../public/spotlight.png';
function NotFound() {
    return (
        <div className="not-found page-padding page-min-height">
            <h2>This page is dark! Let's shine some light.</h2>
            <Link to="/">Go back home</Link>
        </div>
    )
}

export default NotFound;