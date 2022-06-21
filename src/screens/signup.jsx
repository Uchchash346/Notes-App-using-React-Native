import { View, SafeAreaView, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

export default function SignUp() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
                <Input placeholder="Email Address" />
                <Input placeholder="Full Name" />
                <Input placeholder="Age" />
                <Input placeholder="Password" secureTextEntry />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button title={"Sign Up"} customStyles={{ alignSelf: 'center', marginBottom: 60 }} />
                <Pressable>
                    <Text>Already have an account?{" "}
                        <Text style={{ color: 'green', fontWeight: 'bold' }}>Sign In</Text>
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
