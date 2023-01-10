import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import database from '../data/database.json'

export const Home = () => {

    const {} = useState(database);
  return (
    <SafeAreaView>
        <FlatList
            data={ database }
            renderItem={({item}) => <Text>{item.name}</Text>}
        />    
    </SafeAreaView>
  )
}
