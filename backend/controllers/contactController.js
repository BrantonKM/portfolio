import pool from '../models/db.js';

export const handleContact = async (req, res) => {
  const { user_name, user_email, message } = req.body;

  try {
    const query = `
      INSERT INTO contacts (user_name, user_email, message)
      VALUES ($1, $2, $3) RETURNING *;
    `;

    const values = [user_name, user_email, message];

    const result = await pool.query(query, values);
    res.status(200).json({ message: 'Message saved successfully!', data: result.rows[0] });
  } catch (error) {
    console.error('❌ Error saving contact message:', error.message);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};
