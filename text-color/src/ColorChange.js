import React, {Component} from "react";
class ColorChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textColor: 'black',
            fontSize:'18px',
            fontStyle:'normal',
            textDecoration:'none'
        };
        this.watermarkStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
            opacity:'0.3',
            fontFamily: 'Arial,sans-serif',
            fontSize:'50px',
            fontStyle: 'Normal',
            color:'gray',
        };
    }
    handleColorChange = (event) => {
        this.setState({ textColor:event.target.value });
    };
    handleSizeChange = (event) => {
        this.setState({ fontSize: event.target.value + 'px'});
    };
    handleStyleChange = (event) => {
        this.setState({ fontStyle: event.target.value});
    };
    handleDecorationChange = (event) => {
        this.setState({ textDecoration: event.target.value });
    };
    render() {
        const { textColor, fontSize, fontStyle, textDecoration } = this.state;
        return (
            <div style={{ textAlign: 'center', marginTop: '50px '}}>
                <div style={this.watermarkStyle}>SNEHA</div>
                <label htmlFor="colorPicker">Select Text Color</label>
                <input
                    type="color"
                    id="colorPicker"
                    value={textColor}
                    onChange={this.handleColorChange}
                />
                <label htmlFor="fontsize">Select Font Size: </label>
                <input
                    type="number"
                    id="fontsize"
                    value={parseInt(fontSize)}
                    onChange={this.handleSizeChange}
                />
                <label htmlFor="fontstyle">Select Font Style: </label>
                <select id="fontstyle" value={fontStyle} onChange={this.handleStyleChange}>
                   <option value="normal">Normal</option>
                   <option value="italic">Italic</option>
                </select>
                <label htmlFor="textDecoration">Select Text Decoration</label>
                <select id="textDecoration" value={textDecoration} onChange={this.handleDecorationChange}>
                    <option value="none">None</option>
                    <option value="underline">Underline</option>
                    <option value="overline">overline</option>
                    <option value="line-though">Line Though</option>
                </select>
                <div style={{ color: textColor, marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: fontSize, fontStyle: fontStyle, textDecoration: textDecoration }}>
                    <h1>Its your choice, see the magic!</h1>

                </div>
            </div>
        )
    }
}

export default ColorChange;