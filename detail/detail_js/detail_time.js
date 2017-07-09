
window.onload=function(){
    function task(){
        var end=new Date("2017/7/1 10:00:00");
        var now=new Date();
        var s=parseInt((end-now)/1000);
        var span=document.getElementById("time");
        if(s>0){
            var d=parseInt(s/3600/24);
            if(d<10) d='0'+d;
            var h=parseInt(s%(3600*24)/3600);
            if(h<10) h='0'+h;
            var m=parseInt(s%3600/60);
            if(m<10) m='0'+m;
            s%=60;
            if(s<10) s='0'+s;
            //span.innerHTML=d+'天'+h+'时'+m+'分'+s+'秒';
            span.getElementsByClassName("day_show")[0].innerHTML=d;
            span.getElementsByClassName("hour_show")[0].innerHTML=h;
            span.getElementsByClassName("minute_show")[0].innerHTML=m;
            span.getElementsByClassName("second_show")[0].innerHTML=s;

        }else{
            clearInterval(timer);
            timer=null;
            span.innerHTML="开抢了!";
        }
    }
    task();
    var timer=setInterval(task,1000);
};


//设置产品介绍的切换
    var para=$("#goods_introduction div.parameter>ul");
    para.on("click","li",function(e
    ){
        e.preventDefault();
        var $this=$(this);
        var i= $this.index()/2;
        var p=$this.parent().parent().children("div:eq("+i+")");
       if(p.hasClass("active")){
           return;
       }else{
           $this.parent().find("a").removeClass("active");
           $this.children().addClass("active");
           p.siblings("div").removeClass("active");
           p.addClass("active");
       }


    });


//移动到小图片时对应大图片转变

$("#goods_information ul").on("mouseenter","li",function(){
    var $this=$(this);
    var p= $this.children("img").attr("src").lastIndexOf("_");
    var str=$this.children("img").attr("src").slice(0,p+1)+"m"+$this.children("img").attr("src").slice(p+2);
    $("#mImg").attr("src",str);
});


//鼠标进入到maskImage上时使小的遮罩层显示
var SMSIZE=400,MSIZE=200,OFFSET=73;
$("#superMask").mouseover(function(){
    $("#mask").css("display","block");
    $("#largeDiv").css("display","block");
    var i=$(this).siblings("img").attr("src").lastIndexOf("_");
    var str1=$(this).siblings("img").attr("src").slice(0,i+1)+"l"+$(this).siblings("img").attr("src").slice(i+2);
    $("#largeDiv").css("backgroundImage",`url(${str1})`);
});
$("#superMask").mouseout(function(){
    $("#mask").css("display","none");
    $("#largeDiv").css("display","none");
});

$("#superMask").mousemove(function(e){
    var x= e.offsetX;
    var y= e.offsetY;
    var lMax=273;
    var tMax=200;
    var l=x-MSIZE/2+OFFSET;
    var t=y-MSIZE/2;
    if(l<OFFSET)l=OFFSET;
        else if(l>lMax)l=lMax;
    if(t<0)t=0;
        else if(t>tMax)t=tMax;
    $("#mask").css({top:t,left:l});
    largeDiv.style.backgroundPosition=-2*(l)+2*OFFSET+15+"px "+(-2*t+15)+"px";

//    如何使用css属性设置backgroundPosition？？？？ console.log(largeDiv.style.backgroundPosition);
});



