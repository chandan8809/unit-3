var url="https://www.themealdb.com/api/json/v1/1/categories.php"
    async function getdata(url){
        try{
            res=await fetch(url);
            data=await res.json()
            cata=data.categories
            console.log(cata)
            display(cata)
        }
        catch(err){
            console.log(err)

        }
       
    }
    getdata(url)
    var count=0
    var arr=[]
    function display(cata){
        cata.map(function(elem){
            boxdiv=document.createElement("div")
            imgdiv=document.createElement("div")
            contdiv=document.createElement("div")
            img=document.createElement("img")
            img.src=elem.strCategoryThumb
            var price=document.createElement("h2")
            price.textContent=Math.floor(Math.random()*400+100)
            var but=document.createElement("button")
            but.textContent="Add to cart"
            but.addEventListener("click",function(){
                count++
                document.querySelector("#count").textContent=count
                arr.push(elem)
                localStorage.setItem("cart",JSON.stringify(arr))

            })
            contdiv.append(price,but)
            imgdiv.append(img)
            boxdiv.append(imgdiv,contdiv)
            boxdiv.id="box"


            document.querySelector(".maindiv").append(boxdiv)

       })
    }

