@echo off

for /d %%i in (*) do python thumbnailer.py -r %%i -h 300

python updateMaifest.py