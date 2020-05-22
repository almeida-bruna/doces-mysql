'use strict';

/**
 * Sex.js controller
 *
 * @description: A set of functions called "actions" for managing `Sex`.
 */

module.exports = {

  /**
   * Retrieve sex records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.sex.search(ctx.query);
    } else {
      return strapi.services.sex.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a sex record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.sex.fetch(ctx.params);
  },

  /**
   * Count sex records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.sex.count(ctx.query, populate);
  },

  /**
   * Create a/an sex record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sex.add(ctx.request.body);
  },

  /**
   * Update a/an sex record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sex.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sex record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sex.remove(ctx.params);
  }
};
