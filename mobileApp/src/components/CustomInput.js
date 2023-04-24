import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#D3D3D3',
    width: '95%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    padding: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    },
    input: {},
});

export default CustomInput;