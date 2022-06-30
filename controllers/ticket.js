const express = require("express");
const Ticket = require("../model/ticketsModel");
const router = express.Router();

// Get all tickets
router.get("/", async (req, res) => {
  try {
    const data = await Ticket.find({}).clone();
    res.status(200).json({ message: "Success", result: data });
  } catch {
    (err) => {
      console.log(err);
    };
  }
});

// Get ticket by username
router.get("/u/:username", async (req, res) => {
  const username = req.params.username;
  const data = await Ticket.find({ username: username });
  res
    .status(200)
    .json({ message: "Find ticket by username success", result: data });
});

// Get ticket by ID
router.get("/t/:ticketId", async (req, res) => {
  const id = req.params.ticketId;
  const data = await Ticket.findById(id);
  res.status(200).json({ message: "Find ticket by Id success", result: data });
});

// Single Ticket sell
router.post("/sell", (req, res) => {
  const ticket = new Ticket();
  ticket.username = req.body.username;
  ticket.price = req.body.price;
  ticket.save();
  res.status(200).json({ message: "Ticket sell success" });
});

// Bilk ticket sell
router.post("/bulk", async (req, res) => {
  try {
    const { username, price, quantity } = req.body;
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = new Ticket();
      ticket.username = username;
      ticket.price = price;
      result.push(ticket);
    }
    Ticket.insertMany(result, (err) => {
      if (err) {
        res.status(500).json({
          error: "Bulk Ticket sell fail",
        });
      } else {
        res.status(200).json({
          message: "Bulk Ticket sell success",
        });
      }
    });
  } catch {
    (err) => {
      console.log(err);
    };
  }
});

// Raffel Draw
router.get("/draw", async (req, res) => {
  const ticket = await Ticket.find({}).clone();
  const winnerCount = req.body.winnercount;
  const winnerIndexes = new Array(winnerCount);
 

  let index = 0;
  while (index < winnerCount) {
    let winnerIndex = Math.floor(Math.random() * ticket.length);
    if (!winnerIndexes.includes(winnerCount)) {
      winnerIndexes[index++] = winnerIndex;
      continue;
    }
  }

  const winner = winnerIndexes.map((index) => ticket[index]);

  res.status(200).json(winner);
});

router.put("/t/:id", async (req, res) => {
  const id = req.params.id;
  Ticket.updateOne(
    { _id: id },
    {
      $set: {
        price: req.body.price,
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: "Ticket update fail",
        });
      } else {
        res.status(200).json({
          message: "Ticket Update success",
        });
      }
    }
  );
});

router.delete("/t/:id", (req, res) => {
  Ticket.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        error: "icket delete failed",
      });
    } else {
      res.status(200).json({
        message: "Ticket delete success",
      });
    }
  });
});
module.exports = router;
