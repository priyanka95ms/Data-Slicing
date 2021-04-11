function ClosableButtons(props) {
    return (
        <div className={"channel-btn"} style={{backgroundColor:props.color}}>
            <div className={"display-flex channel-content"}>
                <button className={"close-btn"} onClick={(e)=>props.remove(props.id)}>x</button>
                <p onClick={()=>props.toggle(props.index)}>{props.text}</p>
            </div>
        </div>
    );
}

export default ClosableButtons;