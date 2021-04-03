import React from 'react';
import {Dimensions, Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import commonStyles from '../../styles/common.styles';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const ListItemView = (props) => {
  let item = props.route.params;
  return (
    <View style={commonStyles.container}>
      <ScrollView >
        <View>
          <Image source={{uri: item.thumbnailUrl}} style={{width: DEVICE_WIDTH - 10, height: (DEVICE_HEIGHT / 2)}} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
        </View>
        <View>
          <Text>{item.longDescription}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    height: '80%'
  }
});
export default ListItemView;