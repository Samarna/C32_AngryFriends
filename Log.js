class Log extends BaseClass{
  constructor(x,y,height,angle){
    'friction' = 2.0;
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}
