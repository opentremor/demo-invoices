# 1. Every query filters on the tenant

## Context

Every customer's data sits in the same MongoDB collections. The gateway authenticates the
caller and passes their tenant in the `x-tenant-id` header. `requireTenant` puts it on
`req.tenant`.

## Decision

Every database read and write in a request handler filters on `req.tenant.id`. A handler never
calls `find({})` or any other query without that filter.

## Consequences

A query without the filter returns or changes another customer's data. Review must catch it
before merge.
