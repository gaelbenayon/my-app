import { Text, View, Modal, Button, StyleSheet } from 'react-native'

const CustomModal = ({
    animationTypeProp,
    isVisibleProp,
    itemSelectedToDeleteProp,
    onDeleteItemHandlerEvent,
    setModalVisibleEvent
}) => {
    return (
        <Modal animationType={animationTypeProp} visible={isVisibleProp}>
            <View style={styles.modal}>
                <View style={styles.modalMessageContainer}>
                    <Text>Se eliminará: </Text>
                    <Text>{itemSelectedToDeleteProp.value}</Text>
                </View>
                <View style={styles.modalButtonContainer}>
                    <Button onPress={() => setModalVisibleEvent(false)} title="Cancelar"></Button>
                    <Button onPress={onDeleteItemHandlerEvent} title="Eliminar"></Button>
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
      modalButtonContainer:{
        flexDirection:"row",
        justifyContent: "space-evenly",
        paddingTop: 20,
      },
})

export default CustomModal;