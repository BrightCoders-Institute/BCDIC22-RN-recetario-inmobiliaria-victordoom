import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Home } from './src/screens/Home'

const App = () => {
  return (
    <View style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
      <Home />
    </View>
  )
}
export default App
