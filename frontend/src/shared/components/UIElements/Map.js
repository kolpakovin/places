import React from 'react';

import './Map.css';

const Map = props => {

  const { center, zoom } = props;
  
  return (
    <div
      className={`map ${props.className}`}
      style={props.style}
    ><iframe src={`https://maps.google.com/maps?q=${center.lat},${center.lng}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`}
      style={{ border: "0", width: '100%', height: '100%' }} title={'googleMaps'} /></div>
  );
};

export default Map;
