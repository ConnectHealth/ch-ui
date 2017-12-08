//@flow
import React from 'react';
import styled from 'styled-components';

const Action = styled.div`
  margin: 0 0.6rem;
  display: block;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 2px solid;
  filter: opacity(${props => (props.selected ? '100%' : '40%')});
  &:hover {
    filter: opacity(100%);
  }
  color: ${props => props.color};
  background: ${props => props.color};
`;

type ChoiceType = {|
  result: ?string,
|};

const ChoiceStyle = styled.div`
  display: flex;
`;

const Choice = ({ result }: ChoiceType) => (
  <ChoiceStyle>
    <Action color={'red'} selected={result === 'negative'} />
    <Action color={'green'} selected={result === 'positive'} />
  </ChoiceStyle>
);

/** @component */
export default Choice;
