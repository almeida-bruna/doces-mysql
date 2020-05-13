'use strict';

/**
 * Promotions.js controller
 *
 * @description: A set of functions called "actions" for managing `Promotions`.
 */

module.exports = {

  /**
   * Retrieve promotions records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.promotions.search(ctx.query);
    } else {
      return strapi.services.promotions.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a promotions record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.promotions.fetch(ctx.params);
  },

  /**
   * Count promotions records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.promotions.count(ctx.query, populate);
  },

  /**
   * Create a/an promotions record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.promotions.add(ctx.request.body);
  },

  /**
   * Update a/an promotions record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.promotions.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an promotions record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.promotions.remove(ctx.params);
  }
};
