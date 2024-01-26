'use strict';

/**
 * exclusive-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exclusive-data.exclusive-data');
