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
          // params.page++; // 객체에 직접 접근 하는 것이므로 위험 초래 가능
          fetchData(params.page+1); // 이렇게 하면 안됨. 동작은 가능하나.
          // 좋은 구조: fetchData에 다른 것을 변경하지 않고 다음 페이지에 대한 값을 계산해서 넘겨주고
          // fetchData가 다음 페이지 값을 받아서 이를 파라미터로 받아야함. => getQuertyString이 잘 처리해야한다.
          // 1. intersetion observer라는 객체를 이용해서 같은 기능을 구현해보기 => 덜 복잡하고 깔끔하게 가능
          // 2. 비교로직을 수정하면 밑에서 2번째, 3번째 에서 api 를 콜하게 할 수도 있음.
          // 안에서 직접 아이템에 대한 height를 계산해서 특정 번째에 api 콜을 하는 등
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