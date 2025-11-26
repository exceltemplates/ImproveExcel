// Excel Finance Templates - Main JavaScript
// Premium marketplace functionality with advanced interactions

class TemplateMarketplace {
    constructor() {
        this.templates = [];
        this.cart = [];
        this.favorites = [];
        this.currentFilters = {
            categories: [],
            priceRange: [0, 200],
            search: ''
        };
        this.init();
    }

    init() {
        this.loadTemplates();
        this.initializeAnimations();
        this.bindEvents();
        this.initializeCart();
        this.initializeModals();
    }

    loadTemplates() {
        // Comprehensive template data with real categories and pricing
        this.templates = [
            {
                id: 1,
                name: "Personal Budget Tracker",
                category: "Budgeting",
                price: 29.99,
                originalPrice: 39.99,
                rating: 4.8,
                reviews: 1247,
                downloads: 15800,
                image: "resources/template-budget.jpg",
                description: "Comprehensive personal budget template with income tracking, expense categorization, and automatic savings calculations.",
                features: ["Monthly & Annual Views", "Expense Categories", "Savings Goals", "Visual Charts", "Debt Tracking"],
                compatibility: ["Excel 2016+", "Google Sheets", "Mac Excel"],
                purchaseUrl: "https://example.com/purchase/personal-budget"
            },
            {
                id: 2,
                name: "Investment Portfolio Manager",
                category: "Investment",
                price: 49.99,
                originalPrice: 59.99,
                rating: 4.9,
                reviews: 892,
                downloads: 12300,
                image: "resources/template-investment.jpg",
                description: "Professional investment tracking template with portfolio analysis, performance metrics, and risk assessment tools.",
                features: ["Stock Tracking", "Portfolio Allocation", "Performance Charts", "Risk Analysis", "Dividend Tracking"],
                compatibility: ["Excel 2016+", "Google Sheets"],
                purchaseUrl: "https://example.com/purchase/investment-portfolio"
            },
            {
                id: 3,
                name: "Small Business Accounting",
                category: "Accounting",
                price: 79.99,
                originalPrice: 99.99,
                rating: 4.7,
                reviews: 654,
                downloads: 8900,
                image: "resources/template-accounting.jpg",
                description: "Complete small business accounting solution with profit & loss statements, balance sheets, and cash flow management.",
                features: ["P&L Statements", "Balance Sheets", "Cash Flow", "Tax Preparation", "Financial Ratios"],
                compatibility: ["Excel 2016+", "Excel for Mac"],
                purchaseUrl: "https://example.com/purchase/business-accounting"
            },
            {
                id: 4,
                name: "Tax Preparation Organizer",
                category: "Tax",
                price: 34.99,
                originalPrice: 44.99,
                rating: 4.6,
                reviews: 543,
                downloads: 6700,
                image: "resources/template-tax.jpg",
                description: "Organized tax preparation template with automatic calculations and IRS form references for personal and business use.",
                features: ["Income Tracking", "Deduction Categories", "Tax Calculations", "Form References", "Record Keeping"],
                compatibility: ["Excel 2016+", "Google Sheets", "Mac Excel"],
                purchaseUrl: "https://example.com/purchase/tax-organizer"
            },
            {
                id: 5,
                name: "Business Financial Projections",
                category: "Business Planning",
                price: 89.99,
                originalPrice: 119.99,
                rating: 4.8,
                reviews: 421,
                downloads: 5400,
                image: "resources/template-business.jpg",
                description: "Comprehensive 3-year financial projections template for startups and established businesses with investor-ready reports.",
                features: ["3-Year Projections", "Cash Flow Forecast", "Break-Even Analysis", "Investor Reports", "Scenario Planning"],
                compatibility: ["Excel 2016+", "Google Sheets"],
                purchaseUrl: "https://example.com/purchase/business-projections"
            },
            {
                id: 6,
                name: "Monthly Budget Planner",
                category: "Budgeting",
                price: 24.99,
                originalPrice: 34.99,
                rating: 4.5,
                reviews: 987,
                downloads: 11200,
                image: "https://kimi-web-img.moonshot.cn/img/workfeed.io/df8ef7118fffdda8a670d8b8b49e76123e48a55f.png",
                description: "Simple monthly budget planner with expense tracking and savings goal monitoring.",
                features: ["Monthly Tracking", "Expense Categories", "Savings Goals", "Visual Reports", "Easy Setup"],
                compatibility: ["Excel 2016+", "Google Sheets", "Mac Excel"],
                purchaseUrl: "https://example.com/purchase/monthly-budget"
            },
            {
                id: 7,
                name: "Stock Analysis Worksheet",
                category: "Investment",
                price: 59.99,
                originalPrice: 74.99,
                rating: 4.7,
                reviews: 334,
                downloads: 4500,
                image: "https://kimi-web-img.moonshot.cn/img/tiller.com/34cdf1eb9f6e32c72b845be8fac328333d6a065f.jpg",
                description: "Advanced stock analysis template with technical indicators, fundamental analysis, and valuation models.",
                features: ["Technical Analysis", "Fundamental Data", "Valuation Models", "Risk Assessment", "Portfolio Optimization"],
                compatibility: ["Excel 2016+", "Excel for Mac"],
                purchaseUrl: "https://example.com/purchase/stock-analysis"
            },
            {
                id: 8,
                name: "Cash Flow Statement Template",
                category: "Accounting",
                price: 39.99,
                originalPrice: 49.99,
                rating: 4.6,
                reviews: 276,
                downloads: 3800,
                image: "https://kimi-web-img.moonshot.cn/img/zebrabi.com/5556e74fa8c138d3233d48635e33c668a9099e0e.png",
                description: "Professional cash flow statement template with operating, investing, and financing activities tracking.",
                features: ["Operating Activities", "Investing Activities", "Financing Activities", "Net Cash Flow", "Monthly Reports"],
                compatibility: ["Excel 2016+", "Google Sheets", "Mac Excel"],
                purchaseUrl: "https://example.com/purchase/cash-flow"
            },
            {
                id: 9,
                name: "Business Tax Preparation",
                category: "Tax",
                price: 64.99,
                originalPrice: 79.99,
                rating: 4.8,
                reviews: 189,
                downloads: 2900,
                image: "https://kimi-web-img.moonshot.cn/img/www.excel-skills.com/59b8d409e05cfc8077f9b8d052b23791f129de2a.jpg",
                description: "Comprehensive business tax preparation template with depreciation schedules and business deduction tracking.",
                features: ["Business Deductions", "Depreciation Schedules", "Quarterly Payments", "Form References", "Record Keeping"],
                compatibility: ["Excel 2016+", "Excel for Mac"],
                purchaseUrl: "https://example.com/purchase/business-tax"
            },
            {
                id: 10,
                name: "Startup Financial Model",
                category: "Business Planning",
                price: 99.99,
                originalPrice: 129.99,
                rating: 4.9,
                reviews: 412,
                downloads: 3200,
                image: "https://kimi-web-img.moonshot.cn/img/cdn.vertex42.com/1f2f3c6f138f01dc2ae9031c4f24de3af87e73d5.png",
                description: "Complete startup financial model with funding requirements, burn rate analysis, and investor presentation reports.",
                features: ["Funding Requirements", "Burn Rate Analysis", "Runway Calculator", "Investor Dashboard", "Scenario Planning"],
                compatibility: ["Excel 2016+", "Google Sheets"],
                purchaseUrl: "https://example.com/purchase/startup-model"
            },
            {
                id: 11,
                name: "Household Budget Manager",
                category: "Budgeting",
                price: 27.99,
                originalPrice: 37.99,
                rating: 4.4,
                reviews: 756,
                downloads: 8900,
                image: "https://kimi-web-img.moonshot.cn/img/tiller.com/117ece23953e482afc9dfa44347df3ecfafe89c1.png",
                description: "Family household budget manager with multiple income sources and shared expense tracking.",
                features: ["Multiple Incomes", "Shared Expenses", "Family Budgeting", "Bill Reminders", "Savings Goals"],
                compatibility: ["Excel 2016+", "Google Sheets", "Mac Excel"],
                purchaseUrl: "https://example.com/purchase/household-budget"
            },
            {
                id: 12,
                name: "Real Estate Investment Calculator",
                category: "Investment",
                price: 54.99,
                originalPrice: 69.99,
                rating: 4.7,
                reviews: 298,
                downloads: 2100,
                image: "https://kimi-web-img.moonshot.cn/img/mrspreadsheet.co.uk/5449d28f8ffa332ed2836b2abe85f7133f0051e5.jpg",
                description: "Real estate investment analysis template with cash flow projections and ROI calculations.",
                features: ["Cash Flow Analysis", "ROI Calculations", "Mortgage Calculator", "Rental Income Tracking", "Property Comparison"],
                compatibility: ["Excel 2016+", "Excel for Mac"],
                purchaseUrl: "https://example.com/purchase/real-estate-calculator"
            },
            {
                id: 13,
                name: "Profit & Loss Statement",
                category: "Accounting",
                price: 44.99,
                originalPrice: 54.99,
                rating: 4.5,
                reviews: 367,
                downloads: 4100,
                image: "https://kimi-web-img.moonshot.cn/img/financial-cents.com/e226dbc5f61d6c22191dd78fe3e0ee262b712eef.png",
                description: "Professional profit and loss statement template with revenue and expense categorization.",
                features: ["Revenue Tracking", "Expense Categories", "Monthly Reports", "Yearly Comparison", "Profit Analysis"],
                compatibility: ["Excel 2016+", "Google Sheets", "Mac Excel"],
                purchaseUrl: "https://example.com/purchase/profit-loss"
            },
            {
                id: 14,
                name: "Rental Property Tax Tracker",
                category: "Tax",
                price: 42.99,
                originalPrice: 52.99,
                rating: 4.6,
                reviews: 156,
                downloads: 1800,
                image: "https://kimi-web-img.moonshot.cn/img/cdn-eaclf.nitrocdn.com/fed32d7be40bc605e911044a44173109838ce73c.png",
                description: "Specialized tax tracking template for rental property owners with expense categorization.",
                features: ["Rental Income", "Property Expenses", "Depreciation", "Tax Deductions", "Schedule E Ready"],
                compatibility: ["Excel 2016+", "Excel for Mac"],
                purchaseUrl: "https://example.com/purchase/rental-tax"
            },
            {
                id: 15,
                name: "Sales Forecast Template",
                category: "Business Planning",
                price: 49.99,
                originalPrice: 64.99,
                rating: 4.8,
                reviews: 234,
                downloads: 2600,
                image: "https://kimi-web-img.moonshot.cn/img/cdn.vertex42.com/b4c5b8af6224f704690585b6e33abf2ef99025f7.png",
                description: "Sales forecasting template with seasonal adjustments and product performance analysis.",
                features: ["Monthly Forecasts", "Seasonal Adjustments", "Product Analysis", "Growth Projections", "Target Tracking"],
                compatibility: ["Excel 2016+", "Google Sheets", "Mac Excel"],
                purchaseUrl: "https://example.com/purchase/sales-forecast"
            }
        ];
    }

    initializeAnimations() {
        // Initialize scroll animations
        this.initScrollAnimations();
        
        // Initialize hero text animation
        if (document.querySelector('.hero-title')) {
            this.initHeroAnimation();
        }

        // Initialize particle background
        if (document.getElementById('hero-canvas')) {
            this.initParticleBackground();
        }

        // Initialize counter animations
        this.initCounters();
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    initHeroAnimation() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle && typeof Typed !== 'undefined') {
            new Typed('.hero-title', {
                strings: ['Premium Excel Finance Templates', 'Professional Financial Solutions', 'Smart Money Management Tools'],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }

    initParticleBackground() {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    initCounters() {
        const counters = document.querySelectorAll('.counter');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentFilters.search = e.target.value.toLowerCase();
                this.filterTemplates();
            });
        }

        // Category filters
        document.querySelectorAll('.category-filter').forEach(filter => {
            filter.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.getAttribute('data-category');
                this.toggleCategoryFilter(category);
            });
        });

        // Price range slider
        const priceSlider = document.getElementById('price-slider');
        if (priceSlider) {
            priceSlider.addEventListener('input', (e) => {
                this.currentFilters.priceRange = [0, parseInt(e.target.value)];
                this.filterTemplates();
            });
        }

        // Sort functionality
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortTemplates(e.target.value);
            });
        }

        // Template card interactions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const templateId = parseInt(e.target.getAttribute('data-template-id'));
                this.addToCart(templateId);
            }

            if (e.target.classList.contains('favorite-btn')) {
                const templateId = parseInt(e.target.getAttribute('data-template-id'));
                this.toggleFavorite(templateId);
            }

            if (e.target.classList.contains('preview-btn')) {
                const templateId = parseInt(e.target.getAttribute('data-template-id'));
                this.openTemplateModal(templateId);
            }
        });

        // Cart functionality
        document.addEventListener('click', (e) => {
            if (e.target.id === 'cart-toggle') {
                this.toggleCart();
            }

            if (e.target.classList.contains('remove-from-cart')) {
                const templateId = parseInt(e.target.getAttribute('data-template-id'));
                this.removeFromCart(templateId);
            }
        });

        // Modal functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal-overlay')) {
                this.closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    toggleCategoryFilter(category) {
        const index = this.currentFilters.categories.indexOf(category);
        if (index > -1) {
            this.currentFilters.categories.splice(index, 1);
        } else {
            this.currentFilters.categories.push(category);
        }
        this.filterTemplates();
        this.updateFilterUI();
    }

    filterTemplates() {
        let filtered = this.templates.filter(template => {
            const matchesSearch = template.name.toLowerCase().includes(this.currentFilters.search) ||
                                template.description.toLowerCase().includes(this.currentFilters.search);
            
            const matchesCategory = this.currentFilters.categories.length === 0 || 
                                  this.currentFilters.categories.includes(template.category);
            
            const matchesPrice = template.price >= this.currentFilters.priceRange[0] && 
                               template.price <= this.currentFilters.priceRange[1];

            return matchesSearch && matchesCategory && matchesPrice;
        });

        this.renderTemplates(filtered);
    }

    sortTemplates(sortBy) {
        let sorted = [...this.templates];
        
        switch (sortBy) {
            case 'price-low':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                sorted.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                sorted.sort((a, b) => b.id - a.id);
                break;
            case 'popular':
                sorted.sort((a, b) => b.downloads - a.downloads);
                break;
        }

        this.renderTemplates(sorted);
    }

    renderTemplates(templates = this.templates) {
        const container = document.getElementById('templates-grid');
        if (!container) return;

        container.innerHTML = templates.map(template => this.createTemplateCard(template)).join('');
        
        // Animate cards
        anime({
            targets: '.template-card',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(100),
            duration: 600,
            easing: 'easeOutQuad'
        });
    }

    createTemplateCard(template) {
        const discount = Math.round(((template.originalPrice - template.price) / template.originalPrice) * 100);
        const isFavorite = this.favorites.includes(template.id);
        const inCart = this.cart.some(item => item.id === template.id);

        return `
            <div class="template-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-on-scroll">
                <div class="relative">
                    <img src="${template.image}" alt="${template.name}" class="w-full h-48 object-cover">
                    <div class="absolute top-3 right-3">
                        <button class="favorite-btn w-10 h-10 rounded-full bg-white bg-opacity-90 flex items-center justify-center transition-all duration-300 hover:bg-opacity-100 ${isFavorite ? 'text-red-500' : 'text-gray-400'}" data-template-id="${template.id}">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                            </svg>
                        </button>
                    </div>
                    ${discount > 0 ? `
                        <div class="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            -${discount}%
                        </div>
                    ` : ''}
                </div>
                
                <div class="p-6">
                    <div class="flex items-center justify-between mb-2">
                        <span class="category-tag bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            ${template.category}
                        </span>
                        <div class="flex items-center">
                            <span class="text-yellow-400 text-sm">★</span>
                            <span class="text-sm text-gray-600 ml-1">${template.rating}</span>
                        </div>
                    </div>
                    
                    <h3 class="text-xl font-bold text-gray-900 mb-2">${template.name}</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">${template.description}</p>
                    
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-2">
                            <span class="text-2xl font-bold text-gray-900">$${template.price}</span>
                            ${template.originalPrice > template.price ? `
                                <span class="text-lg text-gray-500 line-through">$${template.originalPrice}</span>
                            ` : ''}
                        </div>
                        <span class="text-sm text-gray-500">${template.downloads.toLocaleString()} downloads</span>
                    </div>
                    
                    <div class="flex space-x-2">
                        <button class="preview-btn flex-1 bg-gray-100 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200" data-template-id="${template.id}">
                            Preview
                        </button>
                        <button class="add-to-cart flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 ${inCart ? 'bg-green-600 hover:bg-green-700' : ''}" data-template-id="${template.id}">
                            ${inCart ? 'In Cart' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    initializeCart() {
        const savedCart = localStorage.getItem('templateCart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
        }
        this.updateCartUI();
    }

    addToCart(templateId) {
        const template = this.templates.find(t => t.id === templateId);
        if (template && !this.cart.some(item => item.id === templateId)) {
            this.cart.push(template);
            localStorage.setItem('templateCart', JSON.stringify(this.cart));
            this.updateCartUI();
            this.showNotification('Added to cart!', 'success');
        }
    }

    removeFromCart(templateId) {
        this.cart = this.cart.filter(item => item.id !== templateId);
        localStorage.setItem('templateCart', JSON.stringify(this.cart));
        this.updateCartUI();
        this.showNotification('Removed from cart', 'info');
    }

    updateCartUI() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');

        if (cartCount) {
            cartCount.textContent = this.cart.length;
            cartCount.style.display = this.cart.length > 0 ? 'block' : 'none';
        }

        if (cartItems) {
            cartItems.innerHTML = this.cart.map(item => `
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div class="flex-1">
                        <h4 class="font-medium text-sm">${item.name}</h4>
                        <p class="text-gray-600 text-xs">$${item.price}</p>
                    </div>
                    <button class="remove-from-cart text-red-500 hover:text-red-700 text-sm" data-template-id="${item.id}">
                        Remove
                    </button>
                </div>
            `).join('');
        }

        if (cartTotal) {
            const total = this.cart.reduce((sum, item) => sum + item.price, 0);
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }
    }

    toggleCart() {
        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar) {
            cartSidebar.classList.toggle('translate-x-full');
        }
    }

    toggleFavorite(templateId) {
        const index = this.favorites.indexOf(templateId);
        if (index > -1) {
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push(templateId);
        }
        
        localStorage.setItem('templateFavorites', JSON.stringify(this.favorites));
        this.updateFavoriteUI(templateId);
    }

    updateFavoriteUI(templateId) {
        const button = document.querySelector(`[data-template-id="${templateId}"].favorite-btn`);
        if (button) {
            const isFavorite = this.favorites.includes(templateId);
            button.classList.toggle('text-red-500', isFavorite);
            button.classList.toggle('text-gray-400', !isFavorite);
        }
    }

    initializeModals() {
        // Modal overlay click to close
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeModal();
            }
        });
    }

    openTemplateModal(templateId) {
        const template = this.templates.find(t => t.id === templateId);
        if (!template) return;

        const modal = document.getElementById('template-modal');
        const modalContent = document.getElementById('modal-content');

        if (modal && modalContent) {
            modalContent.innerHTML = this.createModalContent(template);
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    createModalContent(template) {
        return `
            <div class="bg-white rounded-xl max-w-4xl w-full mx-4 max-h-screen overflow-y-auto">
                <div class="relative">
                    <button class="modal-close absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    
                    <img src="${template.image}" alt="${template.name}" class="w-full h-64 object-cover rounded-t-xl">
                </div>
                
                <div class="p-8">
                    <div class="flex items-center justify-between mb-4">
                        <span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            ${template.category}
                        </span>
                        <div class="flex items-center">
                            <span class="text-yellow-400">★</span>
                            <span class="ml-1 font-medium">${template.rating}</span>
                            <span class="text-gray-500 ml-1">(${template.reviews} reviews)</span>
                        </div>
                    </div>
                    
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">${template.name}</h2>
                    <p class="text-gray-600 mb-6">${template.description}</p>
                    
                    <div class="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 class="text-lg font-semibold mb-3">Features</h3>
                            <ul class="space-y-2">
                                ${template.features.map(feature => `
                                    <li class="flex items-center text-gray-600">
                                        <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                        </svg>
                                        ${feature}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold mb-3">Compatibility</h3>
                            <ul class="space-y-2">
                                ${template.compatibility.map(comp => `
                                    <li class="flex items-center text-gray-600">
                                        <svg class="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                        </svg>
                                        ${comp}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-between border-t pt-6">
                        <div class="flex items-center space-x-4">
                            <span class="text-3xl font-bold text-gray-900">$${template.price}</span>
                            ${template.originalPrice > template.price ? `
                                <span class="text-xl text-gray-500 line-through">$${template.originalPrice}</span>
                                <span class="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded-full">
                                    ${Math.round(((template.originalPrice - template.price) / template.originalPrice) * 100)}% OFF
                                </span>
                            ` : ''}
                        </div>
                        
                        <div class="flex space-x-3">
                            <button class="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                Preview
                            </button>
                            <button class="add-to-cart bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors" data-template-id="${template.id}">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    closeModal() {
        const modal = document.getElementById('template-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 transform translate-x-full`;
        
        switch (type) {
            case 'success':
                notification.classList.add('bg-green-500');
                break;
            case 'error':
                notification.classList.add('bg-red-500');
                break;
            default:
                notification.classList.add('bg-blue-500');
        }

        notification.textContent = message;
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    updateFilterUI() {
        document.querySelectorAll('.category-filter').forEach(filter => {
            const category = filter.getAttribute('data-category');
            const isActive = this.currentFilters.categories.includes(category);
            filter.classList.toggle('active', isActive);
        });
    }
}

// Initialize the marketplace when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.marketplace = new TemplateMarketplace();
});

// Utility functions for smooth scrolling and interactions
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add hover effects for template cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.template-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.02,
                rotateY: 2,
                rotateX: 2,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
});