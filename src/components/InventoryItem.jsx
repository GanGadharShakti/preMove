import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CameraIcon } from 'react-native-heroicons/outline';

const ItemCard = ({ name, qty, image }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.itemName}>{name}</Text>
      </View>
      <View>
        <Text style={styles.qty}>QTY:- {qty}</Text>
      </View>
      <TouchableOpacity>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <CameraIcon size={30} color="#4b5563" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  qty: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
});
