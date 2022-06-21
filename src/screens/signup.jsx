import { View, SafeAreaView, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

export default function SignUp() {
    const selected = true;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
                <Input placeholder="Email Address" />
                <Input placeholder="Password" secureTextEntry />
                <Input placeholder="Full Name" />
                <Input placeholder="Age" />
                <Pressable style={styles.radioContainer}>
                    <View style={styles.outerCircle}>
                        <View style={styles.innerCircle}></View>
                    </View>
                    <Text style={styles.radioText}>Male</Text>
                </Pressable>
                <Pressable style={styles.radioContainer}>
                    <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                        <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]}></View>
                    </View>
                    <Text style={styles.radioText}>Feale</Text>
                </Pressable>
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

const styles = StyleSheet.create({
    input: {
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 25,
    },

    radioContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    outerCircle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#cfcfcf',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        borderWidth: 1,
        borderColor: '#cfcfcf',
    },
    radioText: {
        marginLeft: 10,
    },
    selectedOuterCircle: {
        borderColor: "orange",
    },
    selectedInnerCircle: {
        backgroundColor: "orange",
        borderColor: "orange"
    }
})
