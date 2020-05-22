'use strict';

/**
 * Stoke.js controller
 *
 * @description: A set of functions called "actions" for managing `Stoke`.
 */

module.exports = {

  /**
   * Retrieve stoke records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.stoke.search(ctx.query);
    } else {
      return strapi.services.stoke.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a stoke record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.stoke.fetch(ctx.params);
  },

  /**
   * Count stoke records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.stoke.count(ctx.query, populate);
  },

  /**
   * Create a/an stoke record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.stoke.add(ctx.request.body);
  },

  /**
   * Update a/an stoke record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.stoke.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an stoke record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.stoke.remove(ctx.params);
  }
};
