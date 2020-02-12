#!/bin/bash
sudo apt update
sudo apt install nginx -y
sudo apt install git -y

user="admin"
path="/var/www/trivago"

sudo mkdir $path
sudo chown -R $user:$user $path

sudo echo "<h1>Welcome to Trivago</h1>" > "$path"/index.html

sudo cat > /etc/nginx/sites-available/trivago.conf <<EOS
# https://www.digitalocean.com/community/tools/nginx#?0.domain=react.actualit.info&0.path=%2Fvar%2Fwww%2Ftrivago&0.document_root=&0.ipv4=&0.https=false&0.php=false&0.fallback_html
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