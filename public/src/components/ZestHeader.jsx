/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.span`
  font-size: 16px;
  text-align: center;
  font-family: "Open Sans",Gotham,gotham,Tahoma,Geneva,sans-serif;
  color: #2A2A33;
  border-style: dashed;
  border-width: 0 0 1px 0;
  border-color: rgb(167, 166, 171);
`;

const Cost = styled.span`
  font-size: 22px;
  text-align: center;
  font-family: "Open Sans", Tahoma, Geneva, sans-serif;
  color: rgb(42, 42, 51);
`;

const Range = styled.span`
  font-size: 16px;
  text-align: center;
  font-family: "Open Sans", Tahoma, Geneva, sans-serif;
  color: rgb(20, 157, 48);
  border-style: dashed;
  border-width: 0 0 1px 0;
  border-color: rgb(167, 166, 171);
`;


const ZestHeader = ({ cost }) => {
  const upperPriceRange = '$' + (cost + 34000);
  const lowerPriceRange = '$' + (cost - 34000);
  return (
    < Container >
      < Title >Zestimate® < /Title ><br />
      < Cost>{'$' + cost}</Cost><br />
      < Range >{`Estimated sales range: ${lowerPriceRange} - ${upperPriceRange}`}< /Range>
    < /Container >
  );
};

export default ZestHeader;