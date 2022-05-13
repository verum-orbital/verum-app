import React from "react";
import { View, Button, TextInput } from "react-native";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            password: '' 
        }
        this.onSignUp = this.onSignIn.bind(this);
    }

    onSignIn() {
        const { name, email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) =>  {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() { 
        return ( 
            <View>
                <TextInput placeholder="email" onChangeText={(email) => this.setState({ email })} />
                <TextInput 
                    placeholder="password" 
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry={true} />

                <Button 
                    title="Login"
                    onPress={() => this.onSignIn()} />
            </View>
         );
    }
}
 
export default Login;