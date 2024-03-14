import { View, Text, StyleSheet, Image } from "react-native"


export default MovieCard = ({title, titleType, imageUrl, year, imdbId}) => {
    return (
        <View style={styles.card}>
            <Image></Image>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
      flex: 1,
      width: '100%',
      alignContent : 'start',
      padding : 10
    }
  });