// This is an auto-generated file, built with ./tools/buildCss.js

var css = ".smt-number-color{color:black;}.smt-number-selected{color:white;}.smt-background-color{background-color:white;}.smt-face-color{background-color:rgb(238, 238, 238);}.smt{width:100%;cursor:default;}.smt-clock-cnt{padding:2em 1em 1em 1em;}.smt-clock{width:100%;position:relative;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;}.smt-clock::before{content:\"\";display:block;padding-top:100%; 	}.smt-clock>*{width:100%;height:100%;position:absolute;top:0;left:0;}.smt-face{border-radius:100%;}.smt-ns{transform:scale(1);transition:transform 0.3s, opacity 0.05s;display:flex;}.smt-h-cnt-cnt{display:flex;align-items:center;}.smt-h-cnt-cnt-dot{justify-content:center;}.smt-h-cnt{height:1.65em;display:flex;transition:transform 0.1s;transform-origin:100% 50%;width:50%;align-items:center;transform:rotate(1.5708rad);}.smt-h-dot{height:0.3em;width:0.3em;border-radius:50%;}.smt-h{height:0.1em;flex:1;}.smt-n-box{width:100%;height:100%;top:0;left:0;position:absolute;display:flex;align-items:center;}.smt-n-cnt{width:100%;display:flex;align-items:center;padding-left:0.5em;}.smt-n-cnt>*{float:left;}.smt-n{width:1.3em;text-align:center;line-height:1.3em;height:1.3em;transition:color 0.1s;}.smt-clock *::selection{background:transparent;}.smt-n-pad{width:0.8em;height:1px;}.smt-n-cnt-1{transform:rotate(120deg);}.smt-n-1{transform:rotate(-120deg);}.smt-n-cnt-2{transform:rotate(150deg);}.smt-n-2{transform:rotate(-150deg);}.smt-n-cnt-3{transform:rotate(180deg);}.smt-n-3{transform:rotate(-180deg);}.smt-n-cnt-4{transform:rotate(210deg);}.smt-n-4{transform:rotate(-210deg);}.smt-n-cnt-5{transform:rotate(240deg);}.smt-n-5{transform:rotate(-240deg);}.smt-n-cnt-6{transform:rotate(270deg);}.smt-n-6{transform:rotate(-270deg);}.smt-n-cnt-7{transform:rotate(300deg);}.smt-n-7{transform:rotate(-300deg);}.smt-n-cnt-8{transform:rotate(330deg);}.smt-n-8{transform:rotate(-330deg);}.smt-n-cnt-10{transform:rotate(30deg);}.smt-n-10{transform:rotate(-30deg);}.smt-n-cnt-11{transform:rotate(60deg);}.smt-n-11{transform:rotate(-60deg);}.smt-n-cnt-0{transform:rotate(90deg);}.smt-n-0{transform:rotate(-90deg);}.smt-b,.smt-b-spacer{width:1.65em;}.smt-b-spacer{height:1px;}.smt-b{height:1.65em;border-radius:1.65em;}.smt-b-pos{width:0.355em;transition:width 0.1s;height:1px;display:inline-block;}.smt-b-pos-pm{width:2.40em;}.smt-clock-btn{padding-top:2em;display:flex;justify-content:flex-end;}.smt-time{color:white;font-size:350%;padding:0.3em;text-align:right;}.smt-time .smt-hour,.smt-time .smt-minute{font-size:100%;width:1.3em;background:transparent;border:0;color:white;outline-width:0;}.smt-time .smt-hour{text-align:right;}button.smt-enforce-font-size{font-size:100%;}";
var enabled = false;

function enable () {
	if (enabled) return;
	enabled = true;

	var el = document.createElement('style');
	el.innerHTML = css;
	(document.head || document.body).appendChild(el);
}

export {
	enable
}