let width_background = 1187;

const level1 = new Level(
    [
        new BackgroundObjects('./img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),                    /* Background */        
    ],
    [
        new BackgroundObjects('./img/5.Fondo/Capas/3.Fondo3/Completo.png', 0),                      /* Hills */
        new BackgroundObjects('./img/5.Fondo/Capas/3.Fondo3/Completo.png', width_background),       /* Hills */
        new BackgroundObjects('./img/5.Fondo/Capas/3.Fondo3/Completo.png', width_background * 2),   /* Hills */
    ],
    [
        new BackgroundObjects('./img/5.Fondo/Capas/2.Fondo2/completo.png', 0),                      /* BG Cacti */
        new BackgroundObjects('./img/5.Fondo/Capas/2.Fondo2/completo.png', width_background),       /* BG Cacti */
        new BackgroundObjects('./img/5.Fondo/Capas/2.Fondo2/completo.png', width_background * 2),   /* BG Cacti */
    ],
    [
        new BackgroundObjects('./img/5.Fondo/Capas/1.suelo-fondo1/completo.png', 0),                    /* Ground */
        new BackgroundObjects('./img/5.Fondo/Capas/1.suelo-fondo1/completo.png', width_background),     /* Ground */
        new BackgroundObjects('./img/5.Fondo/Capas/1.suelo-fondo1/completo.png', width_background * 2), /* Ground */
    ],
    [
        new Clouds('./img/5.Fondo/Capas/4.nubes/Completo.png', 0),                     /* Clouds */
        new Clouds('./img/5.Fondo/Capas/4.nubes/Completo.png', width_background),      /* Clouds */
        new Clouds('./img/5.Fondo/Capas/4.nubes/Completo.png', width_background * 2),  /* Clouds */
        new Clouds('./img/5.Fondo/Capas/4.nubes/Completo.png', width_background * 3),  /* Clouds */
        new Clouds('./img/5.Fondo/Capas/4.nubes/Completo.png', width_background * 4)   /* Clouds */
    ],
    [
        new Chick(600),
        new Chicken(800),
        new Chicken(1300),
        new Chick(1600),
        new Chicken(2000),
        new Chick(2300),
        new Chicken(2600),
        new Endboss()
    ],
    [
        new Coin(400),
        new Coin(700),
        new Coin(1000),
        new Coin(1300),
        new Coin(1500),
        new Coin(1700),
        new Coin(2000),
        new Coin(2300),
        new Coin(2500),
        new Coin(2800)          //10
    ],
    [
        new Tequila(400),
        new Tequila(800),
        new Tequila(1000),
        new Tequila(1300),
        new Tequila(1700),
        new Tequila(2100),
        new Tequila(2600)       //7
    ]
);