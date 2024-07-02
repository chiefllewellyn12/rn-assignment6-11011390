import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'; 
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/actions';

const products = [
  { id: 1, name: 'Office Wear', description: 'Reversible angora cardigan', price: 120, image: require('../assets/dress1.png') },
  { id: 2, name: 'Black', description: 'Reversible angora cardigan', price: 120, image: require('../assets/dress2.png') },
  { id: 3, name: 'Church Wear', description: 'Reversible angora cardigan', price: 120, image: require('../assets/dress3.png') },
  { id: 4, name: 'Lamerei', description: 'Reversible angora cardigan', price: 120, image: require('../assets/dress4.png') },
  { id: 4, name: '21WN', description: 'Reversible angora cardigan', price: 120, image: require('../assets/dress5.png') },
  { id: 4, name: 'Lopo', description: 'Reversible angora cardigan', price: 120, image: require('../assets/dress6.png') },
  { id: 4, name: '21wn', description: 'Reversible angora cardigan', price: 120, image: require('../assets/dress7.png') },
  { id: 3, name: 'Lame', description: 'Reversible angora cardigan', price: 120, image: require('../assets/dress3.png') },
];

const ProductList = ({ navigation }) => {
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity style={styles.addButton} onPress={() => dispatch(addItemToCart(item))}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={require('../assets/Menu.png')} style={styles.icon} />
          </TouchableOpacity>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.headerButton}>
              <Image source={require('../assets/Search.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.titleRow}>
          <Text style={styles.title}>OUR STORY</Text>
          <View style={styles.titleIcons}>
            <TouchableOpacity style={styles.titleButton}>
              <Image source={require('../assets/Listview.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleButton}>
              <Image source={require('../assets/Filter.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.productList}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menuButton: {
    padding: 10,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerButton: {
    marginHorizontal: 5,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Arial', 
  },
  titleIcons: {
    flexDirection: 'row',
  },
  titleButton: {
    marginHorizontal: 5,
    padding: 10,
  },
  productList: {
    paddingHorizontal: 10,
  },
  product: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'transparent',
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  addButtonText: {
    color: '#000',
    fontSize: 24,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
  },
});

export default ProductList;
