import os

_, _, files = next(os.walk('./images/misc'))
numMisc = len(files)

_, _, files = next(os.walk('./images/animegirls'))
numAnimeGirls = len(files)

_, _, files = next(os.walk('./images/beetle'))
numErrors = 0
numHorzBeetles = 0
numVertBeetles = 0

for f in files:
    if f[:3] == 'err' : numErrors      += 1
    if f[:4] == 'horz': numHorzBeetles += 1
    if f[:4] == 'vert': numVertBeetles += 1

print(f'numMisc: {numMisc}')
print(f'numAnimeGirls: {numAnimeGirls}')
print(f'numErrors: {numErrors}')
print(f'numHorzBeetles: {numHorzBeetles}')
print(f'numVertBeetles: {numVertBeetles}')
