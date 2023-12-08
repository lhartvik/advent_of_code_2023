["two1nine",
"eightwothree",
"abcone2threexyz",
"xtwone3four",
"4nineeightseven2",
"zoneight234",
"7pqrstsixteen"].map(s => s.replace(/(one)/,"on1e"))
    .map(s => s.replace(/(two)/g,"tw2o"))
    .map(s => s.replace(/(three)/g,"thr3ee"))
    .map(s => s.replace(/(four)/g,"fo4ur"))
    .map(s => s.replace(/(five)/g,"fi5ve"))
    .map(s => s.replace(/(six)/g,"si6x"))
    .map(s => s.replace(/(seven)/g,"sev7en"))
    .map(s => s.replace(/(eight)/g,"eig8ht"))
    .map(s => s.replace(/(nine)/g,"ni9ne"))
    .map(s => s.replace(/[^0-9]/g,''))
    .map(s => s[0]+s.slice(-1))
    .map(s => parseInt(s)).filter(s => !isNaN(s))
    .reduce((sum, n) => sum+n, 0)
