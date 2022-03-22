"use strict";

/**
 *  review controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::review.review", ({ strapi }) => ({
  async create(ctx) {
    // some logic here
    const response = await super.create(ctx);

    const reviews = await strapi.db.query("api::review.review").findMany({
      where: {
        recipe: {
          id: {
            $eq: ctx.request.body.data.recipe,
          },
        },
      },
    });
    // some more logic
    const average =
      reviews?.reduce((total, current) => current?.rating + total, 0) /
      reviews?.length;
    strapi.db.query("api::recipe.recipe").update({
      where: { id: ctx.request.body.data.recipe },
      data: { rating: average },
    });
    return response;
  },
  async delete(ctx) {
    const recipeId = await strapi.db.query("api::review.review").findOne({
      select: ["id"],
      where: { id: ctx.params.id },
      populate: { recipe: { select: ["id"] } },
    });

    const response = await super.delete(ctx);

    const reviews = await strapi.db.query("api::review.review").findMany({
      where: {
        recipe: {
          id: {
            $eq: recipeId.recipe.id,
          },
        },
      },
    });
    const average =
      reviews?.reduce((total, current) => current?.rating + total, 0) /
      reviews?.length;
    await strapi.db.query("api::recipe.recipe").update({
      where: { id: recipeId.recipe.id },
      data: { rating: average || 0 },
    });
    return response;
  },
}));
