import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {


    const [DATA, setData] = useState([

    ]);
    const url = "https://toanasm.herokuapp.com/mobile";
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json)
            })
            .catch((error) => {
                console.error(error);
            });

    }, [])
    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 30, color: 'red' }}>HÌNH NỀN ĐẸP CHO DẾ YÊU</Text>
            <FlatList data={DATA} style={{ marginTop: 30 }}
                renderItem={({ item }) => {
                    return (<View style={styles.item}>
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate('Profile', {content: item.content, link: item.lienket })}>
                            <Image style={{ width: 190, height: 300, marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5 }} source={{ uri: item.lienket }} />
                            <Text style={{color: '#0000FF'}}>{item.content}</Text>
                        </TouchableOpacity>

                    </View>)
                }}
                keyExtractor={(item) => { }}
                numColumns={2}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {

    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});