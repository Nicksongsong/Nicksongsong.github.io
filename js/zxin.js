/**
 * Created by Administrator on 2017/5/28.
 */
//第三部分：全部商品分类即主导航  [公告]此处轮播

$(function(){
    var $ul=$("#nav>ul>li.horn>ul");
    var HEIGHT=parseFloat(
        $ul.css("height")
    );
    var speed=2500;
    var timer=null;
    var i=0;
    function task(){
        i++;
        if(i>6)i=0;
        $ul.css("top",HEIGHT*i*(-1));
    }
    timer=setInterval(task,speed);
});

//第四部分 图片轮播

$(function(){
    var divScroll=document.getElementById("scrollImg");
    var aImg=divScroll.getElementsByTagName("img");
    var aNum=divScroll.getElementsByTagName("li");
    var ul=divScroll.getElementsByTagName("ul")[0];
    var timer=null;
    var index=0;
    function show(){
        index++;
       (index>3)&&(index=0);
        for(var i=0;i<aImg.length;i++)
        {
            aImg[i].className="";
        }
        aImg[index].className="active";
        for(var i=0;i<aNum.length;i++){
            aNum[i].className="";
        }
        aNum[index].className="active";
    }
    timer=setInterval(show,3000);
    divScroll.onmouseover=function(){
        clearInterval(timer);
        timer=null;
    };
    divScroll.onmouseout=function(){
        timer=setInterval(show,3000);
    };
    ul.onclick=function(e){
        if(e.target.nodeName==="LI")
        { var inp= e.target.innerHTML;
            console.log(inp);
            for(var i=0;i<aNum.length;i++)
            aNum[i].className="";
            aNum[inp-1].className="active";
            for(var i=0;i<aImg.length;i++){
                aImg[i].className="";
            }
            aImg[inp-1].className="active";
        }

    };

    //设置配件部分切换效果
    var $a=$("#main>div.parts>div>ul");
    $a.delegate("li:not(:last-child)","mouseenter",function(e){
        e.preventDefault();
        var $this=$(this);
        var i= $this.index();
        if($this.children().hasClass("active")){
            return;
        }else{
            $this.children().addClass("active");
            $this.siblings().children().removeClass("active");
            $("#main>div.parts>ul:nth-child("+(i+2)+")").siblings().removeClass("active");
            $("#main>div.parts>ul:nth-child("+(i+2)+")").addClass("active");


        }

    })

});







