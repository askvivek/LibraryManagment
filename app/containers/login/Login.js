import React, {useState} from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/actions/auth.action';
import commonStyles from '../../styles/common.styles';
import {require_password, require_username} from '../../utils/language/language.en';
import styles from './login.styles';
function Login () {
  const auth = useSelector((state) => state.auth);
  const [_username, setUserName] = useState('');
  const [_password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  function onsubmit () {
    if (!_username) {
      setError(require_username);
      return;
    }
    if (!_password) {
      setError(require_password);
      return;
    }
    let user = {
      username: _username,
      password: _password
    };
    dispatch(login(user));
  }
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.headertext}>
        <Text> Weclcome to library management! 🎉 </Text>
      </View>
      {error ? <Text style={styles.error} > {error} </Text> : null}
      <View style={styles.logincontainer}>
        <View style={styles.inputview}>
          <TextInput
            style={styles.input}
            defaultValue={_username}
            onChangeText={function (text) {
              setError(); 
              setUserName(text); 
            }}
            placeholder={'User Name'}
            placeholderTextColor={'#999966'}
            maxLength={30}
          />
        </View>
        <View style={styles.inputview}>
          <TextInput
            style={styles.input}
            value={_password}
            onChangeText={function (text) {
              setError(); 
              setPassword(text); 
            }}
            placeholder={'Password'}
            placeholderTextColor={'#999966'}
            secureTextEntry={true}
            maxLength={8}
          />
        </View>
        {auth.error ? <Text style={styles.error}>{auth.error}</Text> : null}
        <View style={styles.view}>
          <Button
            style={styles.button}
            onPress={onsubmit}
            title='Sign In'
            color='#841584'
            accessibilityLabel='Signin to library managment'
          />
        </View>
      </View>
    </View>);
}
export default Login;
