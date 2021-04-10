import React, { useState } from 'react';
import ClosableButton from './ClosableButtons';
import Common from '../constants/Common';

let channelCount = 0;

function ChannelButtons(props) {
    let [activeChannels,setActiveChannels] = useState([]);

    let addChannel = () => {
        let channelTemp = activeChannels;
        channelTemp.push(Common.Channels[channelCount]);
        setActiveChannels([...channelTemp]);
        channelCount++;
        props.change(channelTemp);
        if(channelCount === Common.Channels.length){channelCount = 0};
    }

    let removeChannel = (id) => {
        let channelTemp = activeChannels.filter((val)=>val.id !== id);
        props.change(channelTemp);
        setActiveChannels([...channelTemp]);
    }

    return (
        <div className={"display-flex btn-section"}>
            <p>Selected Channels</p>
            <div className={"display-flex channel-btn"}>
                {activeChannels.map((item,index)=>{
                    return <ClosableButton color={item.color} text={item.name} id={item.id} remove={removeChannel} />;
                })}
                <button onClick={()=>addChannel()}>+</button>
            </div>
        </div>
    );
}

export default ChannelButtons;