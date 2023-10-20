'use strict';

/**
 * candle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::candle.candle');
