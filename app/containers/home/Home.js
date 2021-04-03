import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import ListItem from '../../components/ListItems/ListItems';
import {getallbooks} from '../../redux/actions/books.action';
import commonStyles from '../../styles/common.styles';
function Home (props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallbooks());
  }, []);
  return (
    <View style={commonStyles.container}>
      <FlatList
        style={{flex: 1}}
        data={state.books}
        renderItem={(item) => <ListItem  {...item} navigation={props.navigation} />}
        keyExtractor={function (item, index) {
          return 'lisit_' + index; 
        }}

      />
    </View>);
}
export default Home;
