scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleInnerNorthWest, function (sprite, location) {
    game.gameOver(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . a a a a . a a . . . . . . . . 
    . a 3 3 a a a a a a a a a a a . 
    a a 3 3 3 3 3 3 3 3 3 3 a a a . 
    a 3 3 3 3 3 3 8 3 8 3 3 a a . . 
    a 3 3 3 3 3 3 3 3 3 3 3 3 a . . 
    a a a 3 3 3 3 3 3 3 3 3 a a . . 
    . . a a a a 3 3 3 3 3 3 a . . . 
    . . . . . a a a a a a a a . . . 
    5 5 . 4 4 4 7 7 7 7 7 a a . . 5 
    5 5 . 4 7 7 7 7 7 7 7 7 4 . 5 5 
    . 5 5 4 7 7 7 7 7 4 4 4 5 5 5 . 
    . . . 4 7 7 7 7 7 4 . . . . . . 
    . . 7 7 4 4 7 7 7 4 . . . . . . 
    . 7 7 . . 4 4 7 7 4 7 7 7 7 . . 
    . . . . . . 4 4 4 4 . . . 7 7 . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`niveau1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
