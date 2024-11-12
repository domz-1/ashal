import Cup from '../../../assets/Picture.png';
import Picture1 from '../../../assets/Picture1.png';
import Picture2 from '../../../assets/Picture2.png';

// Utility function to generate a random date in the future
const randomFutureDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 10) + 1; // Random day within the next 10 days
    today.setDate(today.getDate() + randomDays);
    return today;
};

export const productsToday = [
    {
        src: Cup,
        name: 'كوب خزفي هاند ميد',
        category: 'الديكور',
        date: randomFutureDate(),
        rating: 4,
        reviews: 6,
        description:
            'طقم أكواب شاي صيني من طراز ريترو ستايل بيرسوناليتي 35 مل بورسلين بصمة يدوية ، فنجان شاي صغير ، فنجان شاي صيني H358 - فناجين شاي المادة: سيراميك, السعة: 35 مل',
        isOffer: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: 15,
    },
    {
        src: Picture1,
        name: 'سجادة هاند ميد',
        category: 'الديكور',
        date: randomFutureDate(),
        rating: 2,
        reviews: 6,
        description:
            ' سجادة الهاند ميد هي قطعة فريدة من نوعها تتميز بالحرفية العالية والدقة في التفاصيل. عادةً ما تُصنع باستخدام ألياف طبيعية مثل الصوف أو القطن، مما يجعلها ناعمة وذات ملمس دافئ. تُزين بأنماط تقليدية أو حديثة، وتُنسج يدوياً باستخدام تقنيات دقيقة تضمن قوة وتماسك النسيج. تأتي بتدرجات لونية جذابة قد تكون زاهية أو هادئة حسب التصميم، وتُعتبر قطعة فنية تضيف جمالًا وأناقة لأي مساحة توضع فيها. بفضل صناعتها اليدوية، تتميز كل سجادة بلمسة فريدة تجعلها قطعة مميزة في ديكور المنزل',
        isOffer: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: 15,
    },
    {
        src: Picture2,
        name: 'كوب خزفي هاند ميد',
        category: 'الديكور',
        date: randomFutureDate(),
        rating: 4.2,
        reviews: 6,
        description: 'جديد',
        isOffer: 'جديد',
        price: 19.0,
        oldPrice: 22.0,
        discount: 15,
    },
];
