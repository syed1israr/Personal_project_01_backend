const express = require('express');
const app = express();
const hotelRouter = require('../Airbnd/Routes/Hotels.route.js');
const ConnectDB = require("../Airbnd/Config/MongoDBConfig.js");
const { default: mongoose } = require('mongoose');
const HotelDataRouter= require('./Routes/hotelData.route.js')
const CategoryDataRouter=require('./Routes/CategoryData.route.js')
const CategoryRouter=require('../Airbnd/Routes/Categories.route.js')

const PORT = process.env.PORT || 3900; // Define PORT as a constant

ConnectDB();

mongoose.connection.once("open", () => {
  console.log("connection successful");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

app.use(express.json());
app.use('/api/hotelsData',HotelDataRouter)
app.use('/api/hotels', hotelRouter);
app.use('/api/categoryData', CategoryDataRouter);
app.use('/api/category',CategoryRouter);


app.get('/', (req, res) => {
  res.send('hello israr');
});
