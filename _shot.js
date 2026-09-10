const puppeteer=require('puppeteer');
const OUT='/private/tmp/claude-501/-Users-apple-Documents-GitHub-aslot-wealth/de704492-b46b-4e8a-9686-733fc6ad485b/scratchpad';
const W=+process.argv[2],H=+process.argv[3],TAG=process.argv[4];
(async()=>{const b=await puppeteer.launch();const p=await b.newPage();
await p.setViewport({width:W,height:H,isMobile:W<500,hasTouch:W<500});
await p.goto('http://localhost:3000',{waitUntil:'networkidle0',timeout:90000});
await new Promise(r=>setTimeout(r,1500));
await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=200){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,40));}window.scrollTo(0,0);});
await new Promise(r=>setTimeout(r,1200));
const total=await p.evaluate(()=>document.body.scrollHeight);let i=0;
for(let y=0;y<total&&i<16;y+=H,i++){await p.evaluate(yy=>window.scrollTo(0,yy),y);await new Promise(r=>setTimeout(r,450));await p.screenshot({path:`${OUT}/${TAG}-${String(i).padStart(2,'0')}.png`});}
console.log('shots',i);await b.close();})();
