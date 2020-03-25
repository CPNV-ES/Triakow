#!/bin/bash
sudo apt update
sudo apt install nginx git -y
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install build-essential nodejs -y

user="admin"
path="/var/www/Triakow/build"

sudo cat > /etc/nginx/sites-available/trivago.conf <<EOS
server {
	listen 80;
	listen [::]:80;

	server_name react.actualit.info;
	root $path;

	# index.html fallback
	location / {
		try_files \$uri \$uri/ /index.html;
	}
}
EOS

defaultWebsitePath="/etc/nginx/sites-enabled/default"

echo "Removing $defaultWebsitePath"
sudo rm $defaultWebsitePath
echo "Enabling website"
sudo ln -s /etc/nginx/sites-available/trivago.conf /etc/nginx/sites-enabled
echo "Restarting Nginx"
sudo systemctl restart nginx