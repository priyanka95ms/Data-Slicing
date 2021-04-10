function Slice(props) {
    return (
        <div className={"chart-container slice-container"}>
            <div style={{ width: props.width, marginLeft: props.left }} className={"slice-outer"}>
                <div style={{ width: (props.width - (props.width * (props.min_start/100)) - (props.width * ((100-props.min_end)/100))), marginLeft: (props.width * (props.min_start/100)), marginRight: (props.width * ((100-props.min_end)/100)) }} className={"slice-inner"}></div>
            </div>
        </div>
    )
}

export default Slice;