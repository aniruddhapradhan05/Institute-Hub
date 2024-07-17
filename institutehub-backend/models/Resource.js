import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number,
});

export default mongoose.model('Resource', resourceSchema);
