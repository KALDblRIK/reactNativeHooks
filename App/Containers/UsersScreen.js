import React, { Component, useState, useEffect } from 'react'
import UsersActions from '../Redux/UsersRedux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/UsersScreenStyles'
import { connect } from 'react-redux'
import UserCard from '../Components/UserCard'
import i18n from '../I18n';

import {
  ScrollView,
  FlatList,
  TouchableOpacity,
 } from 'react-native'

import {
  Container,
  Content,
  Text,
  View,
  Icon,
 } from 'native-base'

function UsersScreen(props) {
  const {
    auth,
    users,
    getUsers,
    navigation,
  } = props;

  useEffect(() => {
    if (auth.isAuth) {
      navigation.navigate('PrivateUsers')
    }
  }, [auth.isAuth])

  useEffect(() => {
    getUsers();
  }, [users.data !== []])

  const renderItem = ({ item, index }) => {
    return (
      <UserCard
        key={`${item.id}`}
        name={item.name}
        username={item.username}
        email={item.email}
        address={item.address}
        phone={item.phone}
        company={item.company}
      />
    )
  }

  return (
    <Container style={styles.mainContainer}>
      <FlatList
        data={users.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </Container>
  )
}

UsersScreen.navigationOptions = props => {
  const {
    auth,
    navigation,
  } = props
  console.warn(navigation.state.routeName)
  return {
    headerTitle: i18n.t('HEADER_USERS'),
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('PublicLogin')}
        style={styles.headerButton}
      >
        <Icon
          name={navigation.state.routeName === 'Users' ? 'log-out' : 'log-in'}
        />
      </TouchableOpacity>
    ),
    tabBarVisible: true,
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(UsersActions.usersRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen)