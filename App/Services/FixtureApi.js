export default {
  getUsers: () => {
    return {
      ok: true,
      data: require('../Fixtures/users.json')
    }
  },
}
