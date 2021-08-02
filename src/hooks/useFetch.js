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
    const [myParams, setMyParams] = useState({})
    const [watcher, setWatcher] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true)
          console.log(params);
          // console.log(params.page--);
          console.log(params);
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
      window.onscroll = function(e) {
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
          // setWatcher(true);
          // console.log('page end');
          // console.log(params);
          // console.log(params.page);
          // console.log(myParams);
          params.page++;
          fetchData();
        }
      }
  
      fetchData()
    }, [apiUrl, params, headers])

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       setIsLoading(true)
  
    //       const response = await fetch(`${apiUrl}${getQueryString(params)}`, {
    //         method: 'GET',
    //         mode: 'cors',
    //         cache: 'default',
    //         headers,
    //       })
    //       const data = await response.json()
    //       setData((previousData => previousData.concat(data)))
    //     } catch (error) {
    //       console.error(error)
    //       setError(error)
    //     } finally {
    //       setIsLoading(false)
    //     }
    //   }
    //   window.onscroll = function(e) {
    //     if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
    //       setWatcher(true);
    //       console.log('page end');
    //       console.log(params);
    //       console.log(params.page);
    //       console.log(myParams);
          
    //       fetchData();
    //     }
    //   }
  
    //   fetchData()
    // }, [apiUrl, params, headers, watcher])
  
    return {
      data,
      isLoading,
      hasError: error !== null,
      error,
    }
  }