import { Router } from "express";
import { db } from "../db.js";

export const invoices = Router();

invoices.get("/invoices", async (req, res) => {
  const rows = await db.collection("invoices").find({ tenantId: req.tenant.id }).sort({ issuedAt: -1 }).toArray();
  res.json(rows);
});
