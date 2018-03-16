import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
} from 'react-native';
import MonthItem from '../micro-components/MonthItem';
import ListExpensesByCategory from './ListExpensesByCategory';

export default class SectionTabs extends React.Component {
  render() {
    return (
      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <Text style={styles.text}>CATEGORY</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.text}>ITEMS </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  white: {
    color: '#fff',
  },
  tabContainer: {
    height: 70,
    alignSelf: 'stretch',
    backgroundColor: '#dfe6e9',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    flex: 1, 
    width: '50%',
    alignContent: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#fff',
  },
  text: {
    textAlign: 'center'
  }
});
