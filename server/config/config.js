var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://user:123123@ds111565.mlab.com:11565/todo-app';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://user:123123@ds111565.mlab.com:11565/todo-app';
}
