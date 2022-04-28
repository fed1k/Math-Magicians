import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import calculate from '../logic/calculate';

let count = 1;
const Design = ({ data, obj }) => {
  const [state, setState] = useState(obj);
  const regular = (a) => {
    const kilo = <button type="button" onClick={() => setState(calculate(state, a))} key={(count += 1)}>{a}</button>;
    return kilo;
  };
  return (
    <div className="main-container">
      <div className="console" title="board">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      {data.map((i) => regular(i))}
    </div>
  );
};

Design.propTypes = {
  data: PropTypes.arrayOf(string).isRequired,
  obj: PropTypes.string.isRequired,
};

export default Design;
