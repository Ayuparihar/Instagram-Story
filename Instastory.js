let arr = [
    {
        Dp:"https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1564038079594-99ba184fd036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w0NTE3OTE2fHxlbnwwfHx8fHw%3D"
        
    },
    {   Dp:"https://images.unsplash.com/photo-1515138692129-197a2c608cfd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTE3OTE2fHxlbnwwfHx8fHw%3D",
       
    },
    {   Dp:"https://media.istockphoto.com/id/1459337816/photo/portrait-of-young-woman-on-white-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=a9nA1bUrUuiUR1obcNpHNIGFdMvp2fHgZmg-0XhAECY=",
        story:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
       
    },
    {    Dp:"https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww",
       
    },
    {    Dp:"https://images.unsplash.com/photo-1571816119607-57e48af1caa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww",
    },
    {     Dp:"https://plus.unsplash.com/premium_photo-1675461588230-732ec738a0f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2V8ZW58MHx8MHx8fDA%3D",
       story: "https://images.unsplash.com/photo-1601288848351-48adce9d676a?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDUxNzkxNnx8ZW58MHx8fHx8",
    }
]
let stories= document.querySelector(".stories")

let story = ""
arr.forEach(function(insta,idx) {
    story += ` <div class="story">
    <img  id="${idx}" src="${insta.Dp}">
</div>`
})
stories.innerHTML=story

stories.addEventListener("click",function (dets) {
    // console.log()
   document.querySelector(".full-screen").style.display ="block"
   document.querySelector(".full-screen").style.
   backgroundImage =`url(${arr[dets.target.id].story})`

   setTimeout(function(){
    document.querySelector(".full-screen").style.display ="none"
   },3000)
    
});
