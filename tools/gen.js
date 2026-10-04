// usage: node gen.js post.json outdir
const fs=require('fs'),path=require('path');
const [,,jf,out]=process.argv; const post=JSON.parse(fs.readFileSync(jf,'utf8'));
fs.mkdirSync(out,{recursive:true});
const F=__dirname;
const css=`@font-face{font-family:H;src:url(file://${F}/sharp.ttf)}
@font-face{font-family:B;src:url(file://${F}/carlito.ttf)}
*{box-sizing:border-box}body{margin:0;width:1080px;height:1350px;position:relative;overflow:hidden;background:#fff}
.bar{position:absolute;left:90px;top:150px;width:111px;height:11px;background:#2563EB}
.lbl{position:absolute;left:90px;top:222px;font:58px H;color:#2563EB;letter-spacing:-1.5px}
.num{position:absolute;left:84px;top:365px;font:300px/1 H;color:#131A2A;letter-spacing:-6px;white-space:nowrap}
.num.m{font-size:220px;top:400px}
.big{position:absolute;left:90px;top:360px;width:920px;font:96px/1.12 H;color:#131A2A;letter-spacing:-2.5px}
.sub{font:52px H;color:#131A2A;letter-spacing:-1.5px;margin-bottom:22px}
.blk{position:absolute;left:90px;width:900px}
.txt{font:36px/1.6 B;color:#4B5563;letter-spacing:.3px}
.src{position:absolute;left:90px;right:90px;top:1203px;font:26px B;color:#6B7280}
.ft{position:absolute;left:90px;right:90px;top:1272px;font:28px B;color:#6B7280;display:flex;justify-content:space-between}
.photo .ft,.photo .src{color:rgba(255,255,255,.85)}
.bg{position:absolute;inset:0;background-size:cover;background-position:center}
.shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,.55) 55%,rgba(0,0,0,.85) 100%)}
.ph{position:absolute;left:90px;right:90px;bottom:170px}
.ph h1{margin:0 0 30px;font:84px/1.12 H;color:#fff;letter-spacing:-2px}
.ph p{margin:0;font:36px/1.5 B;color:rgba(255,255,255,.92)}
y{color:#FFD21F}b2{color:#2563EB}
.hl{background:#2563EB;color:#fff;padding:0 14px}
.arrow{position:absolute;right:90px;top:780px;font:260px H;color:#2563EB}
`;
const n=post.slides.length;
post.slides.forEach((s,i)=>{
 let h='';
 const foot=`${s.src?`<div class=src>${s.src}</div>`:''}<div class=ft><span>100cargo.kz</span><span>${i+1}/${n}</span></div>`;
 if(s.type==='photo'){
  const bg=s.img?`<div class=bg style="background-image:url(file://${path.resolve(s.img)})"></div>`:`<div class=bg style="background:linear-gradient(135deg,#3a3f47,#15181d)"><div style="position:absolute;top:300px;width:100%;text-align:center;font:40px B;color:#888">[ ФОТО: ${s.photo} ]</div></div>`;
  h=`<body class=photo>${bg}<div class=shade></div><div class=ph><h1>${s.title}</h1>${s.text?`<p>${s.text}</p>`:''}</div>${foot}`;
 } else if(s.type==='num'){
  h=`<body><div class=bar></div><div class=lbl>${s.label}</div><div class="num ${s.small?'m':''}">${s.num}</div><div class=blk style="top:${s.small?660:690}px">${s.sub?`<div class=sub>${s.sub}</div>`:''}<div class=txt>${s.text||''}</div></div>${foot}`;
 } else { // text
  h=`<body><div class=bar></div><div class=lbl>${s.label}</div><div class=big>${s.title}</div><div class=blk style="top:${s.top||820}px"><div class=txt>${s.text||''}</div></div>${s.arrow?'<div class=arrow>↑</div>':''}${foot}`;
 }
 fs.writeFileSync(path.join(out,`s${i+1}.html`),`<html><head><meta charset=utf-8><style>${css}</style></head>${h}</body><script>document.fonts.ready.then(()=>document.querySelectorAll('.num').forEach(e=>{let f=parseFloat(getComputedStyle(e).fontSize);while(e.getBoundingClientRect().width>910&&f>60){f-=4;e.style.fontSize=f+'px'}}));</script></html>`);
});
