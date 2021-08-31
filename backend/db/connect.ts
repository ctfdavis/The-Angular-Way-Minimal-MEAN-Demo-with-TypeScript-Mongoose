import mongoose from 'mongoose';

function connect() {
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);

  return mongoose
    .connect('mongodb://localhost:27017/theangularway', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database connected');
    })
    .catch((error) => {
      console.log('db error', error);
      process.exit(1);
    });
}

export default connect;
