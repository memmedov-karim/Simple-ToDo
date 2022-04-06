
const search = document.getElementById('search')
const add = document.getElementById('add')
const list= document.querySelector("ul")

console.log(search)
console.log(add)
console.log(list)

add.addEventListener("keypress",(e)=>{
     if(e.keyCode===13){
       
         list.innerHTML+=` <li>${e.target.value}<span class="delete">x</span> </li>`
         e.target.value=""
     }
})

list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
       e.target.parentElement.remove()
    }else{
        console.log('Yo yoxdu ;)')
    }

})

search.addEventListener('keyup',function(){

    let arr=[...list.children]
    
     arr.forEach(item=>{
        if( !item.textContent.toLowerCase().trim().includes(this.value.toLowerCase().trim())){
           item.classList.add('hidden')
        }else if(item.textContent.toLowerCase().trim().includes(this.value.toLowerCase().trim())){
            item.classList.remove("hidden")
           
        }
     })

})