import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import {StyleSheet ,Button, TextInput, View } from 'react-native';
import MovieCardContainer from '../components/MovieCardContainer';

export default function Home() {
    return (
    <View style={styles.container}>
        <View style={styles.form}>
            <TextInput style={styles.inputText} placeholder="Movie Title"/>
            <Button style={styles.button} title="Search"/>
        </View>
        <MovieCardContainer />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop : Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignContent : 'start'
  },
  form : {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    padding : 6,
    justifyContent : 'center'
  },
  inputText : {
    width : '60%',
    borderColor : 'black'
  }
});