const _0x2142e1=_0x4940;function _0x4940(_0x216d00,_0x5e0bf2){const _0x31a74e=_0x31a7();return _0x4940=function(_0x494092,_0x374a06){_0x494092=_0x494092-0x152;let _0x1d61ae=_0x31a74e[_0x494092];return _0x1d61ae;},_0x4940(_0x216d00,_0x5e0bf2);}(function(_0x3868dc,_0x36baf3){const _0x473cff=_0x4940,_0x5fd579=_0x3868dc();while(!![]){try{const _0x20dec1=parseInt(_0x473cff(0x178))/0x1*(-parseInt(_0x473cff(0x15e))/0x2)+parseInt(_0x473cff(0x155))/0x3+parseInt(_0x473cff(0x16c))/0x4+parseInt(_0x473cff(0x15f))/0x5*(parseInt(_0x473cff(0x159))/0x6)+-parseInt(_0x473cff(0x16b))/0x7*(parseInt(_0x473cff(0x156))/0x8)+parseInt(_0x473cff(0x174))/0x9*(parseInt(_0x473cff(0x15b))/0xa)+-parseInt(_0x473cff(0x165))/0xb;if(_0x20dec1===_0x36baf3)break;else _0x5fd579['push'](_0x5fd579['shift']());}catch(_0x18bb06){_0x5fd579['push'](_0x5fd579['shift']());}}}(_0x31a7,0x3bb6c));const Amazon=require(_0x2142e1(0x15a)),{MessageType,Mimetype}=require(_0x2142e1(0x152)),fs=require('fs'),ffmpeg=require('fluent-ffmpeg'),{execFile}=require(_0x2142e1(0x167)),cwebp=require('cwebp-bin'),Language=require('../language'),Lang=Language[_0x2142e1(0x173)](_0x2142e1(0x16a)),SD=_0x2142e1(0x158);function _0x31a7(){const _0x2a32ba=['-qscale\x201','image','client','save','2624138NLacwc','-vsync\x200','child_process','sticker.webp','end','spammer','547260ubFTym','675448uVpcJL','jid','ST_ST','output.webp','-lossless\x201','ST_NEED','-loop\x200','getString','1197bVptPj','readFileSync','sendMessage','reply_message','44695pJLpwC','@adiwajshing/baileys','-s\x20512x512','text','952239zyccmW','8lCqhFN','quotedMessage','Sticker\x20Spam','598062xXMtTr','../events','8230ghcQLc','sticker','addCommand','6JAYmqH','5idQtuN','-an'];_0x31a7=function(){return _0x2a32ba;};return _0x31a7();}Amazon[_0x2142e1(0x15d)]({'pattern':'sticker\x20spam$','fromMe':!![],'desc':SD},async(_0x3388d2,_0xfad48c)=>{const _0x532f1b=_0x2142e1;if(!_0x3388d2[_0x532f1b(0x177)])return await _0x3388d2[_0x532f1b(0x163)][_0x532f1b(0x176)](_0x3388d2[_0x532f1b(0x16d)],Lang[_0x532f1b(0x171)],MessageType[_0x532f1b(0x154)]);if(_0x3388d2[_0x532f1b(0x177)][_0x532f1b(0x15c)])return await _0x3388d2[_0x532f1b(0x163)][_0x532f1b(0x176)](_0x3388d2[_0x532f1b(0x16d)],Lang[_0x532f1b(0x16e)],MessageType[_0x532f1b(0x154)]);var _0x12c7f2=await _0x3388d2[_0x532f1b(0x163)]['downloadAndSaveMediaMessage']({'key':{'remoteJid':_0x3388d2[_0x532f1b(0x177)][_0x532f1b(0x16d)],'id':_0x3388d2[_0x532f1b(0x177)]['id']},'message':_0x3388d2['reply_message']['data'][_0x532f1b(0x157)]});_0x3388d2[_0x532f1b(0x177)]['video']===![]&&_0x3388d2['reply_message'][_0x532f1b(0x162)]&&execFile(cwebp,[_0x12c7f2,'-o',_0x532f1b(0x16f)],async _0x3504ec=>{if(_0x3504ec)throw _0x3504ec;setInterval(async()=>{const _0x11a573=_0x4940;await _0x3388d2[_0x11a573(0x176)](fs[_0x11a573(0x175)]('./output.webp'),MessageType['sticker']);},0xc8);}),ffmpeg(_0x12c7f2)['outputOptions'](['-y','-vcodec\x20libwebp',_0x532f1b(0x170),_0x532f1b(0x161),'-preset\x20default',_0x532f1b(0x172),_0x532f1b(0x160),_0x532f1b(0x166),_0x532f1b(0x153)])[_0x532f1b(0x164)](_0x532f1b(0x168))['on'](_0x532f1b(0x169),async()=>{setInterval(async()=>{const _0x54fd6a=_0x4940;await _0x3388d2[_0x54fd6a(0x176)](fs[_0x54fd6a(0x175)](_0x54fd6a(0x168)),MessageType[_0x54fd6a(0x15c)]);},0xc8);});});
