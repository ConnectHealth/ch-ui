// @flow
import React from 'react';
import Page from 'components/Page';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { List, ListItem } from 'components/ui';

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

type PatientType = {|
  id: string,
  firstName: string,
  lastName: string
|};

const PatientItem = ({ node }: { node: PatientType } = {}) => (
  <ListItem id={node.id}>
    <Link to={`/patient/${node.id}`}>
      {node.firstName} {node.lastName}
    </Link>
  </ListItem>
);

const PatientList = ({ data }) => {
  if (data.loading) {
    return <div>loading</div>;
  } else {
    return (
      <Page>
        <h1>Patients</h1>
        <List>
          {data.viewer.allPatients.edges.map(({ node }) => (
            <PatientItem node={node} />
          ))}
        </List>
      </Page>
    );
  }
};

/* const Results = graphql(AllPatientsQuery)(PatientList);*/
const data = {
  loading: false,
  viewer: {
    allPatients: {
      edges: [
        { node: { id: 1, firstName: 'John', lastName: 'Smith' } },
        { node: { id: 2, firstName: 'Kate', lastName: 'Jones' } }
      ]
    }
  }
};
const Results = () => <PatientList data={data} />;

export default Results;
