function max(color){
    return s => s.split(";").map(kast => 
        kast.split(color).slice(-2,-1)
        .map(cubes => 
            parseInt(cubes.split(/[, :]/).slice(-2))
        )
    )
    .map(cubes => !!cubes[0] ? cubes[0] : 0)
    .reduce((max,n) => max<n ? n : max,0)
};

["Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
"Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
"Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
"Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
"Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"]
       .map(s => ({
        gameid: parseInt(s.split(":")[0].slice(5)),
        green: max("green")(s),
        red: max("red")(s),
        blue: max("blue")(s)
    }))
    .filter(game => !isNaN(game.gameid))
    .filter(game => game.green <= 13)
    .filter(game => game.red <= 12)
    .filter(game => game.blue <= 14)
    .reduce((sum,game) => sum+game.gameid,0)
