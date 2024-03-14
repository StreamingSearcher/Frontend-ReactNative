import { View, StyleSheet, ScrollView, Text } from "react-native"
import { useQuery, gql } from '@apollo/client';
import MovieCard from "./MovieCard"

// Definir la consulta GraphQL
const GET_MOVIES = gql`
  query {
    moviesByTitle (title : "avengers") {
        title
        titleType
        imageUrl
        year
        imdbId
    }
  }
`;

export default MovieCardContainer = () => {

    const { loading, error, data } = useQuery(GET_MOVIES);

    if (loading) return <Text>Cargando...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;
    console.log(error);
    console.log(data);
    return (
        <ScrollView style={styles.container}>
            {data && data.moviesByTitle.map(movie => <MovieCard key={movie.imdbId}   
                                                                    title={movie.title}
                                                                    imageUrl={movie.imageUrl}
                                                                    titleType={movie.titleType}
                                                                    year={movie.year}
                                                                    imdbId={movie.imdbId} 
                                                                    style={styles.gridItem}/>)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      width: '100%',
      alignContent : 'start',
      padding : 10
    }
  });