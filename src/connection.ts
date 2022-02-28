import {connect} from "mongoose";

connect("mongodb+srv://imunelabs:dyyJk3cRJ6zatBuw@imunelabs.nt1mc.mongodb.net/gra?retryWrites=true&w=majority")
  .then(() => {
    console.log('MongoDb is running')
  }).catch(err=> console.log(err))
