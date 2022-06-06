import React from 'react';

const Face = ({ id, item }) => {
    return (<div className="face" id={`animate${id}`}>
    <div className="eyes">
      <div className="eye"></div>
      <div className="eye"></div>
    </div>
    <div style={{position: 'absolute', fontWeight: 'bold'}}>{item}</div>
  </div>)
}

export default Face;