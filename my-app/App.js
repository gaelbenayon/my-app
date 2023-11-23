import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CAMPANA REPARA</Text>
      <Image style={styles.mainImage} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/7/74/Municipalidad_de_Campana.jpg'}}/>
      <Button title='Hacer un reclamo'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    padding: 15,
  },
  mainImage: {
    width: '80%',
    height: '50%',
  }
});
