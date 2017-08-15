import React, {Component} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button
} from "react-native";
class Book extends Component {
  render(){
    return(
      //assign  values by this.props variable recive from scren ListBook and show thems
      <View style={styles.container}>
        <View style={styles.back}>
          <Button
             onPress={()=>{this.props.clickBack()}}
             title="Back"
             color="#00BFFF"
             accessibilityLabel="Learn more about this purple button"
           />
        </View>


           <View style={styles.image}>
             <Image style={{width:100,height:150}} source={{uri:this.props.Images}}/>
           </View>

           <View style={styles.title}>
             <Text style={{fontSize:20,fontWeight:'bold'}}>{this.props.Name}
             <Image style={{width:40,height:20}} source={require('../img/icon-24h.png')}/></Text>
             <Text style={{color:'green'}}>{this.props.State}</Text>
             <Text>{this.props.Comments} Yêu thích</Text>
           </View>

           <View style={styles.info}>
             <View style={styles.left}>
                  <View style={styles.top}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>{this.props.Rate}</Text>

                    <Image style={{width:10,height:10,marginTop:10}} source={require('../img/star-4.png')}/>
                    <Image style={{width:10,height:10,marginTop:10}} source={require('../img/star-4.png')}/>
                    <Image style={{width:10,height:10,marginTop:10}} source={require('../img/star-4.png')}/>
                    <Image style={{width:10,height:10,marginTop:10}} source={require('../img/star-4.png')}/>
                    <Image style={{width:10,height:10,marginTop:10}} source={require('../img/star-0.png')}/>
                  </View>
                  <View style={styles.bot}>
                    <Text style={{fontSize:10,color:'blue'}}>
                    (  {this.props.Comments }  nhận xét)
                    </Text>
                  </View>
             </View>

             <View style={styles.right}>
               <Text style={{color:'red',fontSize:20}}>
                 {this.props.Price}
               </Text>
             </View>
            </View>
           <View style={styles.adv}>
             <Text style={{color:'red'}}>
               CÙNG UNILEVER & TIKI - CHUNG TAY GÓP TÌNH TRAO TẾT: Tham gia ngay chương trình để nhận quà lì xì 50,000 VND.
             </Text>
           </View>
           <View style={styles.ctrl}>
              <View style={styles.btnleft}>
               <Button
                  onPress={()=>{this.props.clickBack()}}
                  title="MUA NGAY"
                  color="blue"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
              <View style={styles.btnright}>
               <Button
                  onPress={()=>{this.props.clickBack()}}
                  title="THÊM VÀO GIỎ HÀNG"
                  color="red"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>

            </View>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection:"column",
  },
  image:{
    flex:5,
    backgroundColor:'white',
    borderColor:'#D3D3D3',
    borderWidth:0.25,
    padding:0,
    justifyContent:'center',
    alignItems:'center'
  },
  back:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'green'

  },
  title:{

    paddingLeft:10,
    paddingTop:30,
    flex:3,
    alignItems:'flex-start',
    backgroundColor:'white',
    borderColor:'#D3D3D3',
    borderWidth:0.25,
  },
  info:{
    flex:2,
    flexDirection:"row",
    justifyContent:'center',
  },
  top:{
    flex:1,
    flexDirection:'row'
  },
  bot:{
    flex:1,
  },
  left:{
    flex:2,
    padding:10,
    flexDirection:"column",
    borderRightWidth:0.25,
    backgroundColor:'white',
    borderColor:'#D3D3D3',
    borderWidth:0.25,
    justifyContent:'center'

  },
  right:{
    flex:1,
    backgroundColor:"white",
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    borderColor:'#D3D3D3',
    borderWidth:0.25,
  },
  adv:{
    padding:10,
    flex:2,
    backgroundColor:'white',
    borderColor:'#D3D3D3',
    borderWidth:0.25,
  },
  ctrl:{
    flex:1,
    backgroundColor:"grey",
    flexDirection:'row',
    backgroundColor:'white',
    borderColor:'#D3D3D3',
    borderWidth:0.25,
    padding:5,
  },
  btnleft:{
    flex:2,
    backgroundColor:'white',
    borderColor:'blue',

  },
  btnright:{
    backgroundColor:'white',
    flex:3,
    borderColor:'blue',
    marginLeft:5,

  },
})

export { Book };
