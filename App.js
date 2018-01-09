import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({

    apiKey: 'AIzaSyBs3QuR8Xbgb90Q2szz6v39IkETaSe9ZYA',
    authDomain: 'auth-eeb58.firebaseapp.com',
    databaseURL: 'https://auth-eeb58.firebaseio.com',
    projectId: 'auth-eeb58',
    storageBucket: 'auth-eeb58.appspot.com',
    messagingSenderId: '266063781477'


  });


  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:

          return (
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Sign Out
              </Button>
            </CardSection>
          );

      case false:

          return <LoginForm />;

      default:

          return (
            <View style={styles.spinnerStyle}>
              <Spinner size={100} />
            </View>
          );

    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    //alignItems: 'center',
    alignSelf: 'center'
  }
};

export default App;
