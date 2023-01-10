import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { RentalProperties } from '../interface/rentalPropertiesInterface'
import { FavoriteButton } from './FavoriteButton'


interface Props {
  rental: RentalProperties
}
export const Item = ({ rental }: Props) => {

  const { image, address, name, bathrooms, rooms, cost, surface, qualification } = rental;
  return (
    <View style={styles.contanier}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.imageProp}
        />
        <View style={styles.starBadge}>
          <Icon name='star' size={20} color='#EEBA00' />
          <Text style={styles.numberstart}>{qualification}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.rowIcons}>
          <Icon name='map-marker-outline' size={20} color='#B4B8B9' />
          <Text style={styles.label}>{address}</Text>
        </View>
        <View style={styles.rowIcons2}>
          <Icon name='bed-king-outline' size={30} color='#B4B8B9' />
          <Text style={styles.number}>{rooms}</Text>
          <Icon name='shower' size={30} color='#B4B8B9' />
          <Text style={styles.number}>{bathrooms}</Text>
          <Icon name='arrow-expand-all' size={30} color='#B4B8B9' />
          <Text style={styles.number}>{(surface.lenght * surface.width) + ' ft'}&#178;</Text>
        </View>
        <Text style={styles.title}>&#36;{cost}/m</Text>
        <View style={styles.buttonFav}>
          <FavoriteButton />
        </View>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'row',
    backgroundColor: '#f5fdff',
    margin: 10,
    borderRadius: 10,
    padding: 10
  },
  imageProp: {
    height: 95,
    width: 90,
    borderRadius: 10
  },
  rowIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rowIcons2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowPrice: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 13,
    color: '#B4B8B9'
  },
  number: {
    fontSize: 13,
    marginRight: 9,
    marginLeft: 3,
    fontWeight: 'bold'
  },
  numberstart: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  buttonFav: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  starBadge: {
    flexDirection: 'row',
    backgroundColor: '#FBEDB7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 5,
    paddingHorizontal: 10
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginVertical: 5
  }
});
