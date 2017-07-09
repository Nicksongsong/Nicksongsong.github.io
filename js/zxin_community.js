/**
 * Created by Administrator on 2017/6/10 0010.
 */
$(function(){
    var dat=new Date();
    var sphtml=dat.toLocaleTimeString();
    console.log(sphtml);
    var sp=$("#bottom>div>div:nth-child(2)>div>span");
    sp.html(dat);
});