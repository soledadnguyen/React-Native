import React, {Component} from "react";
import {
  Text,
  View,
  Navigator
} from "react-native";

import ListBook from "./components";
import Book from "./components";

export default class App extends Component {
  renderScene(route, navigator){
    //if name = list return screen ListBook and else return Detail Book
    switch (route.name) {
        case "list": return(
          <ListBook chooseItem={(image, name, state, comments, rate, price )=>{
            //Pass parameter to detail screen
               navigator.push({
                 name:"detail",
                 parameter:{
                   image: image,
                   name: name,
                   state: state,
                   comments:comments,
                   rate:rate,
                   price:price
                 }
               })
          }} />
        );

        case "detail": return(
          <Book clickBack={()=>{
                navigator.pop()
              }}
              //Assign value for variable in screen detail book
              Images = {route.parameter.image}
              Name  = {route.parameter.name}
              State = {route.parameter.state}
              Comments = {route.parameter.comments}
              Rate = {route.parameter.rate}
              Price = {route.parameter.price}
              />
        );
    }
  }
  render(){
    return(
      <Navigator
        initialRoute={{name:"list"}}//Start screen ListBook default
        renderScene={this.renderScene}//Call function renderScene()
      />
    )
  }
}
