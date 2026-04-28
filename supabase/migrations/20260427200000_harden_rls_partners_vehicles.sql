/*
  Security hardening: remove overly permissive policies that allowed any
  authenticated Supabase user to INSERT/UPDATE/DELETE partners and vehicle_catalog.

  Public SELECT policies remain unchanged (anon + authenticated read catalog).

  Administrative writes must use the service_role key (dashboard, migrations)
  or a future backend using service_role — never broad authenticated writes.
*/

DROP POLICY IF EXISTS "Authenticated users can manage partners" ON partners;

DROP POLICY IF EXISTS "Authenticated users can manage vehicles" ON vehicle_catalog;
