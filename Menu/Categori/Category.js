import React, { Component } from 'react';
import {Image, View} from 'react-native';
import {Container, Content, Card, CardItem, Body, Text, Button} from 'native-base';
import axios from 'axios';

import Footers from '../Footers';

class Category extends Component {
  static navigationOptions = {header: null};

  constructor() {
    super();
      this.state = {
        dataCategory:[],
        dataCollection:[]
      }
    }


  getDataCategory= ()=> {
    axios.get(`https://developers.zomato.com/api/v2.1/categories`,
       {headers:{"user-key":"c42adbcf162ea10973e7265d35f8cf8e"}})
    .then(res=>{
      this.setState({
        dataCategory:res.data.categories
      })
    })
  }

  getDataCollection(){
    axios.get(`https://developers.zomato.com/api/v2.1/collections?city_id=74`,
       {headers:{"user-key":"c42adbcf162ea10973e7265d35f8cf8e"}})
    .then(res=>{
      this.setState({
        dataCollection:res.data.collections
      })
    })
  }


  componentDidMount() {
    this.getDataCategory();
    this.getDataCollection();
  }

  render() {
    return(
      <View style={{flex:1}}>
      <Container style={{flex:3}}>
        <Content>
        {this.state.dataCollection.map((data,key)=>{
          return(
            <Card key={key}>
              <CardItem cardBody>
                <Image
                  style={{height:200, width: null, flex:1}}
                  source= {{uri: data.collection.image_url}}
                />
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{data.collection.title}</Text>
                  <Text note>{data.collection.description}</Text>
                </Body>
              </CardItem>
            </Card>
          );
        })}


        </Content>
        </Container>

        <Container style={{flex:1}}>
        <Text style={{margin:10}}>Category</Text>
        <Content horizontal>
          {this.state.dataCategory.map((data,key)=>{
            return(
              <Button style={{margin:10}} key={key}>
                <Text>{data.categories.name}</Text>
              </Button>
            );
          })}
        </Content>
        </Container>
        <Footers />
      </View>
    );
  }
}


export default Category;
