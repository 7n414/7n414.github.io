window.addEventListener('scroll', function() {
  var section2 = document.getElementById('section2');
  var scrollPosition = window.pageYOffset;
  var displacement = scrollPosition * 1; // 減少位移幅度為原來的 50%

  section2.style.transform = 'translateY(' + displacement + 'px)';
});
window.addEventListener('scroll', function() {
  var object3 = document.getElementById('object3');
  var container = document.getElementById('container');
  var scrollTop = document.documentElement.scrollTop;
  var containerTop = container.offsetTop;
  var containerHeight = container.offsetHeight;
  var innerHeight = window.innerHeight;
  var triggerHeight = 5000; // 觸發開始位移的卷軸高度
  var stopHeight = 7000; // 停止位移的卷軸高度

  if (scrollTop <= triggerHeight && scrollTop <= stopHeight) {
    var newProgress = ((scrollTop - containerTop) * 50) / (containerHeight - innerHeight);
    var targetPosition = -newProgress * ((object3.offsetWidth - innerWidth) / object3.offsetWidth);
    object3.style.transform = 'translateX(' + targetPosition + '%)';
  }
});

window.addEventListener('scroll', function() {
  var object3 = document.getElementById('object3');
  var container = document.getElementById('container');
  var scrollTop = document.documentElement.scrollTop;
  var containerTop = container.offsetTop;
  var containerHeight = container.offsetHeight;
  var innerHeight = window.innerHeight;
  var triggerHeight = 5000; // 觸發開始位移的卷軸高度
  

  if (scrollTop <= triggerHeight) {
    var newProgress = ((scrollTop - containerTop) * 50) / (containerHeight - innerHeight);
    var targetPosition = -newProgress * ((object3.offsetWidth - innerWidth) / object3.offsetWidth);
    object3.style.transform = 'translateX(' + targetPosition + '%)';
  }
});
window.addEventListener('scroll', function() {
  var object2 = document.getElementById('object2');
  var container = document.getElementById('container');
  var scrollTop = document.documentElement.scrollTop;
  var containerTop = container.offsetTop;
  var containerHeight = container.offsetHeight;
  var innerHeight = window.innerHeight;
  var triggerHeight = 2760 // 觸發停止位移的卷軸高度

  if (scrollTop <= triggerHeight) {
    var newProgress = ((scrollTop - containerTop) * 50) / (containerHeight - innerHeight);
    var targetPosition = -newProgress * ((object2.offsetWidth - innerWidth) / object2.offsetWidth);
    object2.style.transform = 'translateX(' + targetPosition + '%)';
  }
});
  window.addEventListener('scroll', function() {
    var section3 = document.getElementById('section3');
    var scrollPosition = window.pageYOffset;
    var displacement = Math.min(scrollPosition * 1, window.innerHeight); // 限制位移的上限為 100vh
  
    section3.style.transform = 'translateY(-' + displacement + 'px)';
  });
  var object2 = document.getElementById('q');
var q = document.getElementById('background2');

object2.addEventListener('mouseover', function() {
  // 在物件放大時更改背景圖片
  q.style.backgroundImage = 'url(01gif/01.gif)';
});

object2.addEventListener('mouseout', function() {
  // 在物件恢復原始大小時還原背景圖片
  q.style.backgroundImage = 'url(img2/11.png)';
});
var object2 = document.getElementById('w');
var q = document.getElementById('background2');

object2.addEventListener('mouseover', function() {
  // 在物件放大時更改背景圖片
  q.style.backgroundImage = 'url(02gif/02.gif)';
});

object2.addEventListener('mouseout', function() {
  // 在物件恢復原始大小時還原背景圖片
  q.style.backgroundImage = 'url(img2/11.png)';
});
var object2 = document.getElementById('e');
var q = document.getElementById('background2');

object2.addEventListener('mouseover', function() {
  // 在物件放大時更改背景圖片
  q.style.backgroundImage = 'url(03gif/03.gif)';
});

object2.addEventListener('mouseout', function() {
  // 在物件恢復原始大小時還原背景圖片
  q.style.backgroundImage = 'url(img2/11.png)';
});
window.addEventListener('scroll', function() {
  var section4 = document.getElementById('section4');
  var scrollTop = document.documentElement.scrollTop;
  var triggerHeight = 4000; // 觸發位移的卷軸高度

  if (scrollTop >= triggerHeight) {
    var offset = scrollTop - triggerHeight;
    section4.style.transform = 'translateY(' + offset + 'px)';
  }
});



window.addEventListener('scroll', function() {
  var object4 = document.getElementById('object4');
  var container = document.getElementById('container');
  var scrollTop = document.documentElement.scrollTop;
  var containerTop = container.offsetTop;
  var containerHeight = container.offsetHeight;
  var innerHeight = window.innerHeight;
  var triggerHeight = 7000; // 觸發開始位移的卷軸高度
  var stopHeight = 7000; // 停止位移的卷軸高度

  if (scrollTop <= triggerHeight && scrollTop <= stopHeight) {
    var newProgress = ((scrollTop - containerTop) * 50) / (containerHeight - innerHeight);
    var targetPosition = -newProgress * ((object4.offsetWidth - innerWidth) / object4.offsetWidth);
    object4.style.transform = 'translateX(' + targetPosition + '%)';
  }
});

window.addEventListener('scroll', function() {
  var object4 = document.getElementById('object4');
  var container = document.getElementById('container');
  var scrollTop = document.documentElement.scrollTop;
  var containerTop = container.offsetTop;
  var containerHeight = container.offsetHeight;
  var innerHeight = window.innerHeight;
  var triggerHeight = 7000; // 觸發開始位移的卷軸高度
  

  if (scrollTop <= triggerHeight) {
    var newProgress = ((scrollTop - containerTop) * 50) / (containerHeight - innerHeight);
    var targetPosition = -newProgress * ((object4.offsetWidth - innerWidth) / object4.offsetWidth);
    object4.style.transform = 'translateX(' + targetPosition + '%)';
  }
});
window.addEventListener('scroll', function() {
  var object4 = document.getElementById('object4');
  var container = document.getElementById('container');
  var scrollTop = document.documentElement.scrollTop;
  var containerTop = container.offsetTop;
  var containerHeight = container.offsetHeight;
  var innerHeight = window.innerHeight;
  
  var stopHeight = 6000; // 停止位移的卷軸高度

  if (scrollTop <= triggerHeight && scrollTop <= stopHeight) {
    var newProgress = ((scrollTop - containerTop) * 50) / (containerHeight - innerHeight);
    var targetPosition = -newProgress * ((object4.offsetWidth - innerWidth) / object4.offsetWidth);
    object4.style.transform = 'translateX(' + targetPosition + '%)';
  }
});





