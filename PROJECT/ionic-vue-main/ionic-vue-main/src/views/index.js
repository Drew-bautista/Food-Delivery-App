const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'food'
});

app.get('/orders', (req, res) => {
   db.query('SELECT * FROM Orders', (err, results) => {
      if (err) throw err;
      res.send(results);
   });
});

app.post('/orders', (req, res) => {
   const order = req.body;
   const sql = 'INSERT INTO Orders (user_id, car_id, order_date, status, total) VALUES (?, ?, ?, ?, ?)';
   db.query(sql, [order.user_id, order.car_id, order.order_date, order.status, order.total], (err, result) => {
      if (err) throw err;
      res.send({ message: 'Order created', id: result.insertId });
   });
});

app.put('/orders/:id', (req, res) => {
   const id = req.params.id;
   const status = req.body.status;
   const sql = 'UPDATE Orders SET status = ? WHERE id = ?';
   db.query(sql, [status, id], (err, result) => {
      if (err) throw err;
      res.send({ message: 'Order updated' });
   });
});

app.delete('/orders/:id', (req, res) => {
   const id = req.params.id;
   db.query('DELETE FROM Orders WHERE id = ?', [id], (err, result) => {
      if (err) throw err;
      res.send({ message: 'Order deleted' });
   });
});

app.listen(3000, () => {
   console.log('Server running on port 3000');
});
