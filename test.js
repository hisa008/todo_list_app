// let s = document.getElementById('food');
// let opts = s.childNodes;

// for (let i = 0, len = opts.length; i < len; i++) {
//     let opt = opts.item(i);
//     // if (opt.nodeType === 1) {
//     //     window.alert(opt.value);
//     // }
//     window.alert(opt.value);
// }

// function btn_click() {
//     window.alert('ボタンがクリックされました');
// }

// window.onload = function () {
//     document.getElementById('btn').onclick =function() {
//         window.alert('ボタンがクリックされましたよ');
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn').addEventListener('click', function() {
//         window.alert('ボタンがクリックされたのだ');
//     }, false)
// }, false)

// document.addEventListener('DOMContentLoaded', function() {
//     var logo = document.getElementById('logo');
//     var attrs = logo.attributes;
//     for(i = 0, len = attrs.length; i < len; i++) {
//         var attr = attrs.item(i);
//         window.alert(attr.name + ':' + attr.value);
//     }
// }, false)


// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('result_text').textContent =
//         '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
//     document.getElementById('result_html').innerHTML =
//         '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
// }, false)


// document.addEventListener('DOMContentLoaded', function() {
//     var list = document.getElementById('list');
//     console.log('innner : ' + list.innerHTML);
//     console.log('content : ' + list.textContent);
// }, false)


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        var name = document.getElementById('name');
        var result = document.getElementById('result');
        result.innerHTML = 'こんにちは' + name.value + 'さん!';
    }, false)
}, false)