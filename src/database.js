const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/sky-api', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
