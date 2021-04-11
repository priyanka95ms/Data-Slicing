import React, { useState } from 'react';
import ClosableButton from './ClosableButtons';
import Dataset from '../constants/Dataset.json';

let channelCount = 5;

function ChannelButtons(props) {
    let [activeChannels,setActiveChannels] = useState([Dataset[0],Dataset[1],Dataset[2],Dataset[3],Dataset[4]]);

    let addChannel = () => {
        let channelTemp = activeChannels;
        channelTemp.push(Dataset[channelCount]);
        setActiveChannels([...channelTemp]);
        channelCount++;
        props.change(channelTemp);
        if(channelCount === Dataset.length){channelCount = 0};
    }

    let removeChannel = (id) => {
        let channelTemp = activeChannels.filter((val)=>val.id !== id);
        props.change(channelTemp);
        setActiveChannels([...channelTemp]);
    }

    let toggleEnable = (index) => {
        let channelTemp = activeChannels;
        if(channelTemp[index] !== undefined) {
            (channelTemp[index].enabled === true)?channelTemp[index].enabled = false : channelTemp[index].enabled = true;
            props.change(channelTemp);
            setActiveChannels([...channelTemp]);
        }
    }

    return (
        <div className={"display-flex btn-section"}>
            <p className={"channel-header"}>Selected Channels</p>
            <div className={"display-flex channel-container"}>
                {activeChannels.map((item,index)=>{
                    return <ClosableButton color={(item.enabled === true)?item.color:"grey"} text={item.name} id={item.id} remove={removeChannel} index={index} toggle={toggleEnable} />;
                })}
                <button onClick={()=>addChannel()} style={{marginLeft: 10}}>+</button>
            </div>
        </div>
    );
}

export default ChannelButtons;