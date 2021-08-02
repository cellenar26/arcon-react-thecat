import { useEffect, useState } from 'react';
import { getQueryString } from '../utils/misc';

// export function useFetch(apiUrl, params, headers, initialData) {
//     const [data, setData] = useState(initialData)
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const fetchData = async() => {
//             try {
//                 setIsLoading(true)

//                 const response = await fetch(`${apiUrl}${getQueryString(params)}`, {
//                     method: 'GET',
//                     mode: 'cors',
//                     cache: 'default',
//                     headers: headers
//                 })
//                 const data = await response.json()
//                 setData((prevData => prevData.concat(data)))
//             } catch(error) {
//                 console.error(error);
//                 setError(error)
//             } finally {
//                 setIsLoading(false)
//             }
//         }
//         fetchData()
//     }, [apiUrl, params, headers])

//     return {
//         data,
//         isLoading,
//         hasError: error !== null, 
//         error,
//     }
// }
export function useFetch(apiUrl, params, headers, initialData) {
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true)
  
          const response = await fetch(`${apiUrl}${getQueryString(params)}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            headers,
          })
          const data = await response.json()
          setData((previousData => previousData.concat(data)))
        } catch (error) {
          console.error(error)
          setError(error)
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchData()
    }, [apiUrl, params, headers])
  
    return {
      data,
      isLoading,
      hasError: error !== null,
      error,
    }
  }