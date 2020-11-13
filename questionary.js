document.getElementById('form').onsubmit = function(){
  if(Cookies.get('answered') === 'yes') {
    window.alert('回答済みです。アンケートの回答は1回しかできません。');
    return false;
  } else {
    Cookies.set('answered', 'yes', {expires: 1});
  }
};

document.getElementById('remove').onclick = function() {
  Cookies.remove('answered');
};
