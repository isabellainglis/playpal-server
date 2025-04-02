import connection from "../utils/mysql.js";

const getAllChords = async (_req, res) => {
  const sql = "SELECT * FROM chordLibrary ORDER BY chordLibrary.name";

  try {
    const [results] = await connection.query(sql);

    if (!results.length) {
      res.status(400).json({ msg: "No chords in DB" });
    }

    res.json(results);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { getAllChords };
