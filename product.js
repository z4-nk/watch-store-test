const products = {
    1: {
        name: "Classic Watch",
        price: "$299",
        image: "e34e0a078e1384137a2c8ecf9c0f105b.jpg",
        description: "ساعة كلاسيكية أنيقة تجمع بين التصميم البسيط والأداء الدقيق، مثالية للارتداء اليومي مع لمسة فاخرة.",
        features: [
            "حماية سطحية مقاومة للخدش",
            "حركة دقيقة ومتانة عالية",
            "تصميم مناسب للملابس اليومية والشرعية"
        ],
        details: {
            material: "ستيل مقاوم للصدأ",
            movement: "Quartz Movement",
            caseSize: "38 mm",
            waterResistance: "5 ATM",
            strap: "جلد صناعي أنيق",
            guarantee: "سنة ضمان"
        }
    },
    2: {
        name: "Luxury Watch",
        price: "$399",
        image: "3ae7ddfe638c1475310f8c0a95a82fab.jpg",
        description: "ساعة فاخرة بتفاصيل متقنة ومظهر راقٍ، مناسبة للأحداث الرسمية والملابس الكلاسيكية الحديثة.",
        features: [
            "واجهة أنيقة بتقاطع ذهبي دقيق",
            "هيكل متوازن ومريح في الاستخدام الطويل",
            "مناسبة للارتداء الرسمي والمناسبات العائلية"
        ],
        details: {
            material: "ستيل مطلي بالذهب",
            movement: "Automatic Movement",
            caseSize: "40 mm",
            waterResistance: "10 ATM",
            strap: "جلد فخم",
            guarantee: "سنتان ضمان"
        }
    },
    3: {
        name: "Elite Watch",
        price: "$499",
        image: "5a1433e70d7cc9475ffb929c3b0cefd7.jpg",
        description: "تصميم عصري ومواد عالية الجودة، تمنحك راحة وثقة في كل يوم مع لمسة احترافية أنيقة.",
        features: [
            "هيكل خفيف مع جوهرة رقيقة في الإطار",
            "مناسبة للمكاتب والزيارات الرسمية",
            "مظهر عصري يوازن بين الأناقة والعملية"
        ],
        details: {
            material: "ستايل 316L",
            movement: "Quartz Chronograph",
            caseSize: "42 mm",
            waterResistance: "10 ATM",
            strap: "ستيل متين",
            guarantee: "سنتان ضمان"
        }
    },
    4: {
        name: "Royal Watch",
        price: "$549",
        image: "43f5c338416e8f0f5cf5a34cd9b1b5d8.jpg",
        description: "ساعة ملكية بفخامة متوازنة، مصممة لمن يحب اللمسة الراقية والهوية المميزة في كل مناسبة.",
        features: [
            "تصميم ملكي بتأكيدات ذهبية عميقة",
            "أداء مستقر في الاستخدام اليومي",
            "تجربة ارتداء مريحة للفترات الطويلة"
        ],
        details: {
            material: "ستيل ذهبي فاخر",
            movement: "Mechanical Movement",
            caseSize: "41 mm",
            waterResistance: "8 ATM",
            strap: "جلد ذهبي فاخر",
            guarantee: "سنتان ضمان"
        }
    },
    5: {
        name: "Titan Watch",
        price: "$649",
        image: "6a24c3da002c0fb92766e7fa7d1f516e.jpg",
        description: "ساعة تيتان تجمع بين الحِدة التقنية واللمسة الفاخرة، ومناسبة لمن يبحث عن أناقة عملية في كل مناسبة.",
        features: [
            "واجهات متينة وطابع مهني",
            "مناسب للأنشطة النشطة والزي الرسمي",
            "جودة بناء عالية للارتداء المستمر"
        ],
        details: {
            material: "تيتانيوم خفيف الوزن",
            movement: "Automatic Movement",
            caseSize: "43 mm",
            waterResistance: "20 ATM",
            strap: "تيتانيوم + جلد",
            guarantee: "3 سنوات ضمان"
        }
    },
    6: {
        name: "Eclipse Watch",
        price: "$799",
        image: "501cacc31da7a741e46b3017da475d6c.jpg",
        description: "ساعة Eclipse بتصميم فاخر يتألق في الليل، وبتفاصيل دقيقة تمنحك مظهراً مميزاً في كل لحظة.",
        features: [
            "لوحة داكنة تضيف طابعًا فخمًا",
            "نابض دقيق ومرونة في الأداء",
            "مثالية للملابس الليلية والزي الاحتفالي"
        ],
        details: {
            material: "كروم مثالِية + زجاج مقاوم",
            movement: "Swiss Quartz",
            caseSize: "44 mm",
            waterResistance: "15 ATM",
            strap: "جلد أسود فاخر",
            guarantee: "3 سنوات ضمان"
        }
    },
    7: {
        name: "Monarch Watch",
        price: "$899",
        image: "3e07697c295a2c3eb29b719ed6dc7e00.jpg",
        description: "ساعة Monarch تتميز بمزيج أنيق بين الفخامة والهوية المميزة، وهي الخيار المثالي للمهنيين والملوك في حياتهم اليومية.",
        features: [
            "تصميم قوي وفخم بتفاصيل دقيقة",
            "مقاومة عالية للاستخدام اليومي",
            "مواءمة ممتازة مع الملابس الرسمية والأنشطة الذكية"
        ],
        details: {
            material: "ستيل كربوني فاخر",
            movement: "Automatic Chronograph",
            caseSize: "45 mm",
            waterResistance: "20 ATM",
            strap: "جلد أسود فاخر",
            guarantee: "3 سنوات ضمان"
        }
    },
    8: {
        name: "Aurora Watch",
        price: "$999",
        image: "bfd634af2a1ab20782a03a06f57166ba.jpg",
        description: "ساعة Aurora ذات اللمسة الفاخرة والمشرقة، صممت لتبرز حضورك في كل مناسبة وتضيف لمسة دافئة للستايل الخاص بك.",
        features: [
            "تصميم رائع يلائم الزي الاحتفالي",
            "ألوان هادئة تضفي أناقة متوازنة",
            "تجهيزات عالية الجودة ومتانة ممتازة"
        ],
        details: {
            material: "الذهب الفاخر + ستيل",
            movement: "Mechanical Tourbillon",
            caseSize: "42 mm",
            waterResistance: "10 ATM",
            strap: "جلد ناعم فاخر",
            guarantee: "5 سنوات ضمان"
        }
    },
    9: {
        name: "Heritage Watch",
        price: "$1099",
        image: "75337d9a3925924c82c2baf44a0ca012.jpg",
        description: "ساعة Heritage تجمع بين الفخامة الكلاسيكية والتقنية المتطورة، لتمنحك هوية ساكنة ومميزة ومظهرًا فاخرًا في كل موقف.",
        features: [
            "تصميم تراثي مع لمسة حديثة",
            "حركة دقيقة ومؤثرات فاخرة ومتمايزة",
            "أداء طويل الأمد مع مظهر فاخر لا يفقد جاذبيته"
        ],
        details: {
            material: "ستيل ذهبي + زجاج مقاوم للضرب",
            movement: "Swiss Automatic",
            caseSize: "41 mm",
            waterResistance: "12 ATM",
            strap: "جلد رقيق فاخر",
            guarantee: "5 سنوات ضمان"
        }
    }
};

const productId = Number(new URLSearchParams(window.location.search).get('id')) || 1;
const product = products[productId] || products[1];

const productImage = document.getElementById('productimage');
const productName = document.getElementById('productname');
const productPrice = document.getElementById('productprice');
const productDescription = document.getElementById('productdescription');
const productFeatures = document.getElementById('productfeatures');

const detailFields = {
    material: document.getElementById('spec-material'),
    movement: document.getElementById('spec-movement'),
    caseSize: document.getElementById('spec-case'),
    waterResistance: document.getElementById('spec-water'),
    strap: document.getElementById('spec-strap'),
    guarantee: document.getElementById('spec-guarantee')
};

productImage.src = product.image;
productImage.alt = product.name;
productName.textContent = product.name;
productPrice.textContent = product.price;
productDescription.textContent = product.description;

productFeatures.innerHTML = product.features.map((item) => `<li>${item}</li>`).join('');

Object.entries(product.details).forEach(([key, value]) => {
    if (detailFields[key]) {
        detailFields[key].textContent = value;
    }
});

const buyButton = document.querySelector('.buy-button');
if (buyButton) {
    buyButton.addEventListener('click', () => {
        localStorage.setItem('maz_watch_order_temp', JSON.stringify([
            {
                id: String(productId),
                name: product.name,
                price: Number(product.price.replace(/[^0-9.]/g, ''))
            }
        ]));
        window.location.href = 'order.html?product=' + productId;
    });
}