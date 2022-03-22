"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    strapi.plugin("users-permissions").controller("user").me = async (ctx) => {
      const { id } = ctx.state.user;
      if (id) {
        let data = await strapi
          .query("plugin::users-permissions.user")
          .findOne({
            select: ["username", "email", "id"],
            where: { id },
            populate: {
              avatar: {
                select: ["url"],
              },
              favourite_recipes: {
                select: ["id"],
              },
            },
          });
        ctx.body = {
          id: data.id,
          username: data.username,
          email: data.email,
          avatar: data?.avatar?.url || null,
          favourite_recipes: data.favourite_recipes.map(
            (current) => current.id
          ),
        };
      } else {
        ctx.throw(401, "unauthorized");
      }
    };
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
