import {StatusBar} from 'expo-status-bar';
import React, { useEffect }  from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
// import {BackHandler} from 'react-native';
import {Text, View, StyleSheet, BackHandler, Alert, TextInput} from "react-native";

async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}

export default function App() {
    useEffect(() => {
        const backAction = () => {
            return true;
        };

        // const backHandler = BackHandler.addEventListener(
        //     "hardwareBackPress",
        //     backAction
        // );
        //
        // return () => backHandler.remove();
    }, []);

    changeScreenOrientation();
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
