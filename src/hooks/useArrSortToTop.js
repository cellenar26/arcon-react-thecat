import { useState } from 'react';

export function useArrSortToTop(initV) {
    const [arrs, setArrs] = useState(() => {
        
        if (typeof initV !== 'object') {
            throw new Error("this hooks need only array")
        }
        
        return initV === null? []: initV
    })

    const toTop = () => {
        // 
        // let temp = [...initV]
        let temp = initV.map((i) => i)
        let moving = 0
        for(let i=0; i<temp.length-1; i++) {
            for (let j=i+1; j<temp.length; j++) {
                if (temp[i] > temp[j]) {
                    moving = temp[i];
                    temp[i] = temp[j]
                    temp[j] = moving
                }
            }
        }
        return temp;
        
    }

    return [arrs, toTop]
}