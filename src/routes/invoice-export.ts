import { readFile } from "node:fs/promises";
import { Router } from "express";
import { db } from "../db.js";

export const invoiceExport = Router();

// Exports the caller's invoices as CSV, under the header row kept in a template file.
invoiceExport.get("/invoices/export", async (req, res) => {
  const header = await readFile("templates/invoice-export.csv", "utf8");
  const rows = await db.collection("invoices").find({ tenantId: req.tenant.id }).toArray();
  res.type("text/csv").send(header + rows.map(toCsv).join("\n"));
});

function toCsv(row: { number: string; total: number }): string {
  return `${row.number},${row.total}`;
}
