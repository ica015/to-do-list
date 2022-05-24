const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUniFiedTopology: true})
.then(() => console.log('Conectado ao MongoDb'))
.catch((err) => console.log(err));