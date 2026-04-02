# Functional Portfolio Website

This is my personal portfolio website which under the programms tab has some programms running

## Features

* **Recent Projects**: A showcase of my work and skills in development.
* **Difficulty Dictionary**: A tool used by the official Austrian parcour competition for faster judging with the rulebook.

## Running

This repo now contains **two separate Flask sites**:

- **Main website**: `app.py` (default port `5000`)
- **Dictionary site**: `dictionary_app.py` (default port `5001`)

### Main website

Optionally point the “Difficulty Dictionary” link to your external domain:

```bash
export DICTIONARY_URL="https://dict.example.com"
python app.py
```

### Dictionary site

```bash
python dictionary_app.py
```

## Technologies Used

* HTML, CSS (Frontend)
* Flask (Backend)

---
