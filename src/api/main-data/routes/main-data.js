'use strict';

/**
 * main-data router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::main-data.main-data');
