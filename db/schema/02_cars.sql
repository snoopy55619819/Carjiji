-- Drop and recreate cars table

DROP TABLE IF EXISTS cars CASCADE;
CREATE TABLE cars (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  car_make VARCHAR(255) NOT NULL,
  car_model VARCHAR(255) NOT NULL,
  car_year INT NOT NULL,
  description TEXT,
  listing_price INT NOT NULL DEFAULT 0,
  car_photo_url VARCHAR(255) NOT NULL,
  is_sold BOOLEAN DEFAULT FALSE
);


