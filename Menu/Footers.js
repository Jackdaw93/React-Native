import React, { Component } from 'react';
import { Header, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {withNavigation} from 'react-navigation';

class Footers extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical onPress={()=>{this.props.navigation.navigate("Homes")}}>
            <Icon name="apps" />
            <Text>Home</Text>
          </Button>
          <Button vertical onPress={()=>{this.props.navigation.navigate("Masakan")}} >
            <Icon name="pizza" />
            <Text>Masakan</Text>
          </Button>
          <Button vertical onPress={()=>{this.props.navigation.navigate("Kota")}}>
            <Icon name="home" />
            <Text>Kota</Text>
          </Button>
          <Button vertical onPress={()=>{this.props.navigation.navigate("Category")}}>
            <Icon name="grid" />
            <Text>Category</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default withNavigation(Footers);
