import React, {useState} from "react";
import style from './Counter.module.css'

type countType = {
    count: number
    lastNumber: number
    setCount: (on:number) => void
}


export const Counter = (props:countType) => {


    const styleLastNumber = props.count === props.lastNumber ? style.styleLastNumber : style.staticNumber
    const addCount = () => props.setCount(props.count + 1)
    const resetCount = () => props.setCount(0)

    return (
        <div className={style.mainBox}>
            <div className={style.row}>

                <div className={styleLastNumber}>{props.count}</div>

                <div className={style.buttonBlock}>
                    <button className={style.btnInc} disabled={props.count === props.lastNumber} onClick={addCount}>inc</button>
                    <button className={style.btnReset} disabled={props.count === 0} onClick={resetCount}>reset</button>
                </div>

            </div>
        </div>

    )
}