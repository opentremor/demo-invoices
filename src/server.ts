import express from "express";
import { customers } from "./routes/customers.js";
import { invoices } from "./routes/invoices.js";
import { requireTenant } from "./tenant.js";

const app = express();
app.use(requireTenant);
app.use(customers);
app.use(invoices);

app.listen(3000);
