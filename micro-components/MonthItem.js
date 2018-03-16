import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.monthContainer}>
        <Text style={styles.white}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monthContainer: {
      padding: 10,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#fff',
    },
  white: {
    color: '#fff'
  }
});
