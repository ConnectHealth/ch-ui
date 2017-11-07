// @flow
import React from 'react';
import Page from 'components/Page';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const List = styled.ul``;

const AllPatientsQuery = gql`
  query test {
    viewer {
      allPatients {
        edges {
          node {
            id
            firstName
            lastName
          }
        }
      }
    }
  }
`;

const PatientList = ({ data }) => {
  if (data.loading) {
    return <div>loading</div>;
  } else {
    return (
      <Page>
        <h1>Patients</h1>
        <List>
          {data.viewer.allPatients.edges.map(
            ({ node: { id, firstName, lastName } }) => (
              <li key={id}>
                {firstName} {lastName}
              </li>
            )
          )}
        </List>
      </Page>
    );
  }
};

const Results = graphql(AllPatientsQuery)(PatientList);

export default Results;
