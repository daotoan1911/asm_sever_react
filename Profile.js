import { Link } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList,TouchableOpacity } from 'react-native';

export default function Profile({route, navigation }) {

const { link } = route.params;
const { content } = route.params;

return(
<View style = {styles.container}>
<Image style={{ width: 400, height: 220 }} source={{ uri: link }} />
<Text style={{color: 'red'}}>{content}</Text>
<TouchableOpacity
        style={{borderColor: 'red', borderRadius:8}}>
        <Text style={styles.text}>
          Download
        </Text>
      </TouchableOpacity>
</View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
