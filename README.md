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
- [Node.js](https://nodejs.org/) (v20.19.0+ or v22.12.0+ recommended)
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

## 🔧 Troubleshooting

### Node.js Version Error
If you see `Vite requires Node.js version 20.19+ or 22.12+`, upgrade your Node version in the LXC:
```bash
# Upgrade to Node 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

### "Cannot find native binding" Error
This is a known issue with `npm` and optional dependencies (like `rolldown`). Fix it with:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Network Accessibility (LXC)
If you can't reach the site from your local network, ensure Vite is listening on all interfaces:
1. The `package.json` scripts have been updated with `--host`.
2. When running `npm run dev`, you should see a **Network** URL (e.g., `http://192.168.x.x:5173`). Use that IP in your browser.

### "Blocked Host" Error
If you see `Blocked request. This host ("samudev.xyz") is not allowed`, it means Vite is blocking your domain for security. 
1. I have already whitelisted `samudev.xyz` in your `vite.config.js`.
2. If you use a new domain, add it to the `allowedHosts` array in that file.

---

## 📜 License
MIT License. Feel free to use this as a template for your own portfolio.
