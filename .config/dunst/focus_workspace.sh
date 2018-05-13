#!/bin/sh

if [ "$4" == "franz" ]; then
  wmctrl -x -R Franz -b add,demands_attention
fi
