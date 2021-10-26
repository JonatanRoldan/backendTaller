const mongoose = require('mongoose');

mongoose.connect('mongodb://Localhost/taller',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
})
.then(db => console.log("db is conected"))
.catch(err => console.log(err));