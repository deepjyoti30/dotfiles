#!/usr/bin/sh

while "true"; do
    notify-send "Now playing" "$(mpc current --wait)" -t 2000
done