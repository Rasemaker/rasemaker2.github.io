const btnprev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')

let currentslide = 0


function hideslider(){

slider.forEach(item => item.classList.remove(on))

}

function showslider(){

slider[currentslide].classList.add(on)

}

function nextslider(){
    hideslider()
    if(currentslide = slider.length -1){
 currentslide = 0

    }else{

currentslide--

    }
    




    }
  
btnNext.addEventListener('click',() => console.log('clickado'))
btnNext.addEventListener('click',() => console.log('clickado'))

