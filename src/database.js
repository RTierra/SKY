const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://ricardo:basededatosdericardo@sky-database-riqjg.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
