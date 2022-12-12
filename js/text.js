let text = document.querySelector('#text')
let saveText = text.textContent


text.textContent = saveText.slice(0,500) + "..."
let text2 = saveText.slice(0,500) + "..."

funk = () =>{
    if(text2.length < 600){
        text.textContent = saveText
        text2 = saveText
    }
    else{
        text.textContent = saveText.slice(0,500) + "..."
        text2 = saveText.slice(0,500) + "..."
    }
}