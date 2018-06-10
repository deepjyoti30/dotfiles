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

ICON=""

if [ $FLAG != 0 ];then
    echo "$ICON"
else
    echo ""
fi
