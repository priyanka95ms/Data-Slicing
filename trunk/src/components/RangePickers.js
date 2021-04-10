import { useEffect, useState } from "react";

function RangePickers(props) {
    const [leftRange,setLeftRange] = useState(0);
    const [rightRange,setRightRange] = useState(600);
    const [marginLeftVal,setMarginLeftVal] = useState(0);

    let changeLeftRange = (val) => {
        // if(val.target.value <= rightRange){
            setLeftRange(val.target.value)
        // }
        setMarginLeftVal(val.target.value * 2);
        
        props.left(val.target.value);
        props.change(val.target.value * 2,rightRange * 2);
    }

    let changeRightRange = (val) => {
        // if(val.target.value >= leftRange){
            setRightRange(val.target.value)
        // }

        props.right(val.target.value);
        props.change(leftRange * 2,val.target.value * 2);
    }

    useEffect(()=>{
        setRightRange(props.rightVal)
    },[props.rightVal])

    useEffect(()=>{
        setLeftRange(props.leftVal)
        setMarginLeftVal(props.leftVal * 2);
    },[props.leftVal])

    return (
        <div className={"chart-container range-picker"}>
            <input type="range" min="1" max="600" className={"slider slider-left"} value={leftRange} onChange={changeLeftRange}/>
            <div className={"range-indicator"} style={{ width: (parseInt(rightRange) - parseInt(leftRange))*2 , marginLeft: marginLeftVal }}></div>
            <input type="range" min="1" max="600" className={"slider slider-right"} value={rightRange} onChange={changeRightRange}/>
        </div>
    )
}

export default RangePickers;