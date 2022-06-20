require('dotenv').config();
import { connect } from 'mongoose';

//DATABASE
const mongooseURI = process.env.MONGO_URI;

connect(mongooseURI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to mongo: ', mongooseURI)}
)

export const Place = require('./places').default;
export const Comment = require('./comment').default;