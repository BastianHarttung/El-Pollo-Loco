const level1 = new Level(
    [        
        new BackgroundObjects('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),      /* Background */
        new Clouds('../img/5.Fondo/Capas/4.nubes/Completo.png', 0),                    /* Clouds */
        new BackgroundObjects('../img/5.Fondo/Capas/3.Fondo3/Completo.png', 0),        /* Hills */
        new BackgroundObjects('../img/5.Fondo/Capas/2.Fondo2/completo.png', 0),        /* BG Cacti */
        new BackgroundObjects('../img/5.Fondo/Capas/1.suelo-fondo1/completo.png', 0),  /* Ground */        
        

        new BackgroundObjects('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', this.width_background),    /* Background */
        new Clouds('../img/5.Fondo/Capas/4.nubes/Completo.png', this.width_background),                  /* Clouds */        
        new BackgroundObjects('../img/5.Fondo/Capas/3.Fondo3/Completo.png', this.width_background),      /* Hills */
        new BackgroundObjects('../img/5.Fondo/Capas/2.Fondo2/completo.png', this.width_background),      /* BG Cacti */
        new BackgroundObjects('../img/5.Fondo/Capas/1.suelo-fondo1/completo.png', this.width_background),/* Ground */

        new Clouds('../img/5.Fondo/Capas/4.nubes/Completo.png', this.width_background*2)                /* Clouds */        
    ],
    [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chick(),
    new Chick(),
    new Chick()
    ]       
    );