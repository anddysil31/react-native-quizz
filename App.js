import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';



const fr1 = require('./assets/fr1.jpg');
const fr2 = require('./assets/fr2.jpg');
const fr3 = require('./assets/fr3.jpg');

const arg1 = require('./assets/a1.jpg');
const arg2 = require('./assets/a2.jpg');
const arg3 = require('./assets/a3.jpg');

const m1 = require('./assets/m1.jpg');
const m2 = require('./assets/m2.jpg');
const m3 = require('./assets/m3.jpg');



export default function App() {
const [showArg, setShowArg] = useState(false)
const [showFr, setShowFr] = useState(false)
const [showMrr, setShowMrr] = useState(false)
let francia = [fr1, fr2, fr3]
let argentina = [arg1, arg2, arg3]
let marruecos = [m1,m2,m3]
  return (
    <View>
    <Image source={require ('./assets/qatarlogo.png')} style = {styles.logo}/>
    <Button title="Francia" onPress={() => setShowFr(!showFr)}/>
    <Button title='Argentina' onPress={()=>setShowArg(!showArg)}/>
    <Button title='Marruecos' onPress={()=>setShowMrr(!showMrr)}/>
    {showFr && (
      <View>
        {francia.map((item)=>{
          return(
          <Image
          source={item}
        style={{ width: 200, height: 200 }}
      />
          )})}
      
      </View>
    )}
    {showArg && (
      <View>
        {argentina.map((item)=>{
          return(
          <Image
          source={item}
        style={{ width: 200, height: 200 }}
      />
          )})}
      
      </View>
    )}
    {showMrr && (
      <View>
        {marruecos.map((item)=>{
          return(
          <Image
          source={item}
        style={{ width: 200, height: 200 }}
      />
          )})}
      
      </View>
    )}
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
  },
  logo:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:300,
    height:300
  }
});
