import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

const ListItem = (props) => {
  let item = props.item;
  return (
    <TouchableOpacity onPress={() => {
      props.navigation.navigate('listitemview', item); 
    }}>
      <View style={styles.listItem}>
        <View style={styles.image}><Image source={{uri: item.thumbnailUrl}} style={{width: 50, height: 50, borderRadius: 30}} /></View>
        <View style={styles.container}>
          <View style={styles.textHolder}>
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.content}>{item.shortDescription}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10,
    backgroundColor: '#FFF',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5
  },
  image: {
    padding: 10
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
  textHolder: {
    paddingVertical: 5
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12
  },
  content: {
    fontSize: 9,
    color: 'black'
  }
});

export default ListItem;