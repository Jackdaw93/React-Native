import React, { Component } from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Content, Card, CardItem, Text, Body} from 'native-base';
import axios from 'axios';
import {withNavigation} from 'react-navigation';

class RestaurantKota extends Component {

  constructor(props) {
    super(props);
    this.state={
      dataRestaurant:[],
      id_kota: this.props.id_kota
    };
  }

  getDataRestaurant() {
    axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.id_kota}&entity_type=city`,{
      headers:{user_key:"c42adbcf162ea10973e7265d35f8cf8e"}
    }).
     then(res=>{
      this.setState({
        dataRestaurant: res.data.restaurants
      })
    })
  }

  componentDidMount() {
    this.getDataRestaurant();
  }

  render() {
    return(
      <Content>
      {this.state.dataRestaurant.map((data,key)=>{
        return (
          <View  key={key}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Restaurant", {
            nama_restaurant: data.restaurant.name,
            res_id:data.restaurant.R.res_id
          })}}>
          <Card>
            <CardItem>
              <Body>
                <Text>{data.restaurant.name}</Text>
                <Text note>{this.props.nama}</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source= {{uri: data.restaurant.thumb}}
                style= {{height:250, width:null, flex: 1}}
                />
            </CardItem>
          </Card>
          </TouchableOpacity>
          </View>
        );
      })}
      </Content>
    );
  }
}

export default withNavigation(RestaurantKota);
