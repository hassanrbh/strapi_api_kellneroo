'use strict';

/**
 * waiter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::waiter.waiter');
