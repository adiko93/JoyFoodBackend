"use strict";

/**
 * recipe service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::recipe.recipe", ({ strapi }) => ({
  async delete(ctx) {
    // some logic here
    const response = await super.delete(ctx);
    // some more logic
    return response;
  },
}));
