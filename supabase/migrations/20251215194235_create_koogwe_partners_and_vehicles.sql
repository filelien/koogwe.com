/*
  # KOOGWE Platform - Partners & Vehicle Catalog

  1. New Tables
    - `partners`
      - `id` (uuid, primary key)
      - `name` (text) - Partner company name
      - `type` (text) - Type: 'dealership', 'enterprise', 'fleet_manager'
      - `logo_url` (text) - Partner logo URL
      - `description` (text) - Company description
      - `contact_email` (text) - Contact email
      - `contact_phone` (text) - Contact phone
      - `address` (text) - Physical address
      - `city` (text) - City in French Guiana
      - `is_active` (boolean) - Active status
      - `created_at` (timestamptz)
      
    - `vehicle_catalog`
      - `id` (uuid, primary key)
      - `partner_id` (uuid, foreign key to partners)
      - `brand` (text) - Vehicle brand (Toyota, Renault, etc.)
      - `model` (text) - Vehicle model
      - `year` (integer) - Year of manufacture
      - `category` (text) - Category: 'economy', 'comfort', 'premium', 'suv'
      - `image_url` (text) - Vehicle image URL
      - `price_range` (text) - Price or leasing information
      - `available_for` (text[]) - Array: ['vtc', 'taxi', 'rideshare', 'personal']
      - `features` (jsonb) - Vehicle features and specifications
      - `is_available` (boolean) - Availability status
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for active vehicles and partners
    - Authenticated write access for authorized users
*/

-- Create partners table
CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL CHECK (type IN ('dealership', 'enterprise', 'fleet_manager')),
  logo_url text,
  description text,
  contact_email text,
  contact_phone text,
  address text,
  city text CHECK (city IN ('Cayenne', 'Kourou', 'Saint-Laurent-du-Maroni', 'Matoury', 'Remire-Montjoly')),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create vehicle catalog table
CREATE TABLE IF NOT EXISTS vehicle_catalog (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_id uuid REFERENCES partners(id) ON DELETE CASCADE,
  brand text NOT NULL,
  model text NOT NULL,
  year integer NOT NULL,
  category text NOT NULL CHECK (category IN ('economy', 'comfort', 'premium', 'suv', 'van')),
  image_url text,
  price_range text,
  available_for text[] DEFAULT ARRAY['vtc', 'taxi', 'rideshare'],
  features jsonb DEFAULT '{}',
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicle_catalog ENABLE ROW LEVEL SECURITY;

-- RLS Policies for partners
CREATE POLICY "Public can view active partners"
  ON partners
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage partners"
  ON partners
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for vehicle_catalog
CREATE POLICY "Public can view available vehicles"
  ON vehicle_catalog
  FOR SELECT
  USING (is_available = true);

CREATE POLICY "Authenticated users can manage vehicles"
  ON vehicle_catalog
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample partners (Guyane dealerships)
INSERT INTO partners (name, type, logo_url, description, city, contact_email) VALUES
('CFAO Motors Guyane', 'dealership', '/partners/cfao.png', 'Concessionnaire officiel Toyota et Suzuki en Guyane française', 'Cayenne', 'contact@cfao-guyane.com'),
('GBH Guyane Automobiles', 'dealership', '/partners/gbh.png', 'Distributeur Renault, Peugeot, Citroën et Dacia', 'Cayenne', 'info@gbh-guyane.fr'),
('Ford Guyane', 'dealership', '/partners/ford.png', 'Concessionnaire Ford pour la Guyane', 'Cayenne', 'contact@ford-guyane.com'),
('Nissan Guyane', 'dealership', '/partners/nissan.png', 'Véhicules Nissan neufs et occasions', 'Kourou', 'info@nissan-guyane.fr'),
('Kia Guyane', 'dealership', '/partners/kia.png', 'Gamme complète Kia pour particuliers et professionnels', 'Cayenne', 'contact@kia-guyane.com')
ON CONFLICT DO NOTHING;

-- Insert sample vehicles
INSERT INTO vehicle_catalog (partner_id, brand, model, year, category, price_range, available_for, features) 
SELECT 
  p.id,
  'Toyota',
  'Corolla',
  2024,
  'comfort',
  'À partir de 25 000€ ou leasing 450€/mois',
  ARRAY['vtc', 'rideshare'],
  '{"fuel": "Hybrid", "seats": 5, "transmission": "Automatic", "climate": "Dual-zone AC"}'::jsonb
FROM partners p WHERE p.name = 'CFAO Motors Guyane'
ON CONFLICT DO NOTHING;