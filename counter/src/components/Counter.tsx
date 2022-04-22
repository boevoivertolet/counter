import React from 'react';


export type CounterPropsType = {
    result: number
    plusOneFN: (result: number) => void
    dropToZero: (result: number) => void

}


export function Counter(props: CounterPropsType) {
    return (
        <div className="counter">
            <div className={props.result === 5 ? 'buttonFive' : 'button'}>{props.result}</div>
            <div>
               <span className='inline'>
                   <button onClick={() => {
                       props.plusOneFN(props.result)
                   }}>+1
                   </button>
               </span>
                <span>
                    <button onClick={() => {
                        props.dropToZero(props.result)
                    }}>reset
                    </button>
               </span>
            </div>
        </div>
    )
}