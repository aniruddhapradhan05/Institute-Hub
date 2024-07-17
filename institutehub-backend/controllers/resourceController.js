import Resource from '../models/Resource.js';

export const createResource = async (req, res) => {
  const resource = new Resource(req.body);
  await resource.save();
  res.send(resource);
};

export const getResources = async (req, res) => {
  const resources = await Resource.find();
  res.send(resources);
};
