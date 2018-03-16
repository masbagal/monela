import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
} from 'react-native';

export default class MonthItem extends React.Component {
  render() {
    return (
      <View style={styles.monthItem}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monthItem: {
    flex: 3,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#fff',
  },
});
