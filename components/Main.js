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
    
    render() { 
        return ( 
            <SafeAreaView style={globalStyles.safeareaview}>
                <Text>Welcome to Verum!</Text>
            </SafeAreaView>
         );
    }
}

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)
 
export default connect(null, mapDispatchProps)(Main);