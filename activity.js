var mini = document.querySelectorAll('.mini');
for (var i = 0; i < mini.length; i++) {
  mini[i].onclick = function() {
    document.getElementById('bigimg').src = this.dataset.image;
  };
}
