// called after login/register
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions";

import { globalStyles } from "../styles";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() { 
        const { currentUser } = this.props;

        console.log("current user is:", currentUser);

        if (currentUser == undefined) {
            return <View></View> // A blank screen
        } else {
            return (
                <SafeAreaView style={globalStyles.safeareaview}>
                    <Text>Welcome to Verum, {currentUser.name}!</Text>
                </SafeAreaView>
            )
        };
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)
 
export default connect(mapStateToProps, mapDispatchProps)(Main);