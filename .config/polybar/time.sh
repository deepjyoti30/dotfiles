#!/bin/sh

# So this script will make the clock work in 12-hour format
HOUR=$(date +%H)
MIN=$(date +%M)
TWELVE=12
ICON=

if [ $HOUR -gt $TWELVE ];then
    NEW_HOUR=$(($HOUR-$TWELVE))
    echo "$ICON $NEW_HOUR:$MIN P.M"
else
    echo "$ICON $HOUR:$MIN A.M"
fi