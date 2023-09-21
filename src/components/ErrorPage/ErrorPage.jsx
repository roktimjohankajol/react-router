import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops !!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2>Page Not Found</h2>
                    <Link to="/"><button>Go Back to Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;