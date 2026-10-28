/**
 * RootZe Main Interactive Script
 */
(function($) {
  'use strict';

  // Product specification database for modal view
  var productSpecs = {
    'cell-lfp': {
      title_en: 'Prismatic LFP & NMC Traction Cells',
      title_zh: '动力方形 LFP 与三元锂电芯',
      table_en: [
        ['Chemistry Type', 'Lithium Iron Phosphate (LiFePO4) / Ternary Lithium (NMC)'],
        ['Available Capacities', '100Ah / 280Ah / 304Ah / 314Ah (Grade A Genuine)'],
        ['Nominal Cell Voltage', '3.2V (LFP) / 3.7V (NMC)'],
        ['Internal Resistance', '≤ 0.25 mΩ (AC 1kHz)'],
        ['Standard Charge/Discharge', '0.5C Standard, 1.0C Continuous, 2.0C - 3.0C Peak'],
        ['Cycle Life (80% SOH)', '≥ 4,000 to 6,000 cycles @ 25°C 1C'],
        ['Housing Material', 'Laser-welded Aluminum Prismatic Shell with Safety Vent'],
        ['Cell Dimensions (314Ah)', 'Width 174mm × Thickness 72mm × Height 207mm'],
        ['Unit Weight', 'Approx. 5.49 kg ± 0.1 kg'],
        ['Certifications & Reports', 'UN38.3, MSDS, CE, RoHS, UL1973, IEC62619, Factory QC Report']
      ],
      table_zh: [
        ['化学材料体系', '磷酸铁锂 (LiFePO4) / 高能量密度三元锂 (NMC)'],
        ['标准容量型号', '100Ah / 280Ah / 304Ah / 314Ah（正品全新 A 规）'],
        ['标称单体电压', '3.2V (磷酸铁锂) / 3.7V (三元锂)'],
        ['初始交流内阻', '≤ 0.25 mΩ (AC 1kHz)'],
        ['标准充放电倍率', '0.5C 标准持续, 1.0C 额定, 2.0C - 3.0C 脉冲峰值'],
        ['深循环寿命', '≥ 4,000 至 6,000 次深循环 (@ 25°C 1C 80% 容量保有率)'],
        ['电芯结构外壳', '激光无缝焊接防爆铝壳（带自主泄压安全防爆阀）'],
        ['典型尺寸 (314Ah)', '宽 174mm × 厚 72mm × 高 207mm'],
        ['单体重量', '约 5.49 kg ± 0.1 kg'],
        ['合规认证与检测', 'UN38.3, MSDS, CE, RoHS, UL1973, IEC62619, 原厂出货检验报告']
      ]
    },
    'ess-ci': {
      title_en: 'Commercial & Industrial Energy Storage System (ESS)',
      title_zh: '工商业户外储能一体柜 (C&I ESS)',
      table_en: [
        ['Rated Storage Capacity', '100kWh / 215kWh / 372kWh / Modular expandable up to 2MWh+'],
        ['Cell Type & Integration', 'Tier-1 280Ah / 314Ah LFP Prismatic Cells with 1P16S modular clusters'],
        ['Rated Output Voltage', '400V / 480V AC 3-Phase 50/60Hz'],
        ['Thermal Management', 'Intelligent Liquid Cooling (Cell temp difference ≤ 2.5°C) / High-efficiency Air Cooling'],
        ['Fire Suppression System', 'Multi-stage Aerosol / Perfluoro Fire Extinguishment + Combustible Gas Detection'],
        ['Enclosure Rating', 'IP55 Outdoor Weatherproof Enclosure (C5 Anti-corrosion Optional)'],
        ['EMS & Communication', 'Integrated BMS/EMS, Modbus TCP/RTU, CAN, 4G / Ethernet Cloud Gateway'],
        ['Round-Trip Efficiency (RTE)', '≥ 90% (System level AC-AC)'],
        ['Applications', 'Peak Shaving, Microgrid, Solar-plus-Storage, EV Fast Charging Buffer'],
        ['International Standards', 'IEC 62619, IEC 62477, UL 9540, UL 9540A, UN38.3, CE']
      ],
      table_zh: [
        ['系统额定储能容量', '100kWh / 215kWh / 372kWh / 多机并联扩展至 2MWh+'],
        ['电芯架构与集成', '一线大厂 280Ah / 314Ah LFP 方形电芯，1P16S 模组化串联'],
        ['交流并网输出电压', '400V / 480V AC 三相 50/60Hz'],
        ['热管理温控方案', '工业级智能液冷（电芯间温差控制在 ≤ 2.5°C 内）/ 强制风冷可选'],
        ['多重消防安全系统', '多级气溶胶/全氟己酮自动灭火装置 + 可燃气体浓度监测预警'],
        ['整柜防护等级', 'IP55 级户外防风雨沙尘外壳（可选配 C5 级重防腐喷涂）'],
        ['能量管理与通信', '集成 BMS/EMS, 支持 Modbus TCP/RTU, CAN, 4G / 以太网云端监控'],
        ['系统综合充放电效率', '≥ 90% (AC-AC 交流端综合效率)'],
        ['典型应用场景', '工商业削峰填谷、需量管理、光储充微电网、工业应急备电'],
        ['国际认证标准', 'IEC 62619, IEC 62477, UL 9540, UL 9540A, UN38.3, CE']
      ]
    },
    'ess-res': {
      title_en: 'Residential Stackable & Wall-Mount ESS',
      title_zh: '家庭堆叠式与壁挂式储能系统',
      table_en: [
        ['Usable Storage Capacity', '5.12kWh to 20.48kWh (Scalable up to 8 units parallel, 40kWh max)'],
        ['Nominal Battery Voltage', '51.2V Low Voltage / High Voltage Stack (102V - 409V) options'],
        ['Cell Technology', 'Grade-A LiFePO4 (LFP) Cells with integrated smart BMS'],
        ['Continuous Charge/Discharge', '100A (5kW output per unit)'],
        ['Depth of Discharge (DoD)', '95% Usable DoD'],
        ['Cycle Life Rating', '> 6,000 Cycles @ 25°C, 80% DoD'],
        ['Inverter Protocol Compatibility', 'Growatt, Deye, Solis, Victron, Goodwe, Sofar, SMA, Voltronic'],
        ['Mounting Flexibility', 'Wall-mounted bracket or Floor-standing vertical stack'],
        ['Safety & Protection', 'Overcharge, Overdischarge, Short-circuit, Cell Balancer & Thermal Cutoff'],
        ['Certifications', 'CE, UN38.3, IEC 62619, MSDS, RoHS']
      ],
      table_zh: [
        ['可用储能容量', '5.12kWh 至 20.48kWh（支持最多 8 台并联扩展至 40.96kWh）'],
        ['电池标称电压', '51.2V 低压系统 / 高压串联堆叠 (102V - 409V) 可选'],
        ['电芯体系结构', '原厂正品 A 规磷酸铁锂 (LiFePO4)，内置智能自平衡 BMS'],
        ['持续充放电电流', '100A 持续充放（单机支持 5kW 持续功率输出）'],
        ['放电深度 (DoD)', '95% 高放电深度'],
        ['循环使用寿命', '> 6,000 次深循环 (@ 25°C, 80% DoD)'],
        ['主流逆变器协议适配', '古瑞瓦特 (Growatt)、德业 (Deye)、锦浪 (Solis)、Victron、固德威等'],
        ['安装安装形式', '壁挂安装挂架 / 落地式积木模块堆叠自由组合'],
        ['多重安全防护机制', '过充、过放、短路、温控切断及单体电压主动平衡保护'],
        ['国际安全认证', 'CE, UN38.3, IEC 62619, MSDS, RoHS']
      ]
    }
  };

  // Document Ready Initialization
  $(document).ready(function() {
    // 1. Initialize i18n
    if (window.RootZeI18n) {
      window.RootZeI18n.init();
    }

    // 2. Language Switcher Buttons
    $('.lang-btn').on('click', function(e) {
      e.preventDefault();
      var lang = $(this).attr('data-lang');
      if (window.RootZeI18n) {
        window.RootZeI18n.setLanguage(lang);
      }
    });

    // 3. AOS Animation
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'slide',
        once: true
      });
    }

    // 4. Smooth Anchor Scrolling
    $('a[href^="#"]').on('click', function(event) {
      var targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      var target = $(targetId);
      if (target.length) {
        event.preventDefault();
        var offsetTop = target.offset().top - 70;
        $('html, body').stop().animate({
          scrollTop: offsetTop
        }, 600, 'easeInOutExpo');
        if ($('.navbar-collapse').hasClass('show')) {
          $('.navbar-collapse').collapse('hide');
        }
      }
    });

    // 5. Navbar Sticky / Scroll Behavior
    $(window).scroll(function() {
      var st = $(this).scrollTop();
      var navbar = $('#ftco-navbar');
      if (st > 100) {
        navbar.addClass('scrolled awake');
      } else {
        navbar.removeClass('scrolled awake');
      }
    });

    // 6. Animated Counter on Scroll
    var counterSection = $('#track');
    if (counterSection.length && typeof $.fn.waypoint !== 'undefined' && typeof $.fn.animateNumber !== 'undefined') {
      counterSection.waypoint(function(direction) {
        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
          $('.number').each(function() {
            var $this = $(this);
            var num = parseFloat($this.data('number'));
            if (!isNaN(num)) {
              $this.animateNumber({
                number: num,
                numberStep: function(now, tween) {
                  var floored = now.toFixed(1);
                  var text = (floored.endsWith('.0') ? Math.floor(now) : floored);
                  $(tween.elem).text(text);
                }
              }, 1800);
            }
          });
          $(this.element).addClass('ftco-animated');
        }
      }, { offset: '90%' });
    }

    // 7. Spec Modal Trigger
    $('.view-spec-btn').on('click', function(e) {
      e.preventDefault();
      var specId = $(this).attr('data-spec-id');
      var spec = productSpecs[specId];
      if (!spec) return;

      var currentLang = (window.RootZeI18n && window.RootZeI18n.getLanguage()) || 'en';
      var title = (currentLang === 'zh') ? spec.title_zh : spec.title_en;
      var tableData = (currentLang === 'zh') ? spec.table_zh : spec.table_en;

      $('#specModalLabel').text(title);

      var tableHtml = '<table class="tech-table table table-bordered table-striped">';
      tableHtml += '<tbody>';
      for (var i = 0; i < tableData.length; i++) {
        tableHtml += '<tr>';
        tableHtml += '<th class="bg-light" style="width: 35%;">' + tableData[i][0] + '</th>';
        tableHtml += '<td><strong>' + tableData[i][1] + '</strong></td>';
        tableHtml += '</tr>';
      }
      tableHtml += '</tbody></table>';

      $('#specModalBody').html(tableHtml);

      // Pre-select category in contact form when inquiring from modal
      $('#specModalInquireBtn').on('click.specSelect', function() {
        $('#specModal').modal('hide');
        var catSelect = $('#inqCategory');
        if (specId === 'cell-lfp') {
          catSelect.val('Power Battery Cells & Modules');
        } else if (specId === 'ess-ci') {
          catSelect.val('Commercial & Industrial ESS');
        } else if (specId === 'ess-res') {
          catSelect.val('Residential ESS Systems');
        }
      });

      $('#specModal').modal('show');
    });

    // 8. B2B Inquiry Form Submission
    $('#inquiryForm').on('submit', function(e) {
      e.preventDefault();
      var name = $('#inqName').val().trim();
      var company = $('#inqCompany').val().trim();
      var contact = $('#inqContact').val().trim();
      var category = $('#inqCategory').val();
      var quantity = $('#inqQuantity').val().trim() || 'N/A';
      var message = $('#inqMessage').val().trim() || 'No additional notes provided.';

      var currentLang = (window.RootZeI18n && window.RootZeI18n.getLanguage()) || 'en';
      var payload = buildInquiryPayload(name, company, contact, category, quantity, message, currentLang);

      // Populate Success Action Modal
      $('#modalInquirySummary').text(payload.body);
      $('#modalMailtoLink').attr('href', payload.mailtoUrl);
      $('#modalWhatsappLink').attr('href', payload.waUrl);

      // Clipboard copy handler
      $('#modalCopyBtn').off('click').on('click', function() {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(payload.body).then(function() {
            var copiedText = (window.RootZeI18n && window.RootZeI18n.t('contact.modal_copied')) || 'Copied!';
            $('#modalCopyBtnText').text(copiedText);
            setTimeout(function() {
              var defaultText = (window.RootZeI18n && window.RootZeI18n.t('contact.modal_btn_copy')) || 'Copy Inquiry Text';
              $('#modalCopyBtnText').text(defaultText);
            }, 2500);
          });
        }
      });

      // Show Action Modal
      $('#inquirySuccessModal').modal('show');

      // Attempt launching email client directly
      try {
        window.location.href = payload.mailtoUrl;
      } catch (err) {
        // Handled by modal links
      }
    });
  });

  // Localized inquiry payload builder
  function buildInquiryPayload(name, company, contact, category, quantity, message, lang) {
    lang = lang || 'en';
    var isZh = (lang === 'zh');

    var subject = isZh
      ? '[RootZe 新能源分销采购询盘] ' + category + ' — ' + company
      : '[RootZe Distribution Inquiry] ' + category + ' — ' + company;

    var body = isZh
      ? '尊敬的 RootZe 业务团队：\n\n' +
        '我方希望就以下产品采购获取一手分销报价、规格书与交付周期：\n\n' +
        '--------------------------------------------------\n' +
        '* 采购意向品类：' + category + '\n' +
        '* 联络人姓名：' + name + '\n' +
        '* 企业名称：' + company + '\n' +
        '* 联络方式（邮箱/微信/WhatsApp）：' + contact + '\n' +
        '* 预估采购量 / 目标交付国：' + quantity + '\n' +
        '* 详细采购需求或定制规格：' + message + '\n' +
        '--------------------------------------------------\n\n' +
        '期待您的快速回复与支持。\n\n' +
        '顺祝商祺，\n' + name
      : 'Dear RootZe Distribution Team,\n\n' +
        'I would like to request an official wholesale quotation with following specifications:\n\n' +
        '--------------------------------------------------\n' +
        '* Interested Product Category: ' + category + '\n' +
        '* Full Name: ' + name + '\n' +
        '* Company Name: ' + company + '\n' +
        '* Contact Details (Email/WhatsApp): ' + contact + '\n' +
        '* Target Quantity / Destination: ' + quantity + '\n' +
        '* Project Description: ' + message + '\n' +
        '--------------------------------------------------\n\n' +
        'Please send current pricing tier, datasheets, and delivery lead time.\n\n' +
        'Best regards,\n' + name;

    var mailtoUrl = 'mailto:sales@rootze.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    var waMsg = isZh
      ? '您好 RootZe 团队，我是来自 ' + company + ' 的 ' + name + '。希望咨询关于 ' + category + '（采购量：' + quantity + '）的分销合作。'
      : 'Hello RootZe Team, I am ' + name + ' from ' + company + '. Inquiring about wholesale distribution for ' + category + ' (' + quantity + ').';

    var waUrl = 'https://wa.me/8613800000000?text=' + encodeURIComponent(waMsg);

    return {
      subject: subject,
      body: body,
      mailtoUrl: mailtoUrl,
      waUrl: waUrl
    };
  }

  // Export specs and helpers for test environment inspection
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      productSpecs: productSpecs,
      buildInquiryPayload: buildInquiryPayload
    };
  }
})(typeof jQuery !== 'undefined' ? jQuery : function() { return { on: function(){}, val: function(){ return ''; }, ready: function(fn){ fn(); } }; });
