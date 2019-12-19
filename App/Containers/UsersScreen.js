import React, { Component, useState, useEffect } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import UsersActions from '../Redux/UsersRedux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/UsersScreenStyles'
import { connect } from 'react-redux';

function UsersScreen(props) {
  const {
    users,
    getUsers,
  } = props;

  useEffect(() => {
    getUsers();
    console.warn('tick')
  }, [users !== []])

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.text}>
        {JSON.stringify(users.data)}
      </Text>
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(UsersActions.usersRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen)