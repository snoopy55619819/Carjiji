DROP TABLE IF EXISTS users_favorite_cars CASCADE;
CREATE TABLE users_favorite_cars (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE
);