import express from "express";
import { customers } from "./routes/customers.js";
import { requireTenant } from "./tenant.js";

const app = express();
app.use(requireTenant);
app.use(customers);

app.listen(3000);
