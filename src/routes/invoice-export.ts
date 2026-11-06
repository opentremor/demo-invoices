import { readFileSync } from "node:fs";
import { Router } from "express";
import { db } from "../db.js";

export const invoiceExport = Router();

// Exports the invoices as CSV, under the header row kept in a template file.
invoiceExport.get("/invoices/export", async (req, res) => {
  const header = readFileSync("templates/invoice-export.csv", "utf8");
  const rows = await db.collection("invoices").find({}).toArray();
  res.type("text/csv").send(header + rows.map(toCsv).join("\n"));
});

function toCsv(row: { number: string; total: number }): string {
  return `${row.number},${row.total}`;
}
