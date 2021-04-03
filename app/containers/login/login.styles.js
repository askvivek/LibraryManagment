import {Dimensions, StyleSheet} from 'react-native';
import commonStyles from '../../styles/common.styles';
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  logincontainer: {
    flex: 3,
    alignItems: 'center'
  },
  view: {
    padding: 10
  },
  inputview: {
    paddingTop: 10, 
    alignItems: 'center'        
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    width: (DEVICE_WIDTH - commonStyles.container.padding),
    borderWidth: 1,
    color: '#000'        
  },
  button: {
    width: (DEVICE_WIDTH - commonStyles.container.padding),
  },
  error: {
    color: 'red',
    fontSize: 12
  }
});

export default styles;