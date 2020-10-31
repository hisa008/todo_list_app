var btn = document.getElementById('task_btn');
btn.addEventListener('click', function () {
    window.alert('クリック！');
}, false);
var list = document.getElementsByTagName('a');
for (var i = 0, len = list.length; i < len; i++) {
    window.alert(list.item(i));
}
