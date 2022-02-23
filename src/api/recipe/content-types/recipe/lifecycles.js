const slugify = require("slugify");

module.exports = {
  async beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },
  async beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },
};
