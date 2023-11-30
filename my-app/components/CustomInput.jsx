import { View, TextInput, Button, StyleSheet } from "react-native";

const CustomInput = ({
    onChangeTextHandlerEvent,
    newItemProp,
    addItemToListHandlerEvent
}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput onChangeText={onChangeTextHandlerEvent} style={styles.textInput} value={newItemProp} placeholder='Ingrese su tarea...' />
            <Button onPress={addItemToListHandlerEvent} title='Añadir'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 20,
        padding: 15,
    }
})

export default CustomInput;