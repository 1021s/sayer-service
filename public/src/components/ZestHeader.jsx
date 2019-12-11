import React from 'react';
import '../CSS/ZestHeader.css';



const ZestHeader = ({ cost }) => {
  const upperPriceRange = '$' + (cost + 34000);
  const lowerPriceRange = '$' + (cost - 34000);
  return (
    <div className="container">
      <span className="title">Zestimate® </span><br />
      <span className="cost">{'$' + cost}</span><br />
      <span className="range">{`Estimated sales range: ${lowerPriceRange} - ${upperPriceRange}`}</span>
    </div>
  );
};

export default ZestHeader;