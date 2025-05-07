import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.db');

export const getCoasters = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM coasters", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

export const getCoasterById = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM coasters WHERE id = ?", [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};
