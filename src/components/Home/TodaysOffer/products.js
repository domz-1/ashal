import Img1 from '../../../assets/Img1.png';
import Img2 from '../../../assets/Img2.png';
import Img3 from '../../../assets/Img3.png';
import Img4 from '../../../assets/Img4.png';

// Utility function to generate a random date in the future
const randomFutureDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 10) + 1; // Random day within the next 10 days
    today.setDate(today.getDate() + randomDays);
    return today;
};

export const products = [
    {
        src: Img1,
        name: 'باسكت متعدد الأغراض',
        category: 'الديكور',
        date: randomFutureDate(),
        rating: 4.2,
        reviews: 6,
        description: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: '',
    },
    {
        src: Img2,
        name: 'ترابيزة جانبية',
        category: 'الديكور',
        date: randomFutureDate(),
        rating: 4.5,
        reviews: 4,
        description: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: 15,
    },
    {
        src: Img3,
        name: 'طقم فخار مودرن',
        category: 'المطبخ',
        date: randomFutureDate(),
        rating: 4,
        reviews: 3,
        description: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: '',
    },
    {
        src: Img4,
        name: 'كوب زخرفي عتيق',
        category: 'المطبخ',
        date: randomFutureDate(),
        rating: 5,
        reviews: 2,
        description: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: '',
    },
    {
        src: Img1,
        name: '01باسكت متعدد الأغراض',
        category: 'الديكور',
        date: randomFutureDate(),
        rating: 4.2,
        reviews: 6,
        description: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: '',
    },
    {
        src: Img2,
        name: '01ترابيزة جانبية',
        category: 'الديكور',
        date: randomFutureDate(),
        rating: 4.5,
        reviews: 4,
        description: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: 15,
    },
    {
        src: Img3,
        name: '01طقم فخار مودرن',
        category: 'المطبخ',
        date: randomFutureDate(),
        rating: 4,
        reviews: 3,
        description: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: '',
    },
    {
        src: Img4,
        name: '01كوب زخرفي عتيق',
        category: 'المطبخ',
        date: randomFutureDate(),
        rating: 5,
        reviews: 2,
        description: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: '',
    },
];
