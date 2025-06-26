 
    let isArabic = false;

    const translations = {
      "About Me": "نبذة عني",
      "What I Do": "ماذا أقدم",
      "Work Showcase": "نماذج من أعمالي",
      "Current News": "آخر الأخبار",
      "Contact Me": "تواصل معي",
      "Let’s Create The Future": "لنُبدع المستقبل معًا",
      "I'm available for commissions and collaborations, and I'm excited to hear from you about new projects.": "أنا متاح للتكليفات والتعاون، ومتحمس لسماع أفكاركم حول مشاريع جديدة.",
      "Name": "الاسم",
      "Email": "البريد الإلكتروني",
      "Message": "الرسالة",
      "Send Message": "إرسال",
      "Download CV": "تحميل السيرة الذاتية",
      "Home": "الرئيسية",
      "Services": "الخدمات",
      "Work": "الأعمال",
      "Blog": "المدونة",
      "Contact": "اتصل بي",
      "Website": "الموقع الإلكتروني",
      "Phone": "الهاتف",
      "Mail": "البريد",
      "Study": "الدراسة",
      "Linkedin": "لينكدإن",
      "Degree": "الدرجة العلمية",
      "Birthday": "تاريخ الميلاد",
      "Freelance": "متاح للعمل الحر"
    };

    const reverseTranslations = Object.fromEntries(
      Object.entries(translations).map(([key, value]) => [value, key])
    );

    function toggleTranslation() {
      document.querySelectorAll('h1, h2, h3, p, button, small, span, a, input, textarea, div').forEach(el => {
        const text = el.innerText?.trim();
        const placeholder = el.placeholder?.trim();

        if (text && translations[text]) {
          el.innerText = isArabic ? text : translations[text];
        } else if (text && reverseTranslations[text]) {
          el.innerText = isArabic ? reverseTranslations[text] : text;
        }

        if (placeholder && translations[placeholder]) {
          el.placeholder = isArabic ? placeholder : translations[placeholder];
        } else if (placeholder && reverseTranslations[placeholder]) {
          el.placeholder = isArabic ? reverseTranslations[placeholder] : placeholder;
        }
      });

      const btn = document.querySelector('button[onclick="toggleTranslation()"]');
      isArabic = !isArabic;
    }

        const btn = document.getElementById("scrollTopBtn");

    window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
