module.exports = {
  format () {},

  deformat (sql) {
    return sql
      .replaceAll('\n', ' ')
      .split(' ')
      .filter(part => part !== '')
      .join(' ')
  }
}
