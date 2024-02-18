const buyBtn = document.getElementById('scrollButton');
buyBtn.addEventListener('click', function(){
window.scrollTo({
top: 1400,
left: 0,
behavior:'smooth'
});
});
const allbtn=document.getElementsByClassName('al-btn');
let count=0;
for(const btn of allbtn){
    btn.addEventListener('click',function(e){
       count=count+1;

        const bdt=document.getElementById('bdt').innerText;
        const bdtTotal= parseInt(bdt);
        document.getElementById('bdt').innerText=bdtTotal+parseInt(550);
        
    
        const seat=document.getElementById("seat");
        const convertBtd=parseInt(seat);
        document.getElementById("seat").innerText=convertBtd-40;



       setinnerText("sit-btn",count);
    })
}


function setinnerText(id,value){
    document.getElementById(id).innerText = value;
}