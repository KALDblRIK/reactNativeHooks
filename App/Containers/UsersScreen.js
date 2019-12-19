import React, { Component, useState, useEffect } from 'react'
import { ScrollView, FlatList } from 'react-native'
import { Container, Content, Text, View, Button, } from 'native-base'
import UsersActions from '../Redux/UsersRedux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/UsersScreenStyles'
import { connect } from 'react-redux'
import UserCard from '../Components/UserCard'

function UsersScreen(props) {
  const {
    users,
    getUsers,
    navigation,
  } = props;

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
      <Button onPress={() => navigation.navigate('LoginScreen')} full>
        <Text>
          Login
        </Text>
      </Button>
    </Container>
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