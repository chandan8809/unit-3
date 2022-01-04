document.querySelector("#but").addEventListener("click",function(){
    setTimeout(function(){
        alert("your order is accepted")
    },0)
    setTimeout(function(){
        alert("Your order is being cooked")
    },3000)
    setTimeout(function(){
        alert("Your order is being cooked")
    },8000)
    setTimeout(function(){
        alert("Order out for delivery")
    },10000)
    setTimeout(function(){
        alert(" Order delivered")
    },12000)
})