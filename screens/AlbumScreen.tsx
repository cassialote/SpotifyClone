import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import SongListItem from '../components/SongListItem';
import albumDetails from '../data/albumDetails';
import styles from '../components/SongListItem/styles';

const AlbumScreen = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])

    return (
        <View style={style.container}>
            <FlatList 
                data={albumDetails.songs}
                renderItem={({item}) => <SongListItem song={ item } /> }
                keyExtractor={(item) => item.id}
            />
        </View>

    );
}

export default AlbumScreen;

const style = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      height: '100%',
    }
  })





