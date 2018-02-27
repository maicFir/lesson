let express = require('express')
let app = express()
let config = require('../config/index')
app.use(express.static(__dirname))

app.use('/my-paoject/competitive', require('./competitive'))
app.use('/wzbd/index', require('./index'))
app.use('/wzbd', require('./heroAll'))
app.use('/wzbd/community', require('./community'))
app.use('/wzbd/competitive', require('./competitive'));
app.use('/wzbd/center',require('./percenter'))

let server = app.listen(config.dev.proxyPort, () => {
  console.log('app mcokjs listening at http://localhost:' + config.dev.proxyPort)
})
