import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './containers/login/Login';
import Home from './containers/home/Home';
import ListItem from './components/ListItems/ListItems';
import ListItemView from './components/ListItemView/ListItemView';
import {Image, TouchableOpacity} from 'react-native';
import {logout} from './redux/actions/auth.action';

const Stack = createStackNavigator();
class App extends Component {
  render () {
    if (!this.props.state.auth.loggedin) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name='login' component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    const dispatch = this.props.dispatch;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name='home' component={Home} options={{
            title: 'Home - Book List',
            headerRight: () => (
              <TouchableOpacity onPress={() => {
                dispatch(logout()); 
              }} ><Image
                  style={{width: 30, height: 30, marginRight: 10}}
                  source={require('./assets/ic_power_settings_new_black_24dp.png')}
                /></TouchableOpacity>
            ),
          }} />
          <Stack.Screen name='listitem' component={ListItem} />
          <Stack.Screen name='listitemview' component={ListItemView} options={{title: 'Book Details View'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(App);