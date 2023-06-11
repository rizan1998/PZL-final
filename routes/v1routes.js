const express = require("express");
const router = express.Router();
// const hotelCtrl = require("../controller/hotel");
// const ticketCtrl = require("../controller/ticket");
// const users = require("../controller/user");
const roomCtrl = require("../controller/room");

router.get("/", (req, res) => {
  res.send({ message: "hello from v3 router" });
});

/* HOTEL ROUTE */
// router.get("/hotel", hotelCtrl.fetch);
// router.get("/hotel/:id", hotelCtrl.getOne);
// router.post("/hotel", hotelCtrl.create);
// router.update("/hotel/:id", hotelCtrl.update);
// router.delete("hotel/:id", hotelCtrl.delete);

/* ROOM ROUTE */
// router.get("/room", roomCtrl.fetch);
// router.get("/room/:id", roomCtrl.getOne);
// router.post("/room", roomCtrl.create);
// router.update("/room/:id", roomCtrl.update);
// router.delete("room/:id", roomCtrl.delete);

/* TICKET ROUTE */
// router.get("/room", roomCtrl.fetch);
// router.get("/room/:id", roomCtrl.getOne);
// router.post("/room", roomCtrl.create);
// router.update("/room/:id", roomCtrl.update);
// router.delete("room/:id", roomCtrl.delete);

/* USER ROUTE */
router.get("/room", roomCtrl.fetch);
router.get("/room/:id", roomCtrl.getOne);
router.post("/room", roomCtrl.create);
router.put("/room/:id", roomCtrl.update);
router.delete("room/:id", roomCtrl.destroy);

module.exports = router;
