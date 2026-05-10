# Samuel Fronthaler Portfolio

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Proxmox](https://img.shields.io/badge/proxmox-%23E57000.svg?style=for-the-badge&logo=proxmox&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

A modern, high-performance personal portfolio website built with **React**, **Vite**, and **Framer Motion**. Featuring a clean "artsy-tech" aesthetic, a unified works gallery, and a self-hosted ecosystem dashboard.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite for lightning-fast builds.
- **Dynamic Animations**: Smooth scroll reveals and interactive elements powered by Framer Motion.
- **Unified Works Gallery**: A compact showcase of GitHub repositories, YouTube DJ sets, and Digital Art.
- **Homelab Integration**: A dedicated section for self-hosted infrastructure details.
- **Premium Aesthetics**: High-contrast light mode with custom typography and glassmorphism.

---

## 🛠️ Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/)

### Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/codesamu/website.git
   cd website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🏠 Deployment on Proxmox (Ubuntu LXC)

This guide walks you through deploying this site on a **Proxmox LXC container** using **Nginx**.

### 1. Create the LXC
- **Template**: Ubuntu 22.04 or 24.04.
- **Resources**: 512MB RAM, 1 Core, 4GB Disk is plenty.

### 2. Install Node.js & Nginx
Inside the LXC console:
```bash
apt update && apt upgrade -y
apt install -y curl git nginx

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs
```

### 3. Deploy the Site
```bash
cd /var/www
git clone https://github.com/codesamu/website.git
cd website

# Install and Build
npm install
npm run build
```

### 4. Configure Nginx
Create a new Nginx config:
```bash
nano /etc/nginx/sites-available/portfolio
```

Add the following configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.xyz; # e.g., samudev.xyz

    root /var/www/website/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable the site and restart Nginx:
```bash
ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

### 5. SSL & Reverse Proxy
If you are using **Nginx Proxy Manager** or a similar reverse proxy on your Proxmox cluster:
1. Point your domain (e.g., `samudev.xyz`) to your LXC's internal IP.
2. Enable SSL (Let's Encrypt).

---

## 📜 License
MIT License. Feel free to use this as a template for your own portfolio.
