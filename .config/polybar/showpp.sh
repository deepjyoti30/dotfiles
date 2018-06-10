#!/usr/bin/sh

# First Check if cmus is running.
FLAG=0

APPS=("cmus")

for APP in $APPS
do
    pat="([^\w-]$APP)"
    if ps ux | grep -P $pat | grep -vq grep; then
        if [ $APP == "cmus" ]; then
            FLAG=1
        fi
    fi
done

if [ $FLAG != 0 ];then
    # First check the status
    PLAYING="status playing"
    PAUSED="status paused"

    STATUS=$(cmus-remote -Q | grep "status")

    if [ "$STATUS" == "$PAUSED" ];then
        echo ""
    else
        echo ""
    fi
else
    echo ""
fi
