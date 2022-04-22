import React from 'react';


export type CounterPropsType = {
    result: number
    plusOneFN: (result: number) => void
    dropToZero: (result: number) => void
    minNumber: number
    maxNumber: number

}


export function Counter(props: CounterPropsType) {
    return (
        <div className="counter">
            <div className={props.result === props.maxNumber ? 'buttonFive' : 'button'}>{props.result}</div>
            <div>
               <span className='inline'>
                   <button disabled={props.result === props.maxNumber} onClick={() => {
                       props.plusOneFN(props.result)
                   }}>+1
                   </button>
               </span>
                <span>
                    <button disabled={props.result !== props.maxNumber} onClick={() => {
                        props.dropToZero(props.result)
                    }}>reset
                    </button>
               </span>
            </div>
        </div>
    )
}