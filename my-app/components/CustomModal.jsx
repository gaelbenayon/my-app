import { Text, View, Modal, Button, StyleSheet, TextInput } from 'react-native';

const CustomModal = ({
    animationTypeProp,
    isVisibleProp,
    modalFunction,
    itemSelectedProp,
    onChangeTextEditItemHandlerEvent,
    onAcceptItemHandlerEvent,
    setModalVisibleEvent
}) => {
    return (
        <Modal animationType={animationTypeProp} visible={isVisibleProp}>
            <View style={styles.modal}>
                <View style={styles.modalMessageContainer}>
                    <Text style={styles.messageTitle}>{modalFunction.toUpperCase()}: </Text>
                    <Text>"{itemSelectedProp.value}"</Text>
                </View>
                <View style={styles.modalEditInput}>
                    {modalFunction == "Editar" && 
                        <TextInput defaultValue={itemSelectedProp.value} onChangeText={onChangeTextEditItemHandlerEvent} placeholder='Modifique aquí su tarea'></TextInput>
                    }
                </View>
                <View style={styles.modalButtonContainer}>
                    <Button onPress={() => setModalVisibleEvent(false)} title="Cancelar"></Button>
                    <Button onPress={onAcceptItemHandlerEvent} title="Aceptar"></Button>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        padding: 50,
      },
    modalMessageContainer: {
        marginTop: 50,
        alignItems: "center",
    },
    messageTitle:{
        marginBottom:5,
    },
    modalEditInput: {
        marginTop: 10,
        justifyContent: "center",
    },
    modalButtonContainer:{
        flexDirection:"row",
        justifyContent: "space-evenly",
        paddingTop: 20,
    },
})

export default CustomModal;