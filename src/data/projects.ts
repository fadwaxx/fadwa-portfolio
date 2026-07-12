export const projects = [
    {
      id: 1,
      slug: 'foah-alkabsah',
      status: 'completed',
      featured: true,
  
      title: {
        ar: 'موقع فوح الكبسة',
        en: 'Foah Al Kabsah Restaurant',
      },
  
      type: {
        ar: 'نظام مطعم وطلبات إلكترونية',
        en: 'Restaurant Ordering System',
      },
  
      description: {
        ar: 'منصة رقمية متكاملة للمطعم تشمل منيو إلكترونيًا، وسلة طلبات، واستقبال الطلبات، ولوحة تحكم لإدارة الأصناف والطلبات.',
        en: 'A complete restaurant platform featuring a digital menu, shopping cart, online ordering, and an admin dashboard.',
      },
  
      client: {
        ar: 'مطعم فوح الكبسة',
        en: 'Foah Al Kabsah Restaurant',
      },
  
      role: {
        ar: 'تصميم وتطوير المشروع كاملًا، من الواجهات الأمامية إلى النظام الخلفي وقاعدة البيانات.',
        en: 'End-to-end project design and development, including front-end, back-end, and database integration.',
      },
  
      roleShort: {
        ar: 'مطورة فل ستاك',
        en: 'Full-Stack Developer',
      },
  
      duration: {
        ar: 'مشروع متكامل متعدد المراحل',
        en: 'Multi-stage full project',
      },
  
      year: '2026',
  
      challenge: {
        ar: 'كان المطعم يحتاج إلى تجربة طلب رقمية واضحة وسهلة للعملاء، مع وسيلة مركزية لإدارة الأصناف والأسعار والطلبات بدلًا من الاعتماد على الطرق اليدوية.',
        en: 'The restaurant needed a simple digital ordering experience for customers and one central place to manage items, prices, and incoming orders.',
      },
  
      solution: {
        ar: 'طورت نظامًا يربط واجهة العميل بلوحة تحكم خاصة بالمطعم، مع قاعدة بيانات لحفظ الأصناف والطلبات وتحديثها، وواجهة متجاوبة تعمل على مختلف الأجهزة.',
        en: 'I developed a system connecting the customer-facing website to a private admin dashboard, supported by a database for menu and order management.',
      },
  
      features: {
        ar: [
          'منيو رقمي متجاوب',
          'تصنيف الأصناف حسب الأقسام',
          'سلة طلبات',
          'إرسال الطلبات أونلاين',
          'لوحة تحكم للمطعم',
          'إضافة وتعديل الأصناف',
          'متابعة حالات الطلبات',
          'ربط قاعدة بيانات MongoDB',
        ],
  
        en: [
          'Responsive digital menu',
          'Category-based menu filtering',
          'Shopping cart',
          'Online ordering',
          'Restaurant admin dashboard',
          'Menu item management',
          'Order status tracking',
          'MongoDB database integration',
        ],
      },
  
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'REST API',
      ],
  
      cover: "/projects/foah/cover.jpeg",

      video: "/projects/foah/preview.mp4",
      
      gallery: [
        "/projects/foah/home.jpeg",
        "/projects/foah/menu.jpeg",
        "/projects/foah/cart.jpeg",
        "/projects/foah/admin.jpeg",
        "/projects/foah/orders.jpeg",
        "/projects/foah/mum.jpeg",
      ],
  
      demo: 'https://foah-alkabsah.onrender.com',
      github: '',
    },
  
    {
      id: 2,
      slug: 'quran-platform',
      status: 'coming',
      featured: false,
  
      title: {
        ar: 'منصة القرآن',
        en: 'Quran Platform',
      },
  
      type: {
        ar: 'منصة ويب قيد التطوير',
        en: 'Web Platform in Development',
      },
  
      description: {
        ar: 'منصة رقمية تهدف إلى تقديم محتوى القرآن وقصصه بطريقة حديثة ومنظمة وسهلة الاستخدام.',
        en: 'A modern digital platform for presenting Quran-related content in an organized and accessible experience.',
      },
  
      client: {
        ar: 'مشروع شخصي',
        en: 'Personal Project',
      },
  
      role: {
        ar: 'تصميم وتطوير المنصة وتجربة المستخدم والنظام التقني.',
        en: 'Platform design, development, user experience, and technical architecture.',
      },
  
      roleShort: {
        ar: 'مطورة فل ستاك',
        en: 'Full-Stack Developer',
      },
  
      duration: {
        ar: 'قيد التطوير',
        en: 'In Development',
      },
  
      year: '2026',
  
      challenge: {
        ar: 'تنظيم المحتوى الديني بصورة واضحة مع الحفاظ على سهولة الاستخدام ودقة عرض المعلومات.',
        en: 'Organizing religious content clearly while maintaining usability and accurate presentation.',
      },
  
      solution: {
        ar: 'تطوير تجربة منظمة تعتمد على أقسام واضحة، وبحث، وتصميم متجاوب يناسب مختلف الأجهزة.',
        en: 'Creating an organized experience with clear sections, search functionality, and responsive design.',
      },
  
      features: {
        ar: [
          'تصميم متجاوب',
          'أقسام منظمة للمحتوى',
          'تجربة قراءة واضحة',
          'بحث داخل المحتوى',
        ],
  
        en: [
          'Responsive design',
          'Organized content sections',
          'Clear reading experience',
          'Content search',
        ],
      },
  
      technologies: ['React', 'TypeScript', 'Node.js'],
  
      cover: "/projects/foah/cover.jpeg",
      gallery: [],
  
      demo: '',
      github: '',
    },
  ];