import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.db');

export const getParks = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM parks", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

export const getParkById = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM parks WHERE id = ?", [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};
