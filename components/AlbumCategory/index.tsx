import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Album } from '../../types';
import styles from './styles';
import AlbumComponent from '../Album';

export type AlbumCategoryProps = {
    title: string,
    albums: [Album],
}

const AlbumCategory = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            {/* title of category */}
            <Text style={styles.title}>{props.title}</Text>

            {/* list of albums */}
            <FlatList
                data={props.albums}
                renderItem={({ item }) => <AlbumComponent album={ item } /> }       /*for each item in the list, render it like an album component*/
                keyExtractor={( item ) => item.id }
                horizontal
                showsHorizontalScrollIndicator={false}
            /> 

        </View>
    )
}

export default AlbumCategory;