import {useCountOdd} from "../hook/useCountOdd";

export function CounterComponent1() {
    const [count,setCount]=useCountOdd(0);
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(1)}>Add 1</button>
        </>
    );
}
export function CounterComponent2() {
    const [count,setCount]=useCountOdd(0);
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(2)}>Add 1</button>
        </>
    );
}
