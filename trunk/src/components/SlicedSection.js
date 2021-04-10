function SlicedSection(props) {
    
    return (
        <div className={props.selected === true ? "card card-selected" : "card"} onClick={()=>props.select(props.ind)}>
            <div className={"display-flex section-container"}>
                <div className={"display-flex"}>
                    <p>ID</p>
                    <input type={"number"} value={props.item.id}/>
                </div>

                <div className={"display-flex right-aligned"}>
                    <div className={"display-flex"}>
                        <p>START</p>
                        <input type={"number"} defaultValue={props.item.start} onChange={(evt)=>props.change(evt.target.value,0,props.item.id)} value={props.item.start}/>
                    </div>
                    <div className={"display-flex"}>
                        <p>END</p>
                        <input type={"number"} defaultValue={props.item.end}  onChange={(evt)=>props.change(evt.target.value,1,props.item.id)} value={props.item.end}/>
                    </div>
                    <div className={"display-flex"}>
                        <p>MIN START</p>
                        <input type={"text"} value={props.item.min_start} />
                    </div>
                    <div className={"display-flex"}>
                        <p>MIN END</p>
                        <input type={"text"} value={props.item.min_end} />
                    </div>
                    <div onClick={()=>props.remove(props.item.id, props.ind)}>
                        <img src="/close.svg" alt="delete row"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlicedSection;