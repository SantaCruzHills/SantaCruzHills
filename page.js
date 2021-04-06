class Page{
  
  constructor(title){
    this.title = title
  }
  
  CreateNav(links, percentY){
    this.avbar = new NavBar(Links, this.getLinkNames(Links));
    this.percentY = percentY;
  }
  
  //this parses the individual links into a more usuable html element
  getLinkElements(links){
    let index,subStr,str
    let linkElement = []
    
    for(var i = 0; i < links.length;i++){
  
      //basically a custom delimiter
      for(var j = 1; j < str.length; j++) 
        if(str[j] == '/') 
          index = j-1
    
      //creates a substring of directory(s) name
      for(j = 0; j < index; j++) 
        subStr[j] = str[1+j]
      
      //makes the element
      linkElement[i] = createA(str, join(subStr, ''), 'Blank')
    }
    
    return linkElement
  }
  
  //draws only once
  reDraw(){
    textAlign(CENTER)
    text(this.title, width/2,height/10)
  }
  
}