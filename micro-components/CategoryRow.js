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
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#b2bec3',
    flexDirection: 'row',
    marginBottom: 5,
    alignSelf: 'stretch',
    borderRadius: 4,
  },
  textContainer : {
    paddingLeft: 30
  },
  text: {
    fontSize: 20
  }
});
