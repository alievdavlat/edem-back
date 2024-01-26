'use strict';

/**
 * owner-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::owner-data.owner-data');
