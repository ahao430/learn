const app = new PIXI.Application({
  width: 640,
  height: 360,
  antialias: true,
})
document.body.appendChild(app.view)

let cat = PIXI.Sprite.from('images/cat.png')
cat.scale.set(0.1, 0.1);
cat.x = 320
cat.y = 180
cat.pivot.x = 160;
cat.pivot.y = 90
app.stage.addChild(cat)

let elapsed = 0.0;
app.ticker.add((delta) => {
  cat.rotation -= 0.01 * delta;
});