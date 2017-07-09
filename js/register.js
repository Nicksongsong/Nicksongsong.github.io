/**
 * Created by Administrator on 2017/6/13.
 */
/**
 * 手机号码正则表达式，（1）+86或者0086可有可无，最多一次(2)第一位必须是1(3)第二位3,4,5,7,8选一位（3）其他9位是任意数字
 *
 */
//var ureg=/^(\+86|0086)?\s*[1][34578]\d{9}$/;
var ureg=/^[1][34578]\d{9}$/;
var preg=/^[0-9a-zA-Z]{6,8}$/;

//验证注册手机号码框获取焦点
uname.onfocus=function(){
    this.nextElementSibling.style.display="none";
};
//验证注册手机号码失去焦点
uname.onblur=function(){
    vail(this,ureg,"请输入用户名");
};

//失去焦点函数

function vail(txt,reg,html){
    var u=reg.test(txt.value);
    if(u){
        txt.nextElementSibling.style.display="inline-block";
        txt.nextElementSibling.innerHTML="正确";
    }else{
        txt.nextElementSibling.style.display="inline-block";
        txt.nextElementSibling.innerHTML=html;
    }
}
upwd.onblur=function(){
    //if(ureg.test(ureg.value))
    vail(this,preg,"请输入正确的密码格式");
};
upwd.onfocus=function(){
    this.nextElementSibling.style.display="none";
};

//为验证码的失去失去与获取焦点绑定事件
reupwd.onfocus=function(){
    this.nextElementSibling.style.display="none";
};
reupwd.onblur=function(){
    if(this.value)
    {  if(this.value===upwd.value){
            this.nextElementSibling.style.display="inline-block";
            this.nextElementSibling.innerHTML="正确";
        }else {
       this.nextElementSibling.style.display="inline-block";
       this.nextElementSibling.innerHTML="请输入一致";
        }
    }

};

//生成随机的验证码
