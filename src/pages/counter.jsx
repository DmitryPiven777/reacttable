
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reducerA } from '../store/reducers/counter'; 

const Counter = () => {

    const {increment, decrement, item} = reducerA;
    const {num}  = useSelector((state)=>state.counter);
    const [state, setState] = useState('');

    const inputHandler = (event) => {
        const value = event.target.value.replace(/\D/g,'')
            setState(value);
    }

    const setNumber = () => {
        const num = Number(state)
        if(num){
            dispetcher(item(num));
            setState('');
        }
    };

    const dispetcher = useDispatch();
    return(
    <div className={'counter'} style={{
        margin:50
      }}>

        <button onClick={()=>dispetcher(decrement())}>___-___</button>
        <span>{num}</span>      
        <button onClick={()=>dispetcher(increment())}>___+___</button>

        {/* <p>
        <button onClick={()=>dispetcher(item(7))}>установка item</button>
        </p> */}

       <br></br>
        <p>
        <button onClick={setNumber} style={{
        margin:30
      }}>payload item</button>
        </p>

        <p>
        <input type="text" value={state} onChange={inputHandler} /> 
        </p>
       
    </div>
    )
}

export default Counter;