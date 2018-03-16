import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  AppRegistry,
  Image, 
  ScrollView,
} from 'react-native';

import HeroBannerSummary from './components/HeroBannerSummary';
import ExpensesList from './components/ExpensesList';
import SectionTabs from './components/SectionTabs';
import ListExpensesByCategory from './components/ListExpensesByCategory';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <HeroBannerSummary />
        <ListExpensesByCategory />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
