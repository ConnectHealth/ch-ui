//@flow
import React from 'react';
import styled from 'styled-components';
import Choice from 'components/Choice';

const Styled = styled.div`
  display: flex;
  border: solid;
  border-width: 1px;
  border-radius: 4px;
  padding: 1rem;
`;

const Text = styled.div`
  flex-grow: 1;
`;

const Menu = styled.div``;

type ProtocolType = {|
  text: string,
  result: ?string,
|};

const Protocol = ({ text, result }: ProtocolType) => {
  return (
    <Styled>
      <Text>{text}</Text>
      <Choice result={result} />
      <Menu>Menu</Menu>
    </Styled>
  );
};

/** @component */
export default Protocol;
