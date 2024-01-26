'use strict';

/**
 * main-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-data.main-data');
