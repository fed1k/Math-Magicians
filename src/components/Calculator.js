import React from 'react';

let count = 1;
class Design extends React.Component {
  constructor(props) {
    super(props);
    this.data = ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='],
    this.state = {
      presenter: 0,
    };
  }
  handler(e){
    this.setState({presenter: e})
  }

  render() {
    return (
      <div className="main-container">
        <div className="console">{this.state.presenter}</div>
        {this.data.map((i) => {
          return <button key={(count += 1)}>{i}</button>
        })}
      </div>
    );
  }
}

export default Design;
