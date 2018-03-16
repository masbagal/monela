import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
} from 'react-native';
import MonthItem from '../micro-components/MonthItem';
import SectionTabs from './SectionTabs';
import { LinearGradient } from 'expo'; 

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient colors={['#39e5b6', '#70b2d9']} style={styles.container}>
        <View style={styles.monthSection}>      
          <MonthItem text='MAR 2018' />
        </View>
        <View style={styles.mainSection}>
          <View style={styles.mainContent}>    
            <Text style={[styles.message, styles.white]}>Your expenses this month</Text>
            <Text style={[styles.amount, styles.white]}>Rp. 267.500</Text>
          </View>
        </View>
        <SectionTabs />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  white: {
    color: '#fff',
  },
  container: {
    flex: 3,
    alignSelf: 'stretch',
    backgroundColor: '#0fb9b1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthSection: {
    paddingTop: 30,
    flex: 1, 
    alignContent: 'center',
    justifyContent: 'space-around'
  },
  mainSection:{
      flex: 3,
      alignItems: 'center',
      justifyContent: 'space-around',
  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 16,
  },
  amount: {
    fontSize: 28
  }
});
