//very flawed and needs hours of bulletproofing
class NavBar{
  constuctor(links, linkNames){
    this.links = links
    this.linkNames = linkNames
  }
  setColor(r,g,b){this.color = new color(r,g,b)}
  setSize(width,height){this.width = width;this.height = height}
  
  //draws only once
  reDraw(){
    let spacing = this.width/this.Links.length
    
    fill(0)
    textSize(10)
    textAlign(CENTER,TOP)
    for(let i = 0; i < this.Links.length;i+=spacing){
      
    }
  }
}