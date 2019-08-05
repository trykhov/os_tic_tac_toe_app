import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Container, Header, Content, Card, CardItem, Left, Thumbnail, Body, Icon, Right } from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  async componentWillMount() {
    Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isLoading: false });
  }

  render() {
    if(this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
          <Header />
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://i.kinja-img.com/gawker-media/image/upload/s--QdQAoZRc--/c_scale,f_auto,fl_progressive,q_80,w_800/rmfjumf7kbujbz9uz5pm.jpg'}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://cnet1.cbsistatic.com/img/ZkRSkj-fvyazv_fdJYtHzjDzYZo=/2018/08/01/c915c669-30a3-494a-880b-bfc44d8c04e2/spider-man-ps4-preview-glass.jpg'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Container>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     padding: 10
//   }
// });
