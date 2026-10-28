/**
 * RootZe Lightweight Bilingual i18n Engine
 */
(function(window) {
  'use strict';

  var translations = {
    en: {
      "brand.name": "RootZe",
      "brand.tagline": "New Energy Solutions",
      "nav.home": "Home",
      "nav.battery": "Battery & ESS",
      "nav.ev": "EV Vehicles",
      "nav.advantages": "Advantages",
      "nav.track": "Track Record",
      "nav.contact": "Contact",
      "nav.quote": "Request Quote",

      "hero.badge": "Global New Energy Supply Chain",
      "hero.title": "Empowering the Green Future: Tier-1 EV Batteries & Electric Vehicle Distribution",
      "hero.subtitle": "RootZe delivers factory-direct prismatic LFP cells, NMC modules, C&I energy storage systems, and electric vehicle fleet distribution with international hazardous-goods compliance.",
      "hero.feature1": "Tier-1 Cell Direct Supply",
      "hero.feature2": "UN38.3 & MSDS Compliance",
      "hero.feature3": "Worldwide Shipping Logistics",
      "hero.cta_battery": "Explore Battery Solutions",
      "hero.cta_contact": "Request a Quote",

      "subheading.battery": "Core Solutions",
      "subheading.ev": "Vehicle Channels",
      "subheading.adv": "Why RootZe",
      "subheading.track": "Global Presence",
      "subheading.contact": "Connect With Us",

      "battery.title": "Core Power Battery & Energy Storage Solutions",
      "battery.subtitle": "Industrial-grade power battery cells, battery packs, and scalable energy storage cabinets engineered for extreme safety, high energy density, and extended cycle life.",
      "battery.cell_title": "Prismatic LFP & NMC Traction Cells",
      "battery.cell_desc": "Tier-1 Grade-A lithium iron phosphate and ternary lithium prismatic cells. Designed for EV conversion, commercial vehicles, and heavy-duty battery pack assembly.",
      "battery.cell_spec1": "Chemistry: LFP / NMC",
      "battery.cell_spec2": "Capacity: 100Ah - 314Ah",
      "battery.cell_spec3": "Cycle Life: 4000 - 6000 cycles",
      "battery.ess_ci_title": "Commercial & Industrial ESS",
      "battery.ess_ci_desc": "Modular 100kWh–2MWh outdoor air/liquid-cooled energy storage containers. Ideal for peak shaving, solar-plus-storage, and microgrid installations.",
      "battery.ess_ci_spec1": "Config: 100kWh - 2MWh Modular",
      "battery.ess_ci_spec2": "Cooling: Smart Liquid / Air Cooling",
      "battery.ess_ci_spec3": "Cert: CE / IEC62619 / UL9540A",
      "battery.ess_res_title": "Residential ESS Systems",
      "battery.ess_res_desc": "High-safety 5kWh–20kWh stackable and wall-mounted low/high voltage home battery systems compatible with leading solar hybrid inverters.",
      "battery.ess_res_spec1": "Capacity: 5.12kWh - 20.48kWh",
      "battery.ess_res_spec2": "Voltage: 51.2V / High Voltage",
      "battery.ess_res_spec3": "Compatibility: Growatt, Deye, Solis",
      "battery.btn_spec": "View Specifications",
      "battery.btn_inquire": "Inquire Price",

      "ev.title": "Electric Vehicle Fleet & Channel Distribution",
      "ev.subtitle": "Providing bulk vehicle allocation, left/right hand drive configurations, and comprehensive export customs logistics for international car dealerships and fleet operators.",
      "ev.passenger_title": "Pure Electric Passenger Sedans & SUVs",
      "ev.passenger_desc": "High-efficiency pure electric models with 400km–650km CLTC range, rapid DC fast charging, and competitive export wholesale pricing.",
      "ev.commercial_title": "Commercial Logistics Vans & Trucks",
      "ev.commercial_desc": "Zero-emission city delivery vans and light-duty electric trucks built for high cargo volume, lower operating costs, and long fleet durability.",
      "ev.fleet_title": "Tailored Fleet & Special Purpose EVs",
      "ev.fleet_desc": "Customized procurement solutions for municipal fleets, taxi networks, and commercial operators with bulk factory allocation guarantees.",

      "adv.title": "Why Global Partners Choose RootZe",
      "adv.subtitle": "A dependable supply chain gateway bridging leading battery manufacturers with international buyers through verified compliance and transparent pricing.",
      "adv.adv1_title": "Tier-1 Factory Direct Supply",
      "adv.adv1_desc": "Authorized distribution channels guaranteeing 100% genuine Grade-A cells with factory batch testing reports and serial traceability.",
      "adv.adv2_title": "Hazardous Logistics & Compliance",
      "adv.adv2_desc": "Comprehensive UN38.3, MSDS, CE, and RoHS certifications with licensed Class 9 hazardous ocean container and air freight booking.",
      "adv.adv3_title": "Flexible MOQ & Customization",
      "adv.adv3_desc": "From sample batch testing to high-volume container shipments. We support customized battery packaging, busbars, and BMS integration.",
      "adv.adv4_title": "End-to-End Export Execution",
      "adv.adv4_desc": "Full support for EXW, FOB, and CIF terms with custom clearance documentation, certificates of origin, and responsive transit tracking.",

      "track.title": "Proven Distribution Track Record",
      "track.subtitle": "Delivering clean energy solutions to partners across five continents.",
      "track.stat1_num": "50+",
      "track.stat1_label": "Global Export Destinations",
      "track.stat2_num": "2.5+",
      "track.stat2_label": "GWh Distributed Battery Capacity",
      "track.stat3_num": "100%",
      "track.stat3_label": "Factory Inspection Passed",
      "track.stat4_num": "24/7",
      "track.stat4_label": "Dedicated Multilingual Desk",

      "contact.title": "Request a Distribution Quote",
      "contact.subtitle": "Connect with our international sales and engineering team for wholesale tier pricing, spec sheets, and delivery timelines.",
      "contact.form_name": "Full Name",
      "contact.form_company": "Company Name",
      "contact.form_email": "Business Email / WhatsApp",
      "contact.form_category": "Interested Category",
      "contact.cat_opt1": "Power Battery Cells & Modules",
      "contact.cat_opt2": "Commercial & Industrial ESS",
      "contact.cat_opt3": "Residential ESS Systems",
      "contact.cat_opt4": "Electric Vehicles (Sedan/SUV/Van)",
      "contact.cat_opt5": "Other Custom Solutions",
      "contact.form_quantity": "Estimated Quantity / Delivery Country",
      "contact.form_message": "Tell us about your project requirements...",
      "contact.send": "Submit B2B Inquiry",
      "contact.whatsapp_cta": "Chat with Us on WhatsApp",
      "contact.whatsapp_sub": "Direct line for instant wholesale quotes and stock availability",
      "contact.whatsapp_btn": "Start Instant Chat",
      "contact.ph_name": "John Doe",
      "contact.ph_company": "Global Energy Corp",
      "contact.ph_email": "john@company.com / +1 234 567 890",
      "contact.ph_quantity": "e.g. 500 kWh or 20 EV units to Germany",
      "contact.ph_message": "Please describe target models, delivery dates, or custom specs...",
      "contact.modal_btn_mail": "Open Email Client",
      "contact.modal_btn_wa": "Send via WhatsApp",
      "contact.modal_btn_copy": "Copy Inquiry Text",
      "contact.modal_copied": "Copied to clipboard!",
      "contact.direct_info_title": "Contact Information",
      "contact.email_label": "Official Business Email",
      "contact.email_val": "sales@rootze.com",
      "contact.office_label": "Global Operations Hub",
      "contact.office_val": "International Trade Center, New Energy Supply Chain Park",
      "contact.success_title": "Inquiry Prepared Successfully!",
      "contact.success_desc": "Your inquiry details have been formatted. Click below to launch your email client or chat directly on WhatsApp.",

      "modal.spec_title": "Product Technical Specifications",
      "modal.close": "Close",
      "modal.btn_inquire": "Inquire About This Model",

      "footer.about_title": "About RootZe",
      "footer.about_text": "RootZe is a premier global distributor of new energy power batteries, energy storage systems, and electric vehicles, committed to accelerating the clean mobility transition.",
      "footer.quick_links": "Quick Links",
      "footer.products_title": "Product Categories",
      "footer.copyright": "© 2026 RootZe New Energy. All rights reserved. Deployed on GitHub Pages."
    },
    zh: {
      "brand.name": "RootZe",
      "brand.tagline": "新能源解决方案",
      "nav.home": "首页",
      "nav.battery": "电池与储能",
      "nav.ev": "新能源整车",
      "nav.advantages": "核心优势",
      "nav.track": "实力指标",
      "nav.contact": "商业合作",
      "nav.quote": "立即询价",

      "hero.badge": "全球新能源供应链核心服务商",
      "hero.title": "赋能绿色未来：全球领先的新能源电芯、储能系统与电动汽车分销商",
      "hero.subtitle": "RootZe 提供原厂直供的磷酸铁锂（LFP）方形电芯、三元锂模组、工商业储能柜及新能源纯电车队分销，具备完备的国际危险品出海合规资质。",
      "hero.feature1": "一线大厂电芯源头直供",
      "hero.feature2": "UN38.3 & MSDS 危险品合规",
      "hero.feature3": "全球海空运物流保畅交付",
      "hero.cta_battery": "探索电池方案",
      "hero.cta_contact": "商务洽谈",

      "subheading.battery": "核心业务方案",
      "subheading.ev": "整车分销通道",
      "subheading.adv": "为什么选择 RootZe",
      "subheading.track": "全球分销足迹",
      "subheading.contact": "联系我们",

      "battery.title": "核心动力电池与储能系统方案",
      "battery.subtitle": "工业级动力电芯、定制电池 PACK 与模块化储能系统，具备高安全性、高能量密度与超长循环寿命。",
      "battery.cell_title": "动力方形 LFP 与三元锂电芯",
      "battery.cell_desc": "一线大厂 A 规磷酸铁锂与三元锂方形单体电芯，专为电动乘用车、商用改装及重型电池包 PACK 研发定制。",
      "battery.cell_spec1": "材料体系：LFP 磷酸铁锂 / 三元锂",
      "battery.cell_spec2": "容量区间：100Ah - 314Ah 单体",
      "battery.cell_spec3": "循环寿命：4000 - 6000 次深循环",
      "battery.ess_ci_title": "工商业储能系统（C&I ESS）",
      "battery.ess_ci_desc": "100kWh 至 2MWh 模块化户外液冷/风冷储能柜，支持峰谷套利、微电网配储及光储一体化工程。",
      "battery.ess_ci_spec1": "容量配置：100kWh - 2MWh 模块化",
      "battery.ess_ci_spec2": "温控方案：智能液冷 / 强制风冷",
      "battery.ess_ci_spec3": "认证标准：CE / IEC62619 / UL9540A",
      "battery.ess_res_title": "户用储能系统（Residential ESS）",
      "battery.ess_res_desc": "5kWh 至 20kWh 壁挂式及堆叠式低压/高压家庭储能系统，广泛兼容全球主流光伏逆变器品牌。",
      "battery.ess_res_spec1": "电池容量：5.12kWh - 20.48kWh",
      "battery.ess_res_spec2": "电压等级：51.2V / 高压串联",
      "battery.ess_res_spec3": "适配逆变器：古瑞瓦特、德业、锦浪等",
      "battery.btn_spec": "查看规格书",
      "battery.btn_inquire": "获取报价",

      "ev.title": "新能源汽车整车渠道分销",
      "ev.subtitle": "面向海外车商与车队运营商，提供主流纯电车型配额直供、左右舵适配、报关出口及滚装海运全流程支持。",
      "ev.passenger_title": "纯电乘用轿车与家用 SUV",
      "ev.passenger_desc": "涵盖 400km–650km CLTC 续航的主流高性价比纯电车型，支持高压快充与批量外贸批发折扣。",
      "ev.commercial_title": "城市商用物流车与轻卡",
      "ev.commercial_desc": "专为海外城市配送与车队运营打造的高载重纯电面包车和轻量化货车，显著削减全生命周期运营成本。",
      "ev.fleet_title": "车队集采与特种纯电定制",
      "ev.fleet_desc": "针对出租车网络、公共出行与企业车队，提供批量工厂配额保障与定制化零配件海外保障方案。",

      "adv.title": "选择 RootZe 的核心优势",
      "adv.subtitle": "以合规、透明、可靠的中国新能源制造供应链，无缝连接全球采购商与产业前沿。",
      "adv.adv1_title": "一线原厂正品货源直供",
      "adv.adv1_desc": "直接对接国内锂电头部大厂，保证 100% 正品 A 规电芯，提供出厂批次质检与完整追溯码。",
      "adv.adv2_title": "危险品国际物流与认证资质",
      "adv.adv2_desc": "拥有完备的 UN38.3、MSDS、CE、RoHS 认证，具备合法 Class 9 类锂电危包订舱与出海清关能力。",
      "adv.adv3_title": "柔性起订量与定制化服务",
      "adv.adv3_desc": "支持工程打样、小批量试订至整柜大宗批发，协助客户进行汇流排定制、BMS 通信匹配与模组 PACK。",
      "adv.adv4_title": "端到端专业外贸交付",
      "adv.adv4_desc": "支持 EXW、FOB、CIF 等多种贸易条款，协助办理产地证、商检与国际物流实时动态跟踪。",

      "track.title": "全球分销交付实力看板",
      "track.subtitle": "为全球五大洲新能源合作伙伴持续提供高可靠的清洁动力与储能产品支持。",
      "track.stat1_num": "50+",
      "track.stat1_label": "出海覆盖国家与地区",
      "track.stat2_num": "2.5+",
      "track.stat2_label": "GWh 年度分销电池容量",
      "track.stat3_num": "100%",
      "track.stat3_label": "出厂原装质检合格率",
      "track.stat4_num": "24/7",
      "track.stat4_label": "专属多语言外贸顾问支持",

      "contact.title": "获取分销报价与商业洽谈",
      "contact.subtitle": "联系我们的全球业务与工程支持团队，获取一手梯队批发价、技术规格书及国际交货周期。",
      "contact.form_name": "您的姓名",
      "contact.form_company": "企业名称",
      "contact.form_email": "业务邮箱 / WhatsApp",
      "contact.form_category": "意向采购品类",
      "contact.cat_opt1": "动力电芯与模组 PACK",
      "contact.cat_opt2": "工商业储能系统（C&I ESS）",
      "contact.cat_opt3": "户用储能系统（Residential ESS）",
      "contact.cat_opt4": "新能源整车（乘用车/物流车）",
      "contact.cat_opt5": "其他定制化合作",
      "contact.form_quantity": "预估采购量 / 目标交付国",
      "contact.form_message": "请简述您的项目背景或规格要求...",
      "contact.send": "提交 B2B 询价",
      "contact.whatsapp_cta": "WhatsApp 一键直连对话",
      "contact.whatsapp_sub": "一手批发报价与现货库存即时查询专线",
      "contact.whatsapp_btn": "发起 WhatsApp 对话",
      "contact.ph_name": "例如：张经理",
      "contact.ph_company": "例如：某某新能源科技有限公司",
      "contact.ph_email": "业务邮箱或手机/微信/WhatsApp",
      "contact.ph_quantity": "例如：首批 500 kWh 或 20 台整车出口",
      "contact.ph_message": "请简要描述您的采购型号、交付周期或特殊定制规格...",
      "contact.modal_btn_mail": "调起邮件客户端发送",
      "contact.modal_btn_wa": "通过 WhatsApp 发送",
      "contact.modal_btn_copy": "复制询盘文本",
      "contact.modal_copied": "已成功复制到剪贴板！",
      "contact.direct_info_title": "直接联络方式",
      "contact.email_label": "官方商务邮箱",
      "contact.email_val": "sales@rootze.com",
      "contact.office_label": "全球运营与外贸枢纽",
      "contact.office_val": "国际贸易中心新能源产业链园区",
      "contact.success_title": "询盘草稿已准备就绪！",
      "contact.success_desc": "您的询价内容已格式化完毕。点击下方按钮即可唤醒邮件客户端发送，或通过 WhatsApp 直接对话。",

      "modal.spec_title": "产品技术规格参数详情",
      "modal.close": "关闭",
      "modal.btn_inquire": "针对该产品立即询价",

      "footer.about_title": "关于 RootZe",
      "footer.about_text": "RootZe 是全球专业的新能源动力电池、储能系统与电动汽车综合分销商，致力于赋能全球绿色低碳转型。",
      "footer.quick_links": "快捷导航",
      "footer.products_title": "产品体系",
      "footer.copyright": "© 2026 RootZe New Energy. 版权所有。托管于 GitHub Pages。"
    }
  };

  var currentLang = 'en';

  function getLanguage() {
    return currentLang;
  }

  function t(key) {
    if (!translations[currentLang]) {
      return translations.en[key] || key;
    }
    return translations[currentLang][key] || translations.en[key] || key;
  }

  function setLanguage(lang) {
    if (!translations[lang]) {
      lang = 'en';
    }
    currentLang = lang;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('rootze_lang', lang);
      }
    } catch (e) {
      // localStorage may fail in private mode
    }

    if (typeof document !== 'undefined') {
      if (document.documentElement) {
        document.documentElement.setAttribute('lang', lang);
      }
      if (document.querySelectorAll) {
      // Update text nodes
      var elements = document.querySelectorAll('[data-i18n]');
      for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        var key = el.getAttribute('data-i18n');
        var val = t(key);
        if (val) {
          el.innerHTML = val;
        }
      }

      // Update placeholders
      var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
      for (var j = 0; j < placeholders.length; j++) {
        var pel = placeholders[j];
        var pkey = pel.getAttribute('data-i18n-placeholder');
        var pval = t(pkey);
        if (pval) {
          pel.setAttribute('placeholder', pval);
        }
      }

      // Update switcher active buttons
      var btns = document.querySelectorAll('.lang-btn');
      for (var k = 0; k < btns.length; k++) {
        var btn = btns[k];
        if (btn.getAttribute('data-lang') === lang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
      }
    }
  }

  function init() {
    var saved = null;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        saved = window.localStorage.getItem('rootze_lang');
      }
    } catch (e) {}

    if (saved && (saved === 'en' || saved === 'zh')) {
      setLanguage(saved);
    } else {
      // Default to English for international export focus
      setLanguage('en');
    }
  }

  var RootZeI18n = {
    init: init,
    setLanguage: setLanguage,
    getLanguage: getLanguage,
    t: t,
    translations: translations
  };

  if (typeof window !== 'undefined') {
    window.RootZeI18n = RootZeI18n;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = RootZeI18n;
  }
})(typeof window !== 'undefined' ? window : globalThis);
