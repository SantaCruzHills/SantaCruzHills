let page;
function setup() {
    createCanvas(windowWidth, windowHeight)
    page = new Page("SantaCruzHills");
}
function draw() {
  page.reDraw();
}
