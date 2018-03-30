let express = require('express');
let app = express();

app.use(express.static(__dirname))

app.use('/my-paoject/competitive', require('./competitive'));
app.use('/api/index', require('./index'));

let server = app.listen(2000, () => {
	console.log('app mcokjs listening at http://localhost:2000')
})

