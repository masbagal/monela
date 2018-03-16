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
        <View style={[styles.tab, styles.active]}>
          <Text style={styles.text}>CATEGORY</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.text}>ITEMS</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
  },
  tab: {
    flex: 1, 
    width: '50%',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
  },
  active: {
    borderBottomWidth: 5
  },
  text: {
    color: '#ffffff',
    textAlign: 'center'
  }
});
