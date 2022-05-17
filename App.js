//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button,Pressable,TouchableOpacity,Image ,ImageBackground} from 'react-native';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
    
    
    <View style={{marginRight:10,}}>
     <ImageBackground style={{width:330,height:150 ,resizeMode:'cover',position:'relative', }}  source={require('./logo/interview.png')}>
          <View style={{justifyContent:'center',alignItems: 'center',marginTop:20}}><Image style={{resizeMode:'contain', height:30,width:40,}} source={require('./logo/lock.png')}/></View> 
     <Text
    style={{
      fontWeight: 'bold',
      fontSize: 25,
      color: 'white',
      position: 'absolute', // child
      bottom: 40, // position where you want
      left: 135, //
      
    }}
  >
LOGIN
  </Text>
  </ImageBackground>
   </View>
    <View >
   
    

     <View style={{ flexDirection: 'row',marginTop:20}}>
       <View style={styles.iconbox} >
       <Image style={{resizeMode:'contain', height:30,width:40,}} source={require('./logo/user.png')}/>
       </View>
       <TextInput
         name="Username"
         placeholder=" Username"
         style={styles.textInput}
         />
     </View>
     <View style={{ flexDirection:'row',marginTop:20}}>
       
       <View style={styles.iconbox} >
       <Image style={{resizeMode:'contain', height:30,width:40,}} source={require('./logo/lock.png')}/>
       </View>
       <TextInput
         name="PAssword"
         placeholder=" Password"
         style={styles.textInput}
         />
     </View>
     <View style={{justifyContent: 'flex-end',marginTop:6}}>
     <Text >Fotgot Password?</Text>
     </View>
     <View style={{paddingTop:15}} >
     <TouchableOpacity style={styles.textInput2} >
    <Text style={styles.appButtonText} >Log In</Text>
</TouchableOpacity>
</View>
<View style={{
    marginTop:5,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
  }}>
</View>
<View style={{justifyContent: 'flex-end',marginVertical:10,alignItems: 'center'}}>
     <Text >Or Login with </Text>
     </View>
    



   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
     <View style={{ flexDirection: 'row'}}>
       
       <View style={styles.iconbox1} >
       <Image style={{height:35,width:40 ,resizeMode:'contain',backgroundColor:'blue', }} source={require('./logo/facebooklogo.jpg')}/>
       </View>
       <View style={{height:45,width:120 ,backgroundColor:'blue',justifyContent:'center',alignItems: 'center'}}>
        <Text style={{color:'white',display:'flex',alignItems: 'center',fontWeight:'bold',fontSize: 20}} >Facebook</Text>
        </View>
       </View>

   
     <View style={{ flexDirection: 'row'}}>
       
       <View style={styles.iconbox2} >
       <Image style={{height:35,width:40 ,resizeMode:'contain',backgroundColor:'blue', }} source={require('./logo/googlelogo.png')}/>
       </View>
       <View style={{height:45,width:120 ,backgroundColor:'red',justifyContent:'center',alignItems: 'center'}}>
        <Text style={{color:'white',display:'flex',alignItems: 'center',fontWeight:'bold',fontSize: 20}} >Google</Text>
        </View>
       </View>
       </View>
       
       <View style={{justifyContent: 'flex-end',marginVertical:10,alignItems: 'center'}}>
         <TouchableOpacity>
     <Text style={{color: '#f38f2f',fontSize:18}}>Skip </Text>
     </TouchableOpacity>
     </View>
       
     <View style={{justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
     <Text >Dont have an account ?  </Text>
     <TouchableOpacity>
     <Text style={{color: '#f38f2f',}}>Sign Up</Text>
     </TouchableOpacity>
     </View>

     </View>
     
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
   
   
  },
textInput: {
  height: 45,
  width:300,
  backgroundColor: '#e1e1e1',

},
iconbox:{
  height: 45,
  width:35,
 justifyContent: 'center',
  borderleftWidth: 2,
  backgroundColor:'#f38f2f'

},
iconbox1:{
  height: 45,
  width:35,
 justifyContent: 'center',
  borderleftWidth: 2,
  backgroundColor:'blue'

},
iconbox2:{
  height: 45,
  width:35,
 justifyContent: 'center',
  borderleftWidth: 2,
  backgroundColor:'white'

},
appButtonContainer: {
  elevation: 10,
  backgroundColor: "#87ceeb",
 width:335,
  marginHorizontal:10,
  height: 45,
 
  marginVertical:30
}, 
appButtonText: {
  fontSize: 18,
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
},
textInput2: {
  height: 60,
  width:340,
  backgroundColor: '#f38f2f',
  borderColor: '#000000',
 justifyContent: 'center',
 marginvertical:20,
},
zindexa:{
  backgroundColor: 'red',
  position: 'relative',
  height: 320,
  width: '100%',
'&::after' :{
  borderRight: 'solid 50 transparent',
  borderLeft: 'solid 50 transparent',
  borderTop: 'solid 50 #e15915',
  transform: 'translateX(-50%)',
  position: 'absolute',
  Zindex: '-1',
  content: '',
  top: '100%',
  left: '50%',
  height: '0',
  width: '0',
}
},

talkBubbleSquare: {
  width: 330,
  height: 110,
  backgroundColor: "#f38f2f",
  borderRadius: 10,
  position:'relative',
},
talkBubbleTriangle: {
  position: "absolute",
  left: 150,
  top: 99,
  width: 0,
  height: 0,
  borderTopColor: "transparent",
  borderTopWidth: 5,
  borderRightWidth: 65,
  borderRightColor: '#f38f2f',
  borderLeftColor:'#f38f2f',
  borderBottomWidth: 25,
  borderBottomColor: "transparent",

 
},




});

//make this component available to the app
export default App;
