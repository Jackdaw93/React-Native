import React, { Component } from 'react';
import {Container, Tabs, Tab, ScrollableTab} from 'native-base';

import RestaurantKota from "./RestaurantKota";
import Footers from "../Footers";

class Kota extends Component {

  static navigationOptions ={header: null}

  render() {
    return(
      <Container>
      <Tabs renderTabBar={()=> <ScrollableTab />}>
        <Tab heading="Jakarta">
          <RestaurantKota nama="Jakarta" id_kota="74"/>
        </Tab>
          <Tab heading="Bandung">
            <RestaurantKota nama="Bandung" id_kota="11052"/>
        </Tab>
          <Tab heading="Bali">
            <RestaurantKota nama="Bali" id_kota="170"/>
        </Tab>

      </Tabs>
      <Footers />
    </Container>
    );
  }
}

export default Kota;
