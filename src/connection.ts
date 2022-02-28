import {connect} from "mongoose";

connect("mongodb://localhost:27017/gra?retryWrites=true&w=majority")
  .then(() => {
    console.log('MongoDb is running')
  }).catch(err=> console.log(err))
