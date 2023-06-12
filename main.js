setInterval(function(){
  bx+=xv
  by+=yv
  //player1 
  if (by<=0 && yv<0) {
    yv=-yv
  }
  if (by>=295 && yv>0) {
    yv=-yv
  }
  if (bx<=0) {
    if (by>p1y-bd && by<p1y+ph) {
      xv=-xv
      dy=by-(p1y+ph/2)
      yv=dy*0.3
    }else{
      p2score.innerHTML++
      reset()
    }
  }
  //player2
  if (bx>=c.width-pw) {
    if (by>p2y-bd && by<p2y+ph) {
      xv=-xv
      dy=by-(p2y+ph/2)
      yv=dy*0.3
    }else{
      p1score.innerHTML++
      reset2()
    }
  }
  if (by<p2y+ph/2) {
    if(p2y>0){p2y-=p2v}
  }
  if(by>p2y+ph/2){
    if(p2y<c.height-ph){
      p2y+=p2v
    }
  }
  
  //contents
  cc.fillStyle="black"
  cc.fillRect(0,0,c.width,c.height);
  
  cc.fillStyle="cyan"
  cc.fillRect(p1x,p1y,pw,ph);
  cc.fillRect(p2x,p2y,pw,ph);
  cc.fillStyle='white'
  cc.fillRect(bx,by,bd,bd)
  
},30)

function reset(){
  bx=c.width/2
  by=c.height/2
  xv=0
  yv=0
  setTimeout(function(){
  xv=4
  yv=2
  },500)
}
function reset2(){
  bx=c.width/2
  by=c.height/2
  xv=0
  yv=0
  setTimeout(function(){
  xv=-4
  yv=-2
  },500)
}

left.onclick=function(){
  if(p1y>0){p1y-=20}
  else{return false}
};
right.onclick=function(){
  if(p1y<c.height-ph){p1y+=20}
  else{return false}
}
