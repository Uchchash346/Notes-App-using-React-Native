import { View, SafeAreaView, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function SignIn() {
    return (
        <SafeAreaView>
            <Image source={require('../../assets/login-image.png')}
                style={{ alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                Never forget your notes
            </Text>
            <View>
                <TextInput placeholder="Email" style={styles.input} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 48,
        borderWidth: 1,
    }
})