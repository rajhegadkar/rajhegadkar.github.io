# 🌐 Rajendra Hegadkar — IT Infrastructure Engineer Portfolio

> A responsive, high-performance, and cyber-themed portfolio website designed for **GitHub Pages**. Tailored specifically for **IT Infrastructure, Systems Administration, Network Security, and Cloud Infrastructure** roles.

![Portfolio Preview Banner](https://img.shields.io/badge/Theme-Cyber%20%7C%20Terminal%20Green-4dffaa?style=for-the-badge&logo=gnubash&logoColor=070b0a)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=for-the-badge)
![GitHub Pages Ready](https://img.shields.io/badge/Deployment-GitHub%20Pages%20Ready-success?style=for-the-badge&logo=github)

---

## 🚀 Live Demo & Repository Structure

- **Live URL**: `https://rajhegadkar.github.io/`
- **Admin**: **Rajendra Hegadkar** (Pune, Maharashtra, India)
- **Role**: Senior System Executive | IT Infrastructure Engineer | Systems Engineer

```text
Portfolio/
├── index.html                  # Semantic, accessible HTML5 structure
├── style.css                   # Custom cyber/dark design system & responsive queries
├── script.js                   # Interactive bash terminal, filters, clipboard, scrollspy
├── Rajendra_Hegadkar_Resume.pdf# Downloadable resume file
└── README.md                   # Documentation and GitHub Pages deployment guide
```

---

## 🎯 Key Features

1. **Cyber & Enterprise Infrastructure Aesthetics**:
   - Deep obsidian background (`#070b0a`) with glowing terminal-mint accents (`#4dffaa`).
   - SVG grid pattern with radial gradient light mask.
   - Frosted-glass navigation bar with blur effect (`backdrop-filter: blur(20px)`).

2. **Interactive Linux Bash Terminal (`sysadmin@rajendra:~`)**:
   - Emulates an authentic bash terminal with live system status indicators.
   - Interactive CLI prompt supporting commands: `help`, `whoami`, `skills`, `projects`, `experience`, `contact`, `status`, `uptime`, `sudo`, and `clear`.
   - Quick command suggestion pills for one-click execution.

3. **Architecture Flow Visualizer**:
   - Visual diagram for the **Self-Hosted Remote Access Gateway** project:
     `External User (HTTPS)` ➔ `Cloudflare Tunnel (Zero Inbound Ports)` ➔ `Linux Gateway (Apache Reverse Proxy)` ➔ `Windows RDP / Linux SSH`.

4. **Multi-Category Project Filtering**:
   - Filter projects instantly by category: **All**, **Security & Gateways**, **Cloud & AWS**, and **Self-Hosted & Linux**.

5. **One-Click Clipboard Copy with Toast Feedback**:
   - Interactive copy buttons for email (`hegadkarraj@gmail.com`) and phone (`+91 9284106151`) with toast notifications.

6. **Animated Performance Metrics & Stat Counters**:
   - Smooth counting animations for **3+ Years Experience**, **600+ IT Assets**, and **2 Enterprise Sites**.

7. **100% Mobile & Tablet Responsive**:
   - Fluid typography using CSS `clamp()`.
   - Mobile slide-down navigation drawer with focus management and backdrop blur.
   - Fully optimized touch targets (44px+).

---

## 🛠️ Step-by-Step: How to Deploy to GitHub Pages

### Method 1: Deploy as your Primary User Site (`<username>.github.io`)

1. **Create a new GitHub repository**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Name the repository exactly: `<your-github-username>.github.io` (e.g., `hegadkarraj.github.io`).
   - Set it to **Public**.

2. **Push the portfolio files**:
   Open PowerShell in this portfolio directory:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Rajendra Hegadkar IT Infrastructure Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
   git push -u origin main
   ```

3. **Verify Deployment**:
   - Within 1–2 minutes, your website will be live at:
     `https://<your-github-username>.github.io`

---

### Method 2: Deploy as a Project Repository (`portfolio`)

1. **Create a repository named `portfolio`** (or any name you prefer) on GitHub.
2. **Push your code**:
   ```powershell
   git init
   git add .
   git commit -m "Deploy IT Infrastructure Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/portfolio.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - In your repository, click **Settings** ➔ **Pages** (under Code and automation).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/(root)`.
   - Click **Save**.
   - Your site will be live at:
     `https://<your-github-username>.github.io/portfolio/`

---

## 💻 Testing Locally

To preview and test the site locally:

### Option A: Using Python built-in HTTP server
```powershell
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option B: Using VS Code Live Server
1. Open the folder in VS Code: `code .`
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 👤 Profile & Contact Details

- **Name**: Rajendra Hegadkar
- **Current Position**: Senior System Executive at nCircletech Pvt Ltd.
- **Location**: Pune, Maharashtra, India
- **Email**: [hegadkarraj@gmail.com](mailto:hegadkarraj@gmail.com)
- **Phone**: [+91 9284106151](tel:+919284106151)
- **Education**: Master of Computer Applications (MCA), Pune University
- **Certifications**: CCNA (Cisco Certified Network Associate), CEH (Certified Ethical Hacker)

---

## 📄 License
Released under the [MIT License](https://opensource.org/licenses/MIT). Free to use and customize!
