#!/bin/bash
cd /tmp/
git clone git@github.com:CPNV-ES/Triakow.git
cd Triakow/
npm i
npm run build
cd ..
sudo rm -rf /var/www/Triakow/
sudo mv Triakow/ /var/www/
sudo systemctl restart nginx.service