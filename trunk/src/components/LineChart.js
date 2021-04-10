import React,{ useEffect, useState } from 'react';
import Line from './Line';
import ChartGrid from './ChartGrid';
import ChartLabelsX from './ChartLabelsX';
import ChartLabelsY from './ChartLabelsY';
import RangePickers from './RangePickers';
import Slice from './Slice';

function LineChart(props) {
    const [slicesList,setSlicesList] = useState([]);

    useEffect(()=>{
        console.log("ACTIVES",props.active);
    },[props.active])

    useEffect(()=>{
        console.log("SLICES",props.slices);
        setSlicesList(props.slices);
    },[props.slices])

    let attachedSlices = (left,right) => {
        if(props.selected !== null){
            let tempSlices = slicesList;
            if(tempSlices[props.selected] !== undefined){
                tempSlices[props.selected][0] = left;
                tempSlices[props.selected][1] = right;
            }
        }
    }

    return (
      <div className={"card"}>
        <div className={"card-header"}>
            <button className={"header-btn"} onClick={props.addSlice}><img src="scissor.svg" alt="slice"/></button>
            <p>Selected Channels</p>
        </div>
        <RangePickers left={props.leftSlider} right={props.rightSlider} rightVal={props.rightVal} leftVal={props.leftVal} change={attachedSlices}/>
        <div className={"chart-container"}>
            <ChartLabelsY/>
            <ChartLabelsX/>
            <ChartGrid/>
            {props.active.map((item,index)=>{
                return <Line color={item.color}/>;
            })}
        </div>
        {
            slicesList.map((item,index)=>{
                return <Slice width={item[1] - item[0]} left={item[0]} min_start={item[2]} min_end={item[3]} />
            })
        }
      </div>
    );
}

export default LineChart;