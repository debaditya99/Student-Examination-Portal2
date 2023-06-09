process.env.TZ = 'Asia/Kolkata';

const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3001
const mongoose = require('mongoose');
const initData = require('./routes/initDBrouter');
const marksRouter = require('./routes/marksRouter');
const welcomeRouter = require('./routes/welcomeRouter');
const reqRouter = require('./routes/reqRouter');
const downloadRouter = require('./routes/downloadRouter');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Enable COR
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/data/input', initData);
app.use('/data/welcome', welcomeRouter);
app.use('/data/marks', marksRouter);
app.use('/data/request', reqRouter);
app.use('/data/download', downloadRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 

mongoose.connect('mongodb://127.0.0.1:27017/studentExaminationPortal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  const moment = require('moment-timezone');