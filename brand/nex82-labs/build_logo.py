"""Create outlined NEX82 LABS SVGs using the existing Neo Latina brand font.
Usage: python build_logo.py /path/to/neo-latina.otf
Requires fonttools. Outlines have no runtime font dependency.
"""
from pathlib import Path
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
font=TTFont(sys.argv[1]);glyphs=font.getGlyphSet();cmap=font.getBestCmap()
out=Path(__file__).resolve().parent

def glyph(letter):
 name=cmap[ord(letter)];p=SVGPathPen(glyphs);glyphs[name].draw(p);b=BoundsPen(glyphs);glyphs[name].draw(b)
 return p.getCommands(),b.bounds,font['hmtx'][name][0]

# Match the existing wordmark's six glyph positions, tall separator and cap height.
main=[];scale=174/516
for letter,left in zip('NEX|82',[360,615,808,1070,1184,1412]):
 path,bounds,_=glyph(letter);x=left-242-bounds[0]*scale
 main.append(f'<path d="{path}" transform="translate({x:.6f} 290) scale({scale:.8f} {-scale:.8f})"/>')

# Smaller centred designation; same brand font with deliberate tracking.
scale=82/516;tracking=16;cursor=0;letters=[];minimum=1e9;maximum=-1e9
for letter in 'LABS':
 path,bounds,advance=glyph(letter)
 letters.append((path,cursor));minimum=min(minimum,cursor+bounds[0]*scale);maximum=max(maximum,cursor+bounds[2]*scale)
 cursor+=advance*scale+tracking
shift=720-(minimum+maximum)/2
labs=[f'<path d="{path}" transform="translate({x+shift:.6f} 499) scale({scale:.8f} {-scale:.8f})"/>' for path,x in letters]
for variant,colour in [('white','#ffffff'),('navy','#142438')]:
 svg='''<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="550" viewBox="0 0 1440 550" role="img" aria-labelledby="title desc">
<title id="title">NEX82 Labs</title><desc id="desc">NEX82 wordmark with LABS centred underneath, using the original Neo Latina brand font.</desc>
'''+f'<g fill="{colour}">'+''.join(main+labs)+'</g></svg>\n'
 (out/f'nex82-labs-{variant}.svg').write_text(svg)
(out/'preview.html').write_text('''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>NEX82 Labs logo review</title><style>*{box-sizing:border-box}body{margin:0;background:#e9edf1;font-family:Arial,sans-serif}.sheet{display:grid;grid-template-columns:1fr 1fr;min-height:100vh}.tile{display:flex;align-items:center;justify-content:center;padding:70px 40px}.dark{background:#101c2b}.light{background:#f5f6f7}.tile img{width:100%;max-width:650px;height:auto}@media(max-width:700px){.sheet{grid-template-columns:1fr}.tile{min-height:50vh;padding:40px 24px}}</style><div class="sheet"><div class="tile dark"><img src="nex82-labs-white.svg" alt="NEX82 Labs white logo"></div><div class="tile light"><img src="nex82-labs-navy.svg" alt="NEX82 Labs navy logo"></div></div></html>''')
print('Created two fully outlined SVGs; original brand glyphs, no font dependency.')
