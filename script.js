const whatsappNumber = "573123809372";
const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

const catalog = [
  {
    id: "bags",
    category: "Bolso piedras",
    title: "Bolsa Aurora",
    description: "Diseño artesanal con textura suave, ideal para salidas diarias o eventos especiales.",
    price: "Desde $150.000",
    tags: ["Hecho a mano", "Personalizable"],
    img: "images/20250725_163453.jpg",
  },
  {
    id: "bags",
    category: "Bolso macramé",
    title: "Bolsa Nécar",
    description: "Formato compacto con terminaciones elegantes y combinación de tonos neutros.",
    price: "Desde $100.000",
    tags: ["Compacta", "Versátil"],
    img: "images/IMG-20260713-WA0015.jpg",
  },
  {
    id: "bags",
    category: "Bolso macramé",
    title: "Bolsa Jade",
    description: "Pieza con presencia y carácter, pensada para uso diario y combinaciones cálidas.",
    price: "Desde $115.000",
    tags: ["Edición artesanal", "Pedido especial"],
    img: "images/IMG-20260710-WA0029.jpg",
  },
  {
    id: "bags",
    category: "Bolso macramé",
    title: "Bolsa Tierra",
    description: "Pieza con presencia y carácter, pensada para uso diario y combinaciones cálidas.",
    price: "Desde $150.000",
    tags: ["Edición artesanal", "Pedido especial"],
    img: "images/20250910_175414.jpg",
  },
  {
    id: "bags",
    category: "Bolso perlas",
    title: "Bolso Reflejo",
    description: "Accesorio pequeño para regalar o complementar bolsos y mochilas.",
    price: "Desde $100.000",
    tags: ["Regalo", "Detalle"],
    img: "images/20251027_101252.jpg",
  },
  {
    id: "bags",
    category: "Bolso macramé",
    title: "Bolso Noche",
    description: "Accesorio delicado con acabado artesanal y colores suaves.",
    price: "Desde $90.000",
    tags: ["Delicado", "Minimalista"],
    img: "images/20250904_170647.jpg",
  },
  {
    id: "accessories",
    category: "Accesorios",
    title: "Llavero Colombia",
    description: "Accesorio pequeño para regalar o complementar bolsos y mochilas.",
    price: "Desde $25.000",
    tags: ["Regalo", "Detalle"],
    img: "images/20260630_102454.jpg",
  },
  {
    id: "accessories",
    category: "Accesorios",
    title: "Aretes Mar",
    description: "Accesorio delicado con acabado artesanal y colores suaves.",
    price: "Desde $50.000",
    tags: ["Delicado", "Minimalista"],
    img: "images/IMG-20220921-WA0017.jpg",
  },
  {
    id: "accessories",
    category: "Accesorios",
    title: "Aretes Amor",
    description: "Accesorio delicado con acabado artesanal y colores suaves.",
    price: "Desde $50.000",
    tags: ["Delicado", "Minimalista"],
    img: "images/WhatsAppImage2026-08-13.jpeg",
  },
  {
    id: "accessories",
    category: "Decoración macramé",
    title: "Decoración Navidad",
    description: "Accesorio pequeño para regalar o complementar bolsos y mochilas.",
    price: "Desde $90.000",
    tags: ["Regalo", "Detalle"],
    img: "images/IMG-20251106-WA0020.jpg",
  },
  {
    id: "accessories",
    category: "Decoración macramé",
    title: "Decoración Quarzos",
    description: "Accesorio pequeño para regalar o complementar bolsos y mochilas.",
    price: "Desde $90.000",
    tags: ["Regalo", "Detalle"],
    img: "images/Screenshot_20240513_213757_Pinterest.jpg",
  },
  {
    id: "accessories",
    category: "Decoración macramé",
    title: "Decoración Jerarquía",
    description: "Accesorio pequeño para regalar o complementar bolsos y mochilas.",
    price: "Desde $70.000",
    tags: ["Regalo", "Detalle"],
    img: "images/IMG-20240509-WA0055.jpg",
  },
  {
    id: "accessories",
    category: "Decoración macramé",
    title: "Proteccion San Benito",
    description: "Accesorio pequeño para regalar o complementar bolsos y mochilas.",
    price: "Desde $40.000",
    tags: ["Regalo", "Detalle"],
    img: "images/20260622_125509.jpg",
  },
  {
    id: "accessories",
    category: "Decoración macramé",
    title: "Decoración Aura",
    description: "Accesorio pequeño para regalar o complementar bolsos y mochilas.",
    price: "Desde $60.000",
    tags: ["Regalo", "Detalle"],
    img: "images/u132OfU7656Ty1cH.jpg",
  },
  {
    id: "accessories",
    category: "Decoración macramé",
    title: "Decoración ()",
    description: "Accesorio pequeño para regalar o complementar bolsos y mochilas.",
    price: "Desde $40.000",
    tags: ["Regalo", "Detalle"],
    // img: "images/eTe722ZGM5qo4R3J.jpg",
    img: "images/20240413_224830.jpg",
  },
  {
    id: "custom",
    category: "Ropa personalizada",
    title: "Chaleco Macramé",
    description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
    price: "Cotización a medida",
    tags: ["A pedido", "Artesanal"],
    img: "images/20251017_094545_1.jpg",
  },
  {
    id: "custom",
    category: "Ropa personalizada",
    title: "Pechera Macramé",
    description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
    price: "Cotización a medida",
    tags: ["A pedido", "Artesanal"],
    img: "images/20251031_101241_1.jpg",
  },
  {
    id: "custom",
    category: "Ropa personalizada",
    title: "Blusa Macramé",
    description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
    price: "Cotización a medida",
    tags: ["A pedido", "Artesanal"],
    img: "images/20251224_142535_1.jpg",
  },
  {
    id: "custom",
    category: "Ropa personalizada",
    title: "Sombrero Macramé",
    description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
    price: "$30.000",
    tags: ["A pedido", "Artesanal"],
    img: "images/20260622_123316.jpg",
  },
  {
    id: "custom",
    category: "Ropa personalizada",
    title: "Pañuelo Tejido",
    description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
    price: "Cotización a medida",
    tags: ["A pedido", "Artesanal"],
    img: "images/20260129_184459.jpg",
  },
  {
    id: "accessories",
    category: "Pulsera Tejida",
    title: "Pulsera ",
    description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
    price: "$40.000",
    tags: ["A pedido", "Artesanal"],
    img: "images/Pulsera.jpg",
  },
  {
    id: "custom",
    category: "Detalles",
    title: "Cuadro Regalo",
    description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
    price: "$50.000",
    tags: ["A pedido", "Artesanal"],
    img: "images/20240530_225856.jpg",
  },
  {
    id: "custom",
    category: "Detalles",
    title: "Cuadro Regalo",
    description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
    price: "$50.000",
    tags: ["A pedido", "Artesanal"],
    img: "images/20250417_085033.jpg",
  },
  {
    id: "custom",
    category: "Ropa personalizada",
    title: "Chaqueta personalizada",
    description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
    price: "Cotización a medida",
    tags: ["A pedido", "Artesanal"],
    img: "images/20260420_140557.jpg",
  },
  // {
  //   id: "custom",
  //   category: "Ropa personalizada",
  //   title: "Chaqueta personalizada",
  //   description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
  //   price: "Cotización a medida",
  //   tags: ["A pedido", "Artesanal"],
  //   img: "images/IMG-20200509-WA0008.jpg",
  // },
];

const categories = [
  { key: "all", label: "Todo" },
  { key: "bags", label: "Bolsas" },
  { key: "accessories", label: "Accesorios" },
  { key: "custom", label: "Personalización" },
];

const courses = [
  {
    title: "Curso inicial de macramé",
    date: "15 de septiembre de 2026",
    location: "Bogotá, Colombia",
    description:
      "Aprende los nudos básicos, la estructura de una pieza y cómo crear tus primeras bolsas y accesorios con materiales sencillos y un enfoque práctico.",
    img: "images/20260622_125509.jpg",
  },
];

const categoryFilters = document.getElementById("category-filters");
const catalogGrid = document.getElementById("catalog-grid");
const coursesGrid = document.getElementById("courses-grid");
const inquiryForm = document.getElementById("inquiry-form");
const headerWhatsapp = document.getElementById("header-whatsapp");
const heroWhatsapp = document.getElementById("hero-whatsapp");
const footerWhatsapp = document.getElementById("footer-whatsapp");

function buildWhatsappLink(message) {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

function setPrimaryLinks() {
  const baseMessage = "Hola, quiero consultar por By My Hand.";
  const url = buildWhatsappLink(baseMessage);

  [headerWhatsapp, heroWhatsapp, footerWhatsapp].forEach((link) => {
    if (link) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer";
    }
  });
}

function renderFilters(activeKey = "all") {
  if (!categoryFilters) return;

  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          type="button"
          data-filter="${category.key}"
          class="filter-btn rounded-full px-5 py-2 text-sm font-semibold transition ${
            category.key === activeKey
              ? "bg-cocoa text-white shadow-soft"
              : "bg-white text-cocoa ring-1 ring-black/5 hover:bg-cocoa hover:text-white"
          }"
        >
          ${category.label}
        </button>
      `,
    )
    .join("");
}

function renderCatalog(filter = "all") {
  if (!catalogGrid) return;

  const filteredItems = filter === "all" ? catalog : catalog.filter((item) => item.id === filter);

  catalogGrid.innerHTML = filteredItems
    .map(
      (item) => `
        <article class="card-float overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-black/5">
          <div class="overflow-hidden bg-sand">
            <img
              src="${item.img || "images/20240530_225936.jpg"}"
              alt="${item.title}"
              class="w-90 h-90 object-cover object-center transition duration-300 hover:scale-105"
            />
          </div>
          <div class="p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cocoa/70">${item.category}</p>
            <h3 class="mt-3 font-display text-3xl text-ink">${item.title}</h3>
            <p class="mt-3 text-sm leading-6 text-cocoa/80">${item.description}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              ${item.tags
                .map(
                  (tag) => `<span class="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-cocoa">${tag}</span>`,
                )
                .join("")}
            </div>
            <div class="mt-5 flex items-center justify-between gap-3">
              <p class="text-sm font-semibold text-cocoa">${item.price}</p>
              <a
                href="${buildWhatsappLink(`Hola, me interesa ${item.title} de By My Hand.`)}"
                target="_blank"
                rel="noreferrer"
                class="rounded-full bg-cocoa px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink"
              >
                Pedir
              </a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCourses() {
  if (!coursesGrid) return;

  coursesGrid.innerHTML = courses
    .map(
      (course) => `
        <article class="rounded-[2rem] bg-white shadow-soft ring-1 ring-black/5 overflow-hidden">
          <div class="flex flex-col md:flex-row gap-6 p-6">
            <!-- Left: Course Image -->
            <div class="flex-shrink-0">
              <div class="h-48 w-48 overflow-hidden rounded-2xl">
                <img
                  src="${course.img || "images/20260622_125509.jpg"}"
                  alt="${course.title}"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>

            <!-- Center: Course Info -->
            <div class="flex-1">
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-clay">Curso</p>
              <h3 class="mt-2 font-display text-3xl text-ink">${course.title}</h3>
              <p class="mt-4 text-base leading-7 text-cocoa/80">${course.description}</p>
              <div class="mt-5 rounded-2xl bg-sand p-4 ring-1 ring-black/5 inline-block">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa/70">Ubicación</p>
                <p class="mt-2 text-sm font-medium text-cocoa">${course.location}</p>
              </div>
            </div>

            <!-- Right: Calendar Date Card + CTA -->
            <div class="flex flex-col items-center gap-4 md:w-auto">
              <div class="rounded-2xl bg-gradient-to-br from-clay to-cocoa p-6 text-center text-white shadow-soft w-40 md:w-auto">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Próximo curso</p>
                <p class="mt-3 font-display text-2xl leading-tight">${course.date}</p>
              </div>
              <a
                href="${buildWhatsappLink(`Hola, quiero inscribirme al curso ${course.title}.`)}"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center justify-center rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink whitespace-nowrap"
              >
                Inscribirme
              </a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function setActiveFilterButton(activeKey) {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    const isActive = button.dataset.filter === activeKey;
    button.className = `filter-btn rounded-full px-5 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-cocoa text-white shadow-soft"
        : "bg-white text-cocoa ring-1 ring-black/5 hover:bg-cocoa hover:text-white"
    }`;
  });
}

categoryFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;

  const activeFilter = button.dataset.filter || "all";
  renderCatalog(activeFilter);
  setActiveFilterButton(activeFilter);
});

inquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(inquiryForm);
  const name = String(formData.get("name") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const safeName = name || "Cliente";
  const safeMessage = message || "Quiero recibir más información sobre catálogo y personalización.";

  window.open(
    buildWhatsappLink(`Hola, soy ${safeName}. ${safeMessage}`),
    "_blank",
    "noreferrer",
  );
});

setPrimaryLinks();
renderFilters();
renderCatalog();
renderCourses();
