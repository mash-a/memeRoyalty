
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('memeges').del()
    .then(function () {
      // Inserts seed entries
      return knex('memeges').insert([
        {url: "https://i.imgur.com/4xwWZoN.jpg", tagString: 'google, lyrics, nonsense, singer', votes: 42},
        {url: "https://i.imgur.com/IGGq0MK.png", tagString: 'commie, radleft', votes: 101},
        {url: "https://i.imgur.com/JHPk29c.jpg", tagString: 'cats, software, engineer, google', votes: 16}
      ]);
    });
};
