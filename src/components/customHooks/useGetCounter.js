import {useState} from "react";
 
function useGetCounter(init){
    const [counter, setCounter] = useState(init)

    const addCounter = () =>{
        if(counter < 20)
            setCounter(counter + 1);
        else
            setCounter(1)
    }
    const reduceCounter = () =>{
        if(counter > 1)
            setCounter(counter - 1);
        else
            setCounter(20)
    }

    return {
            "add":addCounter,
            "reduce":reduceCounter,
            "count":counter
        };
}
 
export default useGetCounter;