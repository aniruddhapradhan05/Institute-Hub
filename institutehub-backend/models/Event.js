import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  location: String,
  resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
});

export default mongoose.model('Event', eventSchema);
