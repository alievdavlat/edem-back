'use strict';

/**
 * exclusive-data router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::exclusive-data.exclusive-data');
