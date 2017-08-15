/*
LisstBook.js
*/
//import library
import React, {Component} from "react";

import {
  Text,
  View,
  ListView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class ListBook extends Component {
  constructor(props){
    super(props);
    this.state={
      dataSource: new ListView.DataSource({
        rowHasChanged:(r1, r2) => r1 !== r2
      }),//Creat ListView
    }
  }
  //show component to screen
  render(){
    return(

      <ListView
        dataSource={this.state.dataSource}
        renderRow={(row) =>
          <TouchableOpacity onPress={()=>{this.props.chooseItem(row.Images,row.Name,row.State,row.Comments,row.Rate,row.Price)}}>
          <View style = {styles.container}>

              <View style = {styles.left}>
                <Image style={styles.image} source={{uri:row.Images}} />
              </View>
              <View style = {styles.right}>
                <Text style={styles.title}>{row.Name}
                  <Image style={{width:40,height:20}} source={require('../img/icon-24h.png')}/>
                </Text>

                <Text style={styles.price}>{row.Price}</Text>
                <View style={styles.group}>
                  <Image style={{width:15,height:15}} source={require('../img/star-4.png')}/>
                  <Image style={{width:15,height:15}} source={require('../img/star-4.png')}/>
                  <Image style={{width:15,height:15}} source={require('../img/star-4.png')}/>
                  <Image style={{width:15,height:15}} source={require('../img/star-4.png')}/>
                  <Image style={{width:15,height:15}} source={require('../img/star-0.png')}/>
                  <Text  style={styles.comment}>({row.Comments} nhận xét )</Text>
                </View>

              </View>
              <View style={{justifyContent:'center',alignItems:'center',margin:10}}>
                <Image style={{width:30, height:30}} source={require('../img/giohang.png')}/>
              </View>
          </View>
          </TouchableOpacity>
        }
      />
    )
  }
  // Create Data
  componentDidMount(){
    var data = [
      new BookData("https://vcdn.tikicdn.com/cache/w300/media/catalog/product/i/m/img741.gif","Cho Tôi Xin Một Vé Đi Tuổi Thơ ","Còn hàng","82","4.5/5","38.000 đ"),
      new BookData("https://vcdn.tikicdn.com/cache/w300/media/catalog/product/n/h/nha-gia-kim.u84.d20161102.t102644.515752.jpg","Nhà Giả Kim","Còn hàng","88","3.5/5","30.000 đ"),
      new BookData("https://vcdn.tikicdn.com/cache/w300/media/catalog/product/b/u/bup-be--tap-2-.u2487.d20161208.t102156.57596.jpg","Búp Bê","Còn hàng","253","5/5","85.000 đ"),
      new BookData("https://vcdn.tikicdn.com/cache/w300/media/catalog/product/t/o/tony-buoi-sang.jpg","Tony Buổi Sáng ","Còn hàng","523","3/5","90.000 đ"),
      new BookData("https://vcdn.tikicdn.com/cache/w300/media/catalog/product/i/m/img637_11.jpg","Đừng Bao Giờ Đi Ăn Một Mình ","Còn hàng","147","4/5","55.000 đ"),
      new BookData("https://vcdn.tikicdn.com/cache/w300/media/catalog/product/q/u/quoc-gia-khoi-nghiep-a_2.jpg","Quốc Gia Khởi Nghiệp","Còn hàng","576","2/5","28.000 đ"),
      new BookData("https://vcdn.tikicdn.com/cache/w300/media/catalog/product/i/m/img575.u84.d20161102.t092852.183159.gif","Đọc Vị Bất Kỳ Ai","Còn hàng","500","3/5","65.000 đ"),
      new BookData("https://vcdn.tikicdn.com/cache/w300/media/catalog/product/5/-/5-centimet-tren-giay.jpg","5 Centimet Trên Giây","Còn hàng","842","4/5","77.000 đ"),
      new BookData("https://vcdn.tikicdn.com/cache/w300/media/catalog/product/s/c/scan_186_1.jpg","13 Nguyên Tắc Nghĩ Giàu Làm Giàu ","Còn hàng","156","5/5","37.000 đ"),
      new BookData("https://vcdn.tikicdn.com/cache/w300/media/catalog/product/i/m/img592.u335.d20161031.t122353.721542.gif","Đắc Nhân Tâm ","Còn hàng","523","3/5","53.000 đ")

    ];
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(data)//Assign value from data to dataSource
    });
  }
}
//Infomation o Object Book
function BookData(image, name, state, comments, rate, price){
  this.Images = image;
  this.Name = name;
  this.State = state;
  this.Comments = comments;
  this.Rate = rate;
  this.Price = price;
}

//Style
var styles = StyleSheet.create({
  container:{
      flex:1,
      borderWidth:0.2,
      borderColor:"grey",
      flexDirection:"row",
      backgroundColor:'white',
      borderColor:'#D3D3D3',
      borderWidth:0.25,
  },
  left:{
    flex:1,

  },
  right:{
    flex:3,
    margin:10,
    padding:10,
  },
  three:{
    flex:1,
  },
  image:{
    width:100,
    height:150,
    margin:10,
    padding:10,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:30,
    marginBottom:40,
  },
  price:{
    color:'red',
    fontSize:20,
    marginLeft:30,
  },
  comment:{
    color:'grey',
    flex:1,
    fontSize:15,

  },
  group:{
    flexDirection:"row",
    marginLeft:30,
  },
});

export { ListBook };
