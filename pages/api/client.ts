import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import getConfig from 'next/config'

const { publicRuntimeConfig: { API_HOST, API_KEY } } = getConfig()

const restLink = new RestLink({
  uri: API_HOST,
  customFetch: (uri, options) => {
    const finalUri = uri.toString().includes("?") ? `${uri}&api_key=${API_KEY}` : `${uri}?api_key=${API_KEY}`
    return fetch(finalUri)
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});

export default client