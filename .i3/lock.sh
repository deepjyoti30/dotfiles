#!/usr/bin/sh

rm /tmp/screen.png

scrot /tmp/screen.png

convert /tmp/screen.png -scale 10% -scale 1000% /tmp/screen.png

composite -gravity Center ~/.i3/lock.png /tmp/screen.png /tmp/screen.png

convert -pointsize 35 -fill black -draw 'text 490,660 "Type Password to Unlock"' /tmp/screen.png /tmp/screen.png

i3lock -i /tmp/screen.png --radius 109 --ringvercolor=FFFFFFCC --ringcolor=FFFFFFCC --keyhlcolor=000000CC --insidecolor=00000000
