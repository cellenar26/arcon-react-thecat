import { useState } from 'react'

export function useToUnixTime(initV) {
    const [times, setTimes] = useState(() => {
        if (typeof initV !== 'object' ) {
            throw new Error('이 훅에 들어온 값이 object가 아닙니다.')
        }
        // const temp = new Date()
        // const result = new Date();
        // const result= new Date(initV.getFullYear(), initV.getMonth(), initV.getDay(), initV.getHours(), initV.getMinutes())
        // return new Date(initV.getFullYear(), initV.getMonth(), initV.getDay(), initV.getHours(), initV.getMinutes()); 
        return initV
    })
    const getUnixTime = () => {
        // console.log(times);
        // console.log(times.getTime());
        // console.log(result);
        // console.log(initV);
        ;
        return initV.getTime();
    }

    return [times, getUnixTime]
}