import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react';

import CustomModal from './components/CustomModal';
import CustomInput from './components/CustomInput';

export default function App() {

  const [newItem,setNewItem] = useState("");
  const [itemList,setItemList] = useState([]);
  const [itemSelectedToDelete,setItemSelectedToDelete] = useState({});
  const [modalToDeleteVisible,setModalToDeleteVisible] = useState(false);
  const [itemSelectedToEdit,setItemSelectedToEdit] = useState({});
  const [modalToEditVisible,setModalToEditVisible] = useState(false);
  const [editItem,setEditItem] = useState("");

  const onChangeTextAddItemHandler = (text) => {
    setNewItem(text);
  }

  const onChangeTextEditItemHandlerEvent = (text) => {
    setEditItem(text);
  }

  const addItemToListHandler = () => {
    setItemList(prevState => [...prevState,{id: Math.random(),value: newItem}]);
    setNewItem("");
  }

  const renderItemList = ({item}) => {
    return (
      <View style={styles.itemList}>
        <Text>{item.value}</Text>
        <View style={styles.itemListButtons}>
          <Button onPress={()=>onSelectItemDeleteHandler(item.id)} title='X'></Button>
          <Button onPress={()=>onSelectItemEditHandler(item.id)} title='Editar'></Button>
        </View>
      </View>
    )
  }

  const onSelectItemDeleteHandler = (id) => {
    setItemSelectedToDelete(itemList.find(item => item.id === id));
    setModalToDeleteVisible(!modalToDeleteVisible);
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter(item=>item.id != itemSelectedToDelete.id));
    setModalToDeleteVisible(false);
  }

  const onSelectItemEditHandler = (id) => {
    setItemSelectedToEdit(itemList.find(item => item.id === id));
    setModalToEditVisible(!modalToEditVisible);
  }

  const onEditItemHandler = () => {
    setItemList(itemList.filter(item => item.id != itemSelectedToEdit.id));
    setItemList(prevState => [...prevState,{id: itemSelectedToEdit.id,value:editItem}]);
    setEditItem("");
    setModalToEditVisible(false);
  }

  return (
    <>
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <CustomInput 
        onChangeTextHandlerEvent={onChangeTextAddItemHandler}
        newItemProp={newItem}
        addItemToListHandlerEvent={addItemToListHandler}
      />
      
      <FlatList 
        data={itemList} 
        renderItem={renderItemList} 
        keyExtractor={item=>item.id}
      />
    </View>
    <CustomModal 
      animationTypeProp={"slide"}
      isVisibleProp={modalToDeleteVisible}
      modalFunction={"Eliminar"}
      itemSelectedProp={itemSelectedToDelete}
      onAcceptItemHandlerEvent={onDeleteItemHandler}
      setModalVisibleEvent={setModalToDeleteVisible}
    />
    <CustomModal
      animationTypeProp={"slide"}
      isVisibleProp={modalToEditVisible}
      modalFunction={"Editar"}
      itemSelectedProp={itemSelectedToEdit}
      onChangeTextEditItemHandlerEvent={onChangeTextEditItemHandlerEvent}
      onAcceptItemHandlerEvent={onEditItemHandler}
      setModalVisibleEvent={setModalToEditVisible}
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
    borderRadius: 15,
    backgroundColor: "cyan",
    padding: 15,
    margin: 10,
  },
  itemListButtons: {
    flexDirection: "row",
  }
});
