import React from 'react';
import Card from './Card';
import Row from '../containers/Row';

const Passions = ({ passions }) => (
  <Row>
    {passions.map((item) => (
      <Card
        key={item.title}
        bgColor={item.bgColor}
        bgImageUrl={item.bgImageUrl}
        description={item.description}
        imageUrl={item.imageUrl}
        title={item.title}
      />
    ))}
  </Row>
);

export default Passions;
