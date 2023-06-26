import {useCountOdd} from "../hook/useCountOdd";


export function CounterComponentEven() {
    const [count,setCount]=useCountOdd(0);
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(2)}>Add 2</button>
        </>
    );
}
