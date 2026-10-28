# RootZe 新能源电池与汽车分销商宣传网站（Landing Page）设计规范

## 1. 概述与业务目标 (Overview & Objectives)

* **公司名称**：RootZe
* **核心业务定位**：以**动力电池与储能系统（三电核心）分销为主**，**新能源汽车（EV）渠道分销为辅**的综合性新能源全球分销商。
* **部署目标平台**：GitHub Pages 纯静态托管（无需独立服务器或后端运行环境）。
* **核心受众**：海外 B2B 采购商（欧美、中东、东南亚、拉美等地区的汽车制造商、储能集成商、渠道车商及车队运营商）以及国内新能源产业链合作伙伴。
* **语言支持**：纯前端无刷新中英双语（EN / 中文）秒级切换，首期默认英文，并具备记忆功能。
* **视觉基调**：承袭 `template/carbook-master` 的高端汽车工业设计语言（沉稳深色底蕴、现代卡片栅格、微动效视差），注入新能源科技绿色与电光蓝点缀。

---

## 2. 目录规范与架构设计 (Architecture & File Structure)

所有生产代码组织于仓库根目录下，确保 GitHub Pages 根目录一键识别上线：

```text
/Users/brainzhang/work/rootze/landingpage/
├── index.html                  # 主页面（单页锚点架构，嵌入 data-i18n 属性）
├── .nojekyll                   # 禁用 Jekyll 静态处理，确保所有资源完整托管
├── css/                        # 提炼重构后的样式文件
│   ├── bootstrap.min.css       # 响应式栅格与布局系统
│   ├── animate.css             # 元素视差与入场动画
│   ├── owl.carousel.min.css    # 产品展陈轮播样式
│   ├── style.css               # carbook 核心设计样式
│   └── rootze.css              # RootZe 专属主题覆盖：新能源配色、双语胶囊、技术参数弹窗
├── js/
│   ├── jquery.min.js           # 基础交互库
│   ├── bootstrap.min.js        # 模态框与响应式折叠导航
│   ├── owl.carousel.min.js     # 车型与产品卡片轮播
│   ├── i18n.js                 # 中英双语数据字典与即时切换引擎
│   └── main.js                 # 滚动监听、计数器动画、平滑滚动、表单事件
├── images/                     # 业务高清图片与素材
│   ├── hero-bg.jpg             # 首屏科技风大图
│   ├── battery/                # 电芯、模组、储能柜产品实拍图
│   ├── ev/                     # 纯电乘用车、商用轻卡车型图
│   └── icons/                  # 认证资质与优势矢量图标
└── docs/                       # 项目规格与实施设计文档
    └── superpowers/specs/      # 架构规范文档
```

### 依赖与瘦身策略
* **彻底剔除原模版冗余脚本**：删除 `bootstrap-datepicker.js`、`jquery.timepicker.js`、`google-map.js` 及后端 PHP 文件，减少请求数超过 40%。
* **全站使用相对路径**：所有 CSS/JS/图片资源均采用 `./css/...` 形式引用，杜绝在 `username.github.io/landingpage/` 子路径下 404 的问题。

---

## 3. 双语切换引擎规范 (Bilingual i18n Specification)

采用原生 JavaScript 字典驱动架构（`js/i18n.js`）：

1. **核心数据结构**：
   ```javascript
   const i18nData = {
     en: {
       "nav.home": "Home",
       "nav.battery": "Battery & ESS",
       "nav.ev": "EV Vehicles",
       "hero.title": "Empowering Global New Energy Distribution",
       // ...
     },
     zh: {
       "nav.home": "首页",
       "nav.battery": "电池与储能",
       "nav.ev": "新能源汽车",
       "hero.title": "赋能绿色未来：全球领先的新能源电芯、储能与整车分销商",
       // ...
     }
   };
   ```
2. **DOM 渲染逻辑**：
   * 文本内容：通过 `data-i18n="key"` 自动替换 `textContent` 或 `innerHTML`。
   * 表单占位符：通过 `data-i18n-placeholder="key"` 动态更新 `placeholder` 属性。
3. **语言状态管理**：
   * 优先顺序：`localStorage.getItem('rootze_lang')` -> 浏览器偏好语言 -> 默认英文（`en`）。
   * 导航栏提供 `[ EN | 中文 ]` 悬浮高亮切换控件，点击后即时全量替换文本并更新当前激活状态，零刷新页面。

---

## 4. 页面核心模块与展陈规范 (Content & Modules Specification)

### 4.1 顶部导航栏 (Navbar)
* **品牌**：`RootZe` 字母 Logo，辅以 "New Energy Solutions" 副标。
* **锚点项**：Home（首页）| Battery & ESS（电池与储能）| EV Vehicles（整车分销）| Advantages（核心优势）| Track Record（实力指标）| Contact（商务合作）。
* **功能区**：右侧包含中英双语切换器及 `[ Request a Quote / 快速询价 ]` 醒目行动按钮。

### 4.2 Hero 视觉首屏 (Hero Showcase)
* **背景**：深色新能源电能流动与车辆/电芯剪影大图。
* **核心文案**：
  * EN: *Empowering the Green Future: Tier-1 EV Batteries & Electric Vehicle Distribution*
  * 中文：*赋能绿色未来：全球领先的新能源电芯、储能系统与电动汽车分销商*
* **背书徽章**：Tier-1 品牌源头直供 | UN38.3 & MSDS 危险品海运合规 | 全球出口清关支持。
* **行动按钮**：`[ 探索电池方案 ]`（平滑跳至电池模块）与 `[ 立即商务洽谈 ]`（跳至联系模块）。

### 4.3 核心三电与电池专区 (Battery & ESS Solutions) —— 重点展陈
分为三大核心分销板块，每个产品配有参数对比与询价入口：
1. **动力电芯与模组 (Traction Cells & Modules)**：
   * *LFP 磷酸铁锂方形电芯 (Prismatic LFP Cells)*：3.2V 100Ah–314Ah，4000–6000次循环，高热稳定性，适用于储能和商用车。
   * *三元锂高能量密度电芯 (High-Energy NMC Cells)*：单体高能量密度（>250Wh/kg），适用于高性能纯电乘用车改装及长续航需求。
   * *标准定制 PACK 电池包*：支持定制化成组，配备智能 CAN/RS485 通信 BMS。
2. **工商业储能系统 (Commercial & Industrial ESS)**：
   * 100kWh / 215kWh / 500kWh 模块化户外储能柜（支持液冷/风冷），多机并联扩展至 MWh 级，支持削峰填谷与微电网部署。
3. **户用储能系统 (Residential ESS)**：
   * 5kWh–20kWh 低压/高压壁挂式与堆叠式储能电池，兼容全球主流逆变器（Growatt, Deye, Solis, Victron 等）。

### 4.4 新能源汽车整车分销专区 (EV Vehicles Distribution)
* **纯电乘用车 (Passenger EVs)**：精选高热度纯电轿车与紧凑型 SUV，提供海外批发配额与批量采购支持。
* **城市物流与商用车 (Commercial Vans & Trucks)**：纯电轻卡、封闭式厢式物流车，满足海外车队绿色升级换代。
* **交付亮点**：左右舵选型、大客户渠道订购通道、整车出口报关全链条跟踪。

### 4.5 供应链与履约优势 (Supply Chain & Compliance Advantages)
4 大核心价值卡片：
1. **一线原厂正品货源**：深入合作国内头部锂电与汽车制造商，出厂附带完整质检证明与批次报告。
2. **国际合规与危包资质**：完备的 UN38.3、MSDS、CE、UL 认证，规范化锂电池危包证书海运订舱。
3. **柔性订货方案**：提供极具竞争力的一手批发价格，支持样品单试样与多柜集装箱大宗出口。
4. **全球物流与售后保障**：支持 EXW、FOB、CIF 多种贸易条款，提供专业电池存储与运输方案。

### 4.6 实力指标看板 (Animated Metrics)
模版数字滚动组件：
* **50+**：出口覆盖国家与地区
* **2.5+ GWh**：累计分销电芯与储能总容量
* **100%**：出厂质检与出海合规率
* **24/7**：外贸业务团队快速响应

### 4.7 B2B 询价与联络表单 (Contact & Smart Inquiry)
* **WhatsApp 直达浮动按钮**：点击唤起 WhatsApp 预填商务沟通消息。
* **智能前端表单**：
  * 输入字段：全名、企业名称、业务邮箱/WhatsApp、意向品类（动力电芯/储能系统/整车/其他）、预估采购量与详细需求。
  * 提交行为：前端校验必填项，弹出成功感谢视窗，并调起格式化 `mailto:` 邮件客户端（预填全部信息至 `sales@rootze.com`），海外买家一键发送。

### 4.8 产品技术参数模态弹窗 (Product Spec Modal)
* 点击任意产品的 `[ 规格详情 / View Specs ]` 触发。
* 动态加载该产品的详细技术表格（标称电压、额定容量、内阻、循环寿命、外壳材料、推荐充放电倍率等），包含一键带参询价按钮。

---

## 5. GitHub Pages 部署与验证方案 (Deployment & Verification)

1. **部署配置**：
   * 仓库：`landingpage`
   * 分支：`main`
   * 目录：`/ (root)`
   * 包含 `.nojekyll` 文件，防止下划线目录或特殊格式被忽略。
2. **验证验收标准**：
   * **多端响应式测试**：在桌面显示器（1920x1080）、笔记本（1366x768）、iPad 平板（768px）和 iPhone/Android（375px~414px）下均排版工整，无横向滚动条。
   * **双语切换测试**：中英文切换响应时间 < 50ms，且刷新网页能记住前次选择的语言。
   * **交互完整性测试**：导航锚点平滑滚动定位准确、WhatsApp 链接有效、产品规格弹窗正常开闭。
