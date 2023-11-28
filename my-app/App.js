import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [newItem,setNewItem] = useState("");
  const [itemList,setItemList] = useState([]);
  const [itemSelectedToDelete,setItemSelectedToDelete] = useState({});
  const [modalVisible,setModalVisible] = useState(false);

  const onChangeTextHandler = (text) => {
    setNewItem(text);
  }

  const addItemToListHandler = () => {
    setItemList(prevState => [...prevState,{id: Math.random(),value: newItem}]);
    setNewItem("");
  }

  const renderItemList = ({item}) => {
    return (
      <View style={styles.itemList}>
        <Text>{item.value}</Text>
        <Button title='X'></Button>
      </View>
    )
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={onChangeTextHandler} style={styles.textInput} value={newItem} placeholder='Ingrese su tarea...'/>
        <Button onPress={addItemToListHandler} title='Añadir'></Button>
      </View>
      {/* <View>
        {itemList.map(item=><View key={item.id}><Text>{item.value}</Text></View>)}
      </View> */}
      
        <FlatList style={styles.flatList} 
        data={itemList} 
        renderItem={renderItemList} 
        keyExtractor={item=>item.id}
        />
      
      <StatusBar style="auto" />
    </View>
    <Modal animationType='slide' visible={modalVisible}>
      <View style={styles.modalMessageContainer}>
        <Text>Se eliminará: </Text>
        <Text>{itemSelectedToDelete.value}</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button title="Cancelar"></Button>
        <Button title="Eliminar"></Button>
      </View>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 20,
    padding: 15,
  },
  flatList: {
    backgroundColor: "yellow"
  },
  itemList: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalMessageContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  modalButtonContainer:{
    flexDirection:"row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
});
