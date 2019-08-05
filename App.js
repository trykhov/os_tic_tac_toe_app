import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'native-base';


let apple = "./apple.png";
let google = "./google.png";
let mouse = "./mouse.png";
let itemArray = new Array(9).fill("empty");

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icons: new Array(9).fill(<Image source={require(mouse)} style={styles.images}/>),
      winMessage: "",
      isApple: false
    }
  }

  drawItem = (itemNum) => {
    // decide what to drwa: Apple or Apple
    if(itemArray[itemNum] === "empty" && this.state.winMessage == "") {
      itemArray[itemNum] = this.state.isApple;
      let newArray = this.state.icons;
      newArray[itemNum] = itemArray[itemNum] ? <Image source={require(apple)} style={styles.images}/> : <Image source={require(google)} style={styles.images}/>
      this.setState({isApple: !itemArray[itemNum], icons: newArray});
      this.winGame();
    }

    // check for win
    
  };

  // chooseItemIcon = itemNum => {
  //   // choose appropriate icon
  //   if(itemArray[itemNum] !== "empty") {
  //     return itemArray[itemNum] ? apple : Apple;
  //   }
  //   return "pencil";
  // };

  // chooseItemColor = itemNum => {
  //   // choose color for icon
  //   if(itemArray[itemNum] !== "empty") {
  //     return itemArray[itemNum] ? "red" : "green";
  //   }
  //   return "black";
  // };

  resetGame = () => {
    // reset all values and states
    itemArray.fill("empty");
    this.setState({ 
      winMessage: "", 
      isApple: false, 
      icons: new Array(9).fill(<Image source={require(mouse)} style={styles.images}/>)
    });
    // force update to the component
    this.forceUpdate();
  };

  winGame = () => {
    // decide / check winner
    if((itemArray[0] !== "empty") && (itemArray[0] == itemArray[1]) && (itemArray[1] == itemArray[2])) {
      // top row (left to right)
      itemArray[0] ? Alert.alert("Apple wins!") : Alert.alert("Google wins!");
      this.setState({winMessage: "win"});
    } else if((itemArray[0] !== "empty") && (itemArray[0] == itemArray[3]) && (itemArray[3] == itemArray[6])) {
      // left column (top to bottom)
      itemArray[0] ? Alert.alert("Apple wins!") : Alert.alert("Google wins!");
      this.setState({winMessage: "win"});
    } else if((itemArray[0] !== "empty") && (itemArray[0] == itemArray[4]) && (itemArray[4] == itemArray[8])) {
      // left diagonal (top left to bottom right)
      itemArray[0] ? Alert.alert("Apple wins!") : Alert.alert("Google wins!");
      this.setState({winMessage: "win"});
    } else if((itemArray[3] !== "empty") && (itemArray[3] == itemArray[4]) && (itemArray[4] == itemArray[5])) {
      // middle row (left to right)
      itemArray[3] ? Alert.alert("Apple wins!") : Alert.alert("Google wins!");
      this.setState({winMessage: "win"});
    } else if((itemArray[6] !== "empty") && (itemArray[6] == itemArray[7]) && (itemArray[7] == itemArray[8])) {
      // bottom row (right to left)
      itemArray[6] ? Alert.alert("Apple wins!") : Alert.alert("Google wins!");
      this.setState({winMessage: "win"});
    } else if((itemArray[2] !== "empty") && (itemArray[2] == itemArray[5]) && (itemArray[5] == itemArray[8])) {
      // third column (top to bottom)
      itemArray[2] ? Alert.alert("Apple wins!") : Alert.alert("Google wins!");
      this.setState({winMessage: "win"});
    } else if((itemArray[1] !== "empty") && (itemArray[1] == itemArray[4]) && (itemArray[4] == itemArray[7])) {
      // second column (top to bottom)
      itemArray[1] ? Alert.alert("Apple wins!") : Alert.alert("Google wins!");
      this.setState({winMessage: "win"});
    } else if((itemArray[2] !== "empty") && (itemArray[2] == itemArray[4]) && (itemArray[4] == itemArray[6])) {
      // right diagonal (top right to bottom left)
      itemArray[2] ? Alert.alert("Apple wins!") : Alert.alert("Google wins!");
      this.setState({winMessage: "win"});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: "#af0404", fontSize: 30, fontWeight: "bold", marginBottom: 20}}>
          OS Battle
        </Text>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(0)}>
                {this.state.icons[0]}
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(1)}>
              {this.state.icons[1]}
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(2)}>
                {this.state.icons[2]}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(3)}>
                {this.state.icons[3]}
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(4)}>
                {this.state.icons[4]}
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(5)}>
                {this.state.icons[5]}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(6)}>
                {this.state.icons[6]}
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(7)}>
                {this.state.icons[7]}
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(8)}>
                {this.state.icons[8]}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button full rounded primary style={styles.button} onPress={this.resetGame}>
          <Text style={styles.btntext}>Reset Game</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2fcff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {

  },
  row: {
    flexDirection: 'row'
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30
  },
  // winMessage: {
  //   padding: 20,
  //   fontSize: 35,
  //   fontWeight: "bold"
  // },
  button: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    padding: 20
  },
  btntext: {
    color: "#FFF",
    fontWeight: "bold",
  },
  images: {
    width: 50,
    height: 50
  }
});
