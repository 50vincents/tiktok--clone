const express = require('express');
const mongoose = require('mongoose');

const Data = require('./data.js');
const Videos = require('./dbModel.js');

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  // allow access from anywhere
  // receive request, setheaders, accept all requests, pops into next functions
  res.setHeader('Access-Control-Allow-Origin', '*'),
  res.setHeader('Access-Control-Allow-Headers', '*'),
  next()
})

// DB config , noSQL
const connection_url = 'mongodb+srv://admin:YwrkH8J5WONwtNYG@cluster0.bvglm.mongodb.net/tiktok?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


// api endpoints
app.get('/', (req, res) => res.status(200).send('hello world'));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/v2/posts', (req, res) => {
  // Add video document to videos collection
  const dbVideos = req.body

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
})

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));

