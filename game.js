var yozawiza = {title:'夜桜ウィザード　-Yosakura Wizard VR-', price:'本体価格　1010円', text1:'夜桜ウィザードは日本の陰陽師をテーマとしたVR和風ステルスアクションゲーム。', text2:'「2017年度日本ゲーム大賞」アマチュア部門最終選考進出作品「怨挟師」が面白くなってSteamで販売中！', text3:'古来に存在せし和の世界数多の妖に支配されたこの世界で、唯一悪を祓える者', text4:'その者は妖を封じる陰陽術の使い手、そして封じた妖力を武器へと変える能力「ウィザード」の力を有していた', text5:'其の者の名こそ───「夜桜ウィザード」', text6:'VRならではのリアリティ溢れる戦闘アクションは勿論！壮麗なグラフィックを駆使した、桜が舞う美しい世界を360度で楽しめる！'};
var count = 0;
for(var p in yozawiza){
  if (count === 0) {
    var h2 = document.createElement('h2');
    h2.textContent = yozawiza[p];
    document.getElementById('yozawiza').appendChild(h2);
  } else {
    var pp = document.createElement('p');
    pp.textContent = yozawiza[p];
    document.getElementById('yozawiza').appendChild(pp);
  }
  count++;
}

/*
var co2 = {title:'CO2二酸化炭素バスター！！', price:'1プレイ 100円', text1:'CO2が発生しすぎているという環境問題の観点からCO2を倒そう！という発想でできたゲーム', text2:'より多くのCO2を倒してスコアを稼げ！', text3:'CO2を倒すときの音がなんだかくせになりそう', text4:'今もなお改良中', text5:'完成品をどうぞご期待ください！'};
var count = 0;
for(var p in co2){
  if (count === 0) {
    var h2 = document.createElement('h2');
    h2.textContent = co2[p];
    document.getElementById('co2').appendChild(h2);
  } else {
    var pp = document.createElement('p');
    pp.textContent = co2[p];
    document.getElementById('co2').appendChild(pp);
  }
  count++;
}


var macw = {title:'Make A Clean World', price:'1プレイ 100円', text1:'もしいろいろなものがポイ捨てされたまま街が海の底に沈んでしまったら？', text2:'というわけで我々がそのゴミ始末しましょう！', text3:'海に飛び込み見えてくるのは海に沈んだ街とゴミ、ゴミ、ゴミ…', text4:'そこらじゅうのゴミを撃って撃って撃ちまくれ！', text5:'今もなお改良中', text6:'完成品をどうぞご期待ください！'}
var count = 0;
for(var p in macw){
  if (count === 0) {
    var h2 = document.createElement('h2');
    h2.textContent = macw[p];
    document.getElementById('macw').appendChild(h2);
  } else {
    var pp = document.createElement('p');
    pp.textContent = macw[p];
    document.getElementById('macw').appendChild(pp);
  }
  count++;
}


var onkyoji = {title:'怨挟師', price:'1プレイ 300円', text1:'「2017年度日本ゲーム大賞」アマチュア部門最終選考進出作品「怨挟師」', text2:'2017年日本ゲーム対象のテーマである「挟む」をモチーフにした作品', text3:'今は「夜桜ウィザード」という名前に変わり、Steamで販売している', text4:'桜が舞うステージの中、敵の攻撃を挟んだり、五芒星で敵を挟んだりしてスコアを稼ぐことができる', text5:'武器はお札、刀、弓があり様々な武器を試すことができる', text6:'ふとした時に見える景色がとても綺麗な作品！'}
var count = 0;
for(var p in onkyoji){
  if (count === 0) {
    var h2 = document.createElement('h2');
    h2.textContent = onkyoji[p];
    document.getElementById('onkyoji').appendChild(h2);
  } else {
    var pp = document.createElement('p');
    pp.textContent = onkyoji[p];
    document.getElementById('onkyoji').appendChild(pp);
  }
  count++;
}


var fish = {title:'すくってぽいぽいVR', price:'1プレイ 100円', text1:'すくってぽいぽいVRは、夏祭りの代名詞とも言える金魚すくいを、VRにして再現したVR金魚すくいゲームです', text2:'VRならではの操作方法と、リアルさを追求した金魚、白熱のバトルなど、要素は盛りだくさん！', text3:'あなたは伝説の金の金魚をすくい上げることができるのか！？'}
var count = 0;
for(var p in fish){
  if (count === 0) {
    var h2 = document.createElement('h2');
    h2.textContent = fish[p];
    document.getElementById('fish').appendChild(h2);
  } else {
    var pp = document.createElement('p');
    pp.textContent = fish[p];
    document.getElementById('fish').appendChild(pp);
  }
  count++;
}


var cat = {title:'ねこまつり', price:'1プレイ 100円', text1:'ねこまつりはVRで自らが猫になって、夏祭りに行き屋台をより素早く駆け抜け、', text2:'より多くのお土産を取り高得点を目指すゲームです', text3:'シンプルな操作性で、屋台を駆け抜けよう！', text4:'屋台を走り抜けたあとは花火を楽しもう！'}
var count = 0;
for(var p in cat){
  if (count === 0) {
    var h2 = document.createElement('h2');
    h2.textContent = cat[p];
    document.getElementById('cat').appendChild(h2);
  } else {
    var pp = document.createElement('p');
    pp.textContent = cat[p];
    document.getElementById('cat').appendChild(pp);
  }
  count++;
}
*/





/*-----------------------------
スライドショー
-----------------------------*/
/*---夜桜ウィザード----------------------------------------------------*/
var game_images = ['game/game.png', 'game/game2.png', 'game/game3.png', 'game/game4.png', 'game/game5.png', 'game/game6.png'];
var game_current = 0;
var game_pageNum = function() {
	document.getElementById('game_page').textContent = (game_current + 1) + '/' + game_images.length;
};
var game_changeImage = function(num) {
	if (game_current + num >= 0 && game_current + num < game_images.length) {
		game_current += num;
		document.getElementById('game_image').src = game_images[game_current];
		game_pageNum();
	} else if (game_current + num < 0) {
		game_current = game_images.length -1;
		document.getElementById('game_image').src = game_images[game_current];
		game_pageNum();
	} else {
		game_current = 0;
		document.getElementById('game_image').src = game_images[game_current];
		game_pageNum();
	}
};

game_pageNum();

document.getElementById('game_prev').onclick = function() {
	game_changeImage(-1);
};
document.getElementById('game_next').onclick = function() {
	game_changeImage(1);
};


/*--CO2二酸化炭素バスター！！---------------------------------------------------*/
var co2_images = ['game/co2.png', 'game/co22.png', 'game/co23.png'];
var co2_current = 0;
var co2_pageNum = function() {
	document.getElementById('co2_page').textContent = (co2_current + 1) + '/' + co2_images.length;
};
var co2_changeImage = function(num) {
	if (co2_current + num >= 0 && co2_current + num < co2_images.length) {
		co2_current += num;
		document.getElementById('co2_image').src = co2_images[co2_current];
		co2_pageNum();
	} else if (co2_current + num < 0) {
		co2_current = co2_images.length -1;
		document.getElementById('co2_image').src = co2_images[co2_current];
		co2_pageNum();
	} else {
		co2_current = 0;
		document.getElementById('co2_image').src = co2_images[co2_current];
		co2_pageNum();
	}
};

co2_pageNum();

document.getElementById('co2_prev').onclick = function() {
	co2_changeImage(-1);
};
document.getElementById('co2_next').onclick = function() {
	co2_changeImage(1);
};


/*---怨挟師----------------------------------------------------------------*/
var onkyoji_images = ['game/onkyoji.png', 'game/onkyoji2.png', 'game/onkyoji3.png', 'game/onkyoji4.png', 'game/onkyoji5.png'];
var onkyoji_current = 0;
var onkyoji_pageNum = function() {
	document.getElementById('onkyoji_page').textContent = (onkyoji_current + 1) + '/' + onkyoji_images.length;
};
var onkyoji_changeImage = function(num) {
	if (onkyoji_current + num >= 0 && onkyoji_current + num < onkyoji_images.length) {
		onkyoji_current += num;
		document.getElementById('onkyoji_image').src = onkyoji_images[onkyoji_current];
		onkyoji_pageNum();
	} else if (onkyoji_current + num < 0) {
		onkyoji_current = onkyoji_images.length -1;
		document.getElementById('onkyoji_image').src = onkyoji_images[onkyoji_current];
		onkyoji_pageNum();
	} else {
		onkyoji_current = 0;
		document.getElementById('onkyoji_image').src = onkyoji_images[onkyoji_current];
		onkyoji_pageNum();
	}
};

onkyoji_pageNum();

document.getElementById('onkyoji_prev').onclick = function() {
	onkyoji_changeImage(-1);
};
document.getElementById('onkyoji_next').onclick = function() {
	onkyoji_changeImage(1);
};



/*---すくってぽいぽいVR-------------------------------------------------------*/
var fish_images = ['game/fish2.png', 'game/fish3.png'];
var fish_current = 0;
var fish_pageNum = function() {
	document.getElementById('fish_page').textContent = (fish_current + 1) + '/' + fish_images.length;
};
var fish_changeImage = function(num) {
	if (fish_current + num >= 0 && fish_current + num < fish_images.length) {
		fish_current += num;
		document.getElementById('fish_image').src = fish_images[fish_current];
		fish_pageNum();
	} else if (fish_current + num < 0) {
		fish_current = fish_images.length -1;
		document.getElementById('fish_image').src = fish_images[fish_current];
		fish_pageNum();
	} else {
		fish_current = 0;
		document.getElementById('fish_image').src = fish_images[fish_current];
		fish_pageNum();
	}
};

fish_pageNum();

document.getElementById('fish_prev').onclick = function() {
	fish_changeImage(-1);
};
document.getElementById('fish_next').onclick = function() {
	fish_changeImage(1);
};
