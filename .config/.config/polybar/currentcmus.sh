#!/bin/bash

# Uses cmus-remote to show song

# First Check if cmus is running.
FLAG=0

APPS=("cmus rhythmbox")

for APP in $APPS
do
    pat="([^\w-]$APP)"
    if ps ux | grep -P $pat | grep -vq grep; then
        if [ $APP == "cmus" ]; then
            FLAG=1
        elif [ $APP == "rhythmbox" ]; then
            FLAG=2
        fi
    fi
done

if [ $FLAG == 1 ]; then
    # First method

    TITLE=$( cmus-remote -Q | grep title | cut -d " " -f 3- )
    # Sometimes this string turns out empty

    if [ -n "$TITLE" ];
    then
        echo ${TITLE[@]:0:45}
    else
        # Second method

        # Get the filename
        FILENAME=( $(cmus-remote -Q | grep -i "file") )
        # Remove file from the beginning
        FILENAME=${FILENAME[@]//"file"/""}
        # Remove the .mp3 too
        FILENAME=${FILENAME[@]//".mp3"/""}
        # Get just the basename
        SONG=$(basename "$FILENAME")
        echo "${SONG[@]:0:45}"
    fi
elif [ $FLAG == 2 ]; then
    ARR=($(pacmd list-sink-inputs | grep -i "media.title"))
    # Remove the "
    OUT=${ARR[@]//'"'/''}
    # Remove the media.title
    SONG=${OUT[@]:14: 35}
    echo "$SONG"
else
    echo ""
fi
