import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../utils/baseurl";

export default function CustomerInventrory({ navigation }) {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const rawJwt = await AsyncStorage.getItem("APP_JWT_TOKEN");
        if (!rawJwt) return;

        const { token } = JSON.parse(rawJwt);

        const res = await api.get("/manager/customers", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCustomers(res.data);
      } catch (err) {
        console.error("❌ Error fetching manager customers:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 15, borderBottomWidth: 1 }}
            onPress={() =>
              navigation.navigate("InventoryScreen", { customerId: item.id })
            }
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.full_name}</Text>
            <Text>{item.city_name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
