import Event from '../models/Event.js';

export const createEvent = async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.send(event);
};

export const getEvents = async (req, res) => {
  const events = await Event.find().populate('resources');
  res.send(events);
};
