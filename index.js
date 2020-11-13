/*スライドショー*/
var images = ['slide/img1.png', 'slide/img2.png', 'slide/img3.png', 'slide/img4.png', 'slide/img5.png'];//720×500
var current = 0;
var pageNum = function() {
	document.getElementById('page').textContent = (current + 1) + '/' + images.length;
};
var changeImage = function(num) {
	if (current + num >= 0 && current + num < images.length) {
		current += num;
		document.getElementById('main_image').src = images[current];
		pageNum();
	} else if (current + num < 0) {
		current = images.length -1;
		document.getElementById('main_image').src = images[current];
		pageNum();
	} else {
		current = 0;
		document.getElementById('main_image').src = images[current];
		pageNum();
	}
};

pageNum();//最初からページ数を出すため

document.getElementById('prev').onclick = function() {
	changeImage(-1);
};
document.getElementById('next').onclick = function() {
	changeImage(1);
};



/*ニュース*/
var news = {data11:'2018/03/03 夜桜ウィザードをSteamにて配信を開始', data10:'2018/03/02 夜桜ウィザード公式サイトをリリース', data9:'2018/02/26 Epic Fridayに選ばれました', data8:'2018/02/18 東京VRコンテンツfes.2018 Springに出展', data7:'2018/02/18 学生VR Meet Upに参加しました', data6:'2018/02/03 けいはんな科学体験フェスティバルに出展しました', data5:'2018/01/12 Unreal Dev Grantsに採用されました', data4:'2018/10/16 ホームページをリニューアルしました', data3:'2017/09/06 開発ブログをリリースしました',  data2:'2017/06/01 日本学生バーチャルリアリティ連盟を発足', data1:'2017/05/23 ホームページを開設しました'};
for (var p in news) {
	var pp = document.createElement('p');
	pp.textContent = news[p];
	document.getElementById('news_text').appendChild(pp);
}
