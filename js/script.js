// تحديد العناصر
const con = document.querySelector('.about .container .img');
const social = document.querySelector('.about .container .social');
const icons = document.querySelector('.about .container .social i');

// إضافة مستمع حدث عند التمرير بالماوس على .con
con.addEventListener('mouseenter', function() {
    social.style.transform = 'translate(0%, 0%)'; // تغيير التحويل
    icons.style.margin = '60% auto'; // تغيير التحويل
});

// إضافة مستمع حدث عند مغادرة الماوس لـ .con
con.addEventListener('mouseleave', function() {
    social.style.transform = 'translate(0%, 100%)'; // إعادة التحويل إلى الوضع الافتراضي
    icons.style.margin = '0% auto';
});
