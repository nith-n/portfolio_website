const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/projects', (req, res) => {
  const projectsPath = path.join(__dirname, 'projects.json');
  fs.readFile(projectsPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read projects file' });
      return;
    }
    const projects = JSON.parse(data);
    res.json(projects);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});