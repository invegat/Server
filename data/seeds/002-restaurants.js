const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      const restaurants = [];
      for (let i = 1; i < 13; i++) {
        let numOfWords = Math.floor(Math.random() * 10 + 10)
        let newRestaurant = {
          name: faker.company.companyName(),
          description: faker.lorem.words(numOfWords),
          true_score: Math.floor(Math.random() * 6),
          adju_score: Math.floor(Math.random() * 6)
        }
        restaurants.push(newRestaurant)
      }
      // Inserts seed entries
      return knex('restaurants').insert(restaurants);

      // return knex('restaurants').insert([
      //   {name: 'Tacolicious', description: 't’s raining tacos, from out of the sky, tacos, don’t even ask why. Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp.'},
      //   {name: 'Taco Town', description: 'Burritos are very tasty. Give me tacos, or give me death. CARNE ASADA!! Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins.'},
      //   {name: 'Tuesdays R 4 Tacos', description: 'Tacos, again? This will be 5 times this week and it’s only Tuesday. Tacos, tacos, tacos. Say taco one more time. Add in a few el Pastor with guac and diced onions. Carne asada on corn tortillas.'}
      // ]);
    });
};
