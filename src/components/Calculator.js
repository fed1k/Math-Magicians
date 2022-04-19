import React from 'react';

let count = 1;
class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='],
      classname: 'a',
    };
  }

  render() {
    const el = this.state;
    return (
      <div className="main-container">
        <div className="console">0</div>
        {el.data.map((i) => {
          return <span className={el.classname + (count += 1)} key={(count += 1)}>{i}</span>
        })}
      </div>
    );
  }
}

export default Design;
