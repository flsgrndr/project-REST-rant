import { Schema, model } from 'mongoose'

let commentSchema = new Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})
  
export default model('Comment', commentSchema)
