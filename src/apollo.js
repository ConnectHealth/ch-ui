// @flow
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

function makeApolloClient(scapholdUrl: string) {
  const graphqlUrl = `https://${scapholdUrl}`;
  const httpLink = createHttpLink({ uri: graphqlUrl });
  /* const middlewareLink = new ApolloLink((operation, forward) => {
   *   operation.setContext({
   *     headers: {
   *       Authorization: `Bearer ${localStorage.getItem('scaphold_user_token')}`,
   *     },
   *   });
   *   return forward(operation);
   * });
   * const link = middlewareLink.concat(httpLink);
   */
  const link = httpLink;

  const clientGraphql = new ApolloClient({
    link: link,
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  });
  return clientGraphql;
}

export default makeApolloClient;
