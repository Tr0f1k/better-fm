const express = require("express");
const app = express();
const { Pool } = require("pg");

// Connecting to database
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fm",
  password: "root",
  port: 5432
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get("/api/seasonChallenges", async (req, res) => {
    try {
      const n = req.query.n || 1;
      const dm = req.query.dm || 1;
      const dl = req.query.dl || 4;
      const client = await pool.connect();
      const result = await client.query(`SELECT * FROM seasonChallenges WHERE difficulty >= ${dm} AND difficulty <= ${dl} ORDER BY RANDOM() LIMIT ${n};`);
      const data = result.rows;
      client.release();
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/matchChallenges", async (req, res) => {
    try {
      const n = req.query.n || 1;
      const dm = req.query.dm || 1;
      const dl = req.query.dl || 4;
      const client = await pool.connect();
      const result = await client.query(`SELECT * FROM matchChallenges WHERE difficulty >= ${dm} AND difficulty <= ${dl} ORDER BY RANDOM() LIMIT ${n};`);
      const data = result.rows;
      client.release();
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });  

app.get("/api/data", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM seasonChallenges;");
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//PORT setup
app.listen(4000, () => {
  console.log("Server started on http://localhost:4000");
});
