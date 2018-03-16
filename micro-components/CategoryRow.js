import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
} from 'react-native';

export default class CategoryRow extends React.Component {
  render() {
    return (
      <View style={styles.rowContainer} key={this.props.text}>
          {this.props.icon}
        <View style={styles.textContainer}>        
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
      padding: 20,
      borderBottomWidth: 1,
      borderColor: '#b2bec3',
      flexDirection: 'row',
      alignItems: 'center',
    },
  textContainer : {
    paddingLeft: 30
  },
  text: {
    fontSize: 20
  }
});
