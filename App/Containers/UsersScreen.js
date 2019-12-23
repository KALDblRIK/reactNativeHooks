import React, { Component, useState, useEffect } from 'react'
import UsersActions from '../Redux/UsersRedux'
import AuthActions from '../Redux/AuthRedux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/UsersScreenStyles'
import { connect } from 'react-redux'
import UserCard from '../Components/UserCard'
import i18n from '../I18n';

import {
  ScrollView,
  FlatList,
 } from 'react-native'

import {
  Container,
  Content,
  Text,
  View,
  Icon,
  Button,
 } from 'native-base'

function UsersScreen(props) {
  const {
    auth,
    users,
    getUsers,
    navigation,
    clearAuth,
  } = props;

  useEffect(() => {
    navigation.navigate(auth.isAuth ? 'PrivateUsers' : 'PublicUsers')
  }, [auth.isAuth])

  useEffect(() => {
    console.warn('getUsers')
    getUsers()

  }, [])

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
      <Button
        full
        onPress={
          auth && auth.isAuth
          ? () => {
            clearAuth()
          }
          : () => navigation.navigate('PublicLogin')
        }
        style={styles.headerButton}
      >
        <Text>
          {auth && auth.isAuth ? i18n.t('BUTTON_LOGOUT') : i18n.t('BUTTON_LOGIN')}
        </Text>
      </Button>
    </Container>
  )
}

UsersScreen.navigationOptions = props => {
  return {
    headerTitle: i18n.t('HEADER_USERS'),
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
    clearAuth: () => dispatch(AuthActions.authClear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen)