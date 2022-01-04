
var arrdata=JSON.parse(localStorage.getItem("cart"))
function display(arrdata){
    document.querySelector(".maindiv").innerHTML=""
    arrdata.map(function(elem,index){
        

        boxdiv=document.createElement("div")
        imgdiv=document.createElement("div")
        contdiv=document.createElement("div")
        img=document.createElement("img")
        img.src=elem.image
        var price=document.createElement("h2")
        
        price.textContent=elem.price;
        
        var but=document.createElement("button")
        but.textContent="Remove"

        but.addEventListener("click",function(){
            arrdata.splice(index,1)
            console.log(arrdata)
            display(arrdata)
            calcTotal(arrdata)



        })
       
        contdiv.append(price,but)
        imgdiv.append(img)
        boxdiv.append(imgdiv,contdiv)
        boxdiv.id="box"
        document.querySelector(".maindiv").append(boxdiv)
   })
}
display(arrdata)

function calcTotal(arrdata){
    pricearr=arrdata.map(function(ele){
        return (ele.price)
    })
    console.log(pricearr)

    toatlall= pricearr.reduce(function(acc,curr){
        return acc+curr
    })
    console.log(toatlall)
    document.querySelector("#total").textContent=toatlall

}

calcTotal(arrdata)





