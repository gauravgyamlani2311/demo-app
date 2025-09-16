#!/bin/bash
echo "Configuring Nginx..."

# Create a new Nginx configuration file
cat > /etc/nginx/sites-available/sockista <<EOF
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    # Set the root directory to your application's folder
    root /var/www/html/sockista;

    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EOF

# Remove the default Nginx configuration
rm /etc/nginx/sites-enabled/default

# Enable your new site configuration by creating a symbolic link
ln -s /etc/nginx/sites-available/sockista /etc/nginx/sites-enabled/

echo "Nginx configuration complete."