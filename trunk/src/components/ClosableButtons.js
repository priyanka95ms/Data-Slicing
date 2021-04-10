function ClosableButtons(props) {
    return (
        <button className={"channel-btn"} style={{backgroundColor:props.color}}>
            <div className={"display-flex channel-content"}>
                <button className={"close-btn"} onClick={()=>props.remove(props.id)}>x</button>
                <p>{props.text}</p>
            </div>
        </button>
    );
}

export default ClosableButtons;