import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDDNukJ1oVAOluMbASJ0gB-qRy_b9nxwsA',
            authDomain: 'auth-66194.firebaseapp.com',
            databaseURL: 'https://auth-66194.firebaseio.com',
            projectId: 'auth-66194',
            storageBucket: 'auth-66194.appspot.com',
            messagingSenderId: '367797874333'
        });

        // listens to both login and logout
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        const { spinnerStyle } = styles;

        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Button callback={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </View>
                );

            case false:
                return <LoginForm />;

            default:
                return (
                    <View style={spinnerStyle}>
                        <Spinner size="large" />
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
        flexDirection: 'row',
        paddingTop: 10
    }
};

export default App;
