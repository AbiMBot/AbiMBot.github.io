@echo off

for /d %%i in (*) do python thumbnailer.py -r %%i -h 200

python updateMaifest.py