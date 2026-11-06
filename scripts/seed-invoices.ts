import { readFileSync } from "node:fs";
import { db } from "../src/db.js";

// Loads sample invoices into a local database. Run once, by hand: npx tsx scripts/seed-invoices.ts
const rows = JSON.parse(readFileSync("fixtures/invoices.json", "utf8"));
await db.collection("invoices").insertMany(rows);
process.exit(0);
