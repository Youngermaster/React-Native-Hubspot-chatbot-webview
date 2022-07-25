import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const HUBSPOT_URL = 'https://dsinno.io/';


export default function App() {
  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.text}>
        <Text>GASSSS REACT NATIVE, pero toca.</Text>
        <Text>Stuff</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
      <View style={{ height: 400 }}>
        <WebView
          source={{ uri: HUBSPOT_URL }}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    backgroundColor: 'orange',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 500,
    fontWeight: '000',

  }
});
