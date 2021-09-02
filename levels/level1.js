let width_background = 1187;

const level1 = new Level(
    [        
        new BackgroundObjects('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),      /* Background */
        new BackgroundObjects('../img/5.Fondo/Capas/3.Fondo3/Completo.png', 0),        /* Hills */
        new BackgroundObjects('../img/5.Fondo/Capas/2.Fondo2/completo.png', 0),        /* BG Cacti */
        new BackgroundObjects('../img/5.Fondo/Capas/1.suelo-fondo1/completo.png', 0),  /* Ground */  
        new BackgroundObjects('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', width_background),    /* Background */
        new BackgroundObjects('../img/5.Fondo/Capas/3.Fondo3/Completo.png', width_background),      /* Hills */
        new BackgroundObjects('../img/5.Fondo/Capas/2.Fondo2/completo.png', width_background),      /* BG Cacti */
        new BackgroundObjects('../img/5.Fondo/Capas/1.suelo-fondo1/completo.png', width_background),/* Ground */
    ],
    [
        new Clouds('../img/5.Fondo/Capas/4.nubes/Completo.png', 0),                     /* Clouds */
        new Clouds('../img/5.Fondo/Capas/4.nubes/Completo.png', width_background),      /* Clouds */  
        new Clouds('../img/5.Fondo/Capas/4.nubes/Completo.png', width_background*2)     /* Clouds */              
    ],
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chick(),
        new Chick(),
        new Chick(), 
        new Endboss()   
    ],
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ],
    [
        new Tequila(),
        new Tequila(),
        new Tequila(),
        new Tequila(),
        new Tequila(),
        new Tequila(),
        new Tequila()
    ]       
);