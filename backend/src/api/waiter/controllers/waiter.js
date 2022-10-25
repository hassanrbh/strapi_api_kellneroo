'use strict';

/**
 * waiter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::waiter.waiter');
