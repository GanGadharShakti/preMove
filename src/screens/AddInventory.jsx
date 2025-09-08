import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ItemCategory from '../components/ItemCategory';
import Header from '../components/Header';
import { AddItemCss } from '../assets/css/ScreensCss';
import LinearGradient from 'react-native-linear-gradient';

const AddInventory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]); // ✅ items from API
  const [quantities, setQuantities] = useState({});

  // ✅ Jab category select hoti hai → items fetch karna
  const fetchItems = async categoryId => {
    try {
      setSelectedCategory(categoryId);
      const res = await fetch(
        `http://192.168.0.155:5000/api/sub-category-items/${categoryId}`,
      );
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error('❌ Error fetching items:', error);
    }
  };

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
          <ItemCategory onSelect={fetchItems} />
        </View>

        {/* Items of selected category */}
        <View style={AddItemCss.listWrapper}>
          <FlatList
            data={items}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={AddItemCss.card}>
                <Image
                  source={{
                    uri: `https://res.cloudinary.com/dfqledkbu/image/upload/premove_inventory/${item.sub_category_item_image}`,
                  }}
                  style={AddItemCss.itemImage}
                />
                <Text style={AddItemCss.itemName}>
                  {item.sub_category_item_name}
                </Text>

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
          colors={['#03B5A7', '#0189D5']}
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
