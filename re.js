navLinks = document.querySelectorAll('.nav-link');
navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
});
});
let websocket;

    function connectWebSocket() {
      websocket = new WebSocket('ws://https://altal77.github.io/Restaurant-Menu/');
      websocket.onopen = function() {
        console.log('WebSocket connected');
      };
      websocket.onclose = function() {
        console.log('WebSocket closed');
      };
    }

    // إغلاق WebSocket قبل مغادرة الصفحة
    window.addEventListener('pagehide', function(event) {
      if (event.persisted && websocket) {
        websocket.close();
      }
    });

    // إعادة فتح WebSocket عند استعادة الصفحة
    window.addEventListener('pageshow', function(event) {
      if (event.persisted) {
        connectWebSocket();
      }
    });

    // الاتصال الأولي بـ WebSocket
    connectWebSocket();

    module.exports = {
    content: ['./index.html','./re.js'],  
    css: ['./rest.css'],   
    output: './dist/css',
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
};