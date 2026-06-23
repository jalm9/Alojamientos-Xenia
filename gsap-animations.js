/* =========================================
   GSAP ANIMATIONS — Alojamientos Xenia
   =========================================
   Todas las animaciones scroll usan toggleActions 'play none none none'
   con once:true para que se disparen una vez y liberen el elemento.
   ========================================= */

(function() {
    // Seguridad: si GSAP no cargó, no hacer nada
    if (typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // ─────────────────────────────────────────
    //  SETUP: neutralizar CSS fade-up en elementos
    //  cuya animación controla GSAP directamente
    // ─────────────────────────────────────────
    document.querySelectorAll(
        '.kondo-banner-content.fade-up'
    ).forEach(el => el.classList.add('is-visible'));


    // ─────────────────────────────────────────
    //  1. HERO — Entrada cinematográfica
    // ─────────────────────────────────────────
    const heroTl = gsap.timeline({ delay: 0.3 });

    heroTl
        .from('.kondo-hero-content .kondo-subtitle', {
            opacity: 0, y: 18,
            duration: 0.9,
            ease: 'power3.out'
        })
        .from('.kondo-hero-content .kondo-title', {
            opacity: 0, y: 55,
            duration: 1.15,
            ease: 'power4.out'
        }, '-=0.55')
        .from('.kondo-hero-content .kondo-desc', {
            opacity: 0, y: 25,
            duration: 0.85,
            ease: 'power3.out'
        }, '-=0.65')
        .from('.kondo-hero-actions > *', {
            opacity: 0, y: 16,
            stagger: 0.14,
            duration: 0.65,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.kondo-hero-cards .kondo-card', {
            opacity: 0, y: 28,
            stagger: 0.18,
            duration: 0.75,
            ease: 'power2.out'
        }, '-=0.4');


    // ─────────────────────────────────────────
    //  2. HERO BG — Zoom suave al hacer scroll
    // ─────────────────────────────────────────
    gsap.to('.kondo-hero-bg', {
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
            trigger: '.kondo-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        }
    });


    // ─────────────────────────────────────────
    //  3. SECCIÓN ORIGEN — Parallax suave en imágenes
    // ─────────────────────────────────────────
    const originSection = document.querySelector('.origin-section');
    if (originSection) {
        gsap.to('.origin-img-primary', {
            y: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.origin-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });

        gsap.to('.origin-img-secondary', {
            y: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.origin-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5
            }
        });
    }


    // ─────────────────────────────────────────
    //  4. TARJETAS DE ALOJAMIENTO — Entrada alternada
    // ─────────────────────────────────────────
    document.querySelectorAll('.kondo-apt-card').forEach((card, i) => {
        const isEven = (i + 1) % 2 === 0;
        const imgEl  = card.querySelector('.kondo-apt-img');
        const bodyEl = card.querySelector('.kondo-apt-body');
        const badge  = card.querySelector('.kondo-badge');

        if (imgEl) {
            gsap.from(imgEl, {
                opacity: 0,
                x: isEven ? 60 : -60,
                duration: 1.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 82%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        }

        if (bodyEl) {
            gsap.from(bodyEl, {
                opacity: 0,
                x: isEven ? -40 : 40,
                duration: 1,
                ease: 'power3.out',
                delay: 0.12,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 82%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        }

        if (badge) {
            gsap.from(badge, {
                scale: 0.5,
                opacity: 0,
                duration: 0.45,
                ease: 'back.out(2)',
                delay: 0.35,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 82%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        }
    });


    // ─────────────────────────────────────────
    //  5. SUBTÍTULOS Y HEADINGS — Entrada sutil
    // ─────────────────────────────────────────
    document.querySelectorAll('.kondo-subtitle-dark').forEach(el => {
        gsap.from(el, {
            opacity: 0,
            y: 12,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    });

    document.querySelectorAll('.kondo-heading').forEach(el => {
        gsap.from(el, {
            opacity: 0,
            y: 35,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    });


    // ─────────────────────────────────────────
    //  6. TESTIMONIOS — Cascada con stagger
    // ─────────────────────────────────────────
    const testGrid = document.querySelector('.kondo-testimonial-grid');
    if (testGrid) {
        gsap.from('.kondo-test-card', {
            opacity: 0,
            y: 45,
            stagger: 0.16,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: testGrid,
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    }


    // ─────────────────────────────────────────
    //  7. BANNER ENTORNO — Zoom y fade del contenido
    // ─────────────────────────────────────────
    const banner = document.querySelector('.kondo-banner');
    if (banner) {
        gsap.from('.kondo-banner-wrapper', {
            scale: 0.96,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: banner,
                start: 'top 82%',
                toggleActions: 'play none none none',
                once: true
            }
        });

        const bannerC = document.querySelector('.kondo-banner-content');
        if (bannerC) {
            gsap.set(bannerC, { opacity: 0, y: 35 });
            gsap.to(bannerC, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: banner,
                    start: 'top 72%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        }
    }


    // ─────────────────────────────────────────
    //  8. FOOTER — Entrada suave
    // ─────────────────────────────────────────
    const footer = document.querySelector('.kondo-footer');
    if (footer) {
        gsap.from('.kondo-footer-grid > *', {
            opacity: 0,
            y: 28,
            stagger: 0.13,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: footer,
                start: 'top 88%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    }


    // ─────────────────────────────────────────
    //  9. HOVER en imágenes — Zoom suave
    // ─────────────────────────────────────────
    document.querySelectorAll('.kondo-apt-img').forEach(wrap => {
        const img = wrap.querySelector('img');
        if (!img) return;
        wrap.addEventListener('mouseenter', () => {
            gsap.to(img, { scale: 1.05, duration: 0.55, ease: 'power2.out' });
        });
        wrap.addEventListener('mouseleave', () => {
            gsap.to(img, { scale: 1,    duration: 0.55, ease: 'power2.out' });
        });
    });


    // ─────────────────────────────────────────
    //  10. HOVER en testimonios — Elevación
    // ─────────────────────────────────────────
    document.querySelectorAll('.kondo-test-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -6, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y:  0, duration: 0.3, ease: 'power2.out' });
        });
    });

})();
