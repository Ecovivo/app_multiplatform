import type { SQLiteDatabase } from "expo-sqlite";

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = (await db.getFirstAsync<{
    user_version: number;
  }>("PRAGMA user_version")) ?? { user_version: 0 };

  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }

  if (currentDbVersion === 0) {
    await db.execAsync(`
        PRAGMA journal_mode = 'wal';
        CREATE TABLE projects (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, type INTEGER NOT NULL);
    `);
    await db.runAsync(
      "INSERT INTO projects (name, type) VALUES (?, ?)",
      "Mi Casa",
      1
    );
    await db.runAsync(
      "INSERT INTO projects (name, type) VALUES (?, ?)",
      "La finca",
      2
    );
    currentDbVersion = 1;
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

export { migrateDbIfNeeded };
