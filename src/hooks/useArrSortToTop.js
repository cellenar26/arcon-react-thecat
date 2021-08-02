import { useState } from 'react';

export function useArrSortToTop(initV) {
    const [arrs, setArrs] = useState(() => {
        
        if (typeof initV !== 'object') {
            throw new Error("this hooks need only array")
        }

        return initV === null? []: initV
    })

    const toTop = () => {
        return initV.sort((a,b) => (a-b))
        
    }

    return [arrs, toTop]
}