sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let Ka: Sprite = null
let Don = sprites.create(img`
    . f f f f f f f f f f f f f f . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 f f 2 2 2 2 2 2 2 2 f f 2 f 
    f 2 f f 2 2 2 2 2 2 2 2 f f 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 f 3 f 2 2 2 2 2 2 f 
    f 2 2 2 2 f 3 3 3 f 2 2 2 2 2 f 
    f 2 2 2 f f 3 3 3 f f 2 2 2 2 f 
    f 2 f f 2 f 3 3 3 f 2 f f 2 2 f 
    f 2 2 2 2 2 f f f 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    . f f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
controller.moveSprite(Don)
game.onUpdateInterval(500, function () {
    Ka = sprites.create(img`
        . f f f f f f f f f f f f f f . 
        f 6 6 6 f 6 6 6 6 6 6 f 6 6 6 f 
        f 6 f f 6 f 6 6 6 6 f 6 f f 6 f 
        f 6 f f 6 6 f 6 6 f 6 6 f f 6 f 
        f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
        f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
        f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
        f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
        f 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 
        f 6 6 6 6 6 f 3 f 6 6 6 6 6 6 f 
        f 6 6 6 6 f 3 3 3 f 6 6 6 6 6 f 
        f 6 6 6 f f 3 3 3 f f 6 6 6 6 f 
        f 6 f f 6 f 3 3 3 f 6 f f 6 6 f 
        f 6 6 6 6 6 f f f 6 6 6 6 6 6 f 
        f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
        . f f f f f f f f f f f f f f . 
        `, SpriteKind.Enemy)
    Ka.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    Ka.setVelocity(randint(10, 20), randint(10, 20))
})
