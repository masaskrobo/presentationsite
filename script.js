const menubtn=document.querySelector(".hamburger")
const navigation=document.querySelector("header nav")
menubtn.addEventListener("click",function(){
    if(navigation.style.display==="block"){
        navigation.style.display="none"  
    }else{
        navigation.style.display="block"
    }

})
