import { React, useState  } from 'react'


const Counter = () => {
    const [number, setCount] = useState(0);

    const incrementTwice = () => {
        setCount(number+1);
        setCount(number+1);
    }

  return (
    <div>
        <h1>Count: {number}</h1>
        <button onClick={() => {
            setCount(n => n + 1);
        } }>Increment</button>

        <button onClick={() => {
            setTimeout(function () {setCount(n => n + 1)}, 2000);
        }}>Increment After Delay</button>

        <button onClick={incrementTwice}>Increment Twice</button>

        <button onClick={() => {
            setCount(n => n + 2);
        }}>Correct Increment Twice</button>

        <button onClick={() => {
            setCount(n => n - 1);
        }}>Decrement</button>

    </div>
  )
}

export default Counter