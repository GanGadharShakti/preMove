import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import colors from "../theme/colors";
import LinearGradient from "react-native-linear-gradient";

export default function ItemCategory({ onSelect }) {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);

  // ✅ Backend se categories fetch karna
  useEffect(() => {
    fetch("http://localhost:5000/api/categories") // Android Emulator: 10.0.2.2 , Real Device: http://your-ip:5000
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("❌ Error fetching categories:", err));
  }, []);

  const handleSelect = id => {
    setSelected(id);
    if (onSelect) onSelect(id);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {categories.map(cat => (
          <TouchableOpacity
            key={cat.id}
            onPress={() => handleSelect(cat.id)}
            style={{ borderRadius: 20, overflow: "hidden" }}
          >
            {selected === cat.id ? (
              <LinearGradient
                colors={["#03B5A7", "#0189D5"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.categoryBox}
              >
                <Image
                  source={{ uri: cat.category_image }}
                  style={styles.icon}
                />
                <Text style={[styles.categoryText, styles.activeText]}>
                  {cat.categoryname}
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.categoryBox}>
                <Image
                  source={{ uri: cat.category_image }}
                  style={styles.icon}
                />
                <Text style={styles.categoryText}>{cat.categoryname}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { marginVertical: 10, paddingHorizontal: 5 },
  categoryBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
  categoryText: { color: "#333", fontSize: 14 },
  activeText: { color: "#fff", fontWeight: "bold" },
  icon: { width: 20, height: 20, marginRight: 8 },
});
