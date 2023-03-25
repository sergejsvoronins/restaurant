export interface Course {
    name: string;
    description: string;
    price: number;
  }

  export interface MenuSection {
    name: string;
    courses: Course[];
  }
  
export interface Menu {
    firstCourses: MenuSection;
    mainCourses: MenuSection;
    desserts: MenuSection;
  }

export const menu: Menu = {
    firstCourses: {
      name: 'Förrätter',
      courses: [
        {
          name: 'Caprese',
          description: 'Mozarella, tomater, basilika',
          price: 129,
        },
        {
          name: 'Leverpastejsmacka',
          description: 'Macka med leverpastej och saltgurka',
          price: 149,
        },
      ],
    },
    mainCourses: {
      name: 'Varmrätter',
      courses: [
        {
          name: 'Stuvade makaroner med falukorv',
          description: 'Stuvade makaroner med falukorv. Ketchup ingår ej.',
          price: 497,
        },
        {
          name: 'Flintastek',
          description: 'Flintastek med pommes frites och bearnaisesås',
          price: 299,
        },
      ],
    },
    desserts: {
      name: 'Efterrätter',
      courses: [
        {
          name: 'Friterad banan',
          description: 'Friterad banan. Serveras med Big Pack-vaniljglass',
          price: 99,
        },
        {
          name: 'Kladdkaka',
          description: 'Kladdkaka. Gott!',
          price: 89,
        },
      ],
    },
  };