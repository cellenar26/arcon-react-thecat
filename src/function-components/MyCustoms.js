import { useEffect, useLayoutEffect, useState } from "react";
import { useArrSortToTop } from "../hooks/useArrSortToTop";
import { useToUnixTime } from '../hooks/useToUnixTime';

export default function MyCustoms() {
  // 나만의 커스텀 훅 1 - 오름차순 정렬
  const [toArr, setToArr] = useState(["5", "4", "3", "2", "1"]);
  const [arrs, toTop] = useArrSortToTop(toArr);

  // 나만의 커스텀 훅 2 - 현재 시간과 유닉스 시간 출력
  const [time, setTime] = useState(new Date())
  const [nowTime, getNowUnix] = useToUnixTime(time)
//   const [temp, setTemp] = useState('')
//   console.log(time);
//     console.log(nowTime);
//     console.log(getNowUnix());
console.log(time);
console.log(getNowUnix());
  const handleSortTop = () => {
    setToArr(toTop())
  };
    
    useLayoutEffect(() => {
        setInterval(()=> setTime(new Date()), 1000)
        setInterval(()=> getNowUnix(), 1000)
    },[])
    
  return (
    <>
      <div>정열을 원하는 배열: {arrs}</div>
      <div>정렬 이후의 배열: {toArr}</div>
      <button onClick={handleSortTop}>누르면 정렬 됨!</button>
      <hr />
      
      <div>현재 시간: {JSON.stringify( time.toLocaleTimeString())}</div>
      
      <div>유닉스 시간: {getNowUnix()}</div>
    </>
  );
}