import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Bước 1 Xác định nhu cầu khách hàng",
    content: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    date: "20/08/2020, 06:00",
    icon: "checkmark-circle-outline",
  },
  {
    id: "2",
    title: "Bạn có khách hàng mới!",
    content:
      "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    date: "20/08/2020, 06:00",
    icon: "person-add-outline",
  },
  {
    id: "3",
    title: "Khách hàng được chia sẻ bị trùng",
    content: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.",
    date: "20/08/2020, 06:00",
    icon: "alert-circle-outline",
  },
  {
    id: "4",
    title: "Công việc sắp đến hạn trong hôm nay",
    content: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    date: "20/08/2020, 06:00",
    icon: "time-outline",
  },
  {
    id: "5",
    title: "Công việc đã quá hạn",
    content:
      "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành.",
    date: "20/08/2020, 06:00",
    icon: "close-circle-outline",
  },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.iconWrapper}>
        <Ionicons name={item.icon} size={34} color="#2f5bea" />
      </View>

      <View style={styles.textBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 12 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },

  header: {
    height: 60,
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "600",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingTop: 15,
  },

  item: {
    flexDirection: "row",
    backgroundColor: "#b6e4f5",
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  iconWrapper: {
    width: 56,
    alignItems: "center",
    marginRight: 14,
    marginTop: 4,
  },

  textBox: {
    flex: 1,
  },

  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 6,
  },

  content: {
    fontSize: 15,
    color: "#666",
    marginBottom: 8,
    lineHeight: 22,
  },

  date: {
    fontSize: 13,
    color: "#999",
  },
});
