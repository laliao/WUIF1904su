window.onload=function(){
/*轮播模块主图*/
let imglist=document.querySelectorAll(".lunb .cent .center .tu a")
let dianlist=document.querySelectorAll(".lunb .cent .center .dian li")
let bglist=document.querySelectorAll(".lunb .lbb .back")
let bigbox=document.querySelector(".lunb")

let index=0;
imglist[index].style.opacity=1;
dianlist[index].classList.add("hot")
bglist[index].style.opacity=1;
function move(){
    index++
    if(index>imglist.length-1){index=0}
    imglist.forEach((v,i)=>{
        v.style.opacity=0;
        dianlist[i].classList.remove("hot")
        bglist[i].style.opacity=0;
    })
    imglist[index].style.opacity=1;
    dianlist[index].classList.add("hot")
    bglist[index].style.opacity=1;
}
let timer=setInterval(()=>{
move();
},1200)
bigbox.onmouseover=function(){
    clearInterval(timer)
}
bigbox.onmouseout=function(){
    timer=setInterval(()=>{move();},1200)
}
dianlist.forEach((v,i)=>{
    v.onmouseover=function(){
        index=i
        dianlist.forEach((a,b)=>{
            a.classList.remove("hot");
            imglist[b].style.opacity=0;
            bglist[b].style.opacity=0;
        })
        imglist[index].style.opacity=1;
        v.classList.add("hot")
        bglist[index].style.opacity=1;
    }

})


/*主图左侧导航 */
let conlist=document.querySelectorAll(".lunb .cent .left .daoh .sort-detail")
let dhlist=document.querySelectorAll(".lunb .cent .left .daoh>li")

dhlist.forEach((v,i)=>{
    v.onmouseover=()=>{
        conlist.forEach((a,b)=>{
            dhlist[b].classList.remove("hot1")
            a.style.display="none"
        })
        v.classList.add("hot1")
        conlist[i].style.display="block";
    }
})
conlist.forEach((v,i)=>{
    v.onmouseover=function(){
        v.style.display="block"
        dhlist.forEach((a)=>{a.classList.remove("hot1")})
        dhlist[i].classList.add("hot1")
    }
    v.onmouseout=()=>{
        v.style.display="none"
        dhlist[i].classList.remove("hot1")
    }
})


//楼层跳转
let btnlist=document.querySelectorAll(".leftdh .floatBar .list>li")
let tzclist=document.querySelectorAll(".lcc")
let btn=document.querySelector(".leftdh .floatBar")
let arr=[]
tzclist.forEach((v,i)=>{arr.push(v.offsetTop)})    //offsetTop
let tiaoz=null
let speed=0
let dqTop=0    //当前top
btnlist.forEach((v,i)=>{
    v.onclick=()=>{
        tzclist.forEach((a,b)=>{btnlist[b].classList.remove("first")})
        v.classList.add("first")
        clearInterval(tiaoz)
        tiaoz=setInterval(()=>{
            dqTop=document.documentElement.scrollTop
            speed=(arr[i]-document.documentElement.scrollTop)/10
            speed>0?Math.ceil(speed):Math.floor(speed)
            dqTop+=speed
            scrollTo(0,dqTop)
            if(dqTop==arr[i]){clearInterval(tiaoz)}
        },20)

    }
})
window.onwheel=()=>{clearInterval(tiaoz)}
window.onscroll=()=>{
    let dqtop=window.scrollY;
    if(dqtop>=tzclist[0].offsetTop){btn.style.display="block"}    
    if(dqtop<tzclist[0].offsetTop){btn.style.display="none"}  
    btnlist.forEach((v,i)=>{
        if(dqtop>=arr[i]){
            tzclist.forEach((a,b)=>{btnlist[b].classList.remove("first")})
            v.classList.add("first")
        }
    })  

}


}