import connection from "./mysql.js";
import fs from "fs";

try {
  const sql = fs.readFileSync("./db/database.sql", "utf8");
  await connection.query(sql);
  console.log("Database imported");
} catch (error) {
  console.error(`Database import failed: ${error}`);
}

await connection.end();

process.exit();
