import { View, SafeAreaView, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import Input from '../components/Input'

export default function SignIn({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image source={require('../../assets/login-image.png')}
                style={{ alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                Never forget your notes
            </Text>
            <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
                <Input placeholder="Email Address" />
                <Input placeholder="Password" secureTextEntry />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button title={"Login"} customStyles={{ alignSelf: 'center', marginBottom: 60 }} />
                <Pressable onPress={() => { navigation.navigate('SignUp') }}>
                    <Text>Don't have an account?{" "}<Text style={{ color: 'green', fontWeight: 'bold' }}>Sign Up</Text></Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
