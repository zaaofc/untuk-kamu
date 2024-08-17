document.querySelector('.checkin').addEventListener('click', function() {
 document.querySelector('.checkin').style.top = '-100%'
 document.querySelector('.page-1').style.top = '0%'
});

function next_1() {
 document.querySelector('.page-1').style.display = 'none'
 document.querySelector('.page-2').style.top = '0%'
}

function punya() {
 alert('Ternyata Udah Punya :)');
 alert('Maaf ya kalau ganggu..')
 var msg = 'Aku udah punya pacar'
 window.location.href = 'https://api.whatsapp.com/send?text=' + msg;
}

function belum_punya() {
 document.querySelector('.page-2').style.display = 'none'
 document.querySelector('.page-3').style.top = '0%'
}

function tidak_suka() {
 alert('Yahh Kok Ngga Sih :(');
 var msg = prompt('Alasan')
 window.location.href = 'https://api.whatsapp.com/send?text=' + msg;
}

function aku_suka() {
 document.querySelector('.page-3').style.display = 'none'
 document.querySelector('.page-4').style.top = '0%'
}

function page_5() {
 document.querySelector('.page-4').style.display = 'none'
 document.querySelector('.page-5').style.top = '0%'
}


setInterval(lives, 0)
function lives(){
$rang = document.getElementById('love_range').value;
document.getElementById('love-range').textContent = $rang+ '%';
}

function love_end(){
 if($rang == '100'){
  alert('Wihh 100% nihh??')
  nex_to()
 }
 else if($rang >= '50'){
  alert('Ihh, Kurang Masa Cuma ' + $rang + '% ?') 
}else{
 alert('Anjay Dibawah Standar')
}
}

function nex_to(){
document.querySelector('.page-5').style.display = 'none'
 document.querySelector('.page-6').style.top = '0%'
}

function pag7(){
 document.querySelector('.page-6').style.display = 'none'
 document.querySelector('.page-7').style.top = '0%'
}

function tolak(){
 alert('baiklah kalau itu pilihan kamu, setidaknya aku telah berani untuk ungkapin perasaan aku yang sesungguhnya, dan terima kasih untuk waktunya, bye cantik 😁')
 var msg = 'Maaf Yah Aku Gak Bisa Sama Kamu'
 window.location.href = 'https://api.whatsapp.com/send?text=' + msg;
}
function terima(){
 alert('Serius Kamu Nerima Aku ?? ')
 ending()
}

function ending(){
 document.querySelector('.page-7').style.display = 'none'
 document.querySelector('.page-8').style.top = '0%'
}
function end(){
 alert('Makasih Yah udah mau Nerima Aku')
 var msg = 'iya aku mau, aku juga udah suka kamu' + $rang + '%'
 window.location.href = 'https://api.whatsapp.com/send?text=' + msg;
}