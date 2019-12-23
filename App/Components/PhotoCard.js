import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Styles/PhotoCardStyle'
import i18n from '../I18n'
import { Image } from 'react-native'
import {
  Card,
  CardItem,
  Left,
  Body,
  Text,
} from 'native-base'

export default PhotoCard = (props) => {
  const {
    title,
    albumId,
    imageUrl,
  } = props
  return (
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text>{title}</Text>
            <Text note>{`${i18n.t('ALBUM_ID')} ${albumId}`}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </CardItem>
    </Card>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  albumId: PropTypes.number,
  imageUrl: PropTypes.string,
}

Card.defaultProps = {
  title: 'Harold',
  albumId: 0,
  imageUrl: 'http://pics.wikireality.ru/upload/thumb/d/d0/Hide_The_Pain_Harold.jpg/300px-Hide_The_Pain_Harold.jpg'
}
