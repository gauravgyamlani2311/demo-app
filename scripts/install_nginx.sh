#!/bin/bash
# Install phase script to update and install Nginx web server

echo "Starting install phase..."

sudo apt-get update
sudo apt-get install -y nginx

echo "Install phase completed."
