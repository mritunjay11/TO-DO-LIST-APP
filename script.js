const logout=document.querySelector('.logout-btn')
const form = document.querySelector('.form');
const mainapp = document.querySelector('.container');

logout.addEventListener('click',()=>{
    debugger
    mainapp.style.display="none"
    form.style.display="block"

})

function add() {
    const Input=document.querySelector('#user-input')
    const ul_list=document.querySelector('.main-list')
    const value = Input.value
    
    if(value !=="")
        {
        const li = document.createElement('li')
        li.classList.add('listitem')
        const value = Input.value
        li.innerText=value
        ul_list.append(li)

        const liRemovebtn = document.createElement('button')
        liRemovebtn.classList.add('remove-btn')
        liRemovebtn.innerText="Remove"
        ul_list.append(liRemovebtn)



        const donebtn= document.createElement('button')
        donebtn.classList.toggle('done-btn')
        donebtn.innerText="Done"
        ul_list.append(donebtn)

        donebtn.addEventListener("click",(e)=>{
            donebtn.innerText="Done"
            li.innerText="Hogya tera task ✅"
            li.style.fontStyle="italic"
            donebtn.remove()
            
        })
        
         liRemovebtn.addEventListener("click",(e)=>{
            li.remove()
            liRemovebtn.remove()
            donebtn.remove()
        })
    }


}


