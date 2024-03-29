import {useState} from "react";

export function useCountOdd() {
    const [count, setCount] = useState(0);

    function increase(addCount) {
        setCount( (count)=>count+addCount)
    }
    return [count, increase]
}
