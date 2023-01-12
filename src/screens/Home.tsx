import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { Item } from '../components/Item';
import database from '../data/database.json'

export const Home = () => {

  return (
    <SafeAreaView >
      <FlatList
        data={database}
        renderItem={({item}) => <Item rental={item} />}
      />
    </SafeAreaView>
  )
}
