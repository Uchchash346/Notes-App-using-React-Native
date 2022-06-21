import { View, SafeAreaView, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Button from '../components/Button'

export default function SignIn() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image source={require('../../assets/login-image.png')}
                style={{ alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                Never forget your notes
            </Text>
            <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
                <TextInput placeholder="Email Address" style={styles.input} />
                <TextInput placeholder="Password" style={styles.input} secureTextEntry />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button title={"Login"} customStyles={{ alignSelf: 'center', marginBottom: 60 }} />
                <Pressable>
                    <Text>Don't have an account?{" "}<Text style={{ color: 'green', fontWeight: 'bold' }}>Sign Up</Text></Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 25,
    }
})