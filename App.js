import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './src/screens/Home';

const client = new ApolloClient({
  uri: 'https://backend-graphql-0rv3.onrender.com/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}> 
        <Home />
      </View>
      
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop : Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
