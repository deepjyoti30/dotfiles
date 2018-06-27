#!/usr/bin/sh

# Script will grab a random wallpaper from unsplash.com

# sleep 50s

#time_stat=$(date +"%h-%m-%y-%H-%M-%S")
Wall_Name="/tmp/Random.jpg"

wget https://source.unsplash.com/random/1366x768 -O $Wall_Name

# The wall will be set by nitrogen

nitrogen --set-auto $Wall_Name