/**
 * AZURIA — Poissons & Saveurs
 * Digital QR Menu Engine
 */

const RESTAURANT_CONFIG = {
  name: "AZURIA",
  whatsapp: "212600000000",
  phone: "+212 6 00 00 00 00",
  address: "Corniche, Casablanca, Maroc",
  hours: "Tous les jours : 12h00 – 00h00",
  mapUrl: "https://maps.google.com/?q=Corniche+Casablanca+Morocco"
};

const MENU_DATA = [
  {
    id: 1,
    name: "Huîtres de l’Atlantique",
    nameAr: "محار الأطلسي الفاخر",
    category: "entrees",
    categoryAr: "المقبلات",
    description: "Huîtres fraîches servies sur glace avec citron.",
    descriptionAr: "محار طازج يقدم على الثلج المجروش مع شرائح الليمون الحامض.",
    price: 75,
    image: "assets/images/huitres-atlantique.webp",
    popular: false,
    available: true
  },
  {
    id: 2,
    name: "Tartare de thon",
    nameAr: "تارتار التونة الطازجة",
    category: "entrees",
    categoryAr: "المقبلات",
    description: "Thon frais, avocat, agrumes et huile d’olive.",
    descriptionAr: "تونة حمراء طازجة، أفوكادو ناضج، حمضيات وزيت زيتون بكر ممتاز.",
    price: 70,
    image: "assets/images/tartare-thon.webp",
    popular: false,
    available: true
  },
  {
    id: 3,
    name: "Soupe de poisson",
    nameAr: "حساء الأسماك التقليدي",
    category: "entrees",
    categoryAr: "المقبلات",
    description: "Soupe maison aux poissons de roche et épices douces.",
    descriptionAr: "شوربة سمك منزلية بأسماك الصخور والتوابل الأطلسية العطرية.",
    price: 45,
    image: "assets/images/soupe-poisson.webp",
    popular: false,
    available: true
  },
  {
    id: 4,
    name: "Bar rôti aux herbes",
    nameAr: "سمك القاروص المشوي بالأعشاب",
    category: "poissons",
    categoryAr: "الأسماك",
    description: "Bar entier rôti, herbes fraîches et légumes du marché.",
    descriptionAr: "سمك قاروص كامل محمر بالفرن مع الأعشاب وخضار الموسم.",
    price: 120,
    image: "assets/images/bar-roti-herbes.webp",
    popular: true,
    available: true
  },
  {
    id: 5,
    name: "Paella Azuria",
    nameAr: "بايلا أزوريا الملكية",
    category: "poissons",
    categoryAr: "الأسماك",
    description: "Riz safrané, crevettes, calamars et moules.",
    descriptionAr: "أرز الزعفران الأصيل مع الروبيان، الكلمار، وبلح البحر الطازج.",
    price: 95,
    image: "assets/images/paella-azuria.webp",
    popular: true,
    available: true
  },
  {
    id: 6,
    name: "Sole meunière",
    nameAr: "سمك موسى مونيير",
    category: "poissons",
    categoryAr: "الأسماك",
    description: "Sole poêlée, beurre citronné et légumes grillés.",
    descriptionAr: "سمك موسى مقلي على الطريقة الفرنسية بصلصة الزبدة والليمون.",
    price: 110,
    image: "assets/images/sole-meuniere.webp",
    popular: false,
    available: true
  },
  {
    id: 7,
    name: "Sardines à la chermoula",
    nameAr: "سردين مشوي بالشرمولة",
    category: "poissons",
    categoryAr: "الأسماك",
    description: "Sardines marinées aux herbes, ail et épices marocaines.",
    descriptionAr: "سردين الأطلسي متبل بخلطة الشرمولة المغربية التقليدية والليمون.",
    price: 60,
    image: "assets/images/sardines-chermoula.webp",
    popular: false,
    available: true
  },
  {
    id: 8,
    name: "Calamars grillés",
    nameAr: "كلمار طري مشوي",
    category: "grillades",
    categoryAr: "المشويات",
    description: "Calamars grillés, ail, persil et citron frais.",
    descriptionAr: "حلقات وأطراف كلمار مشوية على الفحم مع الثوم، البقدونس وزيت الزيتون.",
    price: 85,
    image: "assets/images/calamars-grilles.webp",
    popular: true,
    available: true
  },
  {
    id: 9,
    name: "Brochettes de crevettes",
    nameAr: "شوايات روبيان جامبو",
    category: "grillades",
    categoryAr: "المشويات",
    description: "Crevettes marinées, légumes et sauce maison.",
    descriptionAr: "أسياخ روبيان متبلة مشوية مع الفلفل المشكل وصلصة خاصة.",
    price: 90,
    image: "assets/images/brochettes-crevettes.webp",
    popular: false,
    available: true
  },
  {
    id: 10,
    name: "Plateau Azuria",
    nameAr: "طبق أزوريا المشكل الفاخر",
    category: "grillades",
    categoryAr: "المشويات",
    description: "Sélection de poissons, crevettes, calamars et coquillages.",
    descriptionAr: "تشكيلة كبرى غنية من الأسماك المشوية، الروبيان، الكلمار والصدفيات.",
    price: 180,
    image: "assets/images/plateau-azuria.webp",
    popular: true,
    available: true
  },
  {
    id: 11,
    name: "Salade marine",
    nameAr: "سلطة بحرية منعشة",
    category: "salades",
    categoryAr: "السلطات",
    description: "Crevettes, moules, salade fraîche et vinaigrette citronnée.",
    descriptionAr: "روبيان، بلح البحر، خس مقرمش وصلصة خل الليمون اللذيذة.",
    price: 65,
    image: "assets/images/salade-marine.webp",
    popular: false,
    available: true
  },
  {
    id: 12,
    name: "Salade avocat crevettes",
    nameAr: "سلطة الأفوكادو والروبيان",
    category: "salades",
    categoryAr: "السلطات",
    description: "Avocat frais, crevettes, tomate et sauce légère.",
    descriptionAr: "أفوكادو طازج، روبيان وردي، طماطم كرزية وصلصة خفيفة مميزة.",
    price: 60,
    image: "assets/images/salade-avocat-crevettes.webp",
    popular: false,
    available: true
  },
  {
    id: 13,
    name: "Salade marocaine",
    nameAr: "سلطة مغربية بلدية",
    category: "salades",
    categoryAr: "السلطات",
    description: "Tomates, poivrons, concombre, oignon et herbes fraîches.",
    descriptionAr: "طماطم، فلفل حلو، خيار، بصل ناعم وتتبيلة زيت الزيتون والكمون.",
    price: 35,
    image: "assets/images/salade-marocaine.webp",
    popular: false,
    available: true
  },
  {
    id: 14,
    name: "Fondant au chocolat",
    nameAr: "فوندان الشوكولاتة الذائبة",
    category: "desserts",
    categoryAr: "الحلويات",
    description: "Fondant chaud au chocolat noir et glace vanille.",
    descriptionAr: "كعكة شوكولاتة داكنة ساخنة بقلب ذائب مع مثلجات الفانيليا.",
    price: 45,
    image: "assets/images/fondant-chocolat.webp",
    popular: false,
    available: true
  },
  {
    id: 15,
    name: "Cheesecake au citron",
    nameAr: "تشيز كيك الليمون الأطلسي",
    category: "desserts",
    categoryAr: "الحلويات",
    description: "Cheesecake crémeux au citron frais.",
    descriptionAr: "تشيز كيك ناعم وغني بكريمة الليمون الطبيعية الطازجة.",
    price: 45,
    image: "assets/images/cheesecake-citron.webp",
    popular: false,
    available: true
  },
  {
    id: 16,
    name: "Thé à la menthe",
    nameAr: "شاي مغربي أصيل بالنعناع",
    category: "boissons",
    categoryAr: "المشروبات",
    description: "Thé vert marocain à la menthe fraîche.",
    descriptionAr: "شاي أخضر تقليدي محضر بأوراق النعناع الطازجة يقدم في كأس مزخرف.",
    price: 18,
    image: "assets/images/the-menthe.webp",
    popular: false,
    available: true
  },
  {
    id: 17,
    name: "Jus de citron",
    nameAr: "عصير ليمون منعش",
    category: "boissons",
    categoryAr: "المشروبات",
    description: "Jus de citron frais légèrement sucré.",
    descriptionAr: "عصير ليمون طبيعي معصور طازجاً مع النعناع والثلج.",
    price: 25,
    image: "assets/images/jus-citron.webp",
    popular: false,
    available: true
  }
];

const TRANSLATIONS = {
  fr: {
    nav_home: "Accueil",
    nav_menu: "Menu",
    nav_specialties: "Spécialités",
    nav_contact: "Contact",
    hero_title: "La fraîcheur de l’Atlantique dans votre assiette.",
    hero_cta: "Découvrir le menu",
    search_placeholder: "Rechercher un plat...",
    no_results: "Aucun plat ne correspond à votre recherche.",
    no_favorites: "Vous n’avez encore aucun favori.",
    empty_cart: "Votre panier est vide.",
    cat_populaires: "Populaires",
    cat_entrees: "Entrées",
    cat_poissons: "Poissons",
    cat_grillades: "Grillades",
    cat_salades: "Salades",
    cat_desserts: "Desserts",
    cat_boissons: "Boissons",
    popular_badge: "Populaire",
    add_to_cart: "Ajouter au panier",
    order_whatsapp: "Commander via WhatsApp",
    total: "Total",
    close: "Fermer",
    currency: "DH",
    favorites_title: "Mes Favoris",
    cart_title: "Mon Panier",
    cart_clear: "Vider le panier",
    cart_clear_confirm: "Êtes-vous sûr de vouloir vider votre panier ?",
    dish_available: "Disponible en cuisine",
    dish_unavailable: "Épuisé pour le moment",
    quantity: "Quantité",
    added_toast: "Plat ajouté au panier !",
    fav_added: "Ajouté aux favoris",
    fav_removed: "Retiré des favoris",
    contact_title: "Nous Trouver & Réserver",
    contact_subtitle: "Une expérience culinaire iodée face à l'océan",
    address_label: "Adresse",
    hours_label: "Horaires",
    phone_label: "Téléphone",
    whatsapp_label: "WhatsApp",
    maps_button: "Ouvrir dans Google Maps",
    rights_reserved: "Tous droits réservés.",
    bottom_menu: "Menu",
    bottom_favorites: "Favoris",
    bottom_cart: "Panier",
    specialties_banner: "Spécialités de la Maison",
    specialties_subtitle: "Sélectionnées chaque matin au port de pêche"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_menu: "القائمة",
    nav_specialties: "أطباقنا المميزة",
    nav_contact: "تواصل معنا",
    hero_title: "طراوة الأطلسي ونكهاته في طبقكم.",
    hero_cta: "اكتشف القائمة",
    search_placeholder: "ابحث عن طبق...",
    no_results: "لم يتم العثور على أي طبق.",
    no_favorites: "لم تضف أي طبق إلى المفضلة بعد.",
    empty_cart: "سلتك فارغة حالياً.",
    cat_populaires: "الأكثر طلباً",
    cat_entrees: "المقبلات",
    cat_poissons: "الأسماك",
    cat_grillades: "المشويات",
    cat_salades: "السلطات",
    cat_desserts: "الحلويات",
    cat_boissons: "المشروبات",
    popular_badge: "مميز",
    add_to_cart: "أضف إلى السلة",
    order_whatsapp: "اطلب عبر واتساب",
    total: "المجموع",
    close: "إغلاق",
    currency: "درهم",
    favorites_title: "أطباقي المفضلة",
    cart_title: "سلة الطلبات",
    cart_clear: "تفريغ السلة",
    cart_clear_confirm: "هل أنت متأكد من تفريغ السلة؟",
    dish_available: "متوفر طازج الآن",
    dish_unavailable: "غير متوفر حالياً",
    quantity: "الكمية",
    added_toast: "تمت إضافة الطبق إلى السلة !",
    fav_added: "تمت الإضافة إلى المفضلة",
    fav_removed: "تمت الإزالة من المفضلة",
    contact_title: "موقعنا والحجز",
    contact_subtitle: "تجربة بحرية ساحرة على الواجهة الأطلسية",
    address_label: "العنوان",
    hours_label: "أوقات العمل",
    phone_label: "الهاتف",
    whatsapp_label: "واتساب",
    maps_button: "فتح على خرائط جوجل",
    rights_reserved: "جميع الحقوق محفوظة.",
    bottom_menu: "القائمة",
    bottom_favorites: "المفضلة",
    bottom_cart: "السلة",
    specialties_banner: "أطباقنا الخاصة",
    specialties_subtitle: "أسماك طازجة مختارة صباح كل يوم من الميناء"
  }
};

class AzuriaApp {
  constructor() {
    this.currentLang = localStorage.getItem("azuria_lang") || "fr";
    this.activeCategory = "populaires";
    this.searchQuery = "";
    this.favorites = this.loadFavorites();
    this.cart = this.loadCart();
    this.currentModalDish = null;
    this.modalQuantity = 1;
    this.activeView = "menu"; // "menu" or "favorites"

    this.initElements();
    this.bindEvents();
    this.applyLanguage(this.currentLang);
    this.renderCategories();
    this.renderMenu();
    this.updateBadges();
    this.initScrollEffects();
    this.initIntersectionObserver();
  }

  loadFavorites() {
    try {
      const stored = localStorage.getItem("azuria_favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem("azuria_favorites", JSON.stringify(this.favorites));
    } catch (e) {
      console.warn("Could not save favorites", e);
    }
    this.updateBadges();
  }

  loadCart() {
    try {
      const stored = localStorage.getItem("azuria_cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem("azuria_cart", JSON.stringify(this.cart));
    } catch (e) {
      console.warn("Could not save cart", e);
    }
    this.updateBadges();
  }

  t(key) {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.fr;
    return dict[key] || key;
  }

  initElements() {
    this.menuGrid = document.getElementById("menuGrid");
    this.categoryContainer = document.getElementById("categoryNav");
    this.searchInput = document.getElementById("searchInput");
    this.clearSearchBtn = document.getElementById("clearSearchBtn");
    this.emptyState = document.getElementById("emptyState");
    this.emptyStateText = document.getElementById("emptyStateText");
    this.dishModal = document.getElementById("dishModal");
    this.modalBackdrop = document.getElementById("modalBackdrop");
    this.cartDrawer = document.getElementById("cartDrawer");
    this.cartBackdrop = document.getElementById("cartBackdrop");
    this.mobileDrawer = document.getElementById("mobileDrawer");
    this.mobileDrawerBackdrop = document.getElementById("mobileDrawerBackdrop");
    this.headerEl = document.getElementById("mainHeader");
    this.toastContainer = document.getElementById("toastContainer");

    // Badges
    this.favBadgeBottom = document.getElementById("favBadgeBottom");
    this.favBadgeDrawer = document.getElementById("favBadgeDrawer");
    this.cartBadgeBottom = document.getElementById("cartBadgeBottom");
    this.cartBadgeHeader = document.getElementById("cartBadgeHeader");
    this.cartBadgeDrawer = document.getElementById("cartBadgeDrawer");
  }

  bindEvents() {
    // Language Switcher
    const langSelectBtns = document.querySelectorAll(".js-lang-btn");
    langSelectBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang) this.switchLanguage(lang);
      });
    });

    // Search Input
    if (this.searchInput) {
      this.searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (this.clearSearchBtn) {
          this.clearSearchBtn.style.display = this.searchQuery ? "flex" : "none";
        }
        this.renderMenu();
      });
    }

    if (this.clearSearchBtn) {
      this.clearSearchBtn.addEventListener("click", () => {
        this.searchInput.value = "";
        this.searchQuery = "";
        this.clearSearchBtn.style.display = "none";
        this.renderMenu();
        this.searchInput.focus();
      });
    }

    // Modal Close
    const closeModalBtns = document.querySelectorAll(".js-close-modal");
    closeModalBtns.forEach(btn => {
      btn.addEventListener("click", () => this.closeDishModal());
    });

    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener("click", () => this.closeDishModal());
    }

    // Modal Quantity
    const qtyMinus = document.getElementById("modalQtyMinus");
    const qtyPlus = document.getElementById("modalQtyPlus");
    if (qtyMinus && qtyPlus) {
      qtyMinus.addEventListener("click", () => {
        if (this.modalQuantity > 1) {
          this.modalQuantity--;
          document.getElementById("modalQtyValue").textContent = this.modalQuantity;
        }
      });
      qtyPlus.addEventListener("click", () => {
        if (this.modalQuantity < 99) {
          this.modalQuantity++;
          document.getElementById("modalQtyValue").textContent = this.modalQuantity;
        }
      });
    }

    // Modal Add To Cart
    const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");
    if (modalAddToCartBtn) {
      modalAddToCartBtn.addEventListener("click", () => {
        if (this.currentModalDish) {
          this.addToCart(this.currentModalDish.id, this.modalQuantity);
          this.closeDishModal();
        }
      });
    }

    // Modal Favorite Toggle
    const modalFavBtn = document.getElementById("modalFavBtn");
    if (modalFavBtn) {
      modalFavBtn.addEventListener("click", () => {
        if (this.currentModalDish) {
          this.toggleFavorite(this.currentModalDish.id);
          this.updateModalFavState();
        }
      });
    }

    // Cart Open/Close
    const openCartBtns = document.querySelectorAll(".js-open-cart");
    openCartBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.openCart();
      });
    });

    const closeCartBtns = document.querySelectorAll(".js-close-cart");
    closeCartBtns.forEach(btn => {
      btn.addEventListener("click", () => this.closeCart());
    });

    if (this.cartBackdrop) {
      this.cartBackdrop.addEventListener("click", () => this.closeCart());
    }

    // Clear Cart
    const clearCartBtn = document.getElementById("clearCartBtn");
    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", () => {
        if (this.cart.length === 0) return;
        if (window.confirm(this.t("cart_clear_confirm"))) {
          this.cart = [];
          this.saveCart();
          this.renderCart();
          this.showToast(this.t("empty_cart"));
        }
      });
    }

    // WhatsApp Checkout
    const checkoutWhatsappBtn = document.getElementById("checkoutWhatsappBtn");
    if (checkoutWhatsappBtn) {
      checkoutWhatsappBtn.addEventListener("click", () => this.checkoutWhatsApp());
    }

    // Mobile Drawer Open/Close
    const openDrawerBtn = document.getElementById("hamburgerBtn");
    if (openDrawerBtn) {
      openDrawerBtn.addEventListener("click", () => this.openMobileDrawer());
    }

    const closeDrawerBtns = document.querySelectorAll(".js-close-drawer");
    closeDrawerBtns.forEach(btn => {
      btn.addEventListener("click", () => this.closeMobileDrawer());
    });

    if (this.mobileDrawerBackdrop) {
      this.mobileDrawerBackdrop.addEventListener("click", () => this.closeMobileDrawer());
    }

    // Bottom Navigation
    const navMenuBtn = document.getElementById("bottomNavMenu");
    const navFavBtn = document.getElementById("bottomNavFavorites");
    const navCartBtn = document.getElementById("bottomNavCart");

    if (navMenuBtn) {
      navMenuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.activeView = "menu";
        this.updateBottomNavState("menu");
        this.renderMenu();
        const menuSection = document.getElementById("menuSection");
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    if (navFavBtn) {
      navFavBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.activeView = "favorites";
        this.updateBottomNavState("favorites");
        this.renderMenu();
        const menuSection = document.getElementById("menuSection");
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Keyboard support: Escape closes modals
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeDishModal();
        this.closeCart();
        this.closeMobileDrawer();
      }
    });

    // Populate dynamic restaurant info
    this.populateRestaurantInfo();
  }

  populateRestaurantInfo() {
    const addrEls = document.querySelectorAll(".js-rest-address");
    addrEls.forEach(el => el.textContent = RESTAURANT_CONFIG.address);

    const hoursEls = document.querySelectorAll(".js-rest-hours");
    hoursEls.forEach(el => el.textContent = RESTAURANT_CONFIG.hours);

    const phoneEls = document.querySelectorAll(".js-rest-phone");
    phoneEls.forEach(el => {
      el.textContent = RESTAURANT_CONFIG.phone;
      if (el.tagName === "A") el.href = `tel:${RESTAURANT_CONFIG.whatsapp}`;
    });

    const waEls = document.querySelectorAll(".js-rest-whatsapp");
    waEls.forEach(el => {
      el.textContent = RESTAURANT_CONFIG.phone;
      if (el.tagName === "A") el.href = `https://wa.me/${RESTAURANT_CONFIG.whatsapp}`;
    });

    const mapBtns = document.querySelectorAll(".js-rest-map");
    mapBtns.forEach(el => {
      if (el.tagName === "A") el.href = RESTAURANT_CONFIG.mapUrl;
    });
  }

  switchLanguage(lang) {
    if (this.currentLang === lang) return;
    this.currentLang = lang;
    try {
      localStorage.setItem("azuria_lang", lang);
    } catch {}
    this.applyLanguage(lang);
    this.renderCategories();
    this.renderMenu();
    if (this.cartDrawer && this.cartDrawer.classList.contains("open")) {
      this.renderCart();
    }
  }

  applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    if (lang === "ar") {
      document.body.classList.add("rtl-mode");
    } else {
      document.body.classList.remove("rtl-mode");
    }

    // Update Language Button labels in Header
    const currentLangLabels = document.querySelectorAll(".js-current-lang-text");
    currentLangLabels.forEach(el => {
      el.textContent = lang.toUpperCase();
    });

    // Translate DOM elements marked with data-i18n
    const translatables = document.querySelectorAll("[data-i18n]");
    translatables.forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translation = this.t(key);
      if (translation) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    // Update search placeholder
    if (this.searchInput) {
      this.searchInput.placeholder = this.t("search_placeholder");
    }
  }

  renderCategories() {
    if (!this.categoryContainer) return;

    const categories = [
      { id: "populaires", name: this.t("cat_populaires"), icon: this.getIconSvg("star") },
      { id: "poissons", name: this.t("cat_poissons"), icon: this.getIconSvg("fish") },
      { id: "grillades", name: this.t("cat_grillades"), icon: this.getIconSvg("flame") },
      { id: "entrees", name: this.t("cat_entrees"), icon: this.getIconSvg("shell") },
      { id: "salades", name: this.t("cat_salades"), icon: this.getIconSvg("leaf") },
      { id: "desserts", name: this.t("cat_desserts"), icon: this.getIconSvg("dessert") },
      { id: "boissons", name: this.t("cat_boissons"), icon: this.getIconSvg("drink") }
    ];

    let html = "";
    categories.forEach(cat => {
      const isActive = this.activeCategory === cat.id && this.activeView === "menu";
      html += `
        <button type="button" class="category-pill ${isActive ? "active" : ""}" data-category="${cat.id}">
          <span class="category-icon" aria-hidden="true">${cat.icon}</span>
          <span class="category-name">${cat.name}</span>
        </button>
      `;
    });

    this.categoryContainer.innerHTML = html;

    // Attach click handlers
    const pillButtons = this.categoryContainer.querySelectorAll(".category-pill");
    pillButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        this.activeView = "menu";
        this.updateBottomNavState("menu");
        this.activeCategory = btn.getAttribute("data-category");
        pillButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderMenu();
        // Smooth scroll pill into view horizontally
        btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });
    });
  }

  updateBottomNavState(view) {
    const navMenuBtn = document.getElementById("bottomNavMenu");
    const navFavBtn = document.getElementById("bottomNavFavorites");

    if (navMenuBtn) {
      if (view === "menu") navMenuBtn.classList.add("active");
      else navMenuBtn.classList.remove("active");
    }
    if (navFavBtn) {
      if (view === "favorites") navFavBtn.classList.add("active");
      else navFavBtn.classList.remove("active");
    }
  }

  getFilteredDishes() {
    let list = [...MENU_DATA];

    if (this.activeView === "favorites") {
      list = list.filter(dish => this.favorites.includes(dish.id));
    } else {
      if (this.activeCategory === "populaires") {
        list = list.filter(dish => dish.popular);
      } else if (this.activeCategory) {
        list = list.filter(dish => dish.category === this.activeCategory);
      }
    }

    if (this.searchQuery) {
      const q = this.searchQuery;
      list = list.filter(dish => {
        const nameFr = dish.name.toLowerCase();
        const nameAr = dish.nameAr.toLowerCase();
        const descFr = dish.description.toLowerCase();
        const descAr = dish.descriptionAr.toLowerCase();
        const catFr = dish.category.toLowerCase();
        return nameFr.includes(q) || nameAr.includes(q) || descFr.includes(q) || descAr.includes(q) || catFr.includes(q);
      });
    }

    return list;
  }

  renderMenu() {
    if (!this.menuGrid) return;

    const dishes = this.getFilteredDishes();

    if (dishes.length === 0) {
      this.menuGrid.innerHTML = "";
      if (this.emptyState) {
        this.emptyState.style.display = "flex";
        if (this.emptyStateText) {
          if (this.activeView === "favorites") {
            this.emptyStateText.textContent = this.t("no_favorites");
          } else {
            this.emptyStateText.textContent = this.t("no_results");
          }
        }
      }
      return;
    }

    if (this.emptyState) {
      this.emptyState.style.display = "none";
    }

    const isAr = this.currentLang === "ar";
    const currency = this.t("currency");

    let html = "";
    dishes.forEach((dish, idx) => {
      const isFav = this.favorites.includes(dish.id);
      const title = isAr ? dish.nameAr : dish.name;
      const desc = isAr ? dish.descriptionAr : dish.description;
      const popBadge = dish.popular ? `<span class="badge-popular">${this.t("popular_badge")}</span>` : "";

      html += `
        <article class="menu-card animate-on-scroll" data-id="${dish.id}" style="animation-delay: ${idx * 40}ms">
          <div class="card-image-wrap">
            <img 
              src="${dish.image}" 
              alt="${title}" 
              loading="lazy" 
              width="600" 
              height="450" 
              class="card-img"
              referrerpolicy="no-referrer"
            />
            ${popBadge}
            <button 
              type="button" 
              class="card-fav-btn ${isFav ? "is-fav" : ""}" 
              data-fav-id="${dish.id}" 
              aria-label="${isFav ? this.t("fav_removed") : this.t("fav_added")}"
            >
              ${this.getIconSvg("heart", isFav)}
            </button>
          </div>
          <div class="card-body">
            <div class="card-title-wrap">
              <h3 class="card-title">${title}</h3>
            </div>
            <div class="wave-divider" aria-hidden="true">
              <svg viewBox="0 0 40 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3C5 0.5 5 5.5 10 3C15 0.5 15 5.5 20 3C25 0.5 25 5.5 30 3C35 0.5 35 5.5 40 3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
            </div>
            <p class="card-desc">${desc}</p>
            <div class="card-footer">
              <div class="card-price">
                <span class="price-value">${dish.price}</span>
                <span class="price-unit">${currency}</span>
              </div>
              <button 
                type="button" 
                class="card-add-btn" 
                data-add-id="${dish.id}" 
                aria-label="${this.t("add_to_cart")}: ${title}"
              >
                ${this.getIconSvg("plus")}
              </button>
            </div>
          </div>
        </article>
      `;
    });

    this.menuGrid.innerHTML = html;

    // Attach card event listeners
    const cards = this.menuGrid.querySelectorAll(".menu-card");
    cards.forEach(card => {
      const dishId = parseInt(card.getAttribute("data-id"), 10);

      // Open Modal on Card Click (except when clicking fav or add button)
      card.addEventListener("click", (e) => {
        if (e.target.closest(".card-fav-btn") || e.target.closest(".card-add-btn")) {
          return;
        }
        this.openDishModal(dishId);
      });

      // Fav button click
      const favBtn = card.querySelector(".card-fav-btn");
      if (favBtn) {
        favBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.toggleFavorite(dishId);
        });
      }

      // Add to cart click
      const addBtn = card.querySelector(".card-add-btn");
      if (addBtn) {
        addBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.addToCart(dishId, 1);
          this.animateAddButton(addBtn);
        });
      }
    });

    this.initIntersectionObserver();
  }

  animateAddButton(btn) {
    btn.classList.add("added-pulse");
    setTimeout(() => btn.classList.remove("added-pulse"), 400);
  }

  toggleFavorite(dishId) {
    const idx = this.favorites.indexOf(dishId);
    let added = false;
    if (idx > -1) {
      this.favorites.splice(idx, 1);
      added = false;
      this.showToast(this.t("fav_removed"));
    } else {
      this.favorites.push(dishId);
      added = true;
      this.showToast(this.t("fav_added"));
    }

    this.saveFavorites();

    // Re-render favorites or update specific buttons
    if (this.activeView === "favorites") {
      this.renderMenu();
    } else {
      const favBtns = document.querySelectorAll(`[data-fav-id="${dishId}"]`);
      favBtns.forEach(btn => {
        btn.classList.toggle("is-fav", added);
        btn.innerHTML = this.getIconSvg("heart", added);
      });
    }

    if (this.currentModalDish && this.currentModalDish.id === dishId) {
      this.updateModalFavState();
    }
  }

  updateModalFavState() {
    const modalFavBtn = document.getElementById("modalFavBtn");
    if (!modalFavBtn || !this.currentModalDish) return;
    const isFav = this.favorites.includes(this.currentModalDish.id);
    modalFavBtn.classList.toggle("is-fav", isFav);
    modalFavBtn.innerHTML = this.getIconSvg("heart", isFav);
  }

  openDishModal(dishId) {
    const dish = MENU_DATA.find(d => d.id === dishId);
    if (!dish) return;

    this.currentModalDish = dish;
    this.modalQuantity = 1;

    const isAr = this.currentLang === "ar";
    const title = isAr ? dish.nameAr : dish.name;
    const desc = isAr ? dish.descriptionAr : dish.description;
    const currency = this.t("currency");

    // Populate modal elements
    const imgEl = document.getElementById("modalDishImg");
    const titleEl = document.getElementById("modalDishTitle");
    const descEl = document.getElementById("modalDishDesc");
    const priceEl = document.getElementById("modalDishPrice");
    const statusEl = document.getElementById("modalDishStatus");
    const qtyVal = document.getElementById("modalQtyValue");

    if (imgEl) {
      imgEl.src = dish.image;
      imgEl.alt = title;
    }
    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc;
    if (priceEl) priceEl.textContent = `${dish.price} ${currency}`;
    if (qtyVal) qtyVal.textContent = "1";

    if (statusEl) {
      statusEl.textContent = dish.available ? this.t("dish_available") : this.t("dish_unavailable");
      statusEl.className = dish.available ? "dish-status available" : "dish-status unavailable";
    }

    this.updateModalFavState();

    if (this.dishModal) {
      this.dishModal.classList.add("open");
      this.dishModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    }
  }

  closeDishModal() {
    if (this.dishModal) {
      this.dishModal.classList.remove("open");
      this.dishModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      this.currentModalDish = null;
    }
  }

  addToCart(dishId, quantity = 1) {
    const dish = MENU_DATA.find(d => d.id === dishId);
    if (!dish) return;

    const existing = this.cart.find(item => item.id === dishId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({
        id: dishId,
        quantity: quantity
      });
    }

    this.saveCart();
    this.showToast(this.t("added_toast"));
    this.bounceCartBadges();
  }

  bounceCartBadges() {
    const badges = document.querySelectorAll(".badge-counter");
    badges.forEach(b => {
      b.classList.remove("bounce-anim");
      void b.offsetWidth; // trigger reflow
      b.classList.add("bounce-anim");
    });
  }

  updateBadges() {
    const favCount = this.favorites.length;
    const cartCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);

    if (this.favBadgeBottom) {
      this.favBadgeBottom.textContent = favCount;
      this.favBadgeBottom.style.display = favCount > 0 ? "flex" : "none";
    }
    if (this.favBadgeDrawer) {
      this.favBadgeDrawer.textContent = favCount;
      this.favBadgeDrawer.style.display = favCount > 0 ? "inline-flex" : "none";
    }

    if (this.cartBadgeBottom) {
      this.cartBadgeBottom.textContent = cartCount;
      this.cartBadgeBottom.style.display = cartCount > 0 ? "flex" : "none";
    }
    if (this.cartBadgeHeader) {
      this.cartBadgeHeader.textContent = cartCount;
      this.cartBadgeHeader.style.display = cartCount > 0 ? "flex" : "none";
    }
    if (this.cartBadgeDrawer) {
      this.cartBadgeDrawer.textContent = cartCount;
      this.cartBadgeDrawer.style.display = cartCount > 0 ? "inline-flex" : "none";
    }
  }

  openCart() {
    this.renderCart();
    if (this.cartDrawer) {
      this.cartDrawer.classList.add("open");
      this.cartDrawer.setAttribute("aria-hidden", "false");
      document.body.classList.add("drawer-open");
    }
  }

  closeCart() {
    if (this.cartDrawer) {
      this.cartDrawer.classList.remove("open");
      this.cartDrawer.setAttribute("aria-hidden", "true");
      document.body.classList.remove("drawer-open");
    }
  }

  renderCart() {
    const container = document.getElementById("cartItemsList");
    const totalEl = document.getElementById("cartTotalAmount");
    const checkoutBtn = document.getElementById("checkoutWhatsappBtn");
    const emptyMsg = document.getElementById("cartEmptyMsg");

    if (!container || !totalEl) return;

    if (this.cart.length === 0) {
      container.innerHTML = "";
      if (emptyMsg) emptyMsg.style.display = "block";
      totalEl.textContent = `0 ${this.t("currency")}`;
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }

    if (emptyMsg) emptyMsg.style.display = "none";
    if (checkoutBtn) checkoutBtn.disabled = false;

    const isAr = this.currentLang === "ar";
    const currency = this.t("currency");
    let total = 0;
    let html = "";

    this.cart.forEach(item => {
      const dish = MENU_DATA.find(d => d.id === item.id);
      if (!dish) return;

      const subtotal = dish.price * item.quantity;
      total += subtotal;
      const title = isAr ? dish.nameAr : dish.name;

      html += `
        <div class="cart-item" data-cart-id="${dish.id}">
          <img src="${dish.image}" alt="${title}" class="cart-item-img" loading="lazy" />
          <div class="cart-item-info">
            <h4 class="cart-item-title">${title}</h4>
            <div class="cart-item-unit-price">${dish.price} ${currency}</div>
            <div class="cart-item-controls">
              <div class="qty-pill">
                <button type="button" class="qty-btn js-cart-minus" data-id="${dish.id}" aria-label="Diminuer">-</button>
                <span class="qty-num">${item.quantity}</span>
                <button type="button" class="qty-btn js-cart-plus" data-id="${dish.id}" aria-label="Augmenter">+</button>
              </div>
              <div class="cart-item-subtotal">${subtotal} ${currency}</div>
            </div>
          </div>
          <button type="button" class="cart-item-remove js-cart-remove" data-id="${dish.id}" aria-label="Supprimer">
            ${this.getIconSvg("trash")}
          </button>
        </div>
      `;
    });

    container.innerHTML = html;
    totalEl.textContent = `${total} ${currency}`;

    // Bind item actions
    container.querySelectorAll(".js-cart-minus").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-id"), 10);
        const item = this.cart.find(i => i.id === id);
        if (item) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            this.cart = this.cart.filter(i => i.id !== id);
          }
          this.saveCart();
          this.renderCart();
        }
      });
    });

    container.querySelectorAll(".js-cart-plus").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-id"), 10);
        const item = this.cart.find(i => i.id === id);
        if (item && item.quantity < 99) {
          item.quantity++;
          this.saveCart();
          this.renderCart();
        }
      });
    });

    container.querySelectorAll(".js-cart-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-id"), 10);
        this.cart = this.cart.filter(i => i.id !== id);
        this.saveCart();
        this.renderCart();
      });
    });
  }

  checkoutWhatsApp() {
    if (this.cart.length === 0) return;

    const isAr = this.currentLang === "ar";
    let message = "";
    let total = 0;

    if (isAr) {
      message = `مرحباً ${RESTAURANT_CONFIG.name}، أود تقديم الطلب التالي :\n\n`;
      this.cart.forEach(item => {
        const dish = MENU_DATA.find(d => d.id === item.id);
        if (dish) {
          const subtotal = dish.price * item.quantity;
          total += subtotal;
          message += `${item.quantity} × ${dish.nameAr} — ${subtotal} درهم\n`;
        }
      });
      message += `\nالمجموع : ${total} درهم\n\nشكراً لكم !`;
    } else {
      message = `Bonjour ${RESTAURANT_CONFIG.name}, je souhaite commander :\n\n`;
      this.cart.forEach(item => {
        const dish = MENU_DATA.find(d => d.id === item.id);
        if (dish) {
          const subtotal = dish.price * item.quantity;
          total += subtotal;
          message += `${item.quantity} × ${dish.name} — ${subtotal} DH\n`;
        }
      });
      message += `\nTotal : ${total} DH\n\nMerci !`;
    }

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${RESTAURANT_CONFIG.whatsapp}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  }

  openMobileDrawer() {
    if (this.mobileDrawer) {
      this.mobileDrawer.classList.add("open");
      this.mobileDrawer.setAttribute("aria-hidden", "false");
      document.body.classList.add("drawer-open");
    }
  }

  closeMobileDrawer() {
    if (this.mobileDrawer) {
      this.mobileDrawer.classList.remove("open");
      this.mobileDrawer.setAttribute("aria-hidden", "true");
      document.body.classList.remove("drawer-open");
    }
  }

  showToast(message) {
    if (!this.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "azuria-toast";
    toast.innerHTML = `
      <span class="toast-icon">${this.getIconSvg("check")}</span>
      <span class="toast-text">${message}</span>
    `;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("visible");
    }, 10);

    setTimeout(() => {
      toast.classList.remove("visible");
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }

  initScrollEffects() {
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      if (this.headerEl) {
        if (currentScrollY > 20) {
          this.headerEl.classList.add("scrolled");
        } else {
          this.headerEl.classList.remove("scrolled");
        }
      }
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  initIntersectionObserver() {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.08
    });

    document.querySelectorAll(".animate-on-scroll:not(.is-visible)").forEach(el => {
      observer.observe(el);
    });
  }

  getIconSvg(name, filled = false) {
    switch (name) {
      case "star":
        return `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>`;
      case "fish":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12C6.5 7.5 12 4 18 4C18 10 14.5 15.5 10 15.5C8 15.5 6.5 14 6.5 12Z"/><path d="M18 4L22 2V8L18 4Z"/><path d="M14 9A1 1 0 1 0 14 7A1 1 0 0 0 14 9Z" fill="currentColor"/><path d="M2 16C4 16 5 18 7 18"/></svg>`;
      case "flame":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12C11 9 8 7 12 3C16 7 13 9 13 12A2.5 2.5 0 0 0 15.5 14.5"/><path d="M12 22C6.5 22 4 17.5 4 13C4 9 7 6 7 6C7 6 8 8 10 8C10 8 10 4 14 2C14 2 15 5 15 7C17 7 20 9.5 20 13C20 17.5 17.5 22 12 22Z"/></svg>`;
      case "shell":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C6.5 3 2 7.5 2 13C2 17.4 5.6 21 10 21H14C18.4 21 22 17.4 22 13C22 7.5 17.5 3 12 3Z"/><path d="M12 3V21"/><path d="M6 7L10 21"/><path d="M18 7L14 21"/></svg>`;
      case "leaf":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 4 13C4 6 11 3 20 3C20 12 17 19 11 20Z"/><path d="M4 21L12 13"/></svg>`;
      case "dessert":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M19 10C19 6.5 16 5 12 5C8 5 5 6.5 5 10C3.5 10.5 3 12 4 13.5L6 21H18L20 13.5C21 12 20.5 10.5 19 10Z"/><path d="M12 2V5"/><path d="M6 14C8 15 10 13 12 14C14 15 16 13 18 14"/></svg>`;
      case "drink":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M17 3H7L4 10C4 14.4 7.6 18 12 18C16.4 18 20 14.4 20 10L17 3Z"/><path d="M12 18V22"/><path d="M8 22H16"/></svg>`;
      case "heart":
        return filled 
          ? `<svg viewBox="0 0 24 24" fill="#E56A54" stroke="#E56A54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
          : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
      case "plus":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
      case "trash":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"/><path d="M19 6L18 20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20L5 6"/><path d="M10 11V17"/><path d="M14 11V17"/><path d="M9 6V4C9 3.4 9.4 3 10 3H14C14.6 3 15 3.4 15 4V6"/></svg>`;
      case "check":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>`;
      default:
        return "";
    }
  }
}

// Instantiate on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.azuria = new AzuriaApp();
});
