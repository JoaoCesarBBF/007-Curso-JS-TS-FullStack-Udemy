const mod1 = require('./mod1')
const axios = require('axios')
const { Pessoa } = require('./mod1')

axios('https://www.otaviomiranda.com.br')
.then(response => console.log(response.data))
.catch(err => console.log(err));