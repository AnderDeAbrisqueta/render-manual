"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;
var _mongodb = require("mongodb");
const db = {
  houses: [{
    _id: new _mongodb.ObjectId(),
    listing_url: "https://www.airbnb.com/rooms/10006546",
    name: "Ribeira Charming Duplex",
    // summary:
    //   "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
    // space:
    //   "Privileged views of the Douro River and Ribeira square, our apartment offers the perfect conditions to discover the history and the charm of Porto. Apartment comfortable, charming, romantic and cozy in the heart of Ribeira. Within walking distance of all the most emblematic places of the city of Porto. The apartment is fully equipped to host 8 people, with cooker, oven, washing machine, dishwasher, microwave, coffee machine (Nespresso) and kettle. The apartment is located in a very typical area of the city that allows to cross with the most picturesque population of the city, welcoming, genuine and happy people that fills the streets with his outspoken speech and contagious with your sincere generosity, wrapped in a only parochial spirit.",
    description: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character. Privileged views of the Douro River and Ribeira square, our apartment offers the perfect conditions to discover the history and the charm of Porto. Apartment comfortable, charming, romantic and cozy in the heart of Ribeira. Within walking distance of all the most emblematic places of the city of Porto. The apartment is fully equipped to host 8 people, with cooker, oven, washing machine, dishwasher, microwave, coffee machine (Nespresso) and kettle. The apartment is located in a very typical area of the city that allows to cross with the most picturesque population of the city, welcoming, genuine and happy people that fills the streets with his outspoken speech and contagious with your sincere generosity, wrapped in a only parochial spirit. We are always available to help guests",
    // neighborhood_overview:
    //   "In the neighborhood of the river, you can find several restaurants as varied flavors, but without forgetting the so traditional northern food. You can also find several bars and pubs to unwind after a day's visit to the magnificent Port. To enjoy the Douro River can board the boats that daily make the ride of six bridges. You can also embark towards Régua, Barca d'Alva, Pinhão, etc and enjoy the Douro Wine Region, World Heritage of Humanity. The Infante's house is a few meters and no doubt it deserves a visit. They abound grocery stores, bakeries, etc. to make your meals. Souvenir shop, wine cellars, etc. to bring some souvenirs.",
    // notes:
    //   "Lose yourself in the narrow streets and staircases zone, have lunch in pubs and typical restaurants, and find the renovated cafes and shops in town. If you like exercise, rent a bicycle in the area and ride along the river to the sea, where it will enter beautiful beaches and terraces for everyone. The area is safe, find the bus stops 1min and metro line 5min. The bustling nightlife is a 10 min walk, where the streets are filled with people and entertainment for all. But Porto is much more than the historical center, here is modern museums, concert halls, clean and cared for beaches and surf all year round. Walk through the Ponte D. Luis and visit the different Caves of Port wine, where you will enjoy the famous port wine. Porto is a spoken city everywhere in the world as the best to be visited and savored by all ... natural beauty, culture, tradition, river, sea, beach, single people, typical food, and we are among those who best receive tourists, confirm! Come visit us and feel at ho",
    // transit:
    //   "Transport: • Metro station and S. Bento railway 5min; • Bus stop a 50 meters; • Lift Guindais (Funicular) 50 meters; • Tuc Tuc-to get around the city; • Buses tourist; • Cycling through the marginal drive; • Cable car in Gaia, overlooking the Port (just cross the bridge).",
    // access:
    //   'We are always available to help guests. The house is fully available to guests. We are always ready to assist guests. when possible we pick the guests at the airport.  This service transfer have a cost per person. We will also have service "meal at home" with a diverse menu and the taste of each. Enjoy the moment!',
    // interaction: "Cot - 10 € / night Dog - € 7,5 / night",
    // house_rules: "Make the house your home...",
    // property_type: "House",
    // room_type: "Entire home/apt",
    // bed_type: "Real Bed",
    // minimum_nights: "2",
    // maximum_nights: "30",
    // cancellation_policy: "moderate",
    // last_scraped: new Date("2019-02-16T05:00:00Z"),
    // calendar_last_scraped: new Date("2019-02-16T05:00:00Z"),
    // first_review: new Date("2016-01-03T05:00:00Z"),
    // last_review: new Date("2019-01-20T05:00:00Z"),
    // accommodates: 8,
    bedrooms: 3,
    beds: 5,
    // number_of_reviews: 51,
    bathrooms: 1.0,
    // amenities: [
    //   "TV",
    //   "Cable TV",
    //   "Wifi",
    //   "Kitchen",
    //   "Paid parking off premises",
    //   "Smoking allowed",
    //   "Pets allowed",
    //   "Buzzer/wireless intercom",
    //   "Heating",
    //   "Family/kid friendly",
    //   "Washer",
    //   "First aid kit",
    //   "Fire extinguisher",
    //   "Essentials",
    //   "Hangers",
    //   "Hair dryer",
    //   "Iron",
    //   "Pack ’n Play/travel crib",
    //   "Room-darkening shades",
    //   "Hot water",
    //   "Bed linens",
    //   "Extra pillows and blankets",
    //   "Microwave",
    //   "Coffee maker",
    //   "Refrigerator",
    //   "Dishwasher",
    //   "Dishes and silverware",
    //   "Cooking basics",
    //   "Oven",
    //   "Stove",
    //   "Cleaning before checkout",
    //   "Waterfront",
    // ],
    price: 80.0,
    // security_deposit: 200.0,
    // cleaning_fee: 35.0,
    // extra_people: 15.0,
    // guests_included: 6,
    // images: {
    //   thumbnail_url: "",
    //   medium_url: "",
    //   picture_url:
    //     "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
    //   xl_picture_url: "",
    // },
    // host: {
    //   host_id: "51399391",
    //   host_url: "https://www.airbnb.com/users/show/51399391",
    //   host_name: "Ana&Gonçalo",
    //   host_location: "Porto, Porto District, Portugal",
    //   host_about:
    //     "Gostamos de passear, de viajar, de conhecer pessoas e locais novos, gostamos de desporto e animais! Vivemos na cidade mais linda do mundo!!!",
    //   host_response_time: "within an hour",
    //   host_thumbnail_url:
    //     "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    //   host_picture_url:
    //     "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_x_medium",
    //   host_neighbourhood: "",
    //   host_response_rate: 100,
    //   host_is_superhost: false,
    //   host_has_profile_pic: true,
    //   host_identity_verified: true,
    //   host_listings_count: 3,
    //   host_total_listings_count: 3,
    //   host_verifications: [
    //     "email",
    //     "phone",
    //     "reviews",
    //     "jumio",
    //     "offline_government_id",
    //     "government_id",
    //   ],
    // },
    address: [{
      street: "Porto, Porto, Portugal",
      suburb: "",
      government_area: "Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória",
      market: "Porto",
      country: "Portugal",
      country_code: "PT",
      location: [{
        type: "Point",
        coordinates: [-8.61308, 41.1413],
        is_location_exact: false
      }]
    }],
    // availability: {
    //   availability_30: 28,
    //   availability_60: 47,
    //   availability_90: 74,
    //   availability_365: 239,
    // },
    // review_scores: {
    //   review_scores_accuracy: 9,
    //   review_scores_cleanliness: 9,
    //   review_scores_checkin: 10,
    //   review_scores_communication: 10,
    //   review_scores_location: 10,
    //   review_scores_value: 9,
    //   review_scores_rating: 89,
    // },
    reviews: []
  }, {
    _id: new _mongodb.ObjectId(),
    listing_url: "https://www.airbnb.com/rooms/10009999",
    name: "Horto flat with small garden",
    // summary:
    //   "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants and basic facilities in the area.",
    // space:
    //   "Lovely one bedroom + sofa-bed in the living room, perfect for two but fits up to four comfortably.  There´s a small outside garden with a shower There´s a well equipped open kitchen with both 110V / 220V wall plugs and one bathroom with shower, tub and even a sauna machine! All newly refurbished!",
    description: "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants and basic facilities in the area. Lovely one bedroom + sofa-bed in the living room, perfect for two but fits up to four comfortably.  There´s a small outside garden with a shower There´s a well equipped open kitchen with both 110V / 220V wall plugs and one bathroom with shower, tub and even a sauna machine! All newly refurbished! I´ll be happy to help you with any doubts, tips or any other information needed during your stay. This charming ground floor flat is located in Horto, a quiet and bucolic neighborhood just next to the Botanical Garden, where most of the descendants of it´s first gardeners still live. You´ll be 30 minutes walk from waterfalls in the rainforest with easy hiking trails! There are nice bars and restaurants as well as basic facilities - pharmacy, b",
    // neighborhood_overview:
    //   "This charming ground floor flat is located in Horto, a quiet and bucolic neighborhood just next to the Botanical Garden, where most of the descendants of it´s first gardeners still live. You´ll be 30 minutes walk from waterfalls in the rainforest with easy hiking trails! There are nice bars and restaurants as well as basic facilities - pharmacy, bakery, small market - in the area.",
    // notes:
    //   "There´s a table in the living room now, that does not show in the photos.",
    // transit:
    //   "Easy access to transport (bus, taxi, car) and easy free parking around. Very close to Gávea, Leblon, Ipanema, Copacabana and Botafogo.",
    // access: "",
    // interaction:
    //   "I´ll be happy to help you with any doubts, tips or any other information needed during your stay.",
    // house_rules:
    //   "I just hope the guests treat the space as they´re own, with respect to it as well as to my neighbours! Espero apenas que os hóspedes tratem o lugar com carinho e respeito aos vizinhos!",
    // property_type: "Apartment",
    // room_type: "Entire home/apt",
    // bed_type: "Real Bed",
    // minimum_nights: "2",
    // maximum_nights: "1125",
    // cancellation_policy: "flexible",
    // last_scraped: new Date("2019-02-11T05:00:00Z"),
    // calendar_last_scraped: new Date("2019-02-11T05:00:00Z"),
    // accommodates: 4,
    bedrooms: 1,
    beds: 2,
    // number_of_reviews: 0,
    bathrooms: 1.0,
    // amenities: [
    //   "Wifi",
    //   "Wheelchair accessible",
    //   "Kitchen",
    //   "Free parking on premises",
    //   "Smoking allowed",
    //   "Hot tub",
    //   "Buzzer/wireless intercom",
    //   "Family/kid friendly",
    //   "Washer",
    //   "First aid kit",
    //   "Essentials",
    //   "Hangers",
    //   "Hair dryer",
    //   "Iron",
    //   "Laptop friendly workspace",
    // ],
    price: 317.0,
    // weekly_price: 1492.0,
    // monthly_price: 4849.0,
    // cleaning_fee: 187.0,
    // extra_people: 0.0,
    // guests_included: 1,
    // images: {
    //   thumbnail_url: "",
    //   medium_url: "",
    //   picture_url:
    //     "https://a0.muscache.com/im/pictures/5b408b9e-45da-4808-be65-4edc1f29c453.jpg?aki_policy=large",
    //   xl_picture_url: "",
    // },
    // host: {
    //   host_id: "1282196",
    //   host_url: "https://www.airbnb.com/users/show/1282196",
    //   host_name: "Ynaie",
    //   host_location: "Rio de Janeiro, State of Rio de Janeiro, Brazil",
    //   host_about:
    //     "I am an artist and traveling is a major part of my life. I love treating visitors the way I like to be treated when I´m abroad and I'm usually renting my flat while I'm away. I can recommend some cool parties and nights out as well as advise on some hidden secrets of Rio’s nature!",
    //   host_thumbnail_url:
    //     "https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg?aki_policy=profile_small",
    //   host_picture_url:
    //     "https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg?aki_policy=profile_x_medium",
    //   host_neighbourhood: "Jardim Botânico",
    //   host_is_superhost: false,
    //   host_has_profile_pic: true,
    //   host_identity_verified: false,
    //   host_listings_count: 1,
    //   host_total_listings_count: 1,
    //   host_verifications: ["email", "phone", "facebook"],
    // },
    address: [{
      street: "Rio de Janeiro, Rio de Janeiro, Brazil",
      suburb: "Jardim Botânico",
      government_area: "Jardim Botânico",
      market: "Rio De Janeiro",
      country: "Brazil",
      country_code: "BR",
      location: [{
        type: "Point",
        coordinates: [-43.23074991429229, -22.966253551739655],
        is_location_exact: true
      }]
    }],
    // availability: {
    //   availability_30: 0,
    //   availability_60: 0,
    //   availability_90: 0,
    //   availability_365: 0,
    // },
    // review_scores: {},
    reviews: []
  }, {
    _id: new _mongodb.ObjectId(),
    listing_url: "https://www.airbnb.com/rooms/1001265",
    name: "Ocean View Waikiki Marina w/prkg",
    // summary:
    //   "A short distance from Honolulu's billion dollar mall, and the same distance to Waikiki. Parking included. A great location that work perfectly for business, education, or simple visit. Experience Yacht Harbor views and 5 Star Hilton Hawaiian Village.",
    // space:
    //   "Great studio located on Ala Moana across the street from Yacht Harbor and near Ala Moana Shopping Center. Studio kitchette, parking, wifi, TV, A/C. Amenities include pool, hot tub and tennis. Sweet ocean views with nice ocean breezes.",
    description: "A short distance from Honolulu's billion dollar mall, and the same distance to Waikiki. Parking included. A great location that work perfectly for business, education, or simple visit. Experience Yacht Harbor views and 5 Star Hilton Hawaiian Village. Great studio located on Ala Moana across the street from Yacht Harbor and near Ala Moana Shopping Center. Studio kitchette, parking, wifi, TV, A/C. Amenities include pool, hot tub and tennis. Sweet ocean views with nice ocean breezes. Pool, hot tub and tennis We try our best at creating, simple responsive management which never bothers the guest. You can breath ocean as well as aloha. Honolulu does have a very good air conditioned bus system.",
    // neighborhood_overview: "You can breath ocean as well as aloha.",
    // notes: "",
    // transit: "Honolulu does have a very good air conditioned bus system.",
    // access: "Pool, hot tub and tennis",
    // interaction:
    //   "We try our best at creating, simple responsive management which never bothers the guest.",
    // house_rules: "The general welfare and well being of all the community.",
    // property_type: "Condominium",
    // room_type: "Entire home/apt",
    // bed_type: "Real Bed",
    // minimum_nights: "3",
    // maximum_nights: "365",
    // cancellation_policy: "strict_14_with_grace_period",
    // last_scraped: new Date("2019-03-06T05:00:00Z"),
    // calendar_last_scraped: new Date("2019-03-06T05:00:00Z"),
    // first_review: new Date("2013-05-24T04:00:00Z"),
    // last_review: new Date("2019-02-07T05:00:00Z"),
    // accommodates: 2,
    bedrooms: 1,
    beds: 1,
    // number_of_reviews: 96,
    bathrooms: 1.0,
    // amenities: [
    //   "TV",
    //   "Cable TV",
    //   "Wifi",
    //   "Air conditioning",
    //   "Pool",
    //   "Kitchen",
    //   "Free parking on premises",
    //   "Elevator",
    //   "Hot tub",
    //   "Washer",
    //   "Dryer",
    //   "Essentials",
    //   "Shampoo",
    //   "Hangers",
    //   "Hair dryer",
    //   "Iron",
    //   "Laptop friendly workspace",
    //   "Self check-in",
    //   "Lockbox",
    //   "Hot water",
    //   "Bed linens",
    //   "Extra pillows and blankets",
    //   "Ethernet connection",
    //   "Microwave",
    //   "Coffee maker",
    //   "Refrigerator",
    //   "Dishes and silverware",
    //   "Cooking basics",
    //   "Stove",
    //   "BBQ grill",
    //   "Garden or backyard",
    //   "Well-lit path to entrance",
    //   "Disabled parking spot",
    //   "Step-free access",
    //   "Wide clearance to bed",
    //   "Step-free access",
    // ],
    price: 115.0,
    // weekly_price: 650.0,
    // monthly_price: 2150.0,
    // cleaning_fee: 100.0,
    // extra_people: 0.0,
    // guests_included: 1,
    // images: {
    //   thumbnail_url: "",
    //   medium_url: "",
    //   picture_url:
    //     "https://a0.muscache.com/im/pictures/15037101/5aff14a7_original.jpg?aki_policy=large",
    //   xl_picture_url: "",
    // },
    // host: {
    //   host_id: "5448114",
    //   host_url: "https://www.airbnb.com/users/show/5448114",
    //   host_name: "David",
    //   host_location: "Honolulu, Hawaii, United States",
    //   host_about:
    //     "I have 30 years of experience in the Waikiki Real Estate Market. We specialize in local sales and property management. Our goal is service and aloha. We want to help people enjoy Hawaii.",
    //   host_response_time: "within an hour",
    //   host_thumbnail_url:
    //     "https://a0.muscache.com/im/users/5448114/profile_pic/1363202219/original.jpg?aki_policy=profile_small",
    //   host_picture_url:
    //     "https://a0.muscache.com/im/users/5448114/profile_pic/1363202219/original.jpg?aki_policy=profile_x_medium",
    //   host_neighbourhood: "Waikiki",
    //   host_response_rate: 98,
    //   host_is_superhost: false,
    //   host_has_profile_pic: true,
    //   host_identity_verified: false,
    //   host_listings_count: 18,
    //   host_total_listings_count: 18,
    //   host_verifications: ["email", "phone", "reviews", "kba"],
    // },
    address: [{
      street: "Honolulu, HI, United States",
      suburb: "Oʻahu",
      government_area: "Primary Urban Center",
      market: "Oahu",
      country: "United States",
      country_code: "US",
      location: [{
        type: "Point",
        coordinates: [-157.83919, 21.28634],
        is_location_exact: true
      }]
    }],
    // availability: {
    //   availability_30: 16,
    //   availability_60: 46,
    //   availability_90: 76,
    //   availability_365: 343,
    // },
    // review_scores: {
    //   review_scores_accuracy: 9,
    //   review_scores_cleanliness: 8,
    //   review_scores_checkin: 9,
    //   review_scores_communication: 9,
    //   review_scores_location: 10,
    //   review_scores_value: 9,
    //   review_scores_rating: 84,
    // },
    reviews: [{
      _id: "4765259",
      date: new Date("2013-05-24T04:00:00Z"),
      listing_id: "1001265",
      reviewer_id: "6435238",
      reviewer_name: "Jacqui",
      comments: "Our stay was excellent.  The place had a breath taking view.  David was very accommodating with our hotel stay, parking availability and all of our concerns & questions.  He did above and beyond what anyone would want.  He's a man of his word and very professional.  We highly recommend for everyone to stay in all of the places he recommended.  Thank you David for a accommodating our wonderful and memorable stay in Honolulu, Hawaii.  God Bless!  Henry & Jacqui (SF, CA)"
    }, {
      _id: "4908312",
      date: new Date("2013-06-01T04:00:00Z"),
      listing_id: "1001265",
      reviewer_id: "3454262",
      reviewer_name: "Khoren",
      comments: "Tell others in the Airbnb community about your stay."
    }, {
      _id: "7099260",
      date: new Date("2013-09-06T04:00:00Z"),
      listing_id: "1001265",
      reviewer_id: "7038567",
      reviewer_name: "Nick",
      comments: "This is everything we expected and hoped for in a sub-$100/night condo stay in Waikiki. This definitely isn't the Ritz, and if you're looking for a luxury get-away, you're barking up the wrong tree. However, if you're like we were: first time visitors on a budget with humble taste, then this place is perfect. The location is a tiny bit removed from the touristy Beachwalk shopping area, but not so far as to preclude you from limbering up for a spirited walk over there. And by the marina, you're actually quite close to the Ala Moana mall. So, the location is good. The place itself is a modest studio setup, but perfectly adequate with a good sized bed for a couple, enough space for your luggage, and a kitchenette and bathroom that though tight, is perfectly fine. There's also cable and internet if you're looking for homey creature comforts. It was also fantastic to have a free parking space included, an air conditioning wall unit, and the panoramic window view was pretty cool, though you only really get a peak of the beach. Also, David was very good about staying in contact with us the day we arrived to get acclimated, and we did not have further occasion to require his services the rest of our stay, so our contact was minimal, but satisfactory ... no problem there. The minor quibbles we had were pretty thin walls, so we would often hear the murmur of the neighbors' TVs. Also, there seemed to be two elevators working the entire building, so they could take quite a while to pop up. Again though, if you're like us, your #1 priorities are spend a minimal amount of time in your room, get out to experience Hawaii, come back to a sanitary place to sleep at night, all while staying within a reasonable budget. This place fit the bill, and we would recommend it to anyone with the same priorities."
    }, {
      _id: "8363944",
      date: new Date("2013-10-28T04:00:00Z"),
      listing_id: "1001265",
      reviewer_id: "7096845",
      reviewer_name: "Jean",
      comments: "Fantastic location! Everything in the condo was great and David was lovely and super easy to deal with. Would recommend!"
    }]
  }, {
    _id: new _mongodb.ObjectId(),
    listing_url: "https://www.airbnb.com/rooms/10021707",
    name: "Private Room in Bushwick",
    // summary:
    //   "Here exists a very cozy room for rent in a shared 4-bedroom apartment. It is located one block off of the JMZ at Myrtle Broadway.  The neighborhood is diverse and appeals to a variety of people.",
    // space: "",
    description: "Here exists a very cozy room for rent in a shared 4-bedroom apartment. It is located one block off of the JMZ at Myrtle Broadway.  The neighborhood is diverse and appeals to a variety of people.",
    // neighborhood_overview: "",
    // notes: "",
    // transit: "",
    // access: "",
    // interaction: "",
    // house_rules: "",
    // property_type: "Apartment",
    // room_type: "Private room",
    // bed_type: "Real Bed",
    // minimum_nights: "14",
    // maximum_nights: "1125",
    // cancellation_policy: "flexible",
    // last_scraped: new Date("2019-03-06T05:00:00Z"),
    // calendar_last_scraped: new Date("2019-03-06T05:00:00Z"),
    // first_review: new Date("2016-01-31T05:00:00Z"),
    // last_review: new Date("2016-01-31T05:00:00Z"),
    // accommodates: 1,
    bedrooms: 1,
    beds: 1,
    // number_of_reviews: 1,
    bathrooms: 1.5,
    // amenities: [
    //   "Internet",
    //   "Wifi",
    //   "Air conditioning",
    //   "Kitchen",
    //   "Buzzer/wireless intercom",
    //   "Heating",
    //   "Smoke detector",
    //   "Carbon monoxide detector",
    //   "Essentials",
    //   "Lock on bedroom door",
    // ],
    price: 40.0,
    // extra_people: 0.0,
    // guests_included: 1,
    // images: {
    //   thumbnail_url: "",
    //   medium_url: "",
    //   picture_url:
    //     "https://a0.muscache.com/im/pictures/72844c8c-fec2-440e-a752-bba9b268c361.jpg?aki_policy=large",
    //   xl_picture_url: "",
    // },
    // host: {
    //   host_id: "11275734",
    //   host_url: "https://www.airbnb.com/users/show/11275734",
    //   host_name: "Josh",
    //   host_location: "New York, New York, United States",
    //   host_about: "",
    //   host_thumbnail_url:
    //     "https://a0.muscache.com/im/users/11275734/profile_pic/1405792127/original.jpg?aki_policy=profile_small",
    //   host_picture_url:
    //     "https://a0.muscache.com/im/users/11275734/profile_pic/1405792127/original.jpg?aki_policy=profile_x_medium",
    //   host_neighbourhood: "Bushwick",
    //   host_is_superhost: false,
    //   host_has_profile_pic: true,
    //   host_identity_verified: true,
    //   host_listings_count: 1,
    //   host_total_listings_count: 1,
    //   host_verifications: ["email", "phone", "reviews", "kba"],
    // },
    address: [{
      street: "Brooklyn, NY, United States",
      suburb: "Brooklyn",
      government_area: "Bushwick",
      market: "New York",
      country: "United States",
      country_code: "US",
      location: [{
        type: "Point",
        coordinates: [-73.93615, 40.69791],
        is_location_exact: true
      }]
    }],
    // availability: {
    //   availability_30: 0,
    //   availability_60: 0,
    //   availability_90: 0,
    //   availability_365: 0,
    // },
    // review_scores: {
    //   review_scores_accuracy: 10,
    //   review_scores_cleanliness: 10,
    //   review_scores_checkin: 10,
    //   review_scores_communication: 10,
    //   review_scores_location: 8,
    //   review_scores_value: 8,
    //   review_scores_rating: 100,
    // },
    reviews: [{
      _id: "61050713",
      date: new Date("2016-01-31T05:00:00Z"),
      listing_id: "10021707",
      reviewer_id: "52006105",
      reviewer_name: "Antoine",
      comments: "Josh was out of town during my 1 month stay. His roommates greeted and helped get me settled. They were great hosts and all around cool people. I'm a Brooklynite, but have never lived in Bushwick.\r\nIf you're looking for an hip, authentic, and convenient Brooklyn experience, this spot is for you.  You can literally see the Subway platform from Josh's window. Also a couple steps away from anything you could possibly need... restaurants, juice bar, organic grocery, etc. "
    }]
  }, {
    _id: new _mongodb.ObjectId(),
    listing_url: "https://www.airbnb.com/rooms/10030955",
    name: "Apt Linda Vista Lagoa - Rio",
    // summary:
    //   "Quarto com vista para a Lagoa Rodrigo de Freitas, cartão postal do Rio de Janeiro. Linda Vista.  1 Quarto e 1 banheiro  Amplo, arejado, vaga na garagem. Prédio com piscina, sauna e playground.  Fácil acesso, próximo da praia e shoppings.",
    // space: "",
    description: "Quarto com vista para a Lagoa Rodrigo de Freitas, cartão postal do Rio de Janeiro. Linda Vista.  1 Quarto e 1 banheiro  Amplo, arejado, vaga na garagem. Prédio com piscina, sauna e playground.  Fácil acesso, próximo da praia e shoppings.",
    // neighborhood_overview: "",
    // notes: "",
    // transit: "",
    // access: "",
    // interaction: "",
    // house_rules: "",
    // property_type: "Apartment",
    // room_type: "Private room",
    // bed_type: "Real Bed",
    // minimum_nights: "1",
    // maximum_nights: "1125",
    // cancellation_policy: "flexible",
    // last_scraped: new Date("2019-02-11T05:00:00Z"),
    // calendar_last_scraped: new Date("2019-02-11T05:00:00Z"),
    // accommodates: 2,
    bedrooms: 1,
    beds: 1,
    // number_of_reviews: 0,
    bathrooms: 2.0,
    // amenities: [
    //   "TV",
    //   "Cable TV",
    //   "Internet",
    //   "Wifi",
    //   "Air conditioning",
    //   "Pool",
    //   "Kitchen",
    //   "Free parking on premises",
    //   "Doorman",
    //   "Gym",
    //   "Elevator",
    //   "Buzzer/wireless intercom",
    //   "Family/kid friendly",
    //   "Washer",
    //   "Essentials",
    //   "24-hour check-in",
    // ],
    price: 701.0,
    // security_deposit: 1000.0,
    // cleaning_fee: 250.0,
    // extra_people: 0.0,
    // guests_included: 1,
    // images: {
    //   thumbnail_url: "",
    //   medium_url: "",
    //   picture_url:
    //     "https://a0.muscache.com/im/pictures/59c516bd-c7c3-4dae-8625-aff5f55ece53.jpg?aki_policy=large",
    //   xl_picture_url: "",
    // },
    // host: {
    //   host_id: "51496939",
    //   host_url: "https://www.airbnb.com/users/show/51496939",
    //   host_name: "Livia",
    //   host_location: "BR",
    //   host_about: "",
    //   host_thumbnail_url:
    //     "https://a0.muscache.com/im/pictures/b7911710-9088-451d-a27b-62ad2fc2eac0.jpg?aki_policy=profile_small",
    //   host_picture_url:
    //     "https://a0.muscache.com/im/pictures/b7911710-9088-451d-a27b-62ad2fc2eac0.jpg?aki_policy=profile_x_medium",
    //   host_neighbourhood: "Lagoa",
    //   host_is_superhost: false,
    //   host_has_profile_pic: true,
    //   host_identity_verified: false,
    //   host_listings_count: 1,
    //   host_total_listings_count: 1,
    //   host_verifications: ["email", "phone", "jumio", "government_id"],
    // },
    address: [{
      street: "Rio de Janeiro, Rio de Janeiro, Brazil",
      suburb: "Lagoa",
      government_area: "Lagoa",
      market: "Rio De Janeiro",
      country: "Brazil",
      country_code: "BR",
      location: [{
        type: "Point",
        coordinates: [-43.205047082633435, -22.971950988341874],
        is_location_exact: true
      }]
    }],
    // availability: {
    //   availability_30: 28,
    //   availability_60: 58,
    //   availability_90: 88,
    //   availability_365: 363,
    // },
    // review_scores: {},
    reviews: []
  }]
};
exports.db = db;