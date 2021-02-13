import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  mock: any = {
    html_attributions: [],
    results: [
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.198751,
            lng: 85.53021799999999,
          },
          viewport: {
            northeast: {
              lat: 25.20007632989272,
              lng: 85.53158942989272,
            },
            southwest: {
              lat: 25.19737667010728,
              lng: 85.52888977010728,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'The pizza central, Bihar sharif',
        photos: [
          {
            height: 1717,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/101845675390611660516"\u003eABHISHEK KUMAR\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwL6DK-0Wn7DM9iTnMyB_duiuTb7kEAg9IuMTJm1QotcvUqvo7f7B7x7IupO-Gc8gK5DEGjQVV48nTLCVidgTznUPzvu_rYc3JWOaWrnV5X1zdHfbBqjOqQ34Fdvx3rzbTseUzPE46bB3ddgEeTE5z3n0BLMYovPKxuO1DLS1GoKigSk',
            width: 3052,
          },
        ],
        place_id: 'ChIJSZugo6_18jkRsKh4Mt1Y9Ok',
        plus_code: {
          compound_code: '5GXJ+G3 Bihar Sharif, Bihar',
          global_code: '7MQ75GXJ+G3',
        },
        rating: 4,
        reference: 'ChIJSZugo6_18jkRsKh4Mt1Y9Ok',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 17,
        vicinity: 'Kumar cinema campus, Bihar Sharif',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.1989751,
            lng: 85.51624579999999,
          },
          viewport: {
            northeast: {
              lat: 25.20025727989272,
              lng: 85.51763802989271,
            },
            southwest: {
              lat: 25.19755762010728,
              lng: 85.51493837010726,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'PIZZA CORNER',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3088,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/100044466672637296734"\u003eA Google User\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwIPfjdheM6nkDrTp-79xuOmPwWYbHdCprvoArgiYPYYS-qhjvvuYDtcM0JE4wrwYOzh9jj5bGbS72ZyMLSwp96ypV_aYMArfhwaSmFrdp1WOGZtNdOjThY0jp77GTfA2dFyWGFlWppyxvURkqOacR6qTpGAiduyj8FEmhGE4tcQEw3C',
            width: 3088,
          },
        ],
        place_id: 'ChIJ9XNG_r_z8jkR86hdvLMW2T4',
        plus_code: {
          compound_code: '5GX8+HF Bihar Sharif, Bihar',
          global_code: '7MQ75GX8+HF',
        },
        rating: 4.2,
        reference: 'ChIJ9XNG_r_z8jkR86hdvLMW2T4',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 6,
        vicinity: 'V2 MALL BUILDING, Nala Rd, Bihar Sharif',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.221802,
            lng: 85.2282525,
          },
          viewport: {
            northeast: {
              lat: 25.22313222989272,
              lng: 85.22969287989272,
            },
            southwest: {
              lat: 25.22043257010728,
              lng: 85.22699322010727,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: "King Burger Domino's Pizza Restaurant",
        opening_hours: {
          open_now: false,
        },
        place_id: 'ChIJtyZ55Ja_8jkR9lfQhKdFfRY',
        plus_code: {
          compound_code: '66CH+P8 Ekangarsarai, Bihar',
          global_code: '7MQ766CH+P8',
        },
        rating: 1,
        reference: 'ChIJtyZ55Ja_8jkR9lfQhKdFfRY',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 1,
        vicinity: 'Ekangarsarai',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.2181643,
            lng: 85.2529675,
          },
          viewport: {
            northeast: {
              lat: 25.21946757989272,
              lng: 85.25430077989272,
            },
            southwest: {
              lat: 25.21676792010728,
              lng: 85.25160112010727,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Pizza king',
        photos: [
          {
            height: 1080,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/107549993702773110167"\u003enitish kumar\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwL1dDPB_IBVl6Z80bRD40-O9mZCSLuuUFDgZpTAcxOIaLfTmvaGfbpj4XWkHl18szdGdyN0gXTfOaO2gQuUlCGI_HpY7pTVzpzjdeUSbCRf-lOk_0jk96p6OpR4yKhYsGaMX1DpIhEbT0g1jItIbhGiMXy5oS9DbIFgVuOyq4zlr7AK',
            width: 1080,
          },
        ],
        place_id: 'ChIJrcfI5r-_8jkRuekVWTyWNEw',
        plus_code: {
          compound_code: '6793+75 Ekangardih, Bihar',
          global_code: '7MQ76793+75',
        },
        price_level: 2,
        rating: 4.6,
        reference: 'ChIJrcfI5r-_8jkRuekVWTyWNEw',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 43,
        vicinity: 'NH33, Ekangardih',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.2119085,
            lng: 84.9891136,
          },
          viewport: {
            northeast: {
              lat: 25.21319107989272,
              lng: 84.99041197989271,
            },
            southwest: {
              lat: 25.21049142010727,
              lng: 84.98771232010728,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Zaika family restaurant',
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 672,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/107625846348642704158"\u003eA Google User\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwJFTGToMJRarJOVgfbzmv4c3x-Rk4EQlLFFoKP1i3yln-0N6xASmMwbcV2ZAVB7VPCG5rK8_MjnMaRJ5sOWs46i6bT53KudCI8A1X0RUsI6cBMJ2feZjvvhu_Fvl5GRjGzh8R3VfWV2srdwkiofN8YnmcohtZ6ggPjDyW_OyC-FH5BL',
            width: 1200,
          },
        ],
        place_id: 'ChIJowUUcZi18jkRjjCOKJMNNE4',
        plus_code: {
          compound_code: '6X6Q+QJ Jahanabad, Bihar',
          global_code: '7MQ66X6Q+QJ',
        },
        price_level: 2,
        rating: 3.7,
        reference: 'ChIJowUUcZi18jkRjjCOKJMNNE4',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 328,
        vicinity: 'Near prachin devi mandir station road, Jahanabad',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.2193821,
            lng: 84.99003890000002,
          },
          viewport: {
            northeast: {
              lat: 25.22073187989272,
              lng: 84.99135962989273,
            },
            southwest: {
              lat: 25.21803222010728,
              lng: 84.98865997010728,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Laziz Pizza',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 1506,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/109096794623649446550"\u003eDeepak tiwary\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwLnL2mxzinsDFU48ZBhKjVL-g-6KMQVn_iL4QfKYmNSQwsfP6plMpgML5oFxJo_JI_kTv3Ti5sHdCdlkWrCeiSfNG-TCrvpbUBbU-FbICUh-Mfyh0-3TO8KejH78But5SO5vfwj9Q8UotEDW15_Br03q24FcU8JVIqLtvHOb13-2XzZ',
            width: 1759,
          },
        ],
        place_id: 'ChIJRTpzoqO18jkR-eo9JYuK5F8',
        plus_code: {
          compound_code: '6X9R+Q2 Jahanabad, Bihar',
          global_code: '7MQ66X9R+Q2',
        },
        rating: 4,
        reference: 'ChIJRTpzoqO18jkR-eo9JYuK5F8',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 37,
        vicinity: 'Main Rd, Jahanabad',
      },
      {
        business_status: 'CLOSED_TEMPORARILY',
        geometry: {
          location: {
            lat: 25.1991628,
            lng: 85.5240939,
          },
          viewport: {
            northeast: {
              lat: 25.20062192989272,
              lng: 85.52545627989272,
            },
            southwest: {
              lat: 25.19792227010728,
              lng: 85.52275662010729,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'ROX BIHAR CAFE',
        permanently_closed: true,
        photos: [
          {
            height: 1608,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/113218861337840607705"\u003eA Google User\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwKOzmF80z0UVNDkaty96Eu2JTYHpe43e2_8OMn4tcpHO6cnqLFNZXSdXplANt0MTWg6EoU7xbQUNCRI-F1poWnp02m_oeavNc7FeOwMhDmLhGIrQ54-AuwzkWZ6PkEgiEFM6Kt7TaxEogfzbmTzI7SAH_ftoZyXUfBH4495wyxAH9ra',
            width: 1080,
          },
        ],
        place_id: 'ChIJ4whS6An18jkRt_9-rPpq8NE',
        plus_code: {
          compound_code: '5GXF+MJ Bihar Sharif, Bihar',
          global_code: '7MQ75GXF+MJ',
        },
        rating: 3.7,
        reference: 'ChIJ4whS6An18jkRt_9-rPpq8NE',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 41,
        vicinity: 'Garhpar, Garh Par, Bihar Sharif',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.1944374,
            lng: 85.5134583,
          },
          viewport: {
            northeast: {
              lat: 25.19578837989272,
              lng: 85.51472807989272,
            },
            southwest: {
              lat: 25.19308872010728,
              lng: 85.51202842010728,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Pizza Ghar',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3464,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/102474990879376087575"\u003eA Google User\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwI7_CmSxSpHE5LngqsoDUie-miDdihrs28ujmg5dzz1EWHZWLIVjn8iWJNCR3hO_XTcFyzYrFAtJ25IJRWhzT9ex5m1sHrvopgMl--bPxzGHGoNi_3FgCQwsA2Lhkl18_kcER9su2dTulwHyZiZ7JqlwM73CG68VgeYg3a23FCPsNGo',
            width: 4618,
          },
        ],
        place_id: 'ChIJ26QvuF3z8jkRUs2-s2kScFg',
        plus_code: {
          compound_code: '5GV7+Q9 Bihar Sharif, Bihar',
          global_code: '7MQ75GV7+Q9',
        },
        rating: 3.4,
        reference: 'ChIJ26QvuF3z8jkRUs2-s2kScFg',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 316,
        vicinity:
          'Nageshwar mall, Ramchandrapur Road, near Big bazaar, Ramchandrapur, Bihar Sharif',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.073677,
            lng: 84.9739745,
          },
          viewport: {
            northeast: {
              lat: 25.07510952989272,
              lng: 84.97519702989273,
            },
            southwest: {
              lat: 25.07240987010728,
              lng: 84.97249737010728,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Simran cake and icecream pizza corner',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 1960,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/105494127305958995327"\u003eniraj kumar\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwIup4CKrYcVUtheWYHtZblbiGXRU3qysdPX8cCUq6S9KkJ3t7lglP6eFNuLZ_P9hhSFnFUz3adhTLQmevvpkGQOEy7wpLgvneI2mehrLUFZzXjFDTGaWP9N9pU4-cCyg2oeKC5H4zwnRwMOyx_iUlHuWkZYwQ_Ba6CR1JgTBY_DVz_N',
            width: 4032,
          },
        ],
        place_id: 'ChIJB_DDnQHN8jkR-CYV5Z2DT38',
        plus_code: {
          compound_code: '3XFF+FH Makhdumpur, Bihar',
          global_code: '7MQ63XFF+FH',
        },
        rating: 4.8,
        reference: 'ChIJB_DDnQHN8jkR-CYV5Z2DT38',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 10,
        vicinity: 'Makhdumpur',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 24.7923334,
            lng: 84.99982589999999,
          },
          viewport: {
            northeast: {
              lat: 24.79366637989272,
              lng: 85.00147532989271,
            },
            southwest: {
              lat: 24.79096672010727,
              lng: 84.99877567010726,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: "Domino's Pizza Gaya 823001",
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 3000,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/115251551425783742306"\u003eBadal Pancham Leo\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwKMkCjrFrZde4656-G2fSda8C4YwYHnjiQQ3sa0QtMh7_VP-iNrtDynoGe7YfNBoolRPzk2IDOaW9RDB7hqvBARYItCDdHg_TenOcOaVcOjwyfGVt3vbbG1XplqN6EnCpmgLSnIjHNzQt9Cyk7kc9ZH5nYyWLQiXKqHl_yU8aUN4kD9',
            width: 4000,
          },
        ],
        place_id: 'ChIJZ3Yc2kAq8zkRxvDpWXc-x-A',
        plus_code: {
          compound_code: 'QXRX+WW Gaya, Bihar',
          global_code: '7MP6QXRX+WW',
        },
        price_level: 2,
        rating: 3.8,
        reference: 'ChIJZ3Yc2kAq8zkRxvDpWXc-x-A',
        scope: 'GOOGLE',
        types: [
          'meal_delivery',
          'meal_takeaway',
          'restaurant',
          'food',
          'point_of_interest',
          'establishment',
        ],
        user_ratings_total: 1442,
        vicinity:
          '1ST Floor, Kashinath More, R J Palace Above ICICI Bank, Swarajpuri Rd, Gaya',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.2071978,
            lng: 85.6861919,
          },
          viewport: {
            northeast: {
              lat: 25.20857027989272,
              lng: 85.68748872989272,
            },
            southwest: {
              lat: 25.20587062010727,
              lng: 85.68478907010729,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Yami Pizza Hut, Sare Nalanda',
        photos: [
          {
            height: 1649,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/112153775607828848923"\u003eRk Singh\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwIYNUo-bno7VH8O1lATwps36Mq0aQk8t202-HIqWjPn_OYGPp78y0tv-asnnIU2ehTv-yiQEMwIPA7S8NXj45PB46lTM-Sw0GqDey0KWIt2uuUlWWsJLwQI4ENc0O7n-6lhlPT89EZlQvHAaLZkllaj4HkbwFcUd5rj0G1abJsDOpqG',
            width: 2282,
          },
        ],
        place_id: 'ChIJ5c9f5gld8jkR-iKuUV_IXzs',
        plus_code: {
          compound_code: '6M4P+VF Fatehpur, Bihar',
          global_code: '7MQ76M4P+VF',
        },
        rating: 4.8,
        reference: 'ChIJ5c9f5gld8jkR-iKuUV_IXzs',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 17,
        vicinity: 'Fatehpur',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.196231,
            lng: 85.52622599999999,
          },
          viewport: {
            northeast: {
              lat: 25.19760722989272,
              lng: 85.52757642989273,
            },
            southwest: {
              lat: 25.19490757010727,
              lng: 85.52487677010728,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: "Bittu's",
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3264,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/100293650301890555463"\u003eA Google User\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwLCReyMnjxdaVM8L77dKiYMCZyhs-gNZmgexzVGtNm5CS2yC8DgNYPOEz2VtsUGZGXd2OOIFAPEe7EZTtfLK-v_MqgU_SmbenElfvLY3WIWLx0dRbcux5BZGVYm00c5ZkGkAT55ogDZw7O8LCDDm8td6bDo9zbALOcE3Dr4ppAVn2so',
            width: 2448,
          },
        ],
        place_id: 'ChIJeTSFyKP08jkRFC7UgpUTMvA',
        plus_code: {
          compound_code: '5GWG+FF Bihar Sharif, Bihar',
          global_code: '7MQ75GWG+FF',
        },
        price_level: 2,
        rating: 3.9,
        reference: 'ChIJeTSFyKP08jkRFC7UgpUTMvA',
        scope: 'GOOGLE',
        types: [
          'bakery',
          'meal_delivery',
          'restaurant',
          'food',
          'point_of_interest',
          'store',
          'establishment',
        ],
        user_ratings_total: 364,
        vicinity: 'Bichli, Khandak Rd, Bihar Sharif',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 24.8908266,
            lng: 85.5416532,
          },
          viewport: {
            northeast: {
              lat: 24.89217147989272,
              lng: 85.54295792989272,
            },
            southwest: {
              lat: 24.88947182010728,
              lng: 85.54025827010729,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Laziz pizza',
        photos: [
          {
            height: 2448,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/100382719033917096644"\u003eSRLive\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwLIcUBpPHNdmvLn3h6P0dYXCNrDh_uyP2eEmbSUcwjWSj4wwHZKxrvT3XEOjhRZN2_Ib6eVUD18oSXCfyXQd5DgDuNX4y9TaNLnfSvPWA6teKm9B_evru7GfQ2BiDpiS6oPvTKaAo-PTlckMD1IsQLd6CuHQZiSGXxvkj3rJ1AxLrQh',
            width: 3264,
          },
        ],
        place_id: 'ChIJE1lhU83_8jkRUn6x8vgIMcU',
        plus_code: {
          compound_code: 'VGRR+8M Nawada, Bihar',
          global_code: '7MP7VGRR+8M',
        },
        rating: 3.6,
        reference: 'ChIJE1lhU83_8jkRUn6x8vgIMcU',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 65,
        vicinity: 'Lalkothi, Nawada',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 24.7962335,
            lng: 85.0106627,
          },
          viewport: {
            northeast: {
              lat: 24.79748592989272,
              lng: 85.01196047989272,
            },
            southwest: {
              lat: 24.79478627010728,
              lng: 85.00926082010727,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Paprika Fine Dine Pure Veg Restaurant',
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 4160,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/111444755374308888042"\u003eAbhishek Mathur\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwLg8_UqoDo2k9tGA2sYogU40tGbg5OzIst_6tgyxEUQjjQYWZdz9Dk6AvvraGc_oE5cFts7jvcUiBpi8jE-cCQXsQUgXwP5iLsGVqi9scSQehcQyXPQ9wRNnIuYdRZvqKwzTsSyBjrB8GBctFrnDpbNtPh0eOyO_qcyU0TZDfq4mqyB',
            width: 3120,
          },
        ],
        place_id: 'ChIJ87aXdD0q8zkRNq6M0tjuFHI',
        plus_code: {
          compound_code: 'Q2W6+F7 Gaya, Bihar',
          global_code: '7MP7Q2W6+F7',
        },
        price_level: 2,
        rating: 4.1,
        reference: 'ChIJ87aXdD0q8zkRNq6M0tjuFHI',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 2442,
        vicinity: 'Chowk, KP Rd, near Kiran Cinema, Dulhingunj, Gaya',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.2213285,
            lng: 85.241269,
          },
          viewport: {
            northeast: {
              lat: 25.22273187989272,
              lng: 85.24263752989273,
            },
            southwest: {
              lat: 25.22003222010728,
              lng: 85.2399378701073,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: "Domino's Pizza Restaurant Ekangarsarai Nalanda",
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 720,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/105924943366921219571"\u003eA Google User\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwKyYylhro8GXD9znjFpkNrV5Z2iq2VFDlWh1KIcAtpLpWBMeUwBLfBTDM-0QM7v3Vr9jbZEb-ZazSzZcHMxjvrYh07PgZRyFDD36eZJiVkUjj6mJO1vhOaeC7UvlspW4UgAhFKWCOATHKLrLOm-VVnRe9EH8uEt_Wo03M77-hF39Edc',
            width: 720,
          },
        ],
        place_id: 'ChIJo9AeWyC_8jkRuE6SmMm0xfs',
        plus_code: {
          compound_code: '66CR+GG Ekangarsarai, Bihar',
          global_code: '7MQ766CR+GG',
        },
        rating: 3.6,
        reference: 'ChIJo9AeWyC_8jkRuE6SmMm0xfs',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 13,
        vicinity: 'sundi bigha, Ekangarsarai',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.1958041,
            lng: 85.51778729999999,
          },
          viewport: {
            northeast: {
              lat: 25.19706852989272,
              lng: 85.51913412989272,
            },
            southwest: {
              lat: 25.19436887010728,
              lng: 85.51643447010727,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Elite Family Restaurant',
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 960,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/113871787309398565751"\u003eElite Garden Restaurant\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwKQF0KJKGR-_HKuYu-d-qkdD9wITJac0MwyUVO4u62LWnC4DcC-ITVq_3pFWfcYeECreiZC3gMn6rkSWJFZ6pSyMTNu7KgFd7VpXE5lJJPq6gmDW-NAsYGvURiB5oJp27WdTH26-8ksLxyZyuZvXVC78iw4XP04drg5W_Pad8-e7EJX',
            width: 720,
          },
        ],
        place_id: 'ChIJuyMSBF_z8jkRRidq2926RL0',
        plus_code: {
          compound_code: '5GW9+84 Bihar Sharif, Bihar',
          global_code: '7MQ75GW9+84',
        },
        price_level: 2,
        rating: 3.6,
        reference: 'ChIJuyMSBF_z8jkRRidq2926RL0',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 464,
        vicinity:
          'COMMERCIAL COMPLEX, MAGHARA, MG Road, Near IDBI BANK, Bihar Sharif',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.2115423,
            lng: 84.9878844,
          },
          viewport: {
            northeast: {
              lat: 25.21289002989272,
              lng: 84.98927167989272,
            },
            southwest: {
              lat: 25.21019037010727,
              lng: 84.98657202010727,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Red Chilli Food Corner',
        photos: [
          {
            height: 720,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/113433056839970946399"\u003eRajesh Raj\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwLY8UaYsmLjxZ-8_QixBIfCkty7ecuKmCc7nYlBr25U05oOjvE-s9VfEsEHGfC9w5thSyAXYpSVkIlMq6XR-w6y2UzAcxE-ujEvgeDzN7AvyRBLjUO6EaYcy_1kMTJSteHsH9RnuMLYFne3cC2jsmGIzEgdm3mwNrOXZ_EbvJsDKMHc',
            width: 1280,
          },
        ],
        place_id: 'ChIJSxu-tYS18jkRg-CFxMCuPpw',
        plus_code: {
          compound_code: '6X6Q+J5 Jahanabad, Bihar',
          global_code: '7MQ66X6Q+J5',
        },
        rating: 3.7,
        reference: 'ChIJSxu-tYS18jkRg-CFxMCuPpw',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 53,
        vicinity: 'Jahanabad',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.1946728,
            lng: 85.51591719999999,
          },
          viewport: {
            northeast: {
              lat: 25.19604462989272,
              lng: 85.51726512989272,
            },
            southwest: {
              lat: 25.19334497010728,
              lng: 85.51456547010727,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Laziz Pizza',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 1856,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/110344231152061671079"\u003erahul kr\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwI0JrwNrJyfnXId0qTHrCbsndrHCELB8O3xXm_JyB5DKUOW5KnXvLZgzyYCh7Ul31m_PZ9hYE9m3koHbW2si1hdF5fB1nAANbfP1cpwAdC9q-vFmS5jgtgm46oeCs0JKBrNwotDYsMJ5otQ3rAL5DuGcFVyXL13BfAXGUnJQPFZ_j-0',
            width: 4000,
          },
        ],
        place_id: 'ChIJmXqs6Zjz8jkRqpDuNDcJDR4',
        plus_code: {
          compound_code: '5GV8+V9 Bihar Sharif, Bihar',
          global_code: '7MQ75GV8+V9',
        },
        rating: 4.2,
        reference: 'ChIJmXqs6Zjz8jkRqpDuNDcJDR4',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 136,
        vicinity: 'Ramchandrapur Bypass Rd, Bharao Par, Sherpur, Bihar Sharif',
      },
      {
        business_status: 'OPERATIONAL',
        geometry: {
          location: {
            lat: 25.1988544,
            lng: 85.5173286,
          },
          viewport: {
            northeast: {
              lat: 25.20019497989272,
              lng: 85.51876092989272,
            },
            southwest: {
              lat: 25.19749532010728,
              lng: 85.51606127010727,
            },
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Green Chilli Restaurant',
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 3468,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/109260099144171754633"\u003eANIRBAN\u003c/a\u003e',
            ],
            photo_reference:
              'ATtYBwL4U1UTJ0IzBYBsE3vcWi7oOvaemwB7lmZxdg5DC1l7dFMbGTCKYsjkJJKNJ_DGEAng7DVSsb__qOtYggEMN2RzJTkImFh0EJR08CjRa7CLdvw16jJ_zp1dkpGCK1mNEaaMzViJL7CnnzumT1SRRlv8D3PUNsfSwXvkC_O9DgZ3czm8',
            width: 4624,
          },
        ],
        place_id: 'ChIJr39NKFnz8jkRQzuRPhh0jnA',
        plus_code: {
          compound_code: '5GX8+GW Bihar Sharif, Bihar',
          global_code: '7MQ75GX8+GW',
        },
        price_level: 2,
        rating: 3.6,
        reference: 'ChIJr39NKFnz8jkRQzuRPhh0jnA',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 481,
        vicinity: 'Near Government Bus Stand, Ranchi Road, Bihar Sharif',
      },
    ],
    status: 'OK',
  };
  serviceUrl: string =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
  constructor(private http: HttpClient) {}

  getPizzaStores(data) {
    let apikey = 'key=' + environment.GMAP_KEY;
    let parameters = '';
    for (const [key, value] of Object.entries(data)) {
      parameters = parameters + `${key}=${value}&`;
    }
    parameters += apikey;
    const API = this.serviceUrl + parameters;
    const opts = { params: new HttpParams({ fromString: parameters }) };
    const _API = 'https://learners-portal.herokuapp.com/map/places';
    console.log(_API);
    return this.http.get(_API, opts);
  }
}
