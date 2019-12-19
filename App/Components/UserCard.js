import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Styles/UserCardStyle'
import i18n from '../I18n'
import {
  Accordion,
  View,
  Text,
  Card,
  CardItem,
  Icon,
} from 'native-base'

export default UserCard = (props) => {
  const {
    name,
    username,
    email,
    address,
    phone,
    company,
  } = props
  const dataArray = [
    { title: i18n.t('ADDRESS'), isAddress: true },
    { title: i18n.t('COMPANY'), isAddress: false },
  ];

  const renderHeader = (item, expanded) => {
    return (
      <View style={styles.header}>
        <Text>{item.title}</Text>
        <Icon
          name={
            expanded
              ? 'arrow-dropup'
              : 'arrow-dropdown'
          }
        />
      </View>
    )
  }

  const renderContent = (item, expanded) => {
    return (
      <>
        {
          item.isAddress && (
            <View>
              <Text>{`${i18n.t('CITY')}: ${address.city}`}</Text>
              <Text>{`${i18n.t('STREET')}: ${address.street} ${address.suite}`}</Text>
              <Text>{`${i18n.t('ZIPCODE')}: ${address.zipcode}`}</Text>
              <Text>{`${i18n.t('GEO')}: (${address.geo.lat}, ${address.geo.lng})`}</Text>
            </View>
          )
        }
        {
          !item.isAddress && (
            <View>
              <Text>{`${i18n.t('NAME')}: ${company.name}`}</Text>
              <Text>{`${i18n.t('CATCH_PHRASE')}: ${company.catchPhrase}`}</Text>
            </View>
          )
        }
      </>
    )
  }

  return (
    <Card style={styles.container}>
      <CardItem header bordered>
        <Text>{username}</Text>
      </CardItem>
      <CardItem>
        <View style={styles.content}>
          <View style={styles.row}>
            <Icon style={styles.icon} name="contact" />
            <Text>{name}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="mail" />
            <Text>{email}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="call" />
            <Text>{phone}</Text>
          </View>
          <Accordion
            style={styles.accordion}
            headerStyle={styles.header}
            dataArray={dataArray}
            renderHeader={renderHeader}
            renderContent={renderContent}
            expanded={null}
          />
        </View>
      </CardItem>
    </Card>
  )
}

UserCard.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.object,
  phone: PropTypes.string,
  company: PropTypes.object,
}

UserCard.defaultProps = {
  name: 'name',
  username: 'username',
  email: 'email',
  address: {
    street: 'street',
    suite: 'suite',
    city: 'city',
    zipcode: 'zipcode',
    geo: {
      lat: 0,
      lng: 0
    }
  },
  phone: 'phone',
  company: {
    name: "name",
    catchPhrase: "catchPhrase",
    bs: "bs"
  }
}
