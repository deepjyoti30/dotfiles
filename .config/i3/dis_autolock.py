import os
from pathlib import Path

configPath = os.path.join(str(Path.home()), '.i3', 'config')
lineInstance = 'autolock'
comment = '#'

wrstream = open(configPath, 'r+')

while True:
    line = wrstream.readline()
    if not line:
        break
    
    if lineInstance in line:
        curpos = wrstream.tell()
        length = len(line)
        wrstream.seek(curpos - length)

        if comment in line:
            newLine =  line[1:]
        else:
            newLine = '#' + line

        wrstream.write(newLine)

        break
