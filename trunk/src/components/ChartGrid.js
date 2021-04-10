function ChartGrid() {
    let tblRows = [0,1,2,3,4,5,6,7,8,9];
    return (
        <table>
            {tblRows.map((item,value)=>{
                return <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
            })}
        </table>
    );
}

export default ChartGrid;