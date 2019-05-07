/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/
 
// game loop
while (true) {

    // Contient la plus haute montagne
    let highest = 0;
    // Tire sur la montagne
    let fire = 0;

    for (let i = 0; i < 8; i++) {

        const mountainH = parseInt(readline()); // represents the height of one mountain.

        // Si mountainH est plus grand que highest qui est à 0
        if (highest < mountainH) {

            // Alors highest prend la valeur de mountainH
            highest = mountainH;
            // L'indice de la ième montagne est attribué))))))))))))))))
            fire = i; 
        }
    }
 
    // Write an action using print()
    // To debug: console.error('Debug messages...');
 
    console.log(fire); // The index of the mountain to fire on.
}