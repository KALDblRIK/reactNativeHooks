export default {
  getUsers: () => {
    return {
      ok: true,
      data: require('../Fixtures/users.json')
    }
  },
  postAuth: (params) => {
    if (params.username === 'login' && params.password === 'login') {
      return {
        ok: true,
        data: 'success',
      }
    }
    return {
      ok: false,
      data: 'wrong username or password'
    }
  }
}
