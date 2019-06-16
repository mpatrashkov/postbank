import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
// import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { Google } from 'expo';

// GoogleSignin.configure({
//     scopes: [
//         "https://www.googleapis.com/auth/fitness.activity.read",
//         "https://www.googleapis.com/auth/fitness.activity.write",
//         "https://www.googleapis.com/auth/fitness.blood_glucose.read",
//         "https://www.googleapis.com/auth/fitness.blood_glucose.write",
//         "https://www.googleapis.com/auth/fitness.blood_pressure.read",
//         "https://www.googleapis.com/auth/fitness.blood_pressure.write",
//         "https://www.googleapis.com/auth/fitness.body.read",
//         "https://www.googleapis.com/auth/fitness.body.write",
//         "https://www.googleapis.com/auth/fitness.body_temperature.read",
//         "https://www.googleapis.com/auth/fitness.body_temperature.write",
//         "https://www.googleapis.com/auth/fitness.location.read",
//         "https://www.googleapis.com/auth/fitness.location.write",
//         "https://www.googleapis.com/auth/fitness.nutrition.read",
//         "https://www.googleapis.com/auth/fitness.nutrition.write",
//         "https://www.googleapis.com/auth/fitness.oxygen_saturation.read",
//         "https://www.googleapis.com/auth/fitness.oxygen_saturation.write",
//         "https://www.googleapis.com/auth/fitness.reproductive_health.read",
//         "https://www.googleapis.com/auth/fitness.reproductive_health.write"

//     ],
//     webClientId: 'yIr_OwVrJBU4nNuCS2XHqPvG', // client ID of type WEB for your server (needed to verify user ID and offline access)
//     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     // hostedDomain: '', // specifies a hosted domain restriction
//     // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//     // forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
//     // accountName: '', // [Android] specifies an account name on the device that should be used
//     // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//   });

class SignInScreen extends Component {
    static navigationOptions = {
        title: "Sign In"
    }

    state = {
        isSigninInProgress: false,
        userInfo: {},
        dbb: "0"
    }

    // signIn = async () => {
    //     // this.props.navigation.replace("Main");
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         this.setState({ userInfo });
    //         this.setState({ dbb: 5 });
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             this.setState({ dbb: 1 });
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             this.setState({ dbb: 2 });
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             this.setState({ dbb: 3 });
    //         } else {
    //             this.setState({ dbb: error.code });
    //         }
    //     }
    // }

    

    signIn = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: "977535412978-8u4m0at7rjldvsllhsojggjep4srl2bb.apps.googleusercontent.com",
                scopes: [ "profile", "email" ]
            });
    
            if(result.type === "success") {
                return result.accessToken;
            }
            else {
                return { cancelled: true }
            }
        }
        catch(e) {
            return { error: true }
        }
    }

    onClick = async () => {
        const result = await this.signIn();
        if(result.cancelled) {
            this.setState({ dbb: 1});
        }
        else if(result.error) {
            this.setState({ dbb: 2 });
        }
        else {
            this.setState({ dbb: 3});
        }
    }

    render() {
        return (
            <View>
                {/* <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.signIn}
                    disabled={this.state.isSigninInProgress} /> */}
                <Button onPress={this.onClick} title="123"></Button>
                <Text style={{marginTop: 100}}>{this.state.dbb}</Text>
            </View>
        );
    }
}

export default SignInScreen;