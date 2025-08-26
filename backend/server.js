import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());           // allow all origins in dev
app.use(express.json());   // parse JSON

// Health check
app.get('/', (_req, res) => res.send('Backend API is running ✅'));

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, message } = req.body;
  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO contacts (user_name, user_email, message) VALUES ($1, $2, $3) RETURNING *',
      [user_name, user_email, message]
    );
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error('DB error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
