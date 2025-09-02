import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import InventoryItem from '../components/InventoryItem';
import { InventoryScreenCss } from '../assets/css/ScreensCss';
import GradientText from '../components/GradientText';
import colors from '../theme/colors';

export default function InventoryScreen() {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    if (expanded) {
      // collapse
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      setExpanded(true);
      // expand
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  };

  // map 0 → 0 height, 1 → expanded height
  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 410], // adjust to fit your details content
  });

  return (
    <View style={InventoryScreenCss.container}>
      <GradientText text="Inventory" style={InventoryScreenCss.title} />
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <Animated.View style={InventoryScreenCss.customerDetailsContainer}>
          <TouchableOpacity onPress={toggleExpand}>
            {/* Always visible top rows */}
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 8,
                alignItems:'flex-start',
                // justifyContent:'center'
              }}
            >
              {/* Row 1 */}
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#ccc',
                  alignItems: 'center',
                }}
              >
                <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                  Phone
                </Text>
                <Text style={{ paddingHorizontal: 4 }}>:</Text>
                <Text style={{ flex: 1, padding: 8 }}>9876543210</Text>
              </View>

              {/* Row 2 */}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                  Email
                </Text>
                <Text style={{ paddingHorizontal: 4 }}>:</Text>
                <Text style={{ flex: 1, padding: 8 }}>Ashok@gmail.com</Text>
              </View>
            </View>

            {/* Animated expanding section */}
            <Animated.View
              style={{ overflow: 'hidden', height: animatedHeight }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 8,
                  marginTop: 10,
                }}
              >
                {/* Row 3 */}
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                    Moving Date
                  </Text>
                  <Text style={{ paddingHorizontal: 4 }}>:</Text>
                  <Text style={{ flex: 1, padding: 8 }}>15/05/2025</Text>
                </View>

                {/* Row 4 */}
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                    Home Size
                  </Text>
                  <Text style={{ paddingHorizontal: 4 }}>:</Text>
                  <Text style={{ flex: 1, padding: 8 }}>400 SQFT</Text>
                </View>

                {/* Row 5 */}
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                    Moving From
                  </Text>
                  <Text style={{ paddingHorizontal: 4 }}>:</Text>
                  <Text style={{ flex: 1, padding: 8 }}>Mumbai</Text>
                </View>

                {/* Row 6 */}
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                    Moving To
                  </Text>
                  <Text style={{ paddingHorizontal: 4 }}>:</Text>
                  <Text style={{ flex: 1, padding: 8 }}>Pune</Text>
                </View>

                {/* Row 7 */}
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                    Loading Floor No
                  </Text>
                  <Text style={{ paddingHorizontal: 4 }}>:</Text>
                  <Text style={{ flex: 1, padding: 8 }}>5</Text>
                </View>

                {/* Row 8 */}
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                    Unloading Floor No
                  </Text>
                  <Text style={{ paddingHorizontal: 4 }}>:</Text>
                  <Text style={{ flex: 1, padding: 8 }}>2</Text>
                </View>

                {/* Row 9 */}
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                    Loading Services
                  </Text>
                  <Text style={{ paddingHorizontal: 4 }}>:</Text>
                  <Text style={{ flex: 1, padding: 8 }}>Lift</Text>
                </View>

                {/* Row 10 */}
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                    Unloading Services
                  </Text>
                  <Text style={{ paddingHorizontal: 4 }}>:</Text>
                  <Text style={{ flex: 1, padding: 8 }}>N/A</Text>
                </View>

                {/* Row 11 */}
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                    Moving Type
                  </Text>
                  <Text style={{ paddingHorizontal: 4 }}>:</Text>
                  <Text style={{ flex: 1, padding: 8 }}>Inter City</Text>
                </View>

                {/* Row 12 */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ flex: 1, padding: 8, fontWeight: 'bold' }}>
                    Distance
                  </Text>
                  <Text style={{ paddingHorizontal: 4 }}>:</Text>
                  <Text style={{ flex: 1, padding: 8 }}>25 Km</Text>
                </View>
              </View>
            </Animated.View>

            {/* Divider */}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  width: 150,
                  backgroundColor: colors.primary,
                  height: 2,
                }}
              />
            </View>
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
