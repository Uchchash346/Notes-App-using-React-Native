import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home({navigation, route, user}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
}