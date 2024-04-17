import React from "react";
import "./styles.css";
import Clock from "./clock";

class DigitalClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = (hours % 12 || 12).toString().padStart(2, '0');
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(time);

    return (
      <div className="digital-clock">
        <h2>
          {`${displayHours}:${minutes}:${seconds}`}
          <sup style={{ fontSize: '0.4em', verticalAlign: 'top' }}>{ampm}</sup>
        </h2>
        <div className="date-container" style={{ textAlign: 'center' }}>
          <b><p style={{ fontSize: '0.9em', margin: '0' }}>{formattedDate}</p></b>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', borderBottom: '2px solid orange', paddingTop: '20px', color: 'blue' }}>
        Analog - Digital Clock
      </h1>
      <div className="clocks-container">
        <Clock />
        <DigitalClock />
      </div>
      <div className="watermark">SNEHA</div>
    </div>
  );
}

export default App;

App.js