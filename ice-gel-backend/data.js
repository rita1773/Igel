import bcrypt from 'bcryptjs';



const data = {

  
  users: [
    {
      name: 'Rita',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Hency',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
       
        name: 'MASCARPONE & BERRIES',
        category: 'Gelato',
        image: '/assets/gelstraw.png',
        price: 300,
        countInStock: 20,
        collections:'related',
        rating: 4.7,
        numReviews: 10,
        description: 'Exclusive recipe, made in Italy for Igel’s with mascarpone cheese combined with swirls of berries from the Argentine Patagonia.',
      },

      {
       
        name: 'Red Berry Love',
        category: 'Gelato',
        image: '/assets/gelblue.png',
        price: 320,
        countInStock: 20,
        collections:'related',
        rating: 4.6,
        numReviews: 10,
        description: 'Red berry sorbet. Mix of blueberries, strawberries, raspberries and blackberries from Patagonia.',
      },

      {
        
        name: 'CHOCOLATE HAZELNUT',
        category: 'Gelato',
        image: '/assets/gelcho.png',
        price: 400,
        countInStock: 20,
        collections: 'Topselling',
        rating: 5,
        numReviews: 30,
        description: 'chocolate with a chocolate and hazelnut filling, developed exclusively by Igel’s in Italy.',
      },

      {
       
        name: 'DARK 72%',
        category: 'Gelato',
        image: '/assets/geldark.png',
        price: 350,
        countInStock: 20,
        collections: 'Topselling',
        rating: 4.9,
        numReviews: 20,
        description: 'Organic vegan chocolate sorbet, made with cocoa from Bagua, Peru, the oldest cocoa region in the world.',
      },

      {
        
        name: 'LEMON PIE',
        category: 'Gelato',
        image: '/assets/gellemon.png',
        price: 300,
        countInStock: 20,
        collections:'related',
        rating: 4.7,
        numReviews: 15,
        description: 'We transformed the famous recipe into an incredible ice cream in its honor.',
      },

      {
       
        name: 'MINT & CHOCOLATE',
        category: 'Gelato',
        image: '/assets/gelmint.png',
        price: 350,
        countInStock: 20,
        collections: 'Topselling',
        rating: 4.9,
        numReviews: 30,
        description: 'Original recipe made in Italy for Igel’s with fresh mint harvested in Europe and semi-sweet chocolate chips.',
      },

      {
       
        name: 'COOKIES & CREAM',
        category: 'Gelato',
        image: '/assets/geloreo.png',
        price: 360,
        countInStock: 20,
        collections:'related',
        rating: 4.6,
        numReviews: 22,
        description: 'Whipped cream gelato with cookie swirls, developed exclusively by Igel’s in Italy.',
      },

      {
        
        name: 'PASSION FRUIT MOUSSE',
        category: 'Gelato',
        image: '/assets/gelpassion.png',
        price: 340,
        countInStock: 20,
        collections:'related',
        rating: 4.5,
        numReviews: 20,
        description: 'Ice cream inspired by the recipe of the light and airy French mousse with natural Amazonian passion fruit.',
      },

      {
       
        name: 'PISTACCHIO',
        category: 'Gelato',
        image: '/assets/gelpista.png',
        price: 330,
        countInStock: 20,
        collections:'related',
        rating: 4.7,
        numReviews: 25,
        description: 'A signature flavor made with one of the most precious ingredients of the Sicilian cuisine. A combination of the finest pistacchios in Bronte and Sicily.',
      },

      {
        
        name: 'COCO ROCK',
        category: 'Gelato',
        image: '/assets/gelwaffer.png',
        price: 350,
        countInStock: 20,
        collections:'related',
        rating: 4.7,
        numReviews: 20,
        description: 'Malaysian coconut ice cream with white chocolate, crispy wafers and shredded coconut swirls.',
      },

      {
        
        name: 'STRAWBERRY',
        category: 'Icepops',
        image: '/assets/pop1.png',
        price: 200,
        countInStock: 20,
        collections:'related',
        rating: 4.4,
        numReviews: 20,
        description: 'Ice pop made with fresh strawberries from our region.',
      },

      {
        
        name: 'MULTI FRUIT',
        category: 'Icepops',
        image: '/assets/pop2.png',
        price: 220,
        countInStock: 20,
        collections:'related',
        rating: 4.6,
        numReviews: 40,
        description: 'Ice pop made with fresh lemon juice and decorated with strawberry, tangerine and kiwi.',
      },

      {
        
        name: 'COOKIE POP',
        category: 'Icepops',
        image: '/assets/pop3.png',
        price: 250,
        countInStock: 20,
        collections: 'Topselling',
        rating: 4.7,
        numReviews: 30,
        description: 'Ice pop made with whipped cream, with chocolate ganache and chocolate cookie swirls, decorated with stracciatella coated cookies.',
      },

      {
      
        name: 'BERRIES',
        category: 'Icepops',
        image: '/assets/pop4.png',
        price: 270,
        countInStock: 20,
        collections:'related',
        rating: 4.5,
        numReviews: 36,
        description: 'Ice pop made of Italian mascarpone with a Patagonian berry swirl.',
      },

      {
       
        name: 'LEMON POP',
        category: 'Icepops',
        image: '/assets/pop5.png',
        price: 220,
        countInStock: 20,
        collections:'related',
        rating: 4.5,
        numReviews: 26,
        description: 'Creamy lemon pie ice pop with Premium lemon flavor and crispy wafers swirls, coated with Italian lemon flavored white chocolate.',
      },

      {
       
        name: 'SMILE KING',
        category: 'Icepops',
        image: '/assets/pop6.png',
        price: 280,
        countInStock: 20,
        collections: 'Topselling',
        rating: 4.8,
        numReviews: 45,
        description: 'King flavored ice pop, coated with Italian white and semi-sweet chocolate. The eyes are made with the same chocolate.',
      },

      {
       
        name: 'TONIO COOKIES & CREAM',
        category: 'Icepops',
        image: '/assets/pop7.png',
        price: 290,
        countInStock: 20,
        collections: 'Topselling',
        rating: 4.9,
        numReviews: 25,
        description: 'Whipped cream ice pop with cookies made in Italy for Igel’s and chocolate ganache swirls, coated with white chocolate. All decoration details are made by hand.',
      },

      {
       
        name: 'WHIPPED CREAM',
        category: 'Icepops',
        image: '/assets/pop8.png',
        price: 200,
        countInStock: 20,
        collections: 'Topselling',
        rating: 4.9,
        numReviews: 25,
        description: 'Stracciatella-coated wafer filled with whipped cream ice cream and then coated with semi-sweet chocolate decorated with lines of white chocolate.',
      },

      {
        
        name: 'PASSION FRUIT & COCONUT',
        category: 'Icepops',
        image: '/assets/pop9.png',
        price: 200,
        countInStock: 20,
        collections:'related',
        rating: 4.8,
        numReviews: 25,
        description: 'Malaysian coconut ice cream with passion fruit filling, coated with Italian white chocolate and decorated with striped coconut.',
      },

      {
        name: 'GIANDUIA',
        category: 'Icepops',
        image: '/assets/pop10.png',
        price: 300,
        countInStock: 20,
        collections:'related',
        rating: 4.9,
        numReviews: 35,
        description: 'Milk caramel ice pop with a gianduia chocolate filling, coated with Italian white chocolate.',
      },
    ],
};
export default data;


