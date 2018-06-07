#!/usr/bin/sh

cmus-remote -u

PLAYING="status playing"
PAUSED="status paused"

STATUS=( $(cmus-remote -Q | grep -i "status") )

if [ "$STATUS" == "$PLAYING" ];then
    echo "" 
else
    echo "" 
fi