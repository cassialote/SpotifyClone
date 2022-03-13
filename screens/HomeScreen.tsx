import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RootTabScreenProps } from '../types';

import AlbumComponent from '../components/Album';
import AlbumCategory from '../components/AlbumCategory';
import { Album } from '../types';
import albumCategories from '../data/albumCategories';

const album = {
  id: '1',
  imageUri: 'https://www.covermesongs.com/wp-content/uploads/2020/02/billieeilish_whenweallfallasleepw_bs3v.jpg',
  artistsHeadline: 'Billie Eilish, Cardi Objective C, Avicii'
}



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Album album={album}/> */}
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => 
          <AlbumCategory 
            title={item.title}
            albums={item.albums}
          />}
        keyExtractor={( item ) => item.id}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  }
})

