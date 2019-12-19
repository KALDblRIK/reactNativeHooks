import React, { Component, useState } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/UsersScreenStyles'

export default function UsersScreen() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.mainContainer}>
      <Button title={`Pressed ${count} times`} onPress={() => setCount(count + 1)} />
    </View>
  )
}
