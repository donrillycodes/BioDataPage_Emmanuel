import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>BIO Details</Text>
      </View>
      <View style={styles.inputField}>
        <Text style={styles.nameInput} >Name:</Text>
        <TextInput style={styles.textContainer} placeholder= "Emmanuel Oyenuga"/>
        <Text style={styles.nameInput} >Email:</Text>
        <TextInput style={styles.textContainer} placeholder= "Emmaoyenuga@gmial.com"/>
        <Text style={styles.nameInput} >About:</Text>
        <TextInput 
          multiline={true}
          numberOfLines={10} style={styles.textArea} placeholder= "I am currently advancing my expertise in mobile application development through a postgraduate diploma program at the University of Winnipeg PACE. My academic journey began with a Bachelor's in Science, majoring in Human Anatomy from Olabisi Onabanjo University, which has equipped me with a strong analytical foundation and a unique perspective on problem-solving. With several years of experience as a graphics and UI/UX designer, I excel in creating intuitive and visually appealing designs that enhance user experiences. My proficiency in forex market analysis further sharpens my analytical skills..."/>
        <Text style={styles.nameInput} >Hobbies:</Text>
        <TextInput 
            multiline={true}
            numberOfLines={2}
            style={styles.textContainer} placeholder= "Movies, footbal(soccer), chess" />
            
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff1ed',
  },
  headerContainer: {
    justifyContent:"center",
  },

  headerText: {
    marginTop: 15,
    textAlign: "center",
    paddingTop: 20,
    fontSize: 40,
    fontWeight: "bold",
    color: "#262626",
  },
  inputField: {
    marginTop: 20,
  },
  nameInput: {
    marginBottom: 10,
    marginLeft: 40,
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    elevation: 20,
    flexDirection: "row",
    borderRadius: 15,
    marginHorizontal: 30,
    elevation: 15,
    marginVertical: 15,
    alignItems: "center",
    height: 53,
    paddingLeft: 10,
  },
  textArea: {
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    borderRadius: 20,
    marginHorizontal: 30,
    paddingLeft: 10,
    alignItems: "center",
    height: 240,
  }
});
