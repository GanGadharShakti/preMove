import React, { useState } from 'react';
import {
  View,
  Text,
  InventoryScreenCssheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import InventoryItem from '../components/InventoryItem';
import { InventoryScreenCss } from '../assets/css/components';
import GradientText from '../components/GradientText';
export default function InventoryScreen() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <View style={InventoryScreenCss.container}>
      <GradientText text="Inventory" style={InventoryScreenCss.title} />

      <ScrollView style={{ flex: 1, padding: 10 }}>
        <Animated.View style={InventoryScreenCss.customerDetailsContainer}>
          <TouchableOpacity onPress={toggleExpand}>
            <View style={InventoryScreenCss.row}>
              <Text style={InventoryScreenCss.text}>Name: Ashok Maharana</Text>
              <Text style={InventoryScreenCss.text}>
                Email: Ashok@gmail.com
              </Text>
            </View>
            <View style={InventoryScreenCss.row}>
              <Text style={InventoryScreenCss.text}>Phone: 9876543210</Text>
              <Text style={InventoryScreenCss.text}>City: Mumbai</Text>
            </View>

            {expanded && (
              <>
                <View style={InventoryScreenCss.row}>
                  <Text style={InventoryScreenCss.text}>
                    Address: Andheri West
                  </Text>
                  <Text style={InventoryScreenCss.text}>Pin: 400053</Text>
                </View>
                <View style={InventoryScreenCss.row}>
                  <Text style={InventoryScreenCss.text}>Status: Active</Text>
                  <Text style={InventoryScreenCss.text}>Joined: Aug 2023</Text>
                </View>
              </>
            )}
          </TouchableOpacity>

        </Animated.View>

        <InventoryItem
          name="SOFA"
          qty={2}
          onCameraPress={() => alert('Open Camera')}
        />
        <InventoryItem name="TABLE" qty={2} image="https://picsum.photos/200" />
        <InventoryItem name="TV" qty={2} image="https://picsum.photos/201" />
      </ScrollView>
    </View>
  );
}
