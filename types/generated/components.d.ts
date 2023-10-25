import type { Schema, Attribute } from '@strapi/strapi';

export interface ImageImages extends Schema.Component {
  collectionName: 'components_image_images_s';
  info: {
    displayName: 'Images ';
    icon: '';
    description: '';
  };
  attributes: {
    photo: Attribute.Media & Attribute.Required;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'image.images': ImageImages;
    }
  }
}
