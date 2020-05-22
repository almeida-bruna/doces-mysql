'use strict';

/**
 * Files.js controller
 *
 * @description: A set of functions called "actions" for managing `Files`.
 */

module.exports = {

  /**
   * Retrieve files records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.files.search(ctx.query);
    } else {
      return strapi.services.files.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a files record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.files.fetch(ctx.params);
  },

  /**
   * Count files records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.files.count(ctx.query, populate);
  },

  /**
   * Create a/an files record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.files.add(ctx.request.body);
  },

  /**
   * Update a/an files record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.files.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an files record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.files.remove(ctx.params);
  }
};
