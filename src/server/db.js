module.exports = function () {
  const faker = require("faker");
  faker.locale = "vi";
  const data = {
    posts: [],
  };
  for (i = 0; i < 30; ++i) {
    data.posts.push({
      id: i + 1,
      title: faker.name.title(),
      category: faker.commerce.department(),
      description: faker.lorem.sentences(),
      content: faker.lorem.paragraphs(),
      banner: faker.image.business(),
      author: faker.name.findName()
    });
  }
  return data;
};
