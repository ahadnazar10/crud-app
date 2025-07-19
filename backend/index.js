import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.listen(8800, () => {
  console.log("Connected to backend.");
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
