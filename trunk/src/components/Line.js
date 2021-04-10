function Line(props) {
    let dataString = props.data;
    let startingVal = 0;
    if(dataString === null || dataString === undefined){
        dataString = "";
        for(let i = 0; i < 600; i++){
            let rand = (Math.floor(Math.random() * 100))/10;
            if(i === 0) { startingVal = rand }
            dataString += (i * 2)+","+(rand).toString()+" ";
        }
    }
    
    return (
        <svg width={1200} style={{marginTop: (startingVal * 10)}}>
          <polyline points={dataString} fill="none" stroke={props.color} width={"-webkit-fill-available"} strokeWidth={1.2}/>
        </svg>
    );
}

export default Line;