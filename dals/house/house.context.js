"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.houseContext = void 0;
var _mongoose = require("mongoose");
const houseSchema = new _mongoose.Schema({
  listing_url: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  name: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  // summary: { type: Schema.Types.String, required: true },
  // space: { type: Schema.Types.String },
  description: {
    type: _mongoose.Schema.Types.String
  },
  // neighborhood_overview: { type: Schema.Types.String },
  // notes: { type: Schema.Types.String },
  // transit: { type: Schema.Types.String },
  // access: { type: Schema.Types.String },
  // interaction: { type: Schema.Types.String },
  // house_rules: { type: Schema.Types.String },
  // property_type: { type: Schema.Types.String },
  // room_type: { type: Schema.Types.String },
  // bed_type: { type: Schema.Types.String },
  // minimum_nights: { type: Schema.Types.String },
  // maximum_nights: { type: Schema.Types.String },
  // cancellation_policy: { type: Schema.Types.String },
  // last_scraped: { type: Schema.Types.Date },
  // calendar_last_scraped: { type: Schema.Types.Date },
  // first_review: { type: Schema.Types.Date },
  // last_review: { type: Schema.Types.Date },
  // accommodates: { type: Schema.Types.Number },
  bedrooms: {
    type: _mongoose.Schema.Types.Number
  },
  beds: {
    type: _mongoose.Schema.Types.Number
  },
  // number_of_reviews: { type: Schema.Types.Number },
  bathrooms: {
    type: _mongoose.Schema.Types.Number
  },
  // amenities: { type: Schema.Types.Mixed },
  price: {
    type: _mongoose.Schema.Types.Number
  },
  // weekly_price: { type: Schema.Types.Number },
  // monthly_price: { type: Schema.Types.Number },
  // security_deposit: { type: Schema.Types.Number },
  // cleaning_fee: { type: Schema.Types.Number },
  // extra_people: { type: Schema.Types.Number },
  // guests_included: { type: Schema.Types.Number },
  // images: {
  //   thumbnail_url: { type: Schema.Types.String },
  //   medium_url: { type: Schema.Types.String },
  //   picture_url: { type: Schema.Types.String },
  //   xl_picture_url: { type: Schema.Types.String },
  // },
  // host: {
  //   host_id: { type: Schema.Types.String },
  //   host_url: { type: Schema.Types.String },
  //   host_name: { type: Schema.Types.String },
  //   host_location: { type: Schema.Types.String },
  //   host_about: { type: Schema.Types.String },
  //   host_response_time: { type: Schema.Types.String },
  //   host_thumbnail_url: { type: Schema.Types.String },
  //   host_picture_url: { type: Schema.Types.String },
  //   host_neighbourhood: { type: Schema.Types.String },
  //   host_response_rate: { type: Schema.Types.Number },
  //   host_is_superhost: { type: Schema.Types.Boolean },
  //   host_has_profile_pic: { type: Schema.Types.Boolean },
  //   host_identity_verified: { type: Schema.Types.Boolean },
  //   host_listings_count: { type: Schema.Types.Number },
  //   host_total_listings_count: { type: Schema.Types.Number },
  //   host_verifications: { type: Schema.Types.Array },
  // },
  address: [{
    street: {
      type: _mongoose.Schema.Types.String
    },
    suburb: {
      type: _mongoose.Schema.Types.String
    },
    government_area: {
      type: _mongoose.Schema.Types.String
    },
    market: {
      type: _mongoose.Schema.Types.String
    },
    country: {
      type: _mongoose.Schema.Types.String
    },
    country_code: {
      type: _mongoose.Schema.Types.String
    },
    location: {
      type: {
        type: _mongoose.Schema.Types.String
      },
      coordinates: {
        type: _mongoose.Schema.Types.Array
      },
      is_location_exact: {
        type: _mongoose.Schema.Types.Boolean
      }
    }
  }],
  // availability: {
  //   availability_30: { type: Schema.Types.Number },
  //   availability_60: { type: Schema.Types.Number },
  //   availability_90: { type: Schema.Types.Number },
  //   availability_365: { type: Schema.Types.Number },
  // },
  // review_scores: {
  //   review_scores_accuracy: { type: Schema.Types.Number },
  //   review_scores_cleanliness: { type: Schema.Types.Number },
  //   review_scores_checkin: { type: Schema.Types.Number },
  //   review_scores_communication: { type: Schema.Types.Number },
  //   review_scores_location: { type: Schema.Types.Number },
  //   review_scores_value: { type: Schema.Types.Number },
  //   review_scores_rating: { type: Schema.Types.Number },
  // },
  reviews: [{
    _id: {
      type: _mongoose.Schema.Types.String
    },
    date: {
      type: _mongoose.Schema.Types.Date
    },
    listing_id: {
      type: _mongoose.Schema.Types.String
    },
    reviewer_id: {
      type: _mongoose.Schema.Types.String
    },
    reviewer_name: {
      type: _mongoose.Schema.Types.String
    },
    comments: {
      type: _mongoose.Schema.Types.String
    }
  }]
});
const houseContext = (0, _mongoose.model)("listingsandreview", houseSchema);
exports.houseContext = houseContext;