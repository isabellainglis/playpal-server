import connection from "../utils/mysql.js";

const getAllSongs = async (_req, res) => {
  const sql = "SELECT * FROM song";

  try {
    const [results] = await connection.query(sql);

    if (!results.length) {
      res.status(404).json({ msg: "No songs in DB" });
    }

    res.json(results);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// const getAllChords = async (req, res) => {
//   const sql = `SELECT * FROM section_chord
// JOIN chord
// ON chord.id = section_chord.chord_id
// WHERE chord.song_id = 1;`;
// }

export { getAllSongs };
