import qs from 'qs';
import { useParams, useRouteMatch } from 'react-router-dom';
import {useFetch} from "./hooks/useFetch"
export default function Product() {
    // console.log(match);
    const match = useRouteMatch()
    const params = useParams()
    const queryParams = qs.parse(window.location.search, {
        ignoreQueryPrefix: true
    })
    // console.log(window.location.pathname.split('/')[2]);
    console.log(queryParams);
    
    return(
        <main>
            <h1>Product Page</h1>
            <p>{JSON.stringify(queryParams)}</p>
        </main>
    )
}