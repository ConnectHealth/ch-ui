// @flow
import React from 'react';
import Page from 'components/Page';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { List, ListItem } from 'components/ui';

const AllPatientsQuery = gql`
  query Test {
    getPatient(id: "UGF0aWVudDoy") {
      id
      firstName
      lastName
      treatments {
        edges {
          node {
            id
            protocols
            createdAt
          }
        }
      }
    }
  }
`;

type TreatmentListType = {|
  id: string,
  createdAt: string,
|};

const TreatmentItem = ({ node }: { node: TreatmentListType } = {}) => (
  <ListItem id={node.id}>
    <Link to={`/treatment/${node.id}`}>{node.createdAt}</Link>
  </ListItem>
);

const PatientPage = ({ match }) => {
  const data = getPatientAndTreatments(match.params.id).getPatient;
  return (
    <Page>
      <h1>
        {data.firstName} {data.lastName}
      </h1>

      <h2>Treatments</h2>
      <List>
        {data.treatments.edges.map(({ node }) => <TreatmentItem node={node} />)}
      </List>
    </Page>
  );
};

const getPatientAndTreatments = (id: string) => data;

const data = {
  getPatient: {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    treatments: {
      edges: [
        {
          node: {
            id: 'aaa',
            protocols: { test: true },
            createdAt: '2017-11-09T09:50:14.000Z',
          },
        },
      ],
    },
  },
};

const Results = props => <PatientPage data={data} {...props} />;

export default Results;
