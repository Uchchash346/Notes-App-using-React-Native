import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import SignIn from './src/screens/signin';
import SignUp from './src/screens/signup';
import Create from './src/screens/create';
import Edit from './src/screens/edit';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import FlashMessage from "react-native-flash-message";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ScreenStack } from 'react-native-screens';
// import { ActivityIndicator } from 'react-native-web';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATtBnUy9b2lI2Q-sFfho_V2-pkkCjmcRo",
  authDomain: "notes-app-1a491.firebaseapp.com",
  projectId: "notes-app-1a491",
  storageBucket: "notes-app-1a491.appspot.com",
  messagingSenderId: "607963397316",
  appId: "1:607963397316:web:f24d66d46ddf2afba89d91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff"
  }
}
const Stack = createNativeStackNavigator();

export default function App() {
  //const user = false; // Not authenticated
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
      }
    })
    return authSubscription;
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    )
  }

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {user ? (
          <>
            {/* <Stack.Screen name="Home" options={{ headerShown: false }}> //children
              {(props) => <Home {...props} user={user} />}
            </Stack.Screen> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create">
              {(props) => <Create {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="Edit" component={Edit} />
            {/* <Stack.Screen name="Create" component={Create} /> */}
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )

        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
