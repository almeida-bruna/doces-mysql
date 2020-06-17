'use strict';

/**
 * Statuspayment.js controller
 *
 * @description: A set of functions called "actions" for managing `Statuspayment`.
 */

module.exports = {

  /**
   * Retrieve statuspayment records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.statuspayment.search(ctx.query);
    } else {
      return strapi.services.statuspayment.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a statuspayment record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.statuspayment.fetch(ctx.params);
  },

  /**
   * Count statuspayment records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.statuspayment.count(ctx.query, populate);
  },

  /**
   * Create a/an statuspayment record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.statuspayment.add(ctx.request.body);
  },

  /**
   * Update a/an statuspayment record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.statuspayment.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an statuspayment record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.statuspayment.remove(ctx.params);
  }
};
