import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryRow from '../micro-components/CategoryRow';

export default class ListExpensesByCategory extends React.Component {
  render() {
    const data = [
      {
        id: 'Food',
        icon: <Icon name="restaurant" size={30} color="#c23616" />,
      },
      {
        id: 'Home',
        icon: <Icon name="home" size={30} color="#fbc531" />,
      },
      {
        id: 'Transport',
        icon: <Icon name="directions-bus" size={30} color="#6c5ce7" />,
      },
      {
        id: 'Entertainment',
        icon: <Icon name="golf-course" size={30} color="#c44569" />,
      },
      {
        id: 'Groceries',
        icon: <Icon name="shopping-cart" size={30} color="#9c88ff" />,
      },
      {
        id: 'Health',
        icon: <Icon name="local-hospital" size={30} color="#00cec9" />,
      },
      {
        id: 'Other',
        icon: <Icon name="style" size={30} color="#e66767" />,
      }];

    return (
      <View style={styles.container}>
       <FlatList
          data={data}
          contentContainerStyle={styles.list}
          renderItem={({item}) => <CategoryRow key={item.id} text={item.id} icon={item.icon} />}
        />
      </View>
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
    backgroundColor: '#eaeaea',
  },
  list: {
    alignItems: 'stretch',
    padding: 15,
  }
});
