import React,{Component} from 'react';

class TableView extends Component {
    renderTableHeader() {
        const header = Object.keys(this.props.data[0]);
        return header.map((key) => <th key={key}>{key}</th>);
}  

renderTableData() {
    return this.props.data.map((item,index) => {
        const rowStyle = {
            backgroundColor : index % 2 === 0 ? '#f2f2f2' : 'white', // Alternating background colors
        };

        return (
            <tr key ={index} style = {rowStyle}>
                {Object.values(item).map((value,index) => (
                    <td key={index} style={{ border:'1px solid black',textAlign:'center'}}>
                        {value}
                    </td>
                ))}
            </tr>
        );
    });
};

    render() {
        const tableStyle = {
            borderCollapse : 'collaspe',
            width : '70%',
            top : 30,
            margin : '20px auto',
            border : '1px solid blue',
        };
        return (
            <div>
                <table style={tableStyle}>
                    <thead style={{ backgroundColor : '#3498db'}}>
                        <tr>{this.renderTableHeader()}</tr>
                    </thead>
                    <tbody>{this.renderTableData()}</tbody>
                </table>
            </div>
        )
    }
}

export default TableView;