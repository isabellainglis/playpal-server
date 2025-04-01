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

const getSingleSong = async (req, res) => {
  const songId = req.params.id;

  const sql = `SELECT * FROM song
  WHERE id = ?`;

  try {
    const [results] = await connection.query(sql, [songId]);

    if (!results.length) {
      res.status(404).json({ msg: `No record with ID ${songId}` });
      return;
    }

    res.json(results[0]);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getSingleSongChords = async (req, res) => {
  const songId = req.params.id;

  const sql = `SELECT * FROM section_chord
  JOIN chord
  ON chord.id = section_chord.chord_id
  WHERE chord.song_id = ?
  ORDER BY chord_order;`;

  try {
    const [results] = await connection.query(sql, [songId]);

    if (!results.length) {
      res.status(404).json({ msg: `No chords found for song ID ${songId}` });
      return;
    }
    res.json(results);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getSingleSongSections = async (req, res) => {
  const songId = req.params.id;

  const sql = ` SELECT section_id, name FROM section_chord
  JOIN section
  ON section.id = section_chord.section_id
  WHERE section.song_id = ?
  ORDER BY section_chord.chord_order;
  `;

  try {
    const [results] = await connection.query(sql, [songId]);

    if (!results.length) {
      res.status(404).json({ msg: `No data found for song ID ${songId}` });
      return;
    }
    res.json(results);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export {
  getAllSongs,
  getSingleSong,
  getSingleSongChords,
  getSingleSongSections,
};
