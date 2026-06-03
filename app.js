const suppliers = [
  {
    id: "ural-milk",
    name: "УралМилк",
    category: "Молочная продукция",
    region: "Екатеринбург",
    coverage: "Свердловская область и УрФО",
    priceLabel: "средняя",
    priceValue: 2,
    minOrderLabel: "от 25 000 ₽",
    minOrderValue: 25000,
    delivery: true,
    certificates: true,
    leadTimeDays: 2,
    leadTimeLabel: "2 дня",
    sampleAvailable: true,
    regionMatchBoost: 10,
    phone: "+7 (343) 200-14-20",
    email: "sales@uralmilk.example",
    site: "https://example.com/uralmilk",
    source: "https://example.com/source/uralmilk",
    tags: ["молоко", "сыр", "сливки"],
    note: "Сильный вариант для HoReCa. Хорошо подходит, если важны стабильные отгрузки по Екатеринбургу.",
  },
  {
    id: "fresh-pack",
    name: "FreshPack",
    category: "Упаковка",
    region: "Екатеринбург",
    coverage: "Россия",
    priceLabel: "ниже средней",
    priceValue: 1,
    minOrderLabel: "от 10 000 ₽",
    minOrderValue: 10000,
    delivery: true,
    certificates: true,
    leadTimeDays: 1,
    leadTimeLabel: "1 день",
    sampleAvailable: true,
    regionMatchBoost: 10,
    phone: "+7 (343) 310-88-40",
    email: "hello@freshpack.example",
    site: "https://example.com/freshpack",
    source: "https://example.com/source/freshpack",
    tags: ["контейнеры", "пленка", "этикетки"],
    note: "Удобен как быстрый поставщик упаковки. Порог входа небольшой, можно быстро протестировать.",
  },
  {
    id: "volga-food",
    name: "Волга Фуд Снаб",
    category: "Ингредиенты",
    region: "Казань",
    coverage: "Поволжье и Урал",
    priceLabel: "средняя",
    priceValue: 2,
    minOrderLabel: "от 35 000 ₽",
    minOrderValue: 35000,
    delivery: true,
    certificates: true,
    leadTimeDays: 4,
    leadTimeLabel: "4 дня",
    sampleAvailable: false,
    regionMatchBoost: 5,
    phone: "+7 (843) 500-02-17",
    email: "trade@volgafood.example",
    site: "https://example.com/volgafood",
    source: "https://example.com/source/volgafood",
    tags: ["соусы", "сухие смеси", "ингредиенты"],
    note: "Хорош для сетевых закупок, если нужен ассортимент шире одного направления.",
  },
  {
    id: "sib-frozen",
    name: "СибФрост",
    category: "Заморозка",
    region: "Новосибирск",
    coverage: "Сибирь и Урал",
    priceLabel: "выше средней",
    priceValue: 3,
    minOrderLabel: "от 50 000 ₽",
    minOrderValue: 50000,
    delivery: true,
    certificates: true,
    leadTimeDays: 5,
    leadTimeLabel: "5 дней",
    sampleAvailable: false,
    regionMatchBoost: 3,
    phone: "+7 (383) 404-77-61",
    email: "zakaz@sibfrost.example",
    site: "https://example.com/sibfrost",
    source: "https://example.com/source/sibfrost",
    tags: ["овощи", "ягоды", "полуфабрикаты"],
    note: "Если нужен большой объем заморозки, вариант сильный, но входной чек выше среднего.",
  },
  {
    id: "farm-line",
    name: "Farm Line",
    category: "Овощи и зелень",
    region: "Челябинск",
    coverage: "Урал",
    priceLabel: "ниже средней",
    priceValue: 1,
    minOrderLabel: "от 15 000 ₽",
    minOrderValue: 15000,
    delivery: true,
    certificates: false,
    leadTimeDays: 2,
    leadTimeLabel: "2 дня",
    sampleAvailable: true,
    regionMatchBoost: 7,
    phone: "+7 (351) 777-19-12",
    email: "info@farmline.example",
    site: "https://example.com/farmline",
    source: "https://example.com/source/farmline",
    tags: ["салат", "зелень", "овощи"],
    note: "Хороший по цене локальный вариант, но по документам нужно уточнять заранее.",
  },
  {
    id: "bake-base",
    name: "Bake Base",
    category: "Ингредиенты",
    region: "Москва",
    coverage: "Россия",
    priceLabel: "выше средней",
    priceValue: 3,
    minOrderLabel: "от 20 000 ₽",
    minOrderValue: 20000,
    delivery: true,
    certificates: true,
    leadTimeDays: 3,
    leadTimeLabel: "3 дня",
    sampleAvailable: true,
    regionMatchBoost: 4,
    phone: "+7 (495) 120-90-33",
    email: "b2b@bakebase.example",
    site: "https://example.com/bakebase",
    source: "https://example.com/source/bakebase",
    tags: ["мука", "сиропы", "начинки"],
    note: "Подходит, если нужен широкий выбор для кондитерки и есть запас по срокам логистики.",
  },
  {
    id: "ural-meat",
    name: "УралМясоТорг",
    category: "Мясо и птица",
    region: "Екатеринбург",
    coverage: "Свердловская область",
    priceLabel: "средняя",
    priceValue: 2,
    minOrderLabel: "от 30 000 ₽",
    minOrderValue: 30000,
    delivery: true,
    certificates: true,
    leadTimeDays: 2,
    leadTimeLabel: "2 дня",
    sampleAvailable: false,
    regionMatchBoost: 10,
    phone: "+7 (343) 355-00-22",
    email: "trade@uralmeat.example",
    site: "https://example.com/uralmeat",
    source: "https://example.com/source/uralmeat",
    tags: ["говядина", "курица", "полуфабрикаты"],
    note: "Хороший локальный вариант для регулярных поставок без длинной логистики.",
  },
  {
    id: "pack-city",
    name: "Пакет Сити",
    category: "Упаковка",
    region: "Тюмень",
    coverage: "Урал и Западная Сибирь",
    priceLabel: "средняя",
    priceValue: 2,
    minOrderLabel: "от 18 000 ₽",
    minOrderValue: 18000,
    delivery: false,
    certificates: true,
    leadTimeDays: 3,
    leadTimeLabel: "3 дня",
    sampleAvailable: true,
    regionMatchBoost: 6,
    phone: "+7 (3452) 88-44-10",
    email: "office@packcity.example",
    site: "https://example.com/packcity",
    source: "https://example.com/source/packcity",
    tags: ["лотки", "короба", "стаканы"],
    note: "Неплохой вариант под самовывоз или работу через транспортную компанию.",
  },
  {
    id: "fish-point",
    name: "Fish Point",
    category: "Рыба и морепродукты",
    region: "Санкт-Петербург",
    coverage: "Россия",
    priceLabel: "выше средней",
    priceValue: 3,
    minOrderLabel: "от 40 000 ₽",
    minOrderValue: 40000,
    delivery: true,
    certificates: true,
    leadTimeDays: 4,
    leadTimeLabel: "4 дня",
    sampleAvailable: false,
    regionMatchBoost: 3,
    phone: "+7 (812) 660-90-81",
    email: "b2b@fishpoint.example",
    site: "https://example.com/fishpoint",
    source: "https://example.com/source/fishpoint",
    tags: ["лосось", "креветки", "филе"],
    note: "Имеет смысл для категорий, где нужен широкий выбор и понятный пакет документов.",
  },
  {
    id: "eco-drink",
    name: "Eco Drink Supply",
    category: "Напитки",
    region: "Екатеринбург",
    coverage: "Урал",
    priceLabel: "ниже средней",
    priceValue: 1,
    minOrderLabel: "от 12 000 ₽",
    minOrderValue: 12000,
    delivery: true,
    certificates: false,
    leadTimeDays: 1,
    leadTimeLabel: "1 день",
    sampleAvailable: true,
    regionMatchBoost: 10,
    phone: "+7 (343) 288-71-99",
    email: "start@ecodrink.example",
    site: "https://example.com/ecodrink",
    source: "https://example.com/source/ecodrink",
    tags: ["вода", "соки", "лимонады"],
    note: "Легко зайти по объему, но перед крупным заказом лучше проверить закрывающие документы.",
  },
  {
    id: "chef-market",
    name: "Chef Market B2B",
    category: "Готовая продукция",
    region: "Москва",
    coverage: "Россия",
    priceLabel: "средняя",
    priceValue: 2,
    minOrderLabel: "от 22 000 ₽",
    minOrderValue: 22000,
    delivery: true,
    certificates: true,
    leadTimeDays: 3,
    leadTimeLabel: "3 дня",
    sampleAvailable: false,
    regionMatchBoost: 4,
    phone: "+7 (495) 401-73-55",
    email: "sales@chefmarket.example",
    site: "https://example.com/chefmarket",
    source: "https://example.com/source/chefmarket",
    tags: ["готовые блюда", "десерты", "заготовки"],
    note: "Подходит, если нужно быстро закрыть ассортимент без долгой кухни на месте.",
  },
  {
    id: "local-grain",
    name: "Local Grain",
    category: "Бакалея",
    region: "Пермь",
    coverage: "Урал",
    priceLabel: "ниже средней",
    priceValue: 1,
    minOrderLabel: "от 8 000 ₽",
    minOrderValue: 8000,
    delivery: false,
    certificates: true,
    leadTimeDays: 4,
    leadTimeLabel: "4 дня",
    sampleAvailable: false,
    regionMatchBoost: 6,
    phone: "+7 (342) 200-16-62",
    email: "hello@localgrain.example",
    site: "https://example.com/localgrain",
    source: "https://example.com/source/localgrain",
    tags: ["крупы", "сахар", "мука"],
    note: "Удобный вариант для базовой бакалеи, если цена важнее сервиса доставки.",
  },
];

const presets = [
  {
    id: "all",
    label: "Свободный поиск",
    filters: { category: "Все категории", region: "Все регионы", delivery: "all", certified: "all", search: "" },
    weights: { price: 55, speed: 70, reliability: 85 },
  },
  {
    id: "coffee",
    label: "Кофейня / десерты",
    filters: { category: "Ингредиенты", region: "Все регионы", delivery: "yes", certified: "yes", search: "" },
    weights: { price: 45, speed: 65, reliability: 90 },
  },
  {
    id: "fast-launch",
    label: "Быстрый запуск точки",
    filters: { category: "Упаковка", region: "Екатеринбург", delivery: "yes", certified: "yes", search: "" },
    weights: { price: 50, speed: 95, reliability: 80 },
  },
  {
    id: "budget",
    label: "Экономный подбор",
    filters: { category: "Все категории", region: "Все регионы", delivery: "all", certified: "all", search: "" },
    weights: { price: 95, speed: 45, reliability: 65 },
  },
];

const state = {
  shortlist: loadShortlist(),
  notes: loadNotes(),
  activePreset: "all",
};

const elements = {
  search: document.querySelector("#search"),
  category: document.querySelector("#category"),
  region: document.querySelector("#region"),
  delivery: document.querySelector("#delivery"),
  certified: document.querySelector("#certified"),
  sort: document.querySelector("#sort"),
  resetFilters: document.querySelector("#resetFilters"),
  resultsCount: document.querySelector("#resultsCount"),
  shortlistCount: document.querySelector("#shortlistCount"),
  resultsGrid: document.querySelector("#resultsGrid"),
  comparisonGrid: document.querySelector("#comparisonGrid"),
  comparisonEmpty: document.querySelector("#comparisonEmpty"),
  cardTemplate: document.querySelector("#supplierCardTemplate"),
  presetStrip: document.querySelector("#presetStrip"),
  weightPrice: document.querySelector("#weightPrice"),
  weightSpeed: document.querySelector("#weightSpeed"),
  weightReliability: document.querySelector("#weightReliability"),
  weightPriceValue: document.querySelector("#weightPriceValue"),
  weightSpeedValue: document.querySelector("#weightSpeedValue"),
  weightReliabilityValue: document.querySelector("#weightReliabilityValue"),
  topSupplierName: document.querySelector("#topSupplierName"),
  topSupplierReason: document.querySelector("#topSupplierReason"),
  topLeadTime: document.querySelector("#topLeadTime"),
  marketSummary: document.querySelector("#marketSummary"),
  marketSummaryText: document.querySelector("#marketSummaryText"),
  decisionMemo: document.querySelector("#decisionMemo"),
};

init();

function init() {
  fillSelect(elements.category, ["Все категории", ...uniqueValues("category")]);
  fillSelect(elements.region, ["Все регионы", ...uniqueValues("region")]);
  renderPresets();

  [
    elements.search,
    elements.category,
    elements.region,
    elements.delivery,
    elements.certified,
    elements.sort,
    elements.weightPrice,
    elements.weightSpeed,
    elements.weightReliability,
  ].forEach((field) => field.addEventListener("input", onControlChange));

  elements.resetFilters.addEventListener("click", () => {
    applyPreset("all");
  });

  applyPreset("all");
}

function onControlChange() {
  state.activePreset = "";
  syncWeightLabels();
  highlightPreset();
  render();
}

function renderPresets() {
  presets.forEach((preset) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "preset-chip";
    button.dataset.presetId = preset.id;
    button.textContent = preset.label;
    button.addEventListener("click", () => applyPreset(preset.id));
    elements.presetStrip.append(button);
  });
}

function applyPreset(id) {
  const preset = presets.find((item) => item.id === id);
  if (!preset) {
    return;
  }

  state.activePreset = preset.id;
  elements.search.value = preset.filters.search;
  elements.category.value = preset.filters.category;
  elements.region.value = preset.filters.region;
  elements.delivery.value = preset.filters.delivery;
  elements.certified.value = preset.filters.certified;
  elements.sort.value = "score";
  elements.weightPrice.value = preset.weights.price;
  elements.weightSpeed.value = preset.weights.speed;
  elements.weightReliability.value = preset.weights.reliability;
  syncWeightLabels();
  highlightPreset();
  render();
}

function highlightPreset() {
  document.querySelectorAll(".preset-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.presetId === state.activePreset);
  });
}

function syncWeightLabels() {
  elements.weightPriceValue.textContent = elements.weightPrice.value;
  elements.weightSpeedValue.textContent = elements.weightSpeed.value;
  elements.weightReliabilityValue.textContent = elements.weightReliability.value;
}

function render() {
  const filtered = getSortedSuppliers(getFilteredSuppliers());
  elements.resultsCount.textContent = `${filtered.length} ${pluralize(filtered.length, ["вариант", "варианта", "вариантов"])}`;
  elements.shortlistCount.textContent = `${state.shortlist.length} / 3`;
  renderCards(filtered);
  renderComparison();
  renderInsights(filtered);
  renderDecisionMemo(filtered);
}

function getFilteredSuppliers() {
  const search = elements.search.value.trim().toLowerCase();
  const category = elements.category.value;
  const region = elements.region.value;
  const delivery = elements.delivery.value;
  const certified = elements.certified.value;

  return suppliers.filter((supplier) => {
    const searchable = [
      supplier.name,
      supplier.category,
      supplier.region,
      supplier.coverage,
      supplier.note,
      supplier.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    if (search && !searchable.includes(search)) {
      return false;
    }

    if (category !== "Все категории" && supplier.category !== category) {
      return false;
    }

    if (region !== "Все регионы" && supplier.region !== region) {
      return false;
    }

    if (delivery === "yes" && !supplier.delivery) {
      return false;
    }

    if (delivery === "no" && supplier.delivery) {
      return false;
    }

    if (certified === "yes" && !supplier.certificates) {
      return false;
    }

    if (certified === "no" && supplier.certificates) {
      return false;
    }

    return true;
  });
}

function getSortedSuppliers(list) {
  const sort = elements.sort.value;
  const category = elements.category.value;
  const region = elements.region.value;

  return [...list].sort((a, b) => {
    if (sort === "price") {
      return a.priceValue - b.priceValue || scoreSupplier(b, category, region) - scoreSupplier(a, category, region);
    }

    if (sort === "minOrder") {
      return a.minOrderValue - b.minOrderValue || scoreSupplier(b, category, region) - scoreSupplier(a, category, region);
    }

    if (sort === "leadTime") {
      return a.leadTimeDays - b.leadTimeDays || scoreSupplier(b, category, region) - scoreSupplier(a, category, region);
    }

    if (sort === "name") {
      return a.name.localeCompare(b.name, "ru");
    }

    return scoreSupplier(b, category, region) - scoreSupplier(a, category, region);
  });
}

function renderCards(list) {
  elements.resultsGrid.innerHTML = "";

  if (!list.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "По текущим фильтрам ничего не нашлось. Попробуй снять часть ограничений, поменять сценарий или скорректировать регион.";
    elements.resultsGrid.append(empty);
    return;
  }

  list.forEach((supplier) => {
    const fragment = elements.cardTemplate.content.cloneNode(true);
    const score = scoreSupplier(supplier, elements.category.value, elements.region.value);

    fragment.querySelector(".supplier-name").textContent = supplier.name;
    fragment.querySelector(".supplier-badge").textContent = supplier.category;
    fragment.querySelector(".supplier-subtitle").textContent = `${supplier.region} · ${supplier.coverage}`;
    fragment.querySelector(".score-pill").textContent = `${score} / 100`;
    fragment.querySelector(".stat-price").textContent = supplier.priceLabel;
    fragment.querySelector(".stat-min-order").textContent = supplier.minOrderLabel;
    fragment.querySelector(".stat-lead-time").textContent = supplier.leadTimeLabel;
    fragment.querySelector(".stat-certs").textContent = supplier.certificates ? "подтверждены" : "нужно уточнить";
    fragment.querySelector(".supplier-note").textContent = supplier.note;

    const tagsNode = fragment.querySelector(".supplier-tags");
    supplier.tags.forEach((tag) => {
      const tagNode = document.createElement("span");
      tagNode.textContent = tag;
      tagsNode.append(tagNode);
    });

    const flagsNode = fragment.querySelector(".supplier-flags");
    [
      supplier.delivery ? "есть доставка" : "без своей доставки",
      supplier.sampleAvailable ? "можно запросить образцы" : "образцы по запросу",
      supplier.certificates ? "есть документы" : "документы надо проверить",
    ].forEach((flag) => {
      const flagNode = document.createElement("span");
      flagNode.textContent = flag;
      flagsNode.append(flagNode);
    });

    const siteLink = fragment.querySelector(".supplier-site");
    const sourceLink = fragment.querySelector(".supplier-source");
    siteLink.href = supplier.site;
    sourceLink.href = supplier.source;

    const contactsNode = fragment.querySelector(".supplier-contacts");
    [supplier.phone, supplier.email].forEach((value) => {
      const contactNode = document.createElement("span");
      contactNode.textContent = value;
      contactsNode.append(contactNode);
    });

    const notesField = fragment.querySelector("textarea");
    notesField.value = state.notes[supplier.id] || "";
    notesField.addEventListener("input", (event) => {
      state.notes[supplier.id] = event.target.value;
      saveNotes(state.notes);
    });

    const toggleButton = fragment.querySelector(".shortlist-toggle");
    syncShortlistButton(toggleButton, supplier.id);
    toggleButton.addEventListener("click", () => {
      toggleShortlist(supplier.id);
    });

    elements.resultsGrid.append(fragment);
  });
}

function renderComparison() {
  const selected = suppliers
    .filter((supplier) => state.shortlist.includes(supplier.id))
    .sort((a, b) => scoreSupplier(b, elements.category.value, elements.region.value) - scoreSupplier(a, elements.category.value, elements.region.value));

  elements.comparisonGrid.innerHTML = "";
  elements.comparisonEmpty.hidden = selected.length > 0;

  selected.forEach((supplier, index) => {
    const card = document.createElement("article");
    card.className = "comparison-card";
    const score = scoreSupplier(supplier, elements.category.value, elements.region.value);
    card.innerHTML = `
      <div class="comparison-rank">Приоритет ${index + 1}</div>
      <h4>${supplier.name}</h4>
      <p>${supplier.category} · ${supplier.region}</p>
      <p>${buildRecommendation(supplier, score)}</p>
      <ul>
        <li>Рейтинг: ${score} / 100</li>
        <li>Мин. заказ: ${supplier.minOrderLabel}</li>
        <li>Lead time: ${supplier.leadTimeLabel}</li>
        <li>Документы: ${supplier.certificates ? "есть" : "нужно уточнить"}</li>
      </ul>
    `;
    elements.comparisonGrid.append(card);
  });
}

function renderInsights(list) {
  if (!list.length) {
    elements.topSupplierName.textContent = "-";
    elements.topSupplierReason.textContent = "Пока не видно подходящего кандидата. Попробуй ослабить фильтры или переключить сценарий.";
    elements.topLeadTime.textContent = "-";
    elements.marketSummary.textContent = "0 поставщиков";
    elements.marketSummaryText.textContent = "Сводка появится, когда найдутся подходящие варианты.";
    return;
  }

  const top = list[0];
  const withCerts = list.filter((supplier) => supplier.certificates).length;
  const avgMinOrder = Math.round(list.reduce((sum, supplier) => sum + supplier.minOrderValue, 0) / list.length);

  elements.topSupplierName.textContent = top.name;
  elements.topSupplierReason.textContent = buildRecommendation(top, scoreSupplier(top, elements.category.value, elements.region.value));
  elements.topLeadTime.textContent = top.leadTimeLabel;
  elements.marketSummary.textContent = `${withCerts} из ${list.length} с документами`;
  elements.marketSummaryText.textContent = `Средний порог входа по выборке около ${formatCurrency(avgMinOrder)}. Это помогает быстро понять, насколько рынок комфортен по объему первого заказа.`;
}

function renderDecisionMemo(list) {
  if (!list.length) {
    elements.decisionMemo.innerHTML = `
      <strong>Короткая записка по рынку</strong>
      <p>Сейчас фильтры слишком узкие. Я бы сначала ослабил одно ограничение: либо регион, либо документы.</p>
    `;
    return;
  }

  const topThree = list.slice(0, 3).map((supplier) => supplier.name).join(", ");
  const shortlistText = state.shortlist.length
    ? `В сравнении уже есть ${state.shortlist.length} ${pluralize(state.shortlist.length, ["поставщик", "поставщика", "поставщиков"])}.`
    : "Пока никого не добавили в сравнение, поэтому я бы начал с 2-3 верхних вариантов.";

  elements.decisionMemo.innerHTML = `
    <strong>Короткая записка по рынку</strong>
    <p>Если идти по верхней части выдачи, я бы начал с этих компаний: ${topThree}. ${shortlistText}</p>
  `;
}

function buildRecommendation(supplier, score) {
  if (score >= 88) {
    return "Хороший кандидат для первого контакта: сочетает адекватный входной порог, надежность и понятную логику поставки.";
  }

  if (score >= 76) {
    return "Рабочий вариант для второго круга. Выглядит уверенно, но один-два параметра стоит уточнить до финального выбора.";
  }

  return "Скорее запасной вариант. Может пригодиться, если у лидеров не совпадут сроки, условия или документы.";
}

function scoreSupplier(supplier, selectedCategory, selectedRegion) {
  const weights = getWeights();
  let score = 42;

  if (selectedCategory === "Все категории" || supplier.category === selectedCategory) {
    score += 12;
  }

  if (selectedRegion === "Все регионы" || supplier.region === selectedRegion) {
    score += supplier.regionMatchBoost;
  }

  score += normalize(weights.reliability, 22) * (supplier.certificates ? 1 : -0.35);
  score += normalize(weights.reliability, 10) * (supplier.delivery ? 1 : -0.45);
  score += normalize(weights.speed, 20) * leadTimeScore(supplier.leadTimeDays);
  score += normalize(weights.price, 18) * priceScore(supplier.priceValue);
  score += normalize(weights.price, 8) * minOrderScore(supplier.minOrderValue);

  if (supplier.sampleAvailable) {
    score += 3;
  }

  return Math.max(52, Math.min(98, Math.round(score)));
}

function getWeights() {
  return {
    price: Number(elements.weightPrice.value),
    speed: Number(elements.weightSpeed.value),
    reliability: Number(elements.weightReliability.value),
  };
}

function normalize(weight, maxBonus) {
  return (weight / 100) * maxBonus;
}

function priceScore(priceValue) {
  if (priceValue === 1) {
    return 1;
  }
  if (priceValue === 2) {
    return 0.35;
  }
  return -0.45;
}

function minOrderScore(minOrderValue) {
  if (minOrderValue <= 12000) {
    return 1;
  }
  if (minOrderValue <= 20000) {
    return 0.6;
  }
  if (minOrderValue <= 30000) {
    return 0.1;
  }
  return -0.4;
}

function leadTimeScore(days) {
  if (days <= 1) {
    return 1;
  }
  if (days <= 2) {
    return 0.7;
  }
  if (days <= 3) {
    return 0.3;
  }
  return -0.35;
}

function toggleShortlist(id) {
  if (state.shortlist.includes(id)) {
    state.shortlist = state.shortlist.filter((item) => item !== id);
  } else if (state.shortlist.length < 3) {
    state.shortlist = [...state.shortlist, id];
  }

  saveShortlist(state.shortlist);
  render();
}

function syncShortlistButton(button, id) {
  if (state.shortlist.includes(id)) {
    button.textContent = "Убрать из сравнения";
    button.disabled = false;
    return;
  }

  if (state.shortlist.length >= 3) {
    button.textContent = "Сравнение заполнено";
    button.disabled = true;
    return;
  }

  button.textContent = "Добавить в сравнение";
  button.disabled = false;
}

function uniqueValues(key) {
  return [...new Set(suppliers.map((supplier) => supplier[key]))].sort((a, b) => a.localeCompare(b, "ru"));
}

function fillSelect(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function formatCurrency(value) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
}

function pluralize(number, forms) {
  const mod10 = number % 10;
  const mod100 = number % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return forms[0];
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return forms[1];
  }

  return forms[2];
}

function loadShortlist() {
  try {
    return JSON.parse(localStorage.getItem("supplier-shortlist") || "[]");
  } catch {
    return [];
  }
}

function saveShortlist(list) {
  localStorage.setItem("supplier-shortlist", JSON.stringify(list));
}

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem("supplier-notes") || "{}");
  } catch {
    return {};
  }
}

function saveNotes(notes) {
  localStorage.setItem("supplier-notes", JSON.stringify(notes));
}
