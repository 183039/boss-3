namespace SpriteKind {
    export const levelonealien = SpriteKind.create()
    export const leveltwoalien = SpriteKind.create()
    export const levelthreealien = SpriteKind.create()
    export const littleAliens = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const asteroidman = SpriteKind.create()
    export const myride = SpriteKind.create()
}
function earthtrip () {
    astronaut.destroy()
    ridehome = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........9999999............
        .........99199999999..........
        ........9919999999999.........
        ........9999999999999.........
        .......999999999999999........
        .......999999999999999........
        .....bbbbbbbbbbbbbbbbbbb......
        ..bbbbbbbbbbbbbbbbbbbbbbbbb...
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b7bbb7bbb7bbb7bbb7bbb7bbb7bbb7
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ...bbbbbbbbbbbbbbbbbbbbbbbb...
        .....bbbbbbbbbbbbbbbbbbbb.....
        ....b....b....b.....b....b....
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.myride)
    game.splash("Fly the UFO back to Earth")
    tiles.setTilemap(tilemap`level23`)
    tiles.placeOnRandomTile(ridehome, assets.tile`myTile41`)
    scene.cameraFollowSprite(ridehome)
    controller.moveSprite(ridehome, 100, 100)
}
sprites.onOverlap(SpriteKind.levelonealien, SpriteKind.Projectile, function (sprite, otherSprite) {
    alienlvlone.destroy()
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    jump = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.splash("level 3")
    level_3()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        7 7 7 
        7 5 7 
        7 7 7 
        `, astronaut, 100, -25)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.levelthreealien, SpriteKind.Projectile, function (sprite, otherSprite) {
    alienlvlthree.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.levelonealien, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, astronaut).value += -12.5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    earthtrip()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    thief()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.leveltwoalien, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, astronaut).value += -12.5
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 1) {
        astronaut.vy = -100
        jump += 1
    }
})
sprites.onCreated(SpriteKind.levelonealien, function (sprite) {
    sprite.setVelocity(-70, 0)
    sprite.x = astronaut.x + 90
    sprite.y = randint(astronaut.y - 30, astronaut.y + 30)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    info.setLife(0)
})
function thief () {
    controller.moveSprite(astronaut, 100, 100)
    game.splash("You're on the spaceship and in the control room. Hit the GO button go home, but while you're here, take a look around.")
    tiles.setTilemap(tilemap`level21`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffff8888778ffff111fffffffffffffffffffffffffffffff1111ffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffff778888787fff111fffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff77788788877ffffffffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff77778887777ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77788887777ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff78888878887ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77888888877ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77788887778ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77788887778ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7788887778ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7888887ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff44444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff2224424ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff4444444fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff2422222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff4444224ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff22444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.placeOnRandomTile(astronaut, assets.tile`myTile52`)
}
sprites.onCreated(SpriteKind.levelthreealien, function (sprite) {
    sprite.setVelocity(-70, 0)
    sprite.x = astronaut.x + 80
    sprite.y = randint(astronaut.y - 30, astronaut.y + 30)
})
function doSomething (col: number, row: number) {
    asteroid = sprites.create(img`
        ........................................
        ................ccccccccc...............
        ............cccccccccccccccc..ccc.......
        ..........ccbbbbccccbccccccccccccccc....
        .........ccbbffbbcccbffbccccccccccccc...
        .......cccbccffcbcccbbfbcccccccccccccc..
        ......cccccbbfcfccccccccccccccccccbbccc.
        ....ccccccccbbcccccccccccccbccccccbfbcc.
        ...ccccccccccccccccccccccccbcbbfcbbffccc
        .ccccccccccccccccccccccccbbbccbfcccfcccc
        cccccccccccccccbbbbbcccccbffccccccccccc.
        cccccccccbbcccbfffccccccbbfffccccccccc..
        ccccccccbbbbbbbfffccccccbffffcccc.......
        ccccccccbccfffffffcccccccbbbfccc........
        ccccccccbbbcfffcffccccccccccccc.........
        .cccccccccbbbbcbccccccccccccccc.........
        ......cccccccbbcccccccccccccccc.........
        ..........ccccccccccccccccccccc.........
        ..................ccccccccccc...........
        ........................................
        `, SpriteKind.asteroidman)
    tiles.placeOnTile(asteroid, tiles.getTileLocation(col, row))
    list.push(asteroid)
}
function level_2 () {
    for (let value of list) {
        value.destroy()
    }
    list = []
    tiles.setTilemap(tilemap`level35`)
    tiles.placeOnRandomTile(astronaut, assets.tile`myTile4`)
    info.setLife(8)
    lvl1 = false
    lvl2 = true
    lvl3 = false
    doSomething(10, 19)
    doSomething(20, 17)
    doSomething(29, 15)
    doSomething(35, 19)
    doSomething(41, 17)
    doSomething(46, 14)
    doSomething(52, 18)
    doSomething(57, 15)
    doSomething(64, 16)
    doSomething(74, 16)
    doSomething(83, 16)
}
sprites.onCreated(SpriteKind.leveltwoalien, function (sprite) {
    sprite.setVelocity(-90, 0)
    sprite.x = astronaut.x + 90
    sprite.y = randint(astronaut.y - 30, astronaut.y + 30)
})
sprites.onOverlap(SpriteKind.leveltwoalien, SpriteKind.Projectile, function (sprite, otherSprite) {
    alienlvltwo.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.levelthreealien, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, astronaut).value += -12.5
})
scene.onOverlapTile(SpriteKind.myride, assets.tile`myTile38`, function (sprite, location) {
    earth()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.asteroidman, function (sprite, otherSprite) {
    sprite.vy = -115
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite, location) {
    game.splash("level 2")
    level_2()
})
function earth () {
    tiles.setTilemap(tilemap`level24`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff119999911ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff199199991ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191999991ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff199999991ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff199999991ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff199999991ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111999991111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
        ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff88888888888888888ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888887777888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888777778888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff888887778888888888888888888888888877787788888fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff8888877777888888888888888888888888887778888888877ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff888887777777788888888888888888888888877888888887777fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1ffffffffffffffffffffffffffffffffffffffffff88877777777777788888888888888888788888778887777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777888888888888888887778887788777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777788888888888888877788888877777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777788888888888888877778888877777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777888888888888888777788887777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777778888888888888887777888877777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777788888888888888888888887777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777888888888888888888888887777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff1ffffffffffff77777777777777777777788888888888888888888888777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff77777777777777777778888888888888888888888777777777777777777777777ffffffffffffffff1fffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777888888888888888888888777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777888888888888888888887777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff777777777777777777788888888888888888888877777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff777777777777777777788888877888888888888877777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff77777777777777777777888887778888888888888777777777777777777777777777777fffffffffffffffffffffffffffff1fffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff77777777777777777777778877778888888888888777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777778888888888888877777787777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777778888888888888888888888877777777777777777777fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777888888888888888888888888877888888777777777777ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff1fffffffffffffffffff7777777777777777777777777778888888888888888888888888888888888777777777777ffffffffffffffffffffffffffffffffffffffffffff
        ffffffff1ffffffffffffffffffffffffffffffffff7777777777777777777777777888888888888888888888877888888888888777777777777ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777888888888888888888888777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff7777777777777777777777778888888888888888888888777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff77777777777777777777777788888888888888888888877777777777777777777788777777ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff7777777777777777777777888888888888888888888777777777777777777777778777777fffffffff1ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8777777777777777777777888888888888888888887777777777777777777777778877777ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8877777777777777777777888888888888888888887777777777777777777777777888777ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8887777788888888777777888888888888888888877777777777777777777777777888888ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8887777788888888888777888888888888888888877777777777777777777777777888888ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8887777788888888888888888888888888888888877777777777777777777777777888888ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8887777788888888888888888888888888888888877777777777777777777777777888888ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8887777788888888888888888888888888888888877777777777777777777777777888888ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8887777788888888888888888888888888888888877777777777777777777777777888888ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8777777777777777777778888888888888888888877777777777777777777777777888888ffffffffffffffffffffffffffffffffff1fffffffff
        fffffffffffffffff1fffffffffffffffffffffffff7777777777777777777778888888888888888888877777777777777777777777777888888ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff77777777777777777777888888888888888888888777777777777777777777777788888fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff77777777777777777777888888888888888888888877777777777777777777777888888fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff77777777777777777777888888888888888888888887777777777777777777777888888fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff77777777777777777777888888888888888888888888877777777777777777778888888fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff777777777777777777788888888888888888888888888877777777777777777888888ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff1f777777777777777777788888888888888888888888888887777777777777777888888ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff7777777777777777778888888888888888888888888888887777777777777888888fffffffffffffffffff1fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff7777777777777777778888888888888888888888888888888777777777777888888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff77777777777777778888888888888888888888888888888887777777777788888ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff77777777777777778888888888888888888888888888888888777777777788888ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff777777777777777888888888888888888888888888888888887777777778888fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff777777777777778888888888888888888888888888888888887777777788888fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff7777777777777888888888888888888888888888888888888777777778888ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff77777777777888888888888888888888888888888888888877777778888ffffffffffffffff1ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff777777777788888888888888888888888888888888888887777777888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff1ffffffffffffffffffffffffffffffffffffffffffff777777777788888888888888888888888888888888888887777777888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff7777777778888888888888888888888888888888888888777777888fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff77777777888888888888888888888888888888888888877777788ff1fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff1ffffffffffffffffffffffffffffff777777788888888888888888888888888888888888887777778ffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff7777778888888888888888888888888888888888888777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777778888888888888888888888888888888888877777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777888888888888888888888888888888888887777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77778888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7788888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff88888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
}
function level_1 () {
    tiles.setTilemap(tilemap`level7`)
    tiles.placeOnRandomTile(astronaut, assets.tile`myTile4`)
    info.setLife(8)
    lvl1 = true
    lvl2 = false
    lvl3 = false
    doSomething(8, 16)
    doSomething(19, 17)
    doSomething(30, 16)
    doSomething(38, 21)
    doSomething(47, 22)
    doSomething(52, 19)
    doSomething(60, 21)
    doSomething(66, 17)
    doSomething(75, 20)
    doSomething(83, 18)
    doSomething(92, 19)
}
function level_3 () {
    for (let value of list) {
        value.destroy()
    }
    list = []
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(astronaut, assets.tile`myTile4`)
    info.setLife(8)
    lvl1 = false
    lvl2 = false
    lvl3 = true
    doSomething(11, 14)
    doSomething(15, 17)
    doSomething(22, 15)
    doSomething(30, 18)
    doSomething(37, 21)
    doSomething(46, 19)
    doSomething(51, 15)
    doSomething(60, 16)
    doSomething(69, 16)
    doSomething(75, 18)
    doSomething(82, 20)
    doSomething(89, 17)
    doSomething(94, 23)
    doSomething(97, 16)
}
let alienlvltwo: Sprite = null
let lvl3 = false
let lvl2 = false
let lvl1 = false
let asteroid: Sprite = null
let alienlvlthree: Sprite = null
let projectile2: Sprite = null
let alienlvlone: Sprite = null
let ridehome: Sprite = null
let jump = 0
let list: Sprite[] = []
let astronaut: Sprite = null
tiles.setTilemap(tilemap`level31`)
music.playMelody("C E B G - - - - ", 160)
music.beamUp.play()
game.splash("Uh Oh! Your spaceship crashed! you have to find a way back home.")
game.splash("No worries, there's a UFO you can highjack just across these asteroids.")
game.splash("Watch out for the aliens defending the spaceship! if they touch you, you lose a life!")
game.splash("you can defend yourself with your lazer shooter as you jump across the asteroids. dont fall too far past the asteroids, you will die.")
game.splash("good luck")
astronaut = sprites.create(img`
    .........ffffffffff...........
    ........ff11111111f...........
    .......ff111111fffff..........
    ......ff111111ff999ff.........
    ......f111122ff99199ff........
    ......f22222ff9999199f........
    ......f88888f99999999f........
    ......f1111f999999999f........
    ......f1111f999999999f........
    ......f11111fff999999f........
    ......f1111111ffff99ff........
    ......ff111111111ffff.........
    .......f1111111111f...ffffffff
    ......ff111ffffffffffff222282f
    ......f111ff1288111111fff828ff
    ......f111f1122811111111f2fff.
    ......f111f111281111111ff2f...
    ......f1111fffffffffffff28f...
    ......f1111111111f.....ffff...
    ......f1111111111f............
    ......f1111111111f............
    ......f111111111ff............
    ......ff11111111f.............
    .......ff1111111f.............
    ........ff111111f.............
    .........f111111f.............
    .........f111111f.............
    .........f111111ff............
    .........f1111111f............
    .........fffffffff............
    `, SpriteKind.Player)
controller.moveSprite(astronaut, 100, 0)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(astronaut)
statusbar.setColor(7, 2)
statusbar.value = 100
scene.cameraFollowSprite(astronaut)
list = []
jump = 0
level_1()
forever(function () {
	
})
forever(function () {
    astronaut.ay = 150
})
forever(function () {
    pause(3000)
    if (lvl1) {
        alienlvlone = sprites.create(img`
            ..............................
            ...........aaaaaaa............
            ..........ccaaaccca...........
            .........aaacacaaaaa..........
            ........fffaacaafffa..........
            ........f1ffaaaf1ffa..........
            ........fffffafff1faa.........
            ........aff1faffffaaa.........
            ........aaaaaaaaaaacc.........
            ........ccaaffffaacca.........
            ........acaffffffaaaa.........
            .........aafffffffaa..........
            ..........aaaaaaaaa...........
            ...........aaaaaaa............
            .............ccc..............
            ............aaaaa.............
            ..........aaaaaaaaa...........
            .........aaaaaaaaaaa..........
            .........aaa.aaa.aaa..........
            .........aa..aaa..aa..........
            .........aa..aaa..aa..........
            .........aa.aaaaa.aa..........
            ...........aaaaaaa............
            ...........aaaaaaa............
            ...........aaaaaaa............
            ...........aaa.aaa............
            ...........aaa.aaa............
            ...........aaa.aaa............
            ...........aaa.aaa............
            ...........aaa.aaa............
            `, SpriteKind.levelonealien)
    } else if (lvl2) {
        alienlvltwo = sprites.create(img`
            ..............................
            ...........9999999............
            ..........669996669...........
            .........99969699999..........
            ........fff99699fff9..........
            ........f1ff999f1ff9..........
            ........fffff9fff1f99.........
            ........9ff1f9ffff999.........
            ........9999999999966.........
            ........6699ffff99669.........
            ........969ffffff9999.........
            .........99fffffff99..........
            ..........999999999...........
            ...........9999999............
            .............666..............
            ............99999.............
            ..........999999999...........
            .........99999999999..........
            .........999.999.999..........
            .........99..999..99..........
            .........99..999..99..........
            .........99.99999.99..........
            ...........9999999............
            ...........9999999............
            ...........9999999............
            ...........999.999............
            ...........999.999............
            ...........999.999............
            ...........999.999............
            ...........999.999............
            `, SpriteKind.leveltwoalien)
    } else if (lvl3) {
        alienlvlthree = sprites.create(img`
            ..............................
            ...........4444444............
            ..........224442224...........
            .........44424244444..........
            ........fff44244fff4..........
            ........f1ff444f1ff4..........
            ........fffff4fff1f44.........
            ........4ff1f4ffff444.........
            ........4444444444422.........
            ........2244ffff44224.........
            ........424ffffff4444.........
            .........44fffffff44..........
            ..........444444444...........
            ...........4444444............
            .............222..............
            ............44444.............
            ..........444444444...........
            .........44444444444..........
            .........444.444.444..........
            .........44..444..44..........
            .........44..444..44..........
            .........44.44444.44..........
            ...........4444444............
            ...........4444444............
            ...........4444444............
            ...........444.444............
            ...........444.444............
            ...........444.444............
            ...........444.444............
            ...........444.444............
            `, SpriteKind.levelthreealien)
    }
})
forever(function () {
	
})
