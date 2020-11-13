class Plinko {
constructor(x,y,r){
 var options ={

   isStatic:true

 }
this.x=x
this.y=y
this.r=r

this.body = Bodies.circle(x,y,this.r,options)

World.add(world,this.body)

}
display(){
push()
ellipseMode(CENTER)
ellipse(this.x,this.y,10,10)
strokeWeight(1)
}
}
