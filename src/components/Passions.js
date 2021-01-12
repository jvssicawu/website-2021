import React from 'react';
import { graphql } from 'gatsby';
import Card from './Card';
import Row from '../containers/Row';

export const passionsQuery = graphql`
  fragment PassionsFragment on DataJson {
    passions {
      bgColor
      bgImageUrl
      description
      imageUrl
      title
    }
  }
`;

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
