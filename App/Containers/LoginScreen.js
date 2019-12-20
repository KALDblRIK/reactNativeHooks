import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Text,
} from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    console.warn(username, password)
  }

  return (
    <Container style={styles.container}>
      <Content>
        <Form>
          <Item>
            <Input
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username"
            />
          </Item>
          <Item last>
            <Input
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
            />
          </Item>
          <Button
            full
            onPress={submit}
          >
            <Text>
              Login
            </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
