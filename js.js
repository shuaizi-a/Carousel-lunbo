//获取小图id
var topimg = document.getElementById("top").getElementsByTagName("img");
//获取大图id
var qhimg  = document.getElementById("qh").getElementsByTagName("img");
// 获取框id
var kk = document.getElementById("kk");
var shuzhu = [0,84,172];
for(var i = 0; i < topimg.length; i++){
    topimg[i].onmouseover = hanshu;
    topimg[i].index = i;
}

function hanshu(){
    for(var i = 0; i<qhimg.length;i++){
        if(i==this.index){
            qhimg[i].className = "xians";
            Top = shuzhu[i];
            motop = kk.offsetTop;
            if(sss == null){
                sss = setInterval(yidong,20);
            }
           
        }else{
            qhimg[i].className = "";
        }
    }
}

var sss= null; //setInterval(yidong,20);
 var Top = 0;
 var motop = 0;
 var pos = 4;
 function yidong(){
     //从上往下
     if(motop < Top){
         motop += pos; 
         if(motop >= top){
            motop = Top;
            clearInterval(sss);
            sss = null;
         }
     }
     //从下往上
     if(motop > Top){
         motop -= pos; 
         if(motop <= top){
            motop = Top;
            clearInterval(sss);
            sss = null ;
         }
     }
     //停止
     if(motop == Top){
        clearInterval(sss);
        sss = null;
     }
     kk.style.top = motop + "px"; 
 }