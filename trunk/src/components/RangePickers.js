import { useEffect, useState } from "react";

function RangePickers(props) {
    const [leftRange,setLeftRange] = useState(0);
    const [rightRange,setRightRange] = useState(600);
    const [marginLeftVal,setMarginLeftVal] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [zLeft,setZLeft] = useState(999);
    const [zRight,setZRight] = useState(999);

    const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    let changeLeftRange = (val) => {
        setLeftRange(val.target.value);
        setMarginLeftVal(val.target.value * 2);
        
        props.left(val.target.value);
        props.change(val.target.value * 2,rightRange * 2);
    }

    let changeRightRange = (val) => {
        setRightRange(val.target.value);

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

    useEffect(()=>{
        let gridStarting = (window.innerWidth/2)-600;
        let leftPoint = gridStarting + (parseInt(leftRange)  * 2) + 5;
        if(mousePosition.x > leftPoint){
            setZLeft(999);
            setZRight(9999);
        } else {
            setZLeft(9999);
            setZRight(999);
        }
    },
    // eslint-disable-next-line
    [mousePosition])

    return (
        <div className={"chart-container range-picker"}>
            <input type="range" min="1" max="600" className={"slider slider-left"} value={leftRange} onChange={changeLeftRange} style={{ zIndex: zLeft }}/>
            <div className={"range-indicator"} style={{ width: (parseInt(rightRange) - parseInt(leftRange))*2 , marginLeft: marginLeftVal }}></div>
            <input type="range" min="1" max="600" className={"slider slider-right"} value={rightRange} onChange={changeRightRange} style={{ zIndex: zRight }}/>
        </div>
    )
}

export default RangePickers;