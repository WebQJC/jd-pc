var iObjs = my$("i_close");
iObjs.onclick=function(){
    my$("J_event").style.display="none";

};

var dropdown1 = my$("dropdown1");
dropdown1.onmouseover=function(){
    my$("hide_show1").className="dropdown_xia1 show";
}
dropdown1.onmouseout=function(){
    my$("hide_show1").className="dropdown_xia1 hide"; 
};
var dropdown2 = my$("dropdown2");
dropdown2.onmouseover=function(){
    my$("hide_show2").className="dropdown_xia2 show";
}
dropdown2.onmouseout=function(){
    my$("hide_show2").className="dropdown_xia2 hide";
     
};