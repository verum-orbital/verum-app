import React from "react";
import { View, Button, TextInput } from "react-native";
import firebase from 'firebase/compat/app'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '', 
            email: '', 
            password: '' 
        }
        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp() {
        const { name, email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
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
                <TextInput placeholder="name" onChangeText={(name) => this.setState({ name })} />
                <TextInput placeholder="email" onChangeText={(email) => this.setState({ email })} />
                <TextInput 
                    placeholder="password" 
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry={true} />

                <Button 
                    title="Register"
                    onPress={() => this.onSignUp()} />
            </View>
         );
    }
}
 
export default Register;