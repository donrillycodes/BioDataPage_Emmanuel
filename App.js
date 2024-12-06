import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Contact Details</Text>
      </View>
      <View style={styles.inputField}>
        <Text style={styles.nameInput} >Name:</Text>
        <TextInput style={styles.textContainer} placeholder= "Emmanuel Oyenuga"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    justifyContent:"center",
  },
  headerText: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 40,
    fontWeight: "bold",
  }
});
