import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ItemCategory from '../components/ItemCategory';
import Header from '../components/Header';
import data from '../assets/images/categories';
import { AddItemCss } from '../assets/css/ScreensCss';
import LinearGradient from 'react-native-linear-gradient';

const categories = [
  { id: 'Boxes', name: 'Boxes' },
  { id: 'LivingRoom', name: 'Living Room' },
  { id: 'Bedroom', name: 'Bedroom' },
  { id: 'DiningRoom', name: 'Dining Room' },
  { id: 'Kitchen', name: 'Kitchen' },
  { id: 'KidsRoom', name: 'Kids Room' },
  { id: 'Office', name: 'Office' },
  { id: 'Outdoor', name: 'Outdoor' },
  { id: 'Vehicles', name: 'Vehicles' },
  { id: 'Other', name: 'Other' },
];

const AddInventory = () => {
  const [selectedCategory, setSelectedCategory] = useState('Boxes');
  const [quantities, setQuantities] = useState({});

  const increaseQuantity = id => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQuantity = id => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  return (
    <>
      <View style={AddItemCss.container}>
        {/* Header */}
        <View style={AddItemCss.headerWrapper}>
          <Header />
        </View>

        {/* Category selector */}
        <View style={AddItemCss.categoryWrapper}>
          <ItemCategory
            categories={categories}
            onSelect={id => setSelectedCategory(id)}
          />
        </View>

        {/* Items of selected category */}
        <View style={AddItemCss.listWrapper}>
          <FlatList
            data={data[selectedCategory] || []}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={AddItemCss.card}>
                <Image
                  source={{ uri: item.image }}
                  style={AddItemCss.itemImage}
                />
                <Text style={AddItemCss.itemName}>{item.name}</Text>

                {/* Quantity Controls */}
                <View style={AddItemCss.quantityWrapper}>
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                    <Text style={AddItemCss.quantityBtn}>+</Text>
                  </TouchableOpacity>

                  <Text style={AddItemCss.quantityText}>
                    {quantities[item.id] || 0}
                  </Text>

                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                    <Text style={AddItemCss.quantityBtn}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>

      {/* Add Button */}
      <TouchableOpacity style={AddItemCss.addBtn}>
        <LinearGradient
          colors={['#03B5A7', '#0189D5']} // 👈 yahan apna gradient colors daalna
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={AddItemCss.addBtn}
        >
          <Text style={AddItemCss.addBtnText}>Add Items</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default AddInventory;
