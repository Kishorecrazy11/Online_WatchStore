export interface Watch {
    id: string;
    brand: string;
    model: string;
    price: string;
    image: string;
    description: string;
    type: 'Automatic' | 'Quartz' | 'Manual' | 'Smart';
    availability: 'In Stock' | 'Out of Stock' | 'Pre-order';
    size: string;
    color: string;
    movement: string;
    caseMaterial: string;
    waterResistance: string;
}

export const watches: Watch[] = [
    {
        id: '1',
        brand: 'Rolex',
        model: 'Submariner Date',
        price: '$10,250',
        image: '/images/rolex-submariner.png',
        description: 'The archetypal diving watch. The Oyster Perpetual Submariner Date in Oystersteel with a Cerachrom bezel insert in black ceramic and a black dial with large luminescent hour markers.',
        type: 'Automatic',
        availability: 'In Stock',
        size: '41 mm',
        color: 'Silver/Black',
        movement: 'Perpetual, mechanical, self-winding',
        caseMaterial: 'Oystersteel',
        waterResistance: '300 meters / 1,000 feet'
    },
    {
        id: '2',
        brand: 'Omega',
        model: 'Speedmaster Moonwatch',
        price: '$7,600',
        image: '/images/omega-speedmaster.png',
        description: 'The Speedmaster Moonwatch is one of the world\'s most iconic timepieces. Having been a part of all six lunar missions, the legendary chronograph is an impressive representation of the brand\'s adventurous pioneering spirit.',
        type: 'Manual',
        availability: 'In Stock',
        size: '42 mm',
        color: 'Silver/Black',
        movement: 'Co-Axial Master Chronometer Calibre 3861',
        caseMaterial: 'Steel',
        waterResistance: '50 meters / 167 feet'
    },
    {
        id: '3',
        brand: 'Patek Philippe',
        model: 'Nautilus',
        price: '$35,000',
        image: '/images/patek-nautilus.png',
        description: 'With the rounded octagonal shape of its bezel, the ingenious porthole construction of its case, and its horizontally embossed dial, the Nautilus has epitomized the elegant sports watch since 1976.',
        type: 'Automatic',
        availability: 'Out of Stock',
        size: '40 mm',
        color: 'Silver/Blue',
        movement: 'Caliber 26-330 S C',
        caseMaterial: 'Steel',
        waterResistance: '120 meters'
    },
    {
        id: '4',
        brand: 'Audemars Piguet',
        model: 'Royal Oak',
        price: '$28,900',
        image: '/images/ap-royaloak.png',
        description: 'Selfwinding watch with date display and centre seconds. Stainless steel case, glareproofed sapphire crystal and caseback, screw-locked crown.',
        type: 'Automatic',
        availability: 'In Stock',
        size: '41 mm',
        color: 'Silver/Black',
        movement: 'Calibre 4302',
        caseMaterial: 'Stainless Steel',
        waterResistance: '50 meters'
    },
    {
        id: '5',
        brand: 'Tag Heuer',
        model: 'Carrera',
        price: '$5,500',
        image: '/images/tag-carrera.png',
        description: 'A classic yet contemporary sports watch inspired by motor racing.',
        type: 'Automatic',
        availability: 'In Stock',
        size: '44 mm',
        color: 'Silver/Blue',
        movement: 'Calibre Heuer 02',
        caseMaterial: 'Steel',
        waterResistance: '100 meters'
    },
    {
        id: '6',
        brand: 'Cartier',
        model: 'Santos de Cartier',
        price: '$7,800',
        image: '/images/cartier-santos.png',
        description: 'Famous for being one of the first wristwatches, designed for aviator Alberto Santos-Dumont.',
        type: 'Automatic',
        availability: 'In Stock',
        size: '39.8 mm',
        color: 'Silver/White',
        movement: 'Caliber 1847 MC',
        caseMaterial: 'Steel',
        waterResistance: '100 meters'
    },
    {
        id: '7',
        brand: 'Casio',
        model: 'G-Shock',
        price: '$150',
        image: '/images/gshock.png',
        description: 'The toughest watch of all time. Shock resistant and water resistant.',
        type: 'Quartz',
        availability: 'In Stock',
        size: '45 mm',
        color: 'Black',
        movement: 'Quartz',
        caseMaterial: 'Resin',
        waterResistance: '200 meters'
    },
    {
        id: '8',
        brand: 'Seiko',
        model: 'Prospex',
        price: '$1,200',
        image: '/images/seiko-prospex.png',
        description: 'Designed for sports lovers and adventure seekers in the water, in the sky or on land.',
        type: 'Automatic',
        availability: 'In Stock',
        size: '40.5 mm',
        color: 'Silver/Green',
        movement: 'Caliber 6R35',
        caseMaterial: 'Steel',
        waterResistance: '200 meters'
    }
];
