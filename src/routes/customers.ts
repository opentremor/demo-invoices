import { Router } from "express";
import { db } from "../db.js";

export const customers = Router();

customers.get("/customers", async (req, res) => {
  const rows = await db.collection("customers").find({ tenantId: req.tenant.id }).toArray();
  res.json(rows);
});
