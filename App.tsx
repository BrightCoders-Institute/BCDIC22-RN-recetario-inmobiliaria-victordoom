import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const App = () => {
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Inmobilaria</Text>
      <Icon name='star' size={30} />
    </View>
  )
}
export default App
