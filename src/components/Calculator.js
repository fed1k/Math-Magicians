import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

let count = 1;
class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      operation: '',
      next: '0'
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className="main-container">
        <div className="console">{this.state.total}{this.state.operation}{this.state.next}</div>
        {data.map((i) => {
          return <button onClick={()=>
            this.setState(state=>(
              calculate(state, i)
            ))} key={(count += 1)}>{i}</button>
        })}
      </div>
    );
  }
}

Design.propTypes = {
  data: PropTypes.string.isRequired,
  initialState: PropTypes.string.isRequired,
  newState: PropTypes.func.isRequired,
  obj: PropTypes.string.isRequired
};

export default Design;
