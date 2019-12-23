import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import i18n from '../I18n';
import CardsActions from '../Redux/CardsRedux'
import PhotoCard from '../Components/PhotoCard'

import {
  FlatList,
  Image,
} from 'react-native'

import {
  Container,
  Text,
  Input,
  Item,
} from 'native-base'

// Styles
import styles from './Styles/CardsScreenStyle'

const CardsScreen = (props) => {
  const {
    cards,
    getCards,
  } = props
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    console.warn('getCards')
    getCards()
  }, [])

  const renderItem = ({ item, index }) => {
    return (
      <PhotoCard
        title={item.title}
        albumId={item.albumId}
        imageUrl={item.url}
      />
    )
  }

  const filteredCards = cards.data.filter((card) => `${card.albumId}`.indexOf(filterValue) !== -1);

  return (
    <Container style={styles.mainContainer}>
      <Item>
        <Input
          value={filterValue}
          keyboardType="decimal-pad"
          onChangeText={(text) => setFilterValue(text)}
          placeholder={i18n.t('ALBUM_ID')}
        />
      </Item>
      <FlatList
        data={filteredCards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </Container>
  )
}

CardsScreen.navigationOptions = props => {
  return {
    headerTitle: i18n.t('HEADER_CARDS'),
    tabBarVisible: true,
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => dispatch(CardsActions.cardsRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsScreen)
