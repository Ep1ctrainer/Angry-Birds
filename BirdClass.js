class BirdClass extends BaseClass{
    constructor(x, y){
        super(x, y, 50, 50);
        this.image = loadImage("sprites/birds.png");
    }
    display(){
        this.position.y = mouseY;
        this.position.x = mouseX;
    }
}