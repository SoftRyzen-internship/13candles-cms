'use strict';

/**
 * aroma router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::aroma.aroma');
