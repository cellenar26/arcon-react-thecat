import { useState } from 'react';

export function useFindTargets(initV, initTarget) {
    const [arrs, setArrs] = useState(() => {
        if (typeof initV !== 'object') {
            throw new Error("this hooks need only array")
        }
        if (typeof initTarget !== 'string') {
            throw new Error("this hooks initTarget need string type or initTarget is null now")
        }
        return initV === null? []:initV
    })
    const checkTargetItems = () => {
        let result = 0;
        for (let i=0; i<initV.length; i++) {
            if( initV[i] === initTarget) {
                result++;
            }
        }
        console.log('result : ', result);
        return result
    }
    return [arrs, checkTargetItems]
}