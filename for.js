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
        btn.style.backgroundColor="green";
       count=count+1;

       const currentSeat = document.getElementById('seatTotal');
       const getInnerText = currentSeat.innerText;
       const getNumber = parseInt(getInnerText);
       const newSeat = getNumber - 1;
       currentSeat.innerText = newSeat;
       
    //    allbtn.classList.add("disabled",true)
        if(count>=5){
            alert('You cannot book more than four seats');
           document.getElementById('btn').addEventListener('remove');
        return btn
        }
        

        const bdt=document.getElementById('bdt').innerText;
        const bdtTotal= parseInt(bdt);
        document.getElementById('bdt').innerText=bdtTotal+parseInt(550);
        
       setinnerText("sit-btn",count);
    })
}


function setinnerText(id,value){
    document.getElementById(id).innerText = value;
}

document.getElementById('nextBtn').addEventListener('click',function(){
    var pop =document.getElementById("popUp");
      pop.style.display="block";
   
})