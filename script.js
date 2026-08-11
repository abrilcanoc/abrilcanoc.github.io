const whatsappNumber = "573123809372";
const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

const catalog = [
  {
    id: "bags",
    category: "Bolsas de macramé",
    title: "Bolsa Aurora",
    description: "Diseño artesanal con textura suave, ideal para salidas diarias o eventos especiales.",
    price: "Desde $120.000",
    tags: ["Hecho a mano", "Personalizable"],
  },
  {
    id: "bags",
    category: "Bolsas de macramé",
    title: "Bolsa Nécar",
    description: "Formato compacto con terminaciones elegantes y combinación de tonos neutros.",
    price: "Desde $95.000",
    tags: ["Compacta", "Versátil"],
  },
  {
    id: "bags",
    category: "Bolsas de macramé",
    title: "Bolsa Tierra",
    description: "Pieza con presencia y carácter, pensada para uso diario y combinaciones cálidas.",
    price: "Desde $135.000",
    tags: ["Edición artesanal", "Pedido especial"],
  },
  {
    id: "accessories",
    category: "Accesorios",
    title: "Llavero Sol",
    description: "Accesorio pequeño para regalar o complementar bolsos y mochilas.",
    price: "Desde $18.000",
    tags: ["Regalo", "Detalle"],
  },
  {
    id: "accessories",
    category: "Accesorios",
    title: "Brazalete Arena",
    description: "Accesorio delicado con acabado artesanal y colores suaves.",
    price: "Desde $25.000",
    tags: ["Delicado", "Minimalista"],
  },
  {
    id: "custom",
    category: "Ropa personalizada",
    title: "Chaqueta personalizada",
    description: "Intervención de ropa con bordados, detalles o aplicaciones hechas a medida.",
    price: "Cotización a medida",
    tags: ["A pedido", "Artesanal"],
  },
];

const categories = [
  { key: "all", label: "Todo" },
  { key: "bags", label: "Bolsas" },
  { key: "accessories", label: "Accesorios" },
  { key: "custom", label: "Personalización" },
];

const categoryFilters = document.getElementById("category-filters");
const catalogGrid = document.getElementById("catalog-grid");
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
          <div class="flex h-44 items-end bg-gradient-to-br from-clay/20 via-white to-cocoa/10 p-6">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cocoa/70">${item.category}</p>
              <h3 class="mt-2 font-display text-3xl text-ink">${item.title}</h3>
            </div>
          </div>
          <div class="space-y-4 p-6">
            <p class="text-sm leading-6 text-cocoa/80">${item.description}</p>
            <div class="flex flex-wrap gap-2">
              ${item.tags
                .map(
                  (tag) => `<span class="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-cocoa">${tag}</span>`,
                )
                .join("")}
            </div>
            <div class="flex items-center justify-between gap-3 pt-2">
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
