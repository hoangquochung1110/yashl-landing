document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Demo Animation
    const demoUrls = [
        {
            long: 'https://really-long-example.com/with/many/parameters?id=123&ref=example',
            short: 'quick.ly/abc123'
        },
        {
            long: 'https://shopping-site.com/products/category/item?color=blue&size=large',
            short: 'quick.ly/shop7x'
        },
        {
            long: 'https://blog-platform.com/2024/03/top-10-programming-tips-for-beginners',
            short: 'quick.ly/code10'
        }
    ];

    let currentUrlIndex = 0;
    const longUrlElement = document.querySelector('.long-url');
    const shortUrlElement = document.querySelector('.short-url');

    function updateDemoUrl() {
        const demoContainer = document.querySelector('.demo-input');
        demoContainer.style.opacity = '0';
        
        setTimeout(() => {
            longUrlElement.textContent = demoUrls[currentUrlIndex].long;
            shortUrlElement.textContent = demoUrls[currentUrlIndex].short;
            demoContainer.style.opacity = '1';
            
            currentUrlIndex = (currentUrlIndex + 1) % demoUrls.length;
        }, 500);
    }

    // Change demo URL every 4 seconds
    setInterval(updateDemoUrl, 4000);

    // Translations
    const translations = {
        en: {
            title: "Transform Long Links into Short URLs",
            tagline: "Create memorable, shareable links in seconds",
            ctaButton: "Start Shortening - It's Free!",
            features: {
                title: "Key Features",
                instant: {
                    title: "Instant URL Shortening",
                    desc: "Transform long URLs into short links with just one click"
                },
                custom: {
                    title: "Customizable Links",
                    desc: "Personalize your shortened URLs to align with your brand"
                },
                analytics: {
                    title: "Analytics Dashboard",
                    desc: "Track clicks and engagement metrics in real-time"
                },
                secure: {
                    title: "Secure Links",
                    desc: "Encrypted links with built-in spam protection"
                },
                cross: {
                    title: "Cross-Platform",
                    desc: "Access your shortened links from any device, anywhere"
                }
            },
            benefits: {
                title: "Benefits",
                ux: {
                    title: "Improved User Experience",
                    desc: "Short links are easier to share and remember, enhancing overall user engagement"
                },
                aesthetic: {
                    title: "Enhanced Aesthetics",
                    desc: "Clean URLs look more professional in marketing materials and social media posts"
                },
                ctr: {
                    title: "Increased Click-Through Rates",
                    desc: "Shortened links lead to higher engagement on social media platforms"
                }
            },
            cta: {
                title: "Ready to Start Shortening URLs?",
                desc: "Join thousands of users who trust our service for their link shortening needs",
                button: "Get Started Today!"
            },
            customLink: {
                title: "✨ Custom Links Available! ✨",
                examples: "Examples:"
            }
        },
        vi: {
            title: "Chuyển Đổi Link Dài Thành URL Ngắn Gọn",
            tagline: "Tạo link ngắn gọn, dễ chia sẻ trong tích tắc",
            ctaButton: "Bắt Đầu Ngay - Hoàn Toàn Miễn Phí!",
            features: {
                title: "Tính Năng Chính",
                instant: {
                    title: "Rút Gọn URL Tức Thì",
                    desc: "Chuyển đổi link dài thành link ngắn chỉ với một cú nhấp chuột"
                },
                custom: {
                    title: "Tùy Chỉnh Link",
                    desc: "Cá nhân hóa URL rút gọn phù hợp với thương hiệu của bạn"
                },
                analytics: {
                    title: "Bảng Điều Khiển Phân Tích",
                    desc: "Theo dõi số lượt click và chỉ số tương tác theo thời gian thực"
                },
                secure: {
                    title: "Link An Toàn",
                    desc: "Link được mã hóa với tính năng bảo vệ chống spam"
                },
                cross: {
                    title: "Đa Nền Tảng",
                    desc: "Truy cập link rút gọn từ mọi thiết bị, mọi nơi"
                }
            },
            benefits: {
                title: "Lợi Ích",
                ux: {
                    title: "Trải Nghiệm Người Dùng Tốt Hơn",
                    desc: "Link ngắn dễ chia sẻ và ghi nhớ, tăng cường tương tác người dùng"
                },
                aesthetic: {
                    title: "Thẩm Mỹ Cao Hơn",
                    desc: "URL gọn gàng trông chuyên nghiệp hơn trong tài liệu marketing và mạng xã hội"
                },
                ctr: {
                    title: "Tăng Tỷ Lệ Click",
                    desc: "Link rút gọn giúp tăng tương tác trên các nền tảng mạng xã hội"
                }
            },
            cta: {
                title: "Sẵn Sàng Rút Gọn URL?",
                desc: "Tham gia cùng hàng nghìn người dùng tin tưởng dịch vụ rút gọn link của chúng tôi",
                button: "Bắt Đầu Ngay Hôm Nay!"
            },
            customLink: {
                title: "✨ Tùy Chỉnh Link Có Sẵn! ✨",
                examples: "Ví dụ:"
            }
        }
    };

    // Language switcher functionality
    let currentLang = localStorage.getItem('preferred-language') || 'en';
    
    function updateContent(lang) {
        currentLang = lang;
        localStorage.setItem('preferred-language', lang);
        
        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update all text content
        document.querySelector('h1').textContent = translations[lang].title;
        document.querySelector('.tagline').textContent = translations[lang].tagline;
        document.querySelector('.hero-content .cta-button').textContent = translations[lang].ctaButton;

        // Update features
        document.querySelector('.features').previousElementSibling.textContent = translations[lang].features.title;
        updateFeatureContent(lang);
        updateBenefitsContent(lang);
        updateCtaContent(lang);

        // Update custom link section
        document.querySelector('.highlight-title').textContent = translations[lang].customLink.title;
        document.querySelector('.custom-link-examples p').textContent = translations[lang].customLink.examples;
    }

    function updateFeatureContent(lang) {
        const features = document.querySelectorAll('.feature-card');
        const featureKeys = ['instant', 'custom', 'analytics', 'secure', 'cross'];
        
        features.forEach((card, index) => {
            const key = featureKeys[index];
            card.querySelector('.feature-title').textContent = translations[lang].features[key].title;
            card.querySelector('p').textContent = translations[lang].features[key].desc;
        });
    }

    function updateBenefitsContent(lang) {
        document.querySelector('.benefits').previousElementSibling.textContent = translations[lang].benefits.title;
        const benefits = document.querySelectorAll('.benefit-item');
        const benefitKeys = ['ux', 'aesthetic', 'ctr'];
        
        benefits.forEach((item, index) => {
            const key = benefitKeys[index];
            item.querySelector('.benefit-title').textContent = translations[lang].benefits[key].title;
            item.querySelector('p').textContent = translations[lang].benefits[key].desc;
        });
    }

    function updateCtaContent(lang) {
        const ctaSection = document.querySelector('.cta-section');
        ctaSection.querySelector('.cta-title').textContent = translations[lang].cta.title;
        ctaSection.querySelector('.cta-description').textContent = translations[lang].cta.desc;
        ctaSection.querySelector('.cta-button').textContent = translations[lang].cta.button;
    }

    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateContent(btn.dataset.lang);
        });
    });

    // Initialize with saved language preference
    updateContent(currentLang);
}); 