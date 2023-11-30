import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList, Modal } from 'react-native';
import { useState } from 'react';

import CustomModal from './components/CustomModal';
import CustomInput from './components/CustomInput';

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
        <Text style={styles.itemListText}>{item.value}</Text>
        <Button onPress={()=>onSelectItemHandler(item.id)} title='X'></Button>
      </View>
    )
  }

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelectedToDelete(itemList.find(item => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter(item=>item.id != itemSelectedToDelete.id));
    setModalVisible(false);
  }

  return (
    <>
    <View style={styles.container}>
      <CustomInput 
        onChangeTextHandlerEvent={onChangeTextHandler}
        newItemProp={newItem}
        addItemToListHandlerEvent={addItemToListHandler}
      />
      
      {/* <View>
        {itemList.map(item=><View key={item.id}><Text>{item.value}</Text></View>)}
      </View> */}
      
      <FlatList 
        data={itemList} 
        renderItem={renderItemList} 
        keyExtractor={item=>item.id}
      />
      
      <StatusBar style="auto" />
    </View>
    <CustomModal 
      animationTypeProp={"slide"}
      isVisibleProp={modalVisible}
      itemSelectedToDeleteProp={itemSelectedToDelete}
      onDeleteItemHandlerEvent={onDeleteItemHandler}
      setModalVisibleEvent={setModalVisible}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  itemList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "cyan",
    padding: 15,
    margin: 10,
  },
});
