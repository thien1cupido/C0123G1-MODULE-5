import {useCountOdd} from "../hook/useCountOdd";

export function CounterComponentOdd() {
    const [count,setCount]=useCountOdd(0);
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(1)}>Add 1</button>
        </>
    );
}