'use strict';

/**
 * to-do-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::to-do-item.to-do-item');
