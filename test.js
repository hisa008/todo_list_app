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


// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn').addEventListener('click', function() {
//         let name = document.getElementById('name');
//         window.alert(name.value);
//     }, false)
// }, false)

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn').addEventListener('click', function() {
//         let result = [];
//         let foods = document.getElementsByName('food');

//         for (let i = 0, len = foods.length; i < len; i++) {
//             let food = foods.item(i);
//             if (food.checked) {
//                 result.push(food.value);
//             }
//         }
//         window.alert(result.toString());
//     }, false)
// }, false)



// document.addEventListener('DOMContentLoaded', function() {
//     let getRadioValue = function() {
//         let result = '';
//         let elems = document.getElementsByName('food');

//         for (let i = 0, len = elems.length; i < len; i++) {
//             let elem = elems.item(i);
//             if (elem.checked) {
//                 result = elem.value;
//                 break;
//             }
//         }
//         return result;
//     }
//     document.getElementById('btn').addEventListener('click', function() {
//         window.alert(getRadioValue('food'));
//     }, false)
// }, false)



// document.addEventListener('DOMContentLoaded', function() {
//     let setRadioValue = function(name, value) {
//         let elems = document.getElementsByName(name);

//         for (let i = 0, len = elems.length; i < len; i++) {
//             let elem = elems.item(i);
//             if (elem.value == value) {
//                 elem.checked = true;
//                 break;
//             }
//         }
//     }
//     setRadioValue('food', '餃子');
// }, false);



// document.addEventListener('DOMContentLoaded', function() {
//     let setCheckValue = function(name, value) {
//         let elems = document.getElementsByName(name);

//         for (let i = 0, len = elems.length; i < len; i++) {
//             let elem = elems.item(i);
//             if (value.indexOf(elem.value) > -1) {
//                 elem.checked = true;
//             }
//         }
//     }
//     setCheckValue('food', ['餃子', '焼肉']);
// }, false);



// document.addEventListener('DOMContentLoaded', function() {
//     let getSelectValue = function(name) {
//         let result = [];
//         let opts = document.getElementById(name).options;
//         for (let i = 0, len = opts.length; i < len; i++) {
//             let opt = opts.item(i);
//             if (opt.selected) {
//                 result.push(opt.value);
//             }
//         }
//         return result;
//     }
    
//     document.getElementById('btn').addEventListener('click', function() {
//         window.alert(getSelectValue('food'));
//     }, false);
// }, false);



// document.addEventListener('DOMContentLoaded', function() {
//     let setListValue = function(name, value) {
//         let opts = document.getElementById(name);

//         for(let i = 0, len = opts.length; i < len; i++) {
//             let opt = opts.item(i);
//             if (value.indexOf(opt.value) > -1) {
//                 opt.selected = true;
//             }
//         }
//     };
//     setListValue('food', ['餃子', '焼肉']);
// }, false)



// window.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("file").addEventListener('change', function(e) {
//         let inputs = document.getElementById("file").files;
//         for(let i = 0, len = inputs.length; i < len; i++) {
//             let input = inputs[i];
//             console.log()
//         }
//     })
// })


// window.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('file').addEventListener('change', function(e) {
//         let input = document.getElementById('file').files[0];
//         let reader = new FileReader();
//         reader.addEventListener('load', function() {
//             document.getElementById('result').src = reader.result;
//         }, true);
//         reader.readAsDataURL(input, 'UTF-8');
//     }, true);
// });



// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn').addEventListener('click', function() {
//         let name = document.getElementById('name');
//         let url = document.getElementById('url');

//         let anchor = document.createElement('a'); //1
//         // anchor.href = url.value; //3
//         let href = document.createAttribute('href');
//         href.value = url.value;
//         anchor.setAttributeNode(href);
//         let text = document.createTextNode(name.value);
//         anchor.appendChild(text); //2

//         let br = document.createElement('br'); //1
//         let list = document.getElementById('list');

//         list.appendChild(anchor); //2
//         list.appendChild(br); //2
//     }, false);
// }, false);


// document.addEventListener('DOMContentLoaded', function() {
//     let books = [
//         {title: '独習PHP 第3版', price: 3200},
//         {title: 'Javaポケットリファレンス', price: 2680},
//         {title: 'アプリを作ろう！Android入門', price: 2000}
//     ];

//     let list = document.getElementById('list');

//     for(let i = 0, len = books.length; i < len; i++) {
//         let b = books[i];
//         let li = document.createElement('li');
//         let text = document.createTextNode(b.title + ':' + b.price + '円');
//         li.appendChild(text);
//         list.appendChild(li); //1
//     }
// }, false);


// document.addEventListener('DOMContentLoaded', function() {
//     let books = [
//         {title: '独習PHP 第3版', price: 3200},
//         {title: 'Javaポケットリファレンス', price: 2680},
//         {title: 'アプリを作ろう！Android入門', price: 2000}
//     ];

//     let list = document.getElementById('list');

//     let frag = document.createDocumentFragment();

//     for(let i = 0, len = books.length; i < len; i++) {
//         let b = books[i];
//         let li = document.createElement('li');
//         let text = document.createTextNode(b.title + ':' + b.price + '円');
//         li.appendChild(text);
//         frag.appendChild(li); //1
//     }
//     document.getElementById('list').appendChild(frag);
// }, false);



document.addEventListener('DOMContentLoaded', function() {
    let list = document.getElementById('list');
    let pic = document.getElementById('pic');
    let del = document.getElementById('del');

    list.addEventListener('click', function(e) {
        let isbn = e.target.getAttribute('data-isbn');

        if(isbn) {
            let img = document.createElement('img');
            img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
            img.alt = e.target.textContent;
            img.height = 150;
            img.width = 108;

            if(pic.getElementsByTagName('img').length > 0) {
                pic.replaceChild(img, pic.lastChild);
            } else {
                del.disabled = false;
                pic.appendChild(img);
            }
        }
    }, false);

    del.addEventListener('click', function() {
        pic.removeChild(pic.lastChild);
        del.disabled = true;
    }, false);
}, false);

