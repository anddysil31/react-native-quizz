import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import ViewTeam from './components/ViewTeam';


const Francia1 = require('./assets/fr1.jpg');
const Francia2 = require('./assets/fr2.jpg');
const Francia3 = require('./assets/fr3.jpg');

const ARG1 = require('./assets/a1.jpg');
const ARG2 = require('./assets/a2.jpg');
const ARG3 = require('./assets/a3.jpg');

const M1 = require('./assets/m1.jpg');
const M2 = require('./assets/m2.jpg');
const M3 = require('./assets/m3.jpg');


export default function App() {
  const[setpickImageAsync] = useState(false)
  const image =() =>{
    setpickImageAsync(false)
  }
    

 

  return (
    <View style={styles.container}>

    <Button theme = "fra" label="Francia" onPress={()=>image()}/>
    {image ?(
      <View style = {styles.imageContainer}> 
      <ImageViewer placeholderImageSource={Francia1} />
      <ImageViewer placeholderImageSource={Francia2} />
      <ImageViewer placeholderImageSource={Francia3} />
    </View>
    ):(<View></View>)}
    <Button theme = "fra" label="Argentina" onPress={()=>image()}/>
    <Button theme = "fra" label="Marruecos" onPress={()=>image()}/>

      <StatusBar style="auto" />
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
  imageContainer:{
    flex:1,
    paddingTop:58,
  }
});
