const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const _ = require('lodash');
const path=require('path');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static('./angular-src/dist/chatapp'));
//app.get('/angular-src/*', (req,res)=>{
//  res.sendFile(path.join(__dirname,'/angular-src/dist/chatapp/index.html'));
//});

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const { User } = require('./Helpers/UserClass');

require('./socket/streams')(io, User, _);
require('./socket/private')(io);

const dbConfig = require('./config/secret');
const auth = require('./routes/authRoutes');
const posts = require('./routes/postRoutes');
const users = require('./routes/userRoutes');
const friends = require('./routes/friendsRoutes');
const message = require('./routes/messageRoutes');
const image = require('./routes/imageRoutes');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
// app.use(logger('dev'));

mongoose.Promise = global.Promise;
mongoose.connect(
  dbConfig.url,
  { useNewUrlParser: true }
);

app.use('/api/chatapp', auth);
app.use('/api/chatapp', posts);
app.use('/api/chatapp', users);
app.use('/api/chatapp', friends);
app.use('/api/chatapp', message);
app.use('/api/chatapp', image);

app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log('Listening on port ' + port);
});
