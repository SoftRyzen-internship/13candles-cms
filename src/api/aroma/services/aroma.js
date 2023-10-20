'use strict';

/**
 * aroma service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aroma.aroma');
