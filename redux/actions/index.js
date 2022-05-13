import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { USER_STATE_CHANGE } from "../constants";

const userStateChangeAction = (newUser) => {
    return {
        type: USER_STATE_CHANGE,
        currentUser: newUser,
    }
}

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    console.log("user exists!",  snapshot.data())
                    dispatch(userStateChangeAction(snapshot.data()))
                } else {
                    console.log("User does not exist!")
                }
            })
    })
}