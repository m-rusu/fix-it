import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { API_URL } from '@env';
import Services from '../../components/Services';

if (!API_URL) {
    API_URL = "http://192.168.100.71:3000";
}
console.log("Services of client using api url " + API_URL)
function ServicesClientScreen({ route }) {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [services, setServices] = useState([]);
    const category = route.params.name;
    console.log(category);

    useEffect(() => {
        fetch(`${API_URL}/services`, { headers: { 'Cache-Control': 'no-cache' } })
            .then(response => {
                if (!response.ok) {
                    console.log("Something went wrong: " + JSON.stringify(response));
                    Alert.alert('Something went wrong', 'Failed to load services.');
                    throw new Error("Failed to load services. A network error may have occurred.")
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                if (data) {
                    setServices(data);
                }
            })
            .catch(error => console.error(error));
    }, []);



    console.log("Services that are set: " + services)

    const navigation = useNavigation();

    const onServicePressed = (item) => {
        console.log("Service pressed, order data: " + JSON.stringify(item))
        navigation.navigate('OfferedServices', { item: item });
    };

    try {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What problem needs to be fixed?</Text>
                <Button
                    style={{ backgroundColor: '#00fff', position: 'absolute', top: 40, left: 20 }}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
                <View>
                    <FlatList
                        data={services}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => onServicePressed(item)}>
                                {category === item.category.name && (
                                    <Services
                                        service={item}
                                        onSelect={() => onServicePressed(item)}
                                    />
                                )}
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.ID.toString()}
                        contentContainerStyle={styles.listContainer}
                    />
                </View>

            </View>
        );
    }
    catch (err) {
        console.log("Error making categories: " + err)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 150,
        padding: '2%'
    },
    buttonText: {
        color: '#43428b',
        fontWeight: 'bold',
        fontSize: 20,
    },
    listContainer: {
        flex: 1,
        marginBottom: '10%',
        marginTop: 10,

    },
});

export default ServicesClientScreen;