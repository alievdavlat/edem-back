import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutAboutTour extends Schema.Component {
  collectionName: 'components_about_about_tours';
  info: {
    displayName: 'aboutTour';
    icon: 'earth';
  };
  attributes: {
    title_ru: Attribute.String;
    title_uz: Attribute.String;
    description_ru: Attribute.String;
    description_uz: Attribute.String;
  };
}

export interface AboutPeculiarities extends Schema.Component {
  collectionName: 'components_about_peculiarities';
  info: {
    displayName: 'peculiarities';
    icon: 'cloud';
  };
  attributes: {
    title_ru: Attribute.String;
    title_uz: Attribute.String;
    peculiarities_list: Attribute.JSON;
  };
}

export interface AboutPriceDoesNotInclude extends Schema.Component {
  collectionName: 'components_about_price_does_not_includes';
  info: {
    displayName: 'priceDoesNotInclude';
    icon: 'apps';
  };
  attributes: {
    title_ru: Attribute.String;
    title_uz: Attribute.String;
    priceDoesNotInclude_data: Attribute.JSON;
  };
}

export interface AboutPriceIncludes extends Schema.Component {
  collectionName: 'components_about_price_includes';
  info: {
    displayName: 'priceIncludes';
  };
  attributes: {
    title_ru: Attribute.String;
    title_uz: Attribute.String;
    priceIncludes_data: Attribute.JSON;
  };
}

export interface HotelsHotels extends Schema.Component {
  collectionName: 'components_hotels_hotels';
  info: {
    displayName: 'hotels';
  };
  attributes: {
    title_ru: Attribute.String;
    title_uz: Attribute.String;
    five_star_hotels: Attribute.JSON;
    four_star_hotels: Attribute.JSON;
  };
}

export interface OwnerOwnerData extends Schema.Component {
  collectionName: 'components_owner_owner_data';
  info: {
    displayName: 'owner_data';
    icon: 'cube';
  };
  attributes: {
    title_ru: Attribute.String;
    title_uz: Attribute.String;
    description_ru: Attribute.String;
    description_uz: Attribute.String;
    avatar: Attribute.Media;
    owner_name_uz: Attribute.String;
    owner_name_ru: Attribute.String;
    text_ru: Attribute.String;
    text_uz: Attribute.String;
  };
}

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.about-tour': AboutAboutTour;
      'about.peculiarities': AboutPeculiarities;
      'about.price-does-not-include': AboutPriceDoesNotInclude;
      'about.price-includes': AboutPriceIncludes;
      'hotels.hotels': HotelsHotels;
      'owner.owner-data': OwnerOwnerData;
      'socials.socials': SocialsSocials;
    }
  }
}
