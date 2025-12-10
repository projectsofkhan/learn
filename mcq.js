// Class 10 Urdu MCQs - Based on Nawa-e-Urdu Part 2 Syllabus
const urduMCQs = [
    // حصّہ نثر (Prose Section) - Questions 1-6
    {
        id: 1,
        category: "حصّہ نثر - نیا قانون",
        question: "Naya Qanoon kis ne likha hai?",
        options: [
            "Saadat Hasan Manto",
            "Patras Bukhari",
            "Krishan Chander",
            "Ismat Chughtai"
        ],
        correctAnswer: 0,
        explanation: "Naya Qanoon Saadat Hasan Manto ne likha hai. Yeh Manto ka mashhoor afsana hai."
    },
    {
        id: 2,
        category: "حصّہ نثر - نیا قانون",
        question: "Naya Qanoon afsane mein kaun sa qanoon naya aaya tha?",
        options: [
            "Traffic Qanoon",
            "Sharab bandi ka qanoon",
            "Education Qanoon",
            "Tax Qanoon"
        ],
        correctAnswer: 1,
        explanation: "Naya Qanoon afsane mein sharab bandi ka qanoon naya aaya tha."
    },
    {
        id: 3,
        category: "حصّہ نثر - سر سید کا بچپن",
        question: "Sir Syed ka Bachpan kis ne likha hai?",
        options: [
            "Altaf Hussain Hali",
            "Mohammad Husain Azad",
            "Sir Syed Ahmed Khan",
            "Deputy Nazir Ahmed"
        ],
        correctAnswer: 0,
        explanation: "Sir Syed ka Bachpan Altaf Hussain Hali ne likha hai."
    },
    {
        id: 4,
        category: "حصّہ نثر - سر سید کا بچپن",
        question: "Sir Syed ki pehli ustani ka naam kya tha?",
        options: [
            "Maulvi Hamiduddin",
            "Maulvi Ghulam Hussain",
            "Maulvi Muhammad Ibrahim",
            "Maulvi Mubarak Ali"
        ],
        correctAnswer: 1,
        explanation: "Sir Syed ki pehli ustani Maulvi Ghulam Hussain thi."
    },
    {
        id: 5,
        category: "حصّہ نثر - آزمایش",
        question: "Aazmaish kis ne likhi hai?",
        options: [
            "Mohammad Mujeeb",
            "Quratulain Hyder",
            "Abdullah Hussain",
            "Shaukat Siddiqui"
        ],
        correctAnswer: 0,
        explanation: "Aazmaish Mohammad Mujeeb ne likhi hai."
    },
    {
        id: 6,
        category: "حصّہ نثر - آزمایش",
        question: "Aazmaish sabaq ka markazi khayal kya hai?",
        options: [
            "Taleem ki ahmiyat",
            "Zindagi ki aazmaishein",
            "Science ki taraqqi",
            "Watan se mohabbat"
        ],
        correctAnswer: 1,
        explanation: "Aazmaish sabaq ka markazi khayal zindagi ki aazmaishein aur insan ka imtehan hai."
    },
    {
        id: 7,
        category: "حصّہ نثر - عورتوں کے حقوق",
        question: "Aurton ke Haqooq kis ne likhe hain?",
        options: [
            "Sir Syed Ahmed Khan",
            "Allama Iqbal",
            "Maulana Azad",
            "Josh Malihabadi"
        ],
        correctAnswer: 0,
        explanation: "Aurton ke Haqooq Sir Syed Ahmed Khan ne likhe hain."
    },
    {
        id: 8,
        category: "حصّہ نثر - عورتوں کے حقوق",
        question: "Sir Syed ne aurton ke liye konsi cheez zaroori batayi?",
        options: [
            "Parda",
            "Taleem",
            "Shadi",
            "Kaam"
        ],
        correctAnswer: 1,
        explanation: "Sir Syed ne aurton ke liye taleem ko sab se zyada zaroori bataya."
    },
    {
        id: 9,
        category: "حصّہ نثر - مخلوط زبان",
        question: "Makhloot Zaban kis ne likhi hai?",
        options: [
            "Maulvi Abdul Haq",
            "Moulana Shibli Nomani",
            "Doctor Waheed Qureshi",
            "Farman Fatehpuri"
        ],
        correctAnswer: 0,
        explanation: "Makhloot Zaban Maulvi Abdul Haq ne likhi hai."
    },
    {
        id: 10,
        category: "حصّہ نثر - مخلوط زبان",
        question: "Makhloot Zaban sabaq mein kis cheez par zor diya gaya hai?",
        options: [
            "Angrezi zaban ki ahmiyat",
            "Urdu zaban ki taraqqi",
            "Hindi zaban ki khubsoorti",
            "Zabanon ki milawat"
        ],
        correctAnswer: 3,
        explanation: "Makhloot Zaban sabaq mein zabanon ki milawat aur Urdu ki taraqqi par zor diya gaya hai."
    },
    {
        id: 11,
        category: "حصّہ نثر - ماحول بچائیے",
        question: "Mahool Bachaiye kis mazmoon ka hissa hai?",
        options: [
            "Science ke mazmoon",
            "Social issues ke mazmoon",
            "Adab ke mazmoon",
            "Tareekh ke mazmoon"
        ],
        correctAnswer: 1,
        explanation: "Mahool Bachaiye social issues ke mazmoon mein aata hai."
    },
    {
        id: 12,
        category: "حصّہ نثر - ماحول بچائیے",
        question: "Mahool ko bachane ke liye sab se aham kaam kya hai?",
        options: [
            "Factories band karna",
            "Cars band karna",
            "Shajar kaari",
            "Safai"
        ],
        correctAnswer: 2,
        explanation: "Mahool ko bachane ke liye shajar kaari sab se aham kaam hai."

    // حصّہ نظم (غزل) - Ghazal Section - Questions 13-16
    },
    {
        id: 13,
        category: "نظم (غزل) - لائی حیات آئے",
        question: "Laai Hayat Aaye kis shayar ki ghazal hai?",
        options: [
            "Sheikh Muhammad Ibrahim Zauq",
            "Mirza Ghalib",
            "Mir Taqi Mir",
            "Bahadur Shah Zafar"
        ],
        correctAnswer: 0,
        explanation: "Laai Hayat Aaye Sheikh Muhammad Ibrahim Zauq ki ghazal hai."
    },
    {
        id: 14,
        category: "نظم (غزل) - لائی حیات آئے",
        question: "Zauq kis badshah ke ustadi shayar the?",
        options: [
            "Shah Alam",
            "Akbar Shah II",
            "Bahadur Shah Zafar",
            "Alamgir II"
        ],
        correctAnswer: 2,
        explanation: "Zauq Bahadur Shah Zafar ke ustadi shayar the."
    },
    {
        id: 15,
        category: "نظم (غزل) - ڈھونڈو گے اگر ملکوں ملکوں",
        question: "Dhoondo Ge Agar Mulkon Mulkon kis shayar ki ghazal hai?",
        options: [
            "Shad Azeemabadi",
            "Firaq Gorakhpuri",
            "Jigar Moradabadi",
            "Hasrat Mohani"
        ],
        correctAnswer: 0,
        explanation: "Dhoondo Ge Agar Mulkon Mulkon Shad Azeemabadi ki ghazal hai."
    },
    {
        id: 16,
        category: "نظم (غزل) - ڈھونڈو گے اگر ملکوں ملکوں",
        question: "Is ghazal ka markazi khayal kya hai?",
        options: [
            "Watan ki talash",
            "Mohabbat ki talash",
            "Khuda ki talash",
            "Haqeeqat ki talash"
        ],
        correctAnswer: 3,
        explanation: "Is ghazal ka markazi khayal haqeeqat aur insaniyat ki talash hai."
    },
    {
        id: 17,
        category: "نظم (غزل) - دُنیا میری بلا جانے",
        question: "Duniya Meri Bala Jaane kis shayar ki ghazal hai?",
        options: [
            "Fani Badayuni",
            "Josh Malihabadi",
            "Nazeer Akbarabadi",
            "Daagh Dehlvi"
        ],
        correctAnswer: 0,
        explanation: "Duniya Meri Bala Jaane Fani Badayuni ki ghazal hai."
    },
    {
        id: 18,
        category: "نظم (غزل) - دُنیا میری بلا جانے",
        question: "Fani Badayuni ki shayari ka khas rang kya hai?",
        options: [
            "Mohabbat",
            "Rindana",
            "Deeni",
            "Watanparasti"
        ],
        correctAnswer: 1,
        explanation: "Fani Badayuni ki shayari ka khas rang rindana aur zindagi se bezaari ka hai."
    },
    {
        id: 19,
        category: "نظم (غزل) - ادب نے دل کے تقاضے",
        question: "Adab ne Dil ke Taqaze kis shayar ki ghazal hai?",
        options: [
            "Yas Yagana Changezi",
            "Majaz Lucknowi",
            "Sahir Ludhianvi",
            "Faiz Ahmed Faiz"
        ],
        correctAnswer: 0,
        explanation: "Adab ne Dil ke Taqaze Yas Yagana Changezi ki ghazal hai."
    },
    {
        id: 20,
        category: "نظم (غزل) - ادب نے دل کے تقاضے",
        question: "Yas Yagana Changezi ka asal naam kya tha?",
        options: [
            "Mirza Yaas",
            "Ahmad Hussain",
            "Asghar Hussain",
            "Javed Hussain"
        ],
        correctAnswer: 2,
        explanation: "Yas Yagana Changezi ka asal naam Asghar Hussain tha."

    // حصّہ نظم (نظم) - Nazm Section - Questions 21-25
    },
    {
        id: 21,
        category: "نظم (نظم) - جلوہء دربارِ دہلی",
        question: "Jalwa-e-Darbar-e-Dehli kis shayar ki nazm hai?",
        options: [
            "Akbar Allahabadi",
            "Hafeez Jalandhari",
            "Altaf Hussain Hali",
            "Mohammad Iqbal"
        ],
        correctAnswer: 0,
        explanation: "Jalwa-e-Darbar-e-Dehli Akbar Allahabadi ki nazm hai."
    },
    {
        id: 22,
        category: "نظم (نظم) - جلوہء دربارِ دہلی",
        question: "Akbar Allahabadi kis andaaz ke shayar the?",
        options: [
            "Romantic",
            "Satirical",
            "Religious",
            "Patriotic"
        ],
        correctAnswer: 1,
        explanation: "Akbar Allahabadi satirical (tanz-o-mizah) andaaz ke shayar the."
    },
    {
        id: 23,
        category: "نظم (نظم) - حقیقت حسن",
        question: "Haqeeqat-e-Husn kis shayar ki nazm hai?",
        options: [
            "Doctor Allama Iqbal",
            "Mirza Ghalib",
            "Faiz Ahmed Faiz",
            "Ahmed Nadeem Qasmi"
        ],
        correctAnswer: 0,
        explanation: "Haqeeqat-e-Husn Doctor Allama Iqbal ki nazm hai."
    },
    {
        id: 24,
        category: "نظم (نظم) - حقیقت حسن",
        question: "Iqbal ne asal husn kya bataya hai?",
        options: [
            "Chehra",
            "Aankhein",
            "Ikhlaq",
            "Taleem"
        ],
        correctAnswer: 2,
        explanation: "Iqbal ne asal husn ikhlaq aur bataniat ko bataya hai."
    },
    {
        id: 25,
        category: "نظم (نظم) - او دیس سے آنے والے",
        question: "O Des Se Aane Wale kis shayar ki nazm hai?",
        options: [
            "Akhtar Sheerani",
            "Sahir Ludhianvi",
            "Majrooh Sultanpuri",
            "Kaifi Azmi"
        ],
        correctAnswer: 0,
        explanation: "O Des Se Aane Wale Akhtar Sheerani ki nazm hai."
    },
    {
        id: 26,
        category: "نظم (نظم) - او دیس سے آنے والے",
        question: "Akhtar Sheerani kis jamat ke shayar the?",
        options: [
            "Halqa-e-Arbab-e-Zauq",
            "Bazm-e-Iqbal",
            "Anjuman-e-Taraqqi Pasand",
            "Halqa-e-Arbab-e-Sukhan"
        ],
        correctAnswer: 3,
        explanation: "Akhtar Sheerani Halqa-e-Arbab-e-Sukhan ke shayar the."

    // رباعی - Rubai Section - Questions 27-28
    },
    {
        id: 27,
        category: "رباعی - میر ببر علی انیس",
        question: "Mir Babar Ali Anis kis fun se taluq rakhte the?",
        options: [
            "Ghazal",
            "Marsiya",
            "Qasida",
            "Masnavi"
        ],
        correctAnswer: 1,
        explanation: "Mir Babar Ali Anis marsiya nigari ke fun se taluq rakhte the."
    },
    {
        id: 28,
        category: "رباعی - میر ببر علی انیس",
        question: "Anis kis shehar se taluq rakhte the?",
        options: [
            "Lucknow",
            "Delhi",
            "Faizabad",
            "Hyderabad"
        ],
        correctAnswer: 0,
        explanation: "Anis Lucknow se taluq rakhte the."
    },
    {
        id: 29,
        category: "رباعی - تیلوک چند محروم",
        question: "Tilok Chand Mahroom kis zaban ke shayar the?",
        options: [
            "Urdu",
            "Persian",
            "Hindi",
            "Punjabi"
        ],
        correctAnswer: 0,
        explanation: "Tilok Chand Mahroom Urdu zaban ke shayar the."
    },
    {
        id: 30,
        category: "رباعی - تیلوک چند محروم",
        question: "Mahroom ka khas mazmoon kya tha?",
        options: [
            "Mohabbat",
            "Watanparasti",
            "Insaniyat",
            "Mazhabi"
        ],
        correctAnswer: 3,
        explanation: "Mahroom ka khas mazmoon mazhabi aur rohaniyat tha."

    // قواعد - Grammar Section - Questions 31-36
    },
    {
        id: 31,
        category: "قواعد - اسم",
        question: "'Kitab' kya hai?",
        options: [
            "Ism",
            "Sift",
            "Fail",
            "Zameer"
        ],
        correctAnswer: 0,
        explanation: "'Kitab' ism hai."
    },
    {
        id: 32,
        category: "قواعد - اسم",
        question: "Ism ki kitni aqsaam hain?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: 0,
        explanation: "Ism ki do aqsaam hain: Ism-e-Zaat aur Ism-e-Sift."
    },
    {
        id: 33,
        category: "قواعد - فعل",
        question: "'Woh parhta hai' mein 'parhta' kya hai?",
        options: [
            "Ism",
            "Fail-e-Haal",
            "Fail-e-Mazi",
            "Fail-e-Mustaqbil"
        ],
        correctAnswer: 1,
        explanation: "'Parhta' fail-e-haal hai."
    },
    {
        id: 34,
        category: "قواعد - فعل",
        question: "Fail ki teenon asool kya hain?",
        options: [
            "Mazi, Haal, Mustaqbil",
            "Zaat, Sift, Zameer",
            "Mufrad, Tazkir, Tanees",
            "Marfa, Nakra, Musharrah"
        ],
        correctAnswer: 0,
        explanation: "Fail ki teen asool hain: Mazi, Haal, Mustaqbil."
    },
    {
        id: 35,
        category: "قواعد - حرف",
        question: "'Aur' kya hai?",
        options: [
            "Harf-e-Atf",
            "Harf-e-Jar",
            "Harf-e-Shart",
            "Harf-e-Nida"
        ],
        correctAnswer: 0,
        explanation: "'Aur' harf-e-atf hai."
    },
    {
        id: 36,
        category: "قواعد - حرف",
        question: "Harf ki taqseem kis bunyad par hoti hai?",
        options: [
            "Maani ke aitbaar se",
            "Lafz ke aitbaar se",
            "Harakat ke aitbaar se",
            "Jumle mein jagah ke aitbaar se"
        ],
        correctAnswer: 0,
        explanation: "Harf ki taqseem maani ke aitbaar se hoti hai."

    // تحریری کام - Writing Section - Questions 37-40
    },
    {
        id: 37,
        category: "تحریری کام - درخواست",
        question: "Darkhwast kis cheez ke liye likhi jati hai?",
        options: [
            "Information ke liye",
            "Permission ke liye",
            "Complaint ke liye",
            "All of these"
        ],
        correctAnswer: 3,
        explanation: "Darkhwast information, permission, complaint waghera ke liye likhi jati hai."
    },
    {
        id: 38,
        category: "تحریری کام - خط",
        question: "Khat ki aam taqseem kya hai?",
        options: [
            "Dosti aur Rishtedari",
            "Shikayat aur Darkhwast",
            "Rasmi aur Ghair Rasmi",
            "Tijarti aur Shakhsi"
        ],
        correctAnswer: 2,
        explanation: "Khat ki aam taqseem Rasmi aur Ghair Rasmi hai."
    },
    {
        id: 39,
        category: "تحریری کام - مضمون",
        question: "Mazmoon likhne ka aam tareeqa kya hai?",
        options: [
            "Pehla muqaddama, phir asal mazmoon, phir khatma",
            "Seedha asal mazmoon likhna",
            "Sirf sawal jawab",
            "Khawateen ke liye alag tareeqa"
        ],
        correctAnswer: 0,
        explanation: "Mazmoon likhne ka aam tareeqa hai: Pehla muqaddama, phir asal mazmoon, phir khatma."
    },
    {
        id: 40,
        category: "تحریری کام - غیر درسی اقتباس",
        question: "Ghair Darsi Iqtibas se kya murad hai?",
        options: [
            "Jo kitaab mein nahi hai",
            "Jo course se bahar hai",
            "Jo khud se likha gaya hai",
            "Jo dusri zaban se tarjuma hai"
        ],
        correctAnswer: 1,
        explanation: "Ghair Darsi Iqtibas se murad hai course se bahar ka koi hissa jo parhaya ja raha ho."
    }
];

// Urdu translations for bilingual mode
const urduTranslations = {
    1: {
        question: "نیا قانون کس نے لکھا ہے؟",
        options: [
            "سعادت حسن منٹو",
            "پطرس بخاری",
            "کرشن چندر",
            "عصمت چغتائی"
        ],
        explanation: "نیا قانون سعادت حسن منٹو نے لکھا ہے۔ یہ منٹو کا مشہور افسانہ ہے۔"
    },
    2: {
        question: "نیا قانون افسانے میں کون سا قانون نیا آیا تھا؟",
        options: [
            "ٹریفک قانون",
            "شراب بندی کا قانون",
            "تعلیم کا قانون",
            "ٹیکس کا قانون"
        ],
        explanation: "نیا قانون افسانے میں شراب بندی کا قانون نیا آیا تھا۔"
    },
    3: {
        question: "سر سید کا بچپن کس نے لکھا ہے؟",
        options: [
            "الطاف حسین حالی",
            "محمد حسین آزاد",
            "سر سید احمد خاں",
            "نذیر احمد"
        ],
        explanation: "سر سید کا بچپن الطاف حسین حالی نے لکھا ہے۔"
    },
    4: {
        question: "سر سید کی پہلی استانی کا نام کیا تھا؟",
        options: [
            "مولوی حمید الدین",
            "مولوی غلام حسین",
            "مولوی محمد ابراہیم",
            "مولوی مبارک علی"
        ],
        explanation: "سر سید کی پہلی استانی مولوی غلام حسین تھیں۔"
    },
    5: {
        question: "آزمایش کس نے لکھی ہے؟",
        options: [
            "محمد مجیب",
            "قرۃ العین حیدر",
            "عبداللہ حسین",
            "شوکت صدیقی"
        ],
        explanation: "آزمایش محمد مجیب نے لکھی ہے۔"
    },
    6: {
        question: "آزمایش سبق کا مرکزی خیال کیا ہے؟",
        options: [
            "تعلیم کی اہمیت",
            "زندگی کی آزمائشیں",
            "سائنس کی ترقی",
            "وطن سے محبت"
        ],
        explanation: "آزمایش سبق کا مرکزی خیال زندگی کی آزمائشیں اور انسان کا امتحان ہے۔"
    },
    7: {
        question: "عورتوں کے حقوق کس نے لکھے ہیں؟",
        options: [
            "سر سید احمد خاں",
            "علامہ اقبال",
            "مولانا آزاد",
            "جوش ملیح آبادی"
        ],
        explanation: "عورتوں کے حقوق سر سید احمد خاں نے لکھے ہیں۔"
    },
    8: {
        question: "سر سید نے عورتوں کے لیے کون سی چیز ضروری بتائی؟",
        options: [
            "پردہ",
            "تعلیم",
            "شادی",
            "کام"
        ],
        explanation: "سر سید نے عورتوں کے لیے تعلیم کو سب سے زیادہ ضروری بتایا۔"
    },
    9: {
        question: "مخلوط زبان کس نے لکھی ہے؟",
        options: [
            "مولوی عبد الحق",
            "مولانا شبلی نعمانی",
            "ڈاکٹر وحید قریشی",
            "فرمان فتح پوری"
        ],
        explanation: "مخلوط زبان مولوی عبد الحق نے لکھی ہے۔"
    },
    10: {
        question: "مخلوط زبان سبق میں کس چیز پر زور دیا گیا ہے؟",
        options: [
            "انگریزی زبان کی اہمیت",
            "اردو زبان کی ترقی",
            "ہندی زبان کی خوبصورتی",
            "زبانوں کی ملاوٹ"
        ],
        explanation: "مخلوط زبان سبق میں زبانوں کی ملاوٹ اور اردو کی ترقی پر زور دیا گیا ہے۔"
    },
    11: {
        question: "ماحول بچائیے کس مضمون کا حصہ ہے؟",
        options: [
            "سائنس کے مضامین",
            "سماجی مسائل کے مضامین",
            "ادب کے مضامین",
            "تاریخ کے مضامین"
        ],
        explanation: "ماحول بچائیے سماجی مسائل کے مضامین میں آتا ہے۔"
    },
    12: {
        question: "ماحول کو بچانے کے لیے سب سے اہم کام کیا ہے؟",
        options: [
            "فیکٹریاں بند کرنا",
            "کاریں بند کرنا",
            "شجرکاری",
            "صفائی"
        ],
        explanation: "ماحول کو بچانے کے لیے شجرکاری سب سے اہم کام ہے۔"
    },
    13: {
        question: "لائی حیات آئے کس شاعر کی غزل ہے؟",
        options: [
            "شیخ محمد ابراہیم ذوق",
            "مرزا غالب",
            "میر تقی میر",
            "بہادر شاہ ظفر"
        ],
        explanation: "لائی حیات آئے شیخ محمد ابراہیم ذوق کی غزل ہے۔"
    },
    14: {
        question: "ذوق کس بادشاہ کے استادی شاعر تھے؟",
        options: [
            "شاہ عالم",
            "اکبر شاہ دوم",
            "بہادر شاہ ظفر",
            "عالمگیر دوم"
        ],
        explanation: "ذوق بہادر شاہ ظفر کے استادی شاعر تھے۔"
    },
    15: {
        question: "ڈھونڈو گے اگر ملکوں ملکوں کس شاعر کی غزل ہے؟",
        options: [
            "شاد عظیم آبادی",
            "فراق گورکھپوری",
            "جگر مرادآبادی",
            "حسرت موہانی"
        ],
        explanation: "ڈھونڈو گے اگر ملکوں ملکوں شاد عظیم آبادی کی غزل ہے۔"
    },
    16: {
        question: "اس غزل کا مرکزی خیال کیا ہے؟",
        options: [
            "وطن کی تلاش",
            "محبت کی تلاش",
            "خدا کی تلاش",
            "حقیقت کی تلاش"
        ],
        explanation: "اس غزل کا مرکزی خیال حقیقت اور انسانیت کی تلاش ہے۔"
    },
    17: {
        question: "دنیا میری بلا جانے کس شاعر کی غزل ہے؟",
        options: [
            "فانی بدایونی",
            "جوش ملیح آبادی",
            "نظیر اکبرآبادی",
            "داغ دہلوی"
        ],
        explanation: "دنیا میری بلا جانے فانی بدایونی کی غزل ہے۔"
    },
    18: {
        question: "فانی بدایونی کی شاعری کا خاص رنگ کیا ہے؟",
        options: [
            "محبت",
            "رندانہ",
            "دینی",
            "وطن پرستی"
        ],
        explanation: "فانی بدایونی کی شاعری کا خاص رنگ رندانہ اور زندگی سے بیزاری کا ہے۔"
    },
    19: {
        question: "ادب نے دل کے تقاضے کس شاعر کی غزل ہے؟",
        options: [
            "یاس یگانہ چنگیزی",
            "مجاز لکھنوی",
            "ساحر لدھیانوی",
            "فیض احمد فیض"
        ],
        explanation: "ادب نے دل کے تقاضے یاس یگانہ چنگیزی کی غزل ہے۔"
    },
    20: {
        question: "یاس یگانہ چنگیزی کا اصل نام کیا تھا؟",
        options: [
            "مرزا یاس",
            "احمد حسین",
            "اصغر حسین",
            "جاوید حسین"
        ],
        explanation: "یاس یگانہ چنگیزی کا اصل نام اصغر حسین تھا۔"
    },
    21: {
        question: "جلوہء دربارِ دہلی کس شاعر کی نظم ہے؟",
        options: [
            "اکبر الہ آبادی",
            "حفیظ جالندھری",
            "الطاف حسین حالی",
            "محمد اقبال"
        ],
        explanation: "جلوہء دربارِ دہلی اکبر الہ آبادی کی نظم ہے۔"
    },
    22: {
        question: "اکبر الہ آبادی کس انداز کے شاعر تھے؟",
        options: [
            "رومانٹک",
            "طنزیہ",
            "دینی",
            "وطن پرستانہ"
        ],
        explanation: "اکبر الہ آبادی طنزیہ (طنز و مزاح) انداز کے شاعر تھے۔"
    },
    23: {
        question: "حقیقت حسن کس شاعر کی نظم ہے؟",
        options: [
            "ڈاکٹر علامہ اقبال",
            "مرزا غالب",
            "فیض احمد فیض",
            "احمد ندیم قاسمی"
        ],
        explanation: "حقیقت حسن ڈاکٹر علامہ اقبال کی نظم ہے۔"
    },
    24: {
        question: "اقبال نے اصل حسن کیا بتایا ہے؟",
        options: [
            "چہرہ",
            "آنکھیں",
            "اخلاق",
            "تعلیم"
        ],
        explanation: "اقبال نے اصل حسن اخلاق اور باطنیت کو بتایا ہے۔"
    },
    25: {
        question: "او دیس سے آنے والے کس شاعر کی نظم ہے؟",
        options: [
            "اختر شیرانی",
            "ساحر لدھیانوی",
            "مجروح سلطانپوری",
            "کیفی اعظمی"
        ],
        explanation: "او دیس سے آنے والے اختر شیرانی کی نظم ہے۔"
    },
    26: {
        question: "اختر شیرانی کس جماعت کے شاعر تھے؟",
        options: [
            "حلقہ ارباب ذوق",
            "بزم اقبال",
            "انجمن ترقی پسند",
            "حلقہ ارباب سخن"
        ],
        explanation: "اختر شیرانی حلقہ ارباب سخن کے شاعر تھے۔"
    },
    27: {
        question: "میر ببر علی انیس کس فن سے تعلق رکھتے تھے؟",
        options: [
            "غزل",
            "مرثیہ",
            "قصیدہ",
            "مثنوی"
        ],
        explanation: "میر ببر علی انیس مرثیہ نگاری کے فن سے تعلق رکھتے تھے۔"
    },
    28: {
        question: "انیس کس شہر سے تعلق رکھتے تھے؟",
        options: [
            "لکھنؤ",
            "دہلی",
            "فیض آباد",
            "حیدرآباد"
        ],
        explanation: "انیس لکھنؤ سے تعلق رکھتے تھے۔"
    },
    29: {
        question: "تیلوک چند محروم کس زبان کے شاعر تھے؟",
        options: [
            "اردو",
            "فارسی",
            "ہندی",
            "پنجابی"
        ],
        explanation: "تیلوک چند محروم اردو زبان کے شاعر تھے۔"
    },
    30: {
        question: "محروم کا خاص مضمون کیا تھا؟",
        options: [
            "محبت",
            "وطن پرستی",
            "انسانیت",
            "مذہبی"
        ],
        explanation: "محروم کا خاص مضمون مذہبی اور روحانیت تھا۔"
    },
    31: {
        question: "'کتاب' کیا ہے؟",
        options: [
            "اسم",
            "صفت",
            "فعل",
            "ضمیر"
        ],
        explanation: "'کتاب' اسم ہے۔"
    },
    32: {
        question: "اسم کی کتنی اقسام ہیں؟",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        explanation: "اسم کی دو اقسام ہیں: اسم ذات اور اسم صفت۔"
    },
    33: {
        question: "'وہ پڑھتا ہے' میں 'پڑھتا' کیا ہے؟",
        options: [
            "اسم",
            "فعل حال",
            "فعل ماضی",
            "فعل مستقبل"
        ],
        explanation: "'پڑھتا' فعل حال ہے۔"
    },
    34: {
        question: "فعل کے تینوں اصول کیا ہیں؟",
        options: [
            "ماضی، حال، مستقبل",
            "ذات، صفت، ضمیر",
            "مفرد، تذکیر، تانیث",
            "معرفہ، نکرہ، مشرح"
        ],
        explanation: "فعل کے تین اصول ہیں: ماضی، حال، مستقبل۔"
    },
    35: {
        question: "'اور' کیا ہے؟",
        options: [
            "حرف عطف",
            "حرف جر",
            "حرف شرط",
            "حرف ندا"
        ],
        explanation: "'اور' حرف عطف ہے۔"
    },
    36: {
        question: "حرف کی تقسیم کس بنیاد پر ہوتی ہے؟",
        options: [
            "معنی کے اعتبار سے",
            "لفظ کے اعتبار سے",
            "حرکت کے اعتبار سے",
            "جملے میں جگہ کے اعتبار سے"
        ],
        explanation: "حرف کی تقسیم معنی کے اعتبار سے ہوتی ہے۔"
    },
    37: {
        question: "درخواست کس چیز کے لیے لکھی جاتی ہے؟",
        options: [
            "معلومات کے لیے",
            "اجازت کے لیے",
            "شکایت کے لیے",
            "ان سب کے لیے"
        ],
        explanation: "درخواست معلومات، اجازت، شکایت وغیرہ کے لیے لکھی جاتی ہے۔"
    },
    38: {
        question: "خط کی عام تقسیم کیا ہے؟",
        options: [
            "دوستی اور رشتہ داری",
            "شکایت اور درخواست",
            "رسمی اور غیر رسمی",
            "تجارتی اور ذاتی"
        ],
        explanation: "خط کی عام تقسیم رسمی اور غیر رسمی ہے۔"
    },
    39: {
        question: "مضمون لکھنے کا عام طریقہ کیا ہے؟",
        options: [
            "پہلا مقدمہ، پھر اصل مضمون، پھر خاتمہ",
            "سیدھا اصل مضمون لکھنا",
            "صرف سوال جواب",
            "خواتین کے لیے الگ طریقہ"
        ],
        explanation: "مضمون لکھنے کا عام طریقہ ہے: پہلا مقدمہ، پھر اصل مضمون، پھر خاتمہ۔"
    },
    40: {
        question: "غیر درسی اقتباس سے کیا مراد ہے؟",
        options: [
            "جو کتاب میں نہیں ہے",
            "جو کورس سے باہر ہے",
            "جو خود سے لکھا گیا ہے",
            "جو دوسری زبان سے ترجمہ ہے"
        ],
        explanation: "غیر درسی اقتباس سے مراد ہے کورس سے باہر کا کوئی حصہ جو پڑھایا جا رہا ہو۔"
    }
};

// Function to get Urdu content
function getUrduContent(questionId) {
    return urduTranslations[questionId] || null;
}