const roomModel = require("../models/room");

async function fetch(req, res) {
  const data = await roomModel.fetchroom();
  res.send(data);
}
async function getOne(req, res) {
  const roomId = req.params.id;
  const data = await roomModel.getOneroom(roomId);
  res.send(data);
}
async function create(req, res) {
  const body = req.body;
  const data = await roomModel.createroom(body);
  res.send(data);
}
async function update(req, res) {
  const roomId = req.params.id;
  const body = req.body;
  const data = await roomModel.updateroom(body, roomId);
  res.send(data);
}
async function destroy(req, res) {
  const roomId = req.params.id;
  const data = await roomModel.deleteroom(roomId);
  res.send(data);
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  destroy,
};
