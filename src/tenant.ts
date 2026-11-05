import type { NextFunction, Request, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      tenant: { id: string };
    }
  }
}

// The gateway authenticates the caller and passes their tenant in a header.
export function requireTenant(req: Request, res: Response, next: NextFunction) {
  const id = req.header("x-tenant-id");
  if (!id) {
    res.status(401).json({ error: "missing tenant" });
    return;
  }
  req.tenant = { id };
  next();
}
