const pageData = {
  about: {
    kicker: "HAKKIMIZDA",
    title: "Sanayinin sorularına bilimsel yanıtlar.",
    lead: "Karabük'ün demir-çelik birikimini modern araştırma, test ve danışmanlık hizmetleriyle geleceğe taşıyoruz.",
    items: [["Genel Bakış", "Endüstri verilerini karar vericiler, demir çelik şirketleri ve kamu için yorumluyor; üretim süreçleri, enerji verimliliği ve sürdürülebilir dönüşüm için uygulanabilir öneriler geliştiriyoruz."], ["Misyonumuz", "Bilimsel bilgiyi sanayiye aktararak güvenilir test sonuçları, nitelikli araştırma ve ölçülebilir sürdürülebilirlik çıktıları üretmek."], ["Değerlerimiz", "Bilimsel etik, tarafsızlık, gizlilik, yenilikçilik, sürdürülebilirlik ve iş birliği bütün çalışmalarımızın temelini oluşturur."]]
  },
  services: {
    kicker: "HİZMETLERİMİZ",
    title: "Üretimin her adımında yanınızdayız.",
    lead: "Talebinizi doğru anlayıp numune kabulünden teknik raporlamaya kadar şeffaf ve izlenebilir bir süreç yürütüyoruz.",
    items: [["Analiz ve Test", "Kimyasal, mekanik, mikroyapı ve malzeme karakterizasyonu. Her çalışma için numune koşullarına uygun standart ve yöntem belirlenir."], ["Sanayiye Yönelik Ar-Ge", "Yeni ürün ve süreç geliştirme, teknik fizibilite, prototip doğrulama ve sonuç raporlaması."], ["Eğitim ve Danışmanlık", "Çelik teknolojileri, kalite, sürdürülebilir üretim ve test yöntemlerinde kurumunuza özel programlar."]]
  },
  labs: {
    kicker: "LABORATUVARLAR",
    title: "Güvenilir sonuçlar, güçlü altyapı.",
    lead: "Modern cihaz altyapımız ve uzman personelimizle malzemelerin mekanik, fiziksel, kimyasal ve mikroyapısal özelliklerini inceliyoruz.",
    items: [["Statik Test", "Çekme, basma, eğme ve sertlik testleriyle malzeme performansını değerlendiriyoruz."], ["Dinamik Test", "Darbe, yorulma ve tekrarlı yük testleri gerçekleştiriyoruz."], ["Spektral Analiz", "Metalik malzemelerin elementel bileşimini hızlı ve hassas biçimde belirliyoruz."], ["SEM / XRD-XRF", "Yüzey morfolojisi, faz yapısı ve elementel bileşim analizleri yapıyoruz."], ["Metalografi", "Tane yapısı, faz analizi, inklüzyon ve ısıl işlem sonrası mikroyapıyı inceliyoruz."], ["Toz Metalurjisi", "Metal tozlarının karakterizasyonu, sinterlenmesi ve performans testleri."]]
  },
  reporting: {
    kicker: "RAPORLAMALAR",
    title: "Veriden karara, anlamlı raporlar.",
    lead: "Endüstri verilerini karar vericiler için yorumluyor, sürdürülebilir dönüşümü ölçülebilir hale getiriyoruz.",
    items: [["SKDM Raporlama", "Demir-çelik, alüminyum, çimento, gübre, elektrik ve hidrojen sektörleri için emisyon verisi ve teknik dokümantasyon hazırlanır."], ["Karbon Ayak İzi", "Kurumsal ve ürün bazlı emisyon kaynakları belirlenir, hesaplanır ve azaltım yol haritası oluşturulur."], ["Sürdürülebilirlik", "Enerji, su, atık, emisyon ve performans göstergeleri bütüncül bir yaklaşımla raporlanır."]]
  },
  news: {
    kicker: "DUYURULAR VE HABERLER",
    title: "Enstitüden güncel.",
    lead: "Araştırma, iş birlikleri, etkinlikler ve hizmet duyurularımızı buradan takip edebilirsiniz.",
    items: [["Uluslararası iş birlikleri güçleniyor", "Karabük Üniversitesi farklı ülkelerden üniversitelerle eğitim, araştırma ve proje çalışmalarını geliştiriyor."], ["Bartın OSB'de su verimliliği", "Su kaynaklarının daha verimli kullanılması ve sürdürülebilir su yönetimi için teknik değerlendirmeler gerçekleştirildi."], ["Analiz ve test hizmetleri", "Numune kabulü ve laboratuvar hizmetleri için Enstitümüzle iletişime geçebilirsiniz."]]
  },
  contact: {
    kicker: "İLETİŞİM",
    title: "Birlikte üretelim.",
    lead: "Proje, analiz, numune ve iş birliği talepleriniz için bize ulaşın.",
    items: [["E-posta", "dce@karabuk.edu.tr"], ["Numune Kabul Birimi", "(370) 418 60 29"], ["Adres", "Karabük Üniversitesi Demir Çelik Enstitüsü, Merkez Kampüsü"]]
  }
};

function header() {
  return `<div class="top"><div class="wrap"><span>Karabük Üniversitesi · Demir Çelik Enstitüsü</span><span class="right">dce@karabuk.edu.tr · +90 (370) 418 60 29</span></div></div>
  <header class="head"><div class="wrap"><a class="brand" href="index.html"><span class="logo">DC<i>İ</i></span><span><strong>DEMİR ÇELİK</strong><small>ENSTİTÜSÜ</small></span></a><button class="mobile-btn" id="mobileBtn">☰</button><nav class="nav" id="nav"><a href="index.html">Ana Sayfa</a><a href="about.html">Enstitümüz</a><a href="services.html">Hizmetler</a><a href="labs.html">Laboratuvarlar</a><a href="reporting.html">Raporlamalar</a><a href="news.html">Haberler</a><a class="contact-btn" href="contact.html">İletişim ↗</a></nav></div></header>`;
}

function footer() {
  return `<footer class="footer"><div class="wrap"><a class="brand" href="index.html"><span class="logo">DC<i>İ</i></span><span><strong style="color:#fff">DEMİR ÇELİK</strong><small>ENSTİTÜSÜ</small></span></a><div class="footer-links"><a href="about.html">Hakkımızda</a><a href="services.html">Hizmetler</a><a href="labs.html">Laboratuvarlar</a><a href="reporting.html">Raporlamalar</a><a href="news.html">Haberler</a><a href="contact.html">İletişim</a></div><span>© 2026 KBU DÇE</span></div></footer>`;
}

function detailPage(key) {
  const data = pageData[key] || pageData.about;
  const cards = data.items.map((item, index) => `<article class="detail-card"><span>0${index + 1}</span><h3>${item[0]}</h3><p>${item[1]}</p><a href="contact.html">Bilgi ve teklif al ↗</a></article>`).join("");
  return `${header()}<main><section class="page-hero"><div class="wrap"><div class="eyebrow">${data.kicker}</div><h1>${data.title}</h1><p>${data.lead}</p></div></section><section class="section detail-section"><div class="wrap"><div class="detail-grid">${cards}</div>${key === "contact" ? contactForm() : `<div class="page-note"><strong>Uzman ekibimizle iletişime geçin.</strong><span>Talebinizi birlikte değerlendirip en doğru yöntemi ve süreci planlayalım.</span><a class="btn rust" href="contact.html">İletişime geç ↗</a></div>`}</div></section></main>${footer()}`;
}

function contactForm() {
  return `<form class="form contact-form" id="contactForm"><h3>Mesaj gönderin</h3><label>Ad Soyad<input required name="name" placeholder="Adınız ve soyadınız"></label><label>E-posta<input required type="email" name="email" placeholder="ornek@firma.com"></label><label>Konu<select><option>Analiz ve test talebi</option><option>Numune kabulü</option><option>Ar-Ge iş birliği</option></select></label><label>Mesajınız<textarea required rows="5" placeholder="Talebinizi yazın"></textarea></label><button class="btn rust">Mesajı gönder ↗</button><p class="status" id="formStatus"></p></form>`;
}

const page = document.body.dataset.page;
if (page && page !== "home") document.body.insertAdjacentHTML("afterbegin", detailPage(page));
if (page && page !== "home") document.querySelector(".page-content")?.remove();

async function loadNewsFromBackend() {
  if (page !== "news" || window.location.protocol === "file:") return;
  try {
    const response = await fetch("api.php");
    if (!response.ok) throw new Error("Haber servisi yanıt vermedi.");
    const items = await response.json();
    const container = document.querySelector(".detail-grid");
    if (!container || !Array.isArray(items)) return;
    container.innerHTML = items.map((item, index) => `
      <article class="detail-card">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <small>${item.category} · ${item.date}</small>
        <a href="contact.html">Bilgi ve teklif al ↗</a>
      </article>
    `).join("");
  } catch (error) {
    console.error(error);
  }
}

loadNewsFromBackend();
document.getElementById("mobileBtn")?.addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));
document.getElementById("contactForm")?.addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("formStatus").textContent = "Mesajınız alındı. En kısa sürede dönüş yapacağız.";
  event.target.reset();
});
