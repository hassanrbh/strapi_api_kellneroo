'use strict';

/**
 * waiter router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::waiter.waiter');
