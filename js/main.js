import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);

window.addEventListener('load',()=>{


    gsap.fromTo('.header,.dinf-d,.notes',{opacity:0,y:22},{y:0,opacity:1,ease:'Back.easeOut',delay:.4,duration:.6})



})

//FUNCTION TO SHOW THE OPTIONS TO CHANGE FONT AND BODY COLOR

function showMoreInfoDiv(){
    let moreinfoBtn = document.querySelector('#more-info-button')
    
    let moreinfoDiv =document.querySelector('.more-info-div')
    
    moreinfoBtn.addEventListener('click',()=>{
    
        moreinfoDiv.classList.toggle('show-more-info-div')
    })

}

showMoreInfoDiv()






let sansSerif = 'sans-serif'
let cursive= 'cursive'
let satoshi = "Satoshi "+sansSerif;
let britney = 'Britney '+cursive
let generalSans = "General Sans "+sansSerif;


//SETTING THE BODY FONT BASED ON WHAT USER SELECTS
document.querySelector('#change-font').addEventListener('input',changeFont)

//FUNCTION TO CHANGE FONT 
function changeFont(e){

    let fontChosen = e.target.value

    if(fontChosen==='default'){
        document.body.style.fontFamily = 'Satoshi,sans-serif'

    }
    else if(fontChosen==='britney'){
        document.body.style.fontFamily = 'britney,cursive'

    }
    else if(fontChosen==='generalSans'){
        document.body.style.fontFamily =' General Sans, sans-serif'
    }
    else if(fontChosen==='melodrama'){
        document.body.style.fontFamily = 'Melodrama, serif'

    }
    else if(fontChosen==='panchang'){
        document.body.style.fontFamily = 'Panchang, sans-serif'

    }


    else if(fontChosen==='dancingScript'){
        document.body.style.fontFamily = 'Dancing Script, cursive'

    }
    else if(fontChosen==='literata'){
        document.body.style.fontFamily = 'Literata, serif'

    }
    else{
        document.body.style.fontFamily='satoshi, sans-serif'
    }



}

//SETTING THE BODY COLOR BASED ON WHAT USER SELECTS
document.querySelector('#change-color').addEventListener('input',changeColor)


//COLORS AVAILBLE FOR USER TO CHANGE TO
let lightgreen = '#8bd9a0'
let plum = 'plum'
let lightbrown = '#c2b280'
let whitesmoke = 'whitesmoke'
let bronze = '#e89c51;'
let defaultBg = '#8ba9d9'
let flaxcolor = '#eedc82'
//SELECITNG ITEMS FROM THE DOM TO CHANGE THEIR BG COLOR

let pageBody = document.body

let pageHeader = document.querySelector('.header')
let addNoteBtn = document.querySelector('.notes__add')
let sideBarNoteItem = document.querySelector('.notes__list-item-notes')

let notesPreviewTitle = document.querySelector('.notes__title')
let notesPreviewBody = document.querySelector('.notes__body')

let notesPreview = document.querySelector('.notes__preview')


pageBody.style.backgroundColor = 
pageHeader.style.backgroundColor = ''
addNoteBtn.style.backgroundColor =''
notesPreview.style.backgroundColor = ''

//FUNCTION TO CHANGE BODY COLOR
function changeColor(e){





    let chosenColor = e.target.value

    if(chosenColor==='flax'){

        pageBody.style.backgroundColor = flaxcolor
        pageHeader.style.backgroundColor = '#ebdd9b'
        addNoteBtn.style.backgroundColor ='#3d3404'
        notesPreview.style.backgroundColor = '#3d3404'
    }

    else if(chosenColor==='whitesmoke'){
        pageBody.style.backgroundColor = whitesmoke
        pageHeader.style.backgroundColor = 'rgb(243, 237, 231)'
        addNoteBtn.style.backgroundColor ='rgb(38, 36, 36)'
        notesPreview.style.backgroundColor = 'rgb(38, 36, 36)'

    }

    else if(chosenColor==='lightbrown'){
        pageBody.style.backgroundColor = lightbrown
        pageHeader.style.backgroundColor = '#ded4a3'
        addNoteBtn.style.backgroundColor ='#463f1b'
        notesPreview.style.backgroundColor = '#463f1b'

    }



    else if(chosenColor==='default'){
        pageBody.style.backgroundColor = defaultBg
        pageHeader.style.backgroundColor = '#598bdb'
        addNoteBtn.style.backgroundColor ='#0b2270'
        notesPreview.style.backgroundColor = '#03113f'

    }

    else if(chosenColor==='plum'){
        pageBody.style.backgroundColor = plum
        pageHeader.style.backgroundColor = 'rgb(193, 142, 193)'
        addNoteBtn.style.backgroundColor ='rgb(103, 19, 103)'
        notesPreview.style.backgroundColor = 'rgb(77, 20, 77)'



        

    }

    else if(chosenColor==='lightgreen'){
        // document.body.style.backgroundColor=lightgreen

        pageBody.style.backgroundColor = lightgreen
        pageHeader.style.backgroundColor = '#a3ecb6'
        addNoteBtn.style.backgroundColor ='#204c2c'
        notesPreview.style.backgroundColor = '#204c2c'


    }

    else{
        pageBody.style.backgroundColor = plum
        pageHeader.style.backgroundColor = 'rgb(193, 142, 193)'
        addNoteBtn.style.backgroundColor ='rgb(103, 19, 103)'
        notesPreview.style.backgroundColor = 'rgb(77, 20, 77)'


    }


}



