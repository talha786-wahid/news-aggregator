export const newsCategories = [
  {
    id: 1,
    category: 'Business',
    value: 'business',
  },

  {
    id: 2,
    category: 'General',
    value: 'general',
  },
  {
    id: 3,
    category: 'Health',
    value: 'health',
  },
  {
    id: 4,
    category: 'Technology',
    value: 'technology',
  },
  {
    id: 5,
    category: 'Sports',
    value: 'sports',
  },
  {
    id: 6,
    category: 'Science',
    value: 'science',
  },
];
// const authors = [
//   {
//     source: {
//       id: 'fox-news',
//       name: 'Fox News',
//     },
//     author: 'Melissa Rudy',
//     title:
//       'Texas cats die on dairy farm after drinking raw milk contaminated with bird flu, CDC warns - Fox News',
//     description:
//       'A cluster of cats on a Texas dairy farm died after drinking raw milk from dairy cows affected with bird flu, according to a report from the CDC. An infectious disease expert commented.',
//     url: 'https://www.foxnews.com/health/texas-cats-die-dairy-farm-drinking-raw-milk-contaminated-bird-flu-cdc-warns',
//     urlToImage:
//       'https://static.foxnews.com/foxnews.com/content/uploads/2024/05/cat-drinking-milk-outside.jpg',
//     publishedAt: '2024-05-04T00:59:00Z',
//     content:
//       'A cluster of cats on a Texas dairy farm\r\n died after drinking raw milk from dairy cows affected with bird flu, according to a report from the U.S. Centers for Disease Control and Prevention (CDC).\r\nT… [+4263 chars]',
//   },
//   {
//     source: {
//       id: 'cbs-news',
//       name: 'CBS News',
//     },
//     author: 'Steve Hartman',
//     title:
//       'A boy gave his only dollar to someone he mistook as homeless. In exchange, the businessman rewarded him for his generosity. - CBS News',
//     description:
//       'Nine-year-old Kelvin Ellis Jr. had just received the dollar for good grades, and it was the only money he had to his name.',
//     url: 'https://www.cbsnews.com/news/boy-gets-shopping-spree-after-giving-away-one-dollar-kelvin-ellis-matt-busbice-louisiana/',
//     urlToImage:
//       'https://assets3.cbsnewsstatic.com/hub/i/r/2024/05/04/30b8d018-729e-48ca-9f05-dc54af657cc5/thumbnail/1200x630/3f57855a9b1c339fa321b32421b678f4/0503-en-hartman2.jpg?v=1d6c78a71b7b6252b543a329b3a5744d',
//     publishedAt: '2024-05-04T00:26:00Z',
//     content:
//       'Baton Rouge, Louisiana — Matt Busbice and his partners have built and sold several outdoor companies worth hundreds of millions of dollars. But Busbice, the 42-year-old owner of sporting goods store … [+2115 chars]',
//   },
//   {
//     source: {
//       id: 'usa-today',
//       name: 'USA Today',
//     },
//     author: 'KiMi Robinson',
//     title:
//       'Jewel shuts down questions about dating Kevin Costner, love life - USA TODAY',
//     description:
//       'Alaskan singer-songwriter Jewel said in a new interview that she\'s "found love" and happiness irrespective of whether she\'s in a relationship.',
//     url: 'https://www.usatoday.com/story/entertainment/celebrities/2024/05/03/jewel-responds-kevin-costner-dating-rumors/73561755007/',
//     urlToImage:
//       'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/05/03/USAT/73561909007-1685457134.jpg?crop=2021,1137,x268,y87&width=2021&height=1137&format=pjpg&auto=webp',
//     publishedAt: '2024-05-04T00:08:23Z',
//     content:
//       'Jewel is doubling down on not needing a man to define her.\r\nThe Grammy-nominated singer-songwriter, 49, opened up about her romantic life and her experiences with "men in positions of power" over the… [+3093 chars]',
//   },
//   {
//     source: {
//       id: null,
//       name: '[Removed]',
//     },
//     author: null,
//     title: '[Removed]',
//     description: '[Removed]',
//     url: 'https://removed.com',
//     urlToImage: null,
//     publishedAt: '1970-01-01T00:00:00Z',
//     content: '[Removed]',
//   },
//   {
//     source: {
//       id: 'associated-press',
//       name: 'Associated Press',
//     },
//     author: 'GABRIELA SÁ PESSOA',
//     title:
//       'Southern Brazil has been hit by the worst floods in more than 80 years. At least 39 people have died - The Associated Press',
//     description:
//       'The civil defense agency in the southern Brazilian state of Rio Grande do Sul says heavy rains have killed 39 people, with another 68 still missing. The record-breaking floods have devastated cities and forced more than 24,000 people to leave their homes. Bra…',
//     url: 'https://apnews.com/article/brazil-floods-rio-grande-do-sul-climate-change-03c73512eae11f3799af19dfcdad54c3',
//     urlToImage:
//       'https://dims.apnews.com/dims4/default/f7738a6/2147483647/strip/true/crop/5573x3135+0+290/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F30%2Fab%2F7af5ec4175bf1a07dd8ee5980c04%2Feedbc39c936d4370bd2392af26a8c9d5',
//     publishedAt: '2024-05-03T23:44:00Z',
//     content:
//       'SAO PAULO (AP) Heavy rains in the southern Brazilian state of Rio Grande do Sul killed 39 people, with another 68 still missing, the state civil defense agency said Friday, as record-breaking floods … [+4774 chars]',
//   },
//   {
//     source: {
//       id: null,
//       name: 'WOODTV.com',
//     },
//     author: 'The Associated Press',
//     title:
//       'The Eta Aquarid meteor shower, debris of Halley’s comet, peaks this weekend. Here’s how to see it - WOODTV.com',
//     description:
//       'The Eta Aquarid meteor shower, remnants of Halley’s comet, peaks this weekend. And with just a waning crescent moon in the sky, it should be visible.',
//     url: 'https://www.woodtv.com/news/nexstar-media-wire/the-eta-aquarid-meteor-shower-debris-of-halleys-comet-peaks-this-weekend-heres-how-to-see-it/',
//     urlToImage:
//       'https://www.woodtv.com/wp-content/uploads/sites/51/2024/05/AP24123768060826.jpg?w=1280',
//     publishedAt: '2024-05-03T23:24:36Z',
//     content:
//       'WASHINGTON (AP) The Eta Aquarid meteor shower, remnants of Halley’s comet, peaks this weekend. And with just a waning crescent moon in the sky, it should be visible.\r\nThe Eta Aquarids occur every yea… [+1773 chars]',
//   },
// ];

// const news = [
//   {
//     source: {
//       id: 'the-verge',
//       name: 'The Verge',
//     },
//     author: 'Emma Roth',
//     title: 'Starfield is finally getting a 60fps mode on Xbox',
//     description:
//       'Bethesda is launching a Starfield update on May 15th that will let players on Xbox Series X play the game at 60 frames per second.',
//     url: 'https://www.theverge.com/2024/5/1/24146366/starfield-60fps-mode-xbox-series-x',
//     urlToImage:
//       'https://cdn.vox-cdn.com/thumbor/vzt-XWDDH6IjgRmb2zSuD6Kzm-s=/0x0:3840x2160/1200x628/filters:focal(1920x1080:1921x1081)/cdn.vox-cdn.com/uploads/chorus_asset/file/24884362/Starfield_04_Mountains.png',
//     publishedAt: '2024-05-01T17:15:06Z',
//     content:
//       'Starfield is finally getting a 60fps mode on Xbox\r\nStarfield is finally getting a 60fps mode on Xbox\r\n / Bethesda is rolling out new display options for Xbox Series X on May 15th.\r\nByEmma Roth, a new… [+1751 chars]',
//   },
//   {
//     source: {
//       id: 'the-verge',
//       name: 'The Verge',
//     },
//     author: 'Emma Roth',
//     title: 'Audible tries book recommendations based on your streaming history',
//     description:
//       'Audible is rolling out a new test that will provide audiobook recommendations based on watch history in Prime Video.',
//     url: 'https://www.theverge.com/2024/5/1/24146317/audible-audiobook-recommendations-prime-video-history',
//     urlToImage:
//       'https://cdn.vox-cdn.com/thumbor/Z8vdOrA0B1-eeg56bSuxrvoucPc=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24000003/acastro_STK074_audible_03.jpg',
//     publishedAt: '2024-05-01T15:59:42Z',
//     content:
//       'Audible tries book recommendations based on your streaming history\r\nAudible tries book recommendations based on your streaming history\r\n / The test is only rolling out to half of Audible users who us… [+1439 chars]',
//   },
//   {
//     source: {
//       id: 'the-verge',
//       name: 'The Verge',
//     },
//     author: 'Wes Davis',
//     title: 'Kobo and iFixit partner for OEM parts and repair guides',
//     description:
//       'iFixit now sells official OEM parts and offers repair guides for the Kobo Clara and Kobo Libra Colour e-readers on its site.',
//     url: 'https://www.theverge.com/2024/4/30/24145468/kobo-ifixit-e-reader-oem-repair-parts-guides-partnership',
//     urlToImage:
//       'https://cdn.vox-cdn.com/thumbor/XBVwRnrYebtbGIEtbWns4LTdSBo=/0x0:2050x1437/1200x628/filters:focal(1025x719:1026x720)/cdn.vox-cdn.com/uploads/chorus_asset/file/25427312/Kobo_disassembled.jpeg',
//     publishedAt: '2024-04-30T17:43:31Z',
//     content:
//       'Kobo and iFixit partner for OEM parts and repair guides\r\nKobo and iFixit partner for OEM parts and repair guides\r\n / iFixits first e-reader partnership includes screens, batteries, and motherboards f… [+1690 chars]',
//   },
// ];
// const sources = [
//   {
//     id: 'breitbart-news',
//     name: 'Breitbart News',
//     description:
//       'Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.',
//     url: 'http://www.breitbart.com',
//     category: 'general',
//     language: 'en',
//     country: 'us',
//   },
//   {
//     id: 'cnn',
//     name: 'CNN',
//     description:
//       'Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.',
//     url: 'http://www.breitbart.com',
//     category: 'general',
//     language: 'en',
//     country: 'us',
//   },
//   {
//     id: 'business-insider',
//     name: 'Business Insider',
//     description:
//       'Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.',
//     url: 'http://www.businessinsider.com',
//     category: 'business',
//     language: 'en',
//     country: 'us',
//   },
//   {
//     id: 'business-insider-uk',
//     name: 'Business Insider (UK)',
//     description:
//       'Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.',
//     url: 'http://uk.businessinsider.com',
//     category: 'business',
//     language: 'en',
//     country: 'gb',
//   },
// ];
// const others = [
//   {
//     source: {
//       id: 'the-verge',
//       name: 'The Verge',
//     },
//     author: 'Emma Roth',
//     title: 'Starfield is finally getting a 60fps mode on Xbox',
//     description:
//       'Bethesda is launching a Starfield update on May 15th that will let players on Xbox Series X play the game at 60 frames per second.',
//     url: 'https://www.theverge.com/2024/5/1/24146366/starfield-60fps-mode-xbox-series-x',
//     urlToImage:
//       'https://cdn.vox-cdn.com/thumbor/vzt-XWDDH6IjgRmb2zSuD6Kzm-s=/0x0:3840x2160/1200x628/filters:focal(1920x1080:1921x1081)/cdn.vox-cdn.com/uploads/chorus_asset/file/24884362/Starfield_04_Mountains.png',
//     publishedAt: '2024-05-01T17:15:06Z',
//     content:
//       'Starfield is finally getting a 60fps mode on Xbox\r\nStarfield is finally getting a 60fps mode on Xbox\r\n / Bethesda is rolling out new display options for Xbox Series X on May 15th.\r\nByEmma Roth, a new… [+1751 chars]',
//   },
//   {
//     source: {
//       id: 'the-verge',
//       name: 'The Verge',
//     },
//     author: 'Emma Roth',
//     title: 'Audible tries book recommendations based on your streaming history',
//     description:
//       'Audible is rolling out a new test that will provide audiobook recommendations based on watch history in Prime Video.',
//     url: 'https://www.theverge.com/2024/5/1/24146317/audible-audiobook-recommendations-prime-video-history',
//     urlToImage:
//       'https://cdn.vox-cdn.com/thumbor/Z8vdOrA0B1-eeg56bSuxrvoucPc=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24000003/acastro_STK074_audible_03.jpg',
//     publishedAt: '2024-05-01T15:59:42Z',
//     content:
//       'Audible tries book recommendations based on your streaming history\r\nAudible tries book recommendations based on your streaming history\r\n / The test is only rolling out to half of Audible users who us… [+1439 chars]',
//   },
//   {
//     source: {
//       id: 'the-verge',
//       name: 'The Verge',
//     },
//     author: 'Wes Davis',
//     title: 'Kobo and iFixit partner for OEM parts and repair guides',
//     description:
//       'iFixit now sells official OEM parts and offers repair guides for the Kobo Clara and Kobo Libra Colour e-readers on its site.',
//     url: 'https://www.theverge.com/2024/4/30/24145468/kobo-ifixit-e-reader-oem-repair-parts-guides-partnership',
//     urlToImage:
//       'https://cdn.vox-cdn.com/thumbor/XBVwRnrYebtbGIEtbWns4LTdSBo=/0x0:2050x1437/1200x628/filters:focal(1025x719:1026x720)/cdn.vox-cdn.com/uploads/chorus_asset/file/25427312/Kobo_disassembled.jpeg',
//     publishedAt: '2024-04-30T17:43:31Z',
//     content:
//       'Kobo and iFixit partner for OEM parts and repair guides\r\nKobo and iFixit partner for OEM parts and repair guides\r\n / iFixits first e-reader partnership includes screens, batteries, and motherboards f… [+1690 chars]',
//   },
// ];
