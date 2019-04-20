
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Image , Linking , ImageBackground} from 'react-native';
import {createDrawerNavigator , createAppContainer ,  createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Left, Icon, Right, Title, Content ,Body , Button , Card , CardItem} from 'native-base';

 class Home extends React.Component {
  render () {
    return (
      <Container>
          <Header>
            <Body>
      <Icon name = "menu"onPress = { () => this.props.navigation.openDrawer()}/>
      </Body>
          <Body style={{ flex : 1 , marginLeft: -80}}>
          <Title styles = {{justifyContent: 'center'}} > RESUME</Title>
          </Body>
          </Header>
          <ImageBackground style={styles.bg} source = {require('./bg2.png')}>
          <View style={styles.container}>
    <Image source = {require('./saadpic.jpg')} style={styles.mypic} />
    <Text style = {styles.size}>SAAD ABDEEN</Text>
    <Text style = {styles.expertise}>WEBDESIGNER | VIDEOEDITOR | VIRTUAL ASSISTANT</Text>
   </View>
   </ImageBackground>
      </Container> 
    );
  }
}

 class Education extends React.Component {
  render () {
    return (
      <Container>
      <Header>
        <Body>
  <Icon name = "menu"onPress = { () => this.props.navigation.openDrawer()}/>
  </Body>
    <Body style={{ flex : 1 , marginLeft: -85}}>
      <Title styles = {{justifyContent: 'center'}}> EDUCATION</Title>
    </Body>
    </Header>
    <ImageBackground style={styles.bg }  source = {require('./bg1.png')}>
    <Body style = {{marginTop : 230 }}>
      <Text style = {styles.size1}>Matriculation From NASRA SCOOL</Text>
      <Text style = {styles.size1}>Intermediate From Govt . Islamia Science College</Text>
      <Text style = {styles.size1}>Bachlors In Computer Science(BCS) From UOK</Text>
    </Body>
    </ImageBackground>
  </Container>
    );
  }
}

class Skills extends React.Component {
  render () {
    return (
      <Container>
          <Header>
            <Body>
      <Icon name = "menu"onPress = { () => this.props.navigation.openDrawer()}/>
      </Body>
      <Body style={{ flex : 1 , marginLeft: -85}}>
      <Title styles = {{justifyContent: 'center'}}> SKILLS</Title>
        </Body>
        </Header>
        <ImageBackground style={styles.bg }  source = {require('./bg1.png')}>
      
        <Body style = {{marginTop : 200 }}>
      <Text >JavaScript</Text>
      <Text>React Native</Text>
      <Text>HTML</Text>
      <Text>CSS</Text>
      <Text>C Language</Text>
      <Text>C#</Text>
      <Text>Adobde AfterEffects</Text>
      <Text>Adobe Premiere Pro</Text>
      <Text>Adobe Flash</Text>
      <Text>Inpage</Text>
      <Text>MS Office</Text>
    </Body>

      </ImageBackground>
      </Container>
    );
  }
}

class Contact extends React.Component {
  render () {
    return (
      <Container>
          <Header>
          <Body>
      <Icon name = "menu"onPress = { () => this.props.navigation.openDrawer()}/>
      </Body>
      <Body style={{ flex : 1 , marginLeft: -85}}>
      <Title styles = {{justifyContent: 'center'}}> CONTACT</Title>
        </Body>
        </Header>
        <ImageBackground style={styles.bg }  source = {require('./bg1.png')}>
        <View style = {{marginTop : 200}}>
        <Button block info>
            <Text  onPress={ ()=> Linking.openURL('https://facebook.com/saad.abdeen.1') }>Facebook</Text>
          </Button>
          <Button block dark>
            <Text style = {{color : '#fff'}} onPress={ ()=> Linking.openURL('https://github.com/saadabdeen') }>Github</Text>
          </Button>
          </View>
          </ImageBackground>
      </Container>
    );
  }
}
 const MyApp = createDrawerNavigator({
  Home : {
    screen : Home
  },
  Education : {
    screen : Education
  },
  Skills : {
    screen : Skills
  },
  Contact : {
    screen : Contact
  },

});

 const TabNavigator = createBottomTabNavigator ({
      Home,
      Education,
      Skills,
      Contact,
});

export default createAppContainer (MyApp);


const styles = StyleSheet.create ({
        
    mypic : {
        marginTop: 5,
        borderRadius: 100,
        borderWidth: 1,
        width: 200,
        height: 200,    
    },
    container : {
      flex: 1,
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor: 'hsla(177, 100%, 50%, 0.43)',
   
    },
    size : {
      fontSize : 25,
      marginTop : 15,
      fontWeight: 'bold'
    },
    size1: {
      fontSize : 18,
      marginTop : 15,
      fontWeight: 'bold'
    },
    expertise: {
      fontSize : 15,
      marginTop :  17,
      fontWeight: 'bold'
    },
    bg: {
      flex: 1 ,
      width : '100%',
      height : '100%',
    },
})
