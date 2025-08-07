# LG-Secure
Real-time dashboard for web monitoring, quiz training, and alert generation — combining web scraping, awareness quizzes, and incident detection using AI
A real-time monitoring system to detect, educate, and act on information threats from the open web. Combines:

- 🌐 Web Scraping: Extract alerts, content, and threats from blogs, sites, forums
- 📚 Awareness Quiz: Train users on cybersecurity & response via auto-generated quizzes
- 📊 Dashboard: Visual UI to monitor trends, view alerts, and track learning progress

---

## 📁 Modules

| Module     | Description |
|------------|-------------|
| `backend/scraper/` | Scrapes threat intelligence from web sources |
| `backend/quiz/` | API for quizzes based on current threats |
| `frontend/dashboard/` | React/HTML-based dashboard interface |
| `database/` | MongoDB schemas or sample JSON data |

---

## 🛠️ Tech Stack

- `Python` for scraping (Requests, BeautifulSoup, Pandas)
- `Flask` or `FastAPI` for API backend
- `React.js` or `HTML/CSS/JS` for dashboard
- `MongoDB` or `JSON` for lightweight DB layer

---

## 🚀 Getting Started

1. Clone the repo  
```bash
git clone https://github.com/SShreyagaur/LG-Secure.git
cd LG-Secure
