module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'MultiSelect',
    jsNext: true,
    umd: true
  }
}
