-- Drop and recreate MESSAGES table

DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  conversation_id INTEGER REFERENCES conversations(id) ON DELETE CASCADE,
  created_time TIMESTAMP,
  message_body TEXT,
  message_sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
