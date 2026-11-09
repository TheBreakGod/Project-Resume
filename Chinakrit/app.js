/**
 * Interactive Resume Logic for Chinnakrit Patthum ([IP1] Individual Project: MyResume)
 * Uses pure JavaScript + Bootstrap 5 Classes/APIs ONLY (No custom CSS)
 */

const skillsData = [
  {
    name: "Structured Query Language (SQL)",
    desc: "เขียนคำสั่ง SQL เพื่อดึงข้อมูล ตรวจสอบ และวิเคราะห์ข้อมูลทางธุรกิจ",
    category: "tech",
    icon: "bi-database-fill-gear",
    badgeClass: "text-bg-primary",
    typeLabel: "Technical Skill"
  },
  {
    name: "HTML, CSS, JavaScript",
    desc: "พัฒนาเว็บแอปพลิเคชันแบบ Responsive ด้วย HTML5, JS และ Bootstrap",
    category: "tech",
    icon: "bi-code-slash",
    badgeClass: "text-bg-primary",
    typeLabel: "Technical Skill"
  },
  {
    name: "Python Programming",
    desc: "การเขียนโปรแกรมภาษา Python สำหรับจัดการข้อมูลและงานอัตโนมัติ",
    category: "tech",
    icon: "bi-filetype-py",
    badgeClass: "text-bg-primary",
    typeLabel: "Technical Skill"
  },
  {
    name: "Operating Software",
    desc: "การจัดการระบบปฏิบัติการและการดูแลซอฟต์แวร์ระบบ",
    category: "tech",
    icon: "bi-pc-display",
    badgeClass: "text-bg-primary",
    typeLabel: "Technical Skill"
  },
  {
    name: "Microsoft SQL Server",
    desc: "ตรวจสอบใบเสร็จ ธุรกรรม และมอนิเตอร์การทำงานของฐานข้อมูล",
    category: "tool",
    icon: "bi-server",
    badgeClass: "text-bg-success",
    typeLabel: "Database Tool"
  },
  {
    name: "Azure Data Studio",
    desc: "เครื่องมือจัดการฐานข้อมูล รันชุดคำสั่ง Query และวิเคราะห์ผลลัพธ์",
    category: "tool",
    icon: "bi-window-stack",
    badgeClass: "text-bg-success",
    typeLabel: "Database Tool"
  },
  {
    name: "Linux Command (Terminal, DBeaver)",
    desc: "ตรวจสอบ Log ผ่าน Linux Terminal และจัดการฐานข้อมูลด้วย DBeaver",
    category: "tool",
    icon: "bi-terminal-fill",
    badgeClass: "text-bg-success",
    typeLabel: "System Tool"
  },
  {
    name: "Microsoft Office",
    desc: "จัดทำรายงานสรุปผลลัพธ์ทางเทคนิคและเอกสารสำหรับทีมซัพพอร์ต",
    category: "tool",
    icon: "bi-file-earmark-spreadsheet-fill",
    badgeClass: "text-bg-success",
    typeLabel: "Productivity Tool"
  }
];

const aiToolsData = [
  {
    name: "Cursor & Windsurf IDE",
    icon: "bi-braces-asterisk",
    role: "AI-Assisted Coding & Refactoring"
  },
  {
    name: "GitHub Copilot",
    icon: "bi-github",
    role: "Intelligent Code Completion"
  },
  {
    name: "VS Code (AI Extensions)",
    icon: "bi-code-square",
    role: "Integrated Development Workflow"
  },
  {
    name: "ChatGPT",
    icon: "bi-chat-dots-fill",
    role: "Prompt Engineering & Debugging"
  },
  {
    name: "Claude AI",
    icon: "bi-cpu-fill",
    role: "Code Analysis & Root Cause Triage"
  },
  {
    name: "Google Gemini",
    icon: "bi-stars",
    role: "Technical Research & Automation"
  },
  {
    name: "Microsoft Copilot",
    icon: "bi-microsoft",
    role: "Enterprise Productivity & SQL Assist"
  },
  {
    name: "Prompt Engineering",
    icon: "bi-lightning-charge-fill",
    role: "Code Generation & Optimization"
  }
];

const translations = {
  th: {
    nav_about: "About Me",
    nav_education: "Education",
    nav_employment: "Employment History",
    nav_skills: "Skills",
    nav_ai: "AI & Highlights",
    nav_contact: "Contact",
    btn_download_cv: "CV PDF",
    btn_print: "Print",
    full_name: "นายชินกฤต ปัดทุม (CHINNAKRIT PATTHUM)",
    major_name: "สาขาวิชาเทคโนโลยีดิจิทัลและสารสนเทศ (Digital and Information Technology)",
    faculty_name: "คณะวิศวกรรมศาสตร์และเทคโนโลยี (Faculty of Engineering and Technology)",
    university_name: "สถาบันการจัดการปัญญาภิวัฒน์ (Panyapiwat Institute of Management - PIM)",
    sec_about_title: "เกี่ยวกับตัวฉัน (About Me)",
    about_p1: "Application Support Specialist ที่มีความละเอียดรอบคอบ มีประสบการณ์ตรงในการตรวจสอบและแก้ไขปัญหาบนระบบ Production (Production Incident Investigation) การเขียนและรันคำสั่ง SQL Query รวมถึงการมอนิเตอร์การทำงานของระบบฐานข้อมูลในระดับองค์กรที่ บริษัท โกซอฟท์ (ประเทศไทย) จำกัด",
    about_p2: "มีความเชี่ยวชาญในการใช้งาน Microsoft SQL Server, Azure Data Studio และการวิเคราะห์ Log เพื่อค้นหาสาเหตุที่แท้จริงของปัญหา (Root Cause Analysis) พร้อมส่งมอบแนวทางแก้ไขปัญหาทางเทคนิค วิเคราะห์ข้อมูลทางธุรกิจ และประสานงานร่วมกับทีมต่าง ๆ (Cross-functional Teams) ได้อย่างมีประสิทธิภาพ",
    hl1_title: "Incident Investigation",
    hl1_desc: "วิเคราะห์ Application & Database Logs เพื่อตรวจสอบและแก้ไขปัญหาในระบบ Production",
    hl2_title: "SQL & Data Verification",
    hl2_desc: "รันคำสั่ง SQL ตรวจสอบความถูกต้องของข้อมูลใบเสร็จและธุรกรรมใน Microsoft SQL Server",
    hl3_title: "Root Cause Analysis",
    hl3_desc: "ตรวจสอบความคลาดเคลื่อนของข้อมูลและวิเคราะห์หาสาเหตุหลักของข้อผิดพลาดในระบบ",
    hl4_title: "AI-Assisted Dev",
    hl4_desc: "ประยุกต์ใช้ Prompt Engineering และเครื่องมือ AI สมัยใหม่ในการเขียนโค้ดและดีบัก",
    sec_education: "การศึกษา (Education)",
    pim_edu_title: "สถาบันการจัดการปัญญาภิวัฒน์ (Panyapiwat Institute of Management - PIM)",
    edu_school: "วิทยาลัยอาชีวศึกษากาฬสินธุ์ (Kalasin Vocational College)",
    edu_major: "สาขาเทคโนโลยีธุรกิจดิจิทัล (Digital Business Technology) — GPA 3.6",
    edu_d1: "มุ่งเน้นด้านเทคโนโลยีดิจิทัล การพัฒนาซอฟต์แวร์ การวิเคราะห์ข้อมูล และระบบสารสนเทศเพื่อสนับสนุนและยกระดับการดำเนินงานทางธุรกิจสมัยใหม่ (Focuses on digital technologies, software development, data analytics, and information systems to support and improve modern business operations.)",
    edu_d2: "มุ่งเน้นด้านการเขียนโปรแกรม การจัดการฐานข้อมูล ระบบสารสนเทศทางธุรกิจ และการประยุกต์ใช้เทคโนโลยีคอมพิวเตอร์ในองค์กร (Focuses on programming, database management, business information systems, and the application of computer technology to support organizational and business processes.)",
    cert_title: "วุฒิบัตร (Certification)",
    cert_name: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) / Higher Vocational Certificate (HVC)",
    sec_experience: "ประวัติการทำงานและฝึกงาน (Employment History)",
    exp_period: "ต.ค. 2024 - ปัจจุบัน",
    exp_title: "APPLICATION SUPPORT - IT SYSTEM STORE SERVICE",
    exp_company: '<i class="bi bi-building me-1"></i>GOSOFT (THAILAND) CO., LTD. (บริษัท โกซอฟท์ (ประเทศไทย) จำกัด)',
    exp_role: "Trainee Counter Service",
    exp_b1: "Analyzed application and database logs to investigate production incidents. (วิเคราะห์ Log ของแอปพลิเคชันและฐานข้อมูลเพื่อตรวจสอบปัญหาที่เกิดขึ้นบนระบบ Production)",
    exp_b2: "Executed SQL queries to retrieve, validate, and analyze business data. (เขียนและรันคำสั่ง SQL เพื่อดึงข้อมูล ตรวจสอบความถูกต้อง และวิเคราะห์ข้อมูลทางธุรกิจ)",
    exp_b3: "Verified receipt and transaction records stored in Microsoft SQL Server. (ตรวจสอบข้อมูลใบเสร็จและรายการธุรกรรมที่จัดเก็บใน Microsoft SQL Server)",
    exp_b4: "Investigated data inconsistencies and supported root cause analysis. (ตรวจสอบความไม่สอดคล้องของข้อมูลและสนับสนุนการวิเคราะห์หาสาเหตุที่แท้จริง)",
    exp_b5: "Monitored database operations and assisted in resolving application errors. (ติดตามการทำงานของระบบฐานข้อมูลและช่วยแก้ไขข้อผิดพลาดของแอปพลิเคชัน)",
    exp_b6: "Prepared query results and technical findings for support teams. (จัดทำผลลัพธ์จากการ Query และสรุปข้อมูลทางเทคนิคให้กับทีมซัพพอร์ต)",
    sec_skills: "ทักษะและเครื่องมือ (Skills & Tools)",
    skills_sub: "จัดเรียงแบบ Responsive Grid: Desktop แสดง 4 คอลัมน์, Tablet แสดง 2 คอลัมน์ และ มือถือแสดง 1 คอลัมน์",
    filter_all: "ทั้งหมด (8)",
    filter_tech: "Technical Skills (4)",
    filter_tools: "Tools (4)",
    sec_ai: "AI-Assisted Development & Tools",
    ai_desc: "เชี่ยวชาญด้าน Prompt Engineering, การสร้างโค้ด, การดีบัก และการ Refactoring ด้วยเครื่องมือ AI สมัยใหม่ ได้แก่ Cursor, Windsurf, GitHub Copilot, ChatGPT, Claude และ Gemini",
    sec_contact: "ช่องทางติดต่อกลับ (Contact Information)",
    contact_sub: "แสดงข้อมูลการติดต่อด้วย Ordered List (<ol>) พร้อมใช้รูปภาพแทนเครื่องหมาย @ และใช้ข้อมูลสมมติเพื่อความปลอดภัยตามข้อกำหนด IP1",
    contact_email_label: "อีเมล์สถาบันฯ (Institutional Email):",
    contact_email_note: "ใช้รูปภาพแทน @ และใช้อีเมลสมมติเพื่อป้องกันสแปม",
    contact_phone_label: "เบอร์โทรศัพท์ (Phone Number):",
    contact_phone_note: "เบอร์โทรศัพท์สมมติตามข้อกำหนด",
    contact_addr_label: "ที่อยู่ (Address):",
    contact_addr_val: "85/168 ถนนแจ้งวัฒนะ ตำบลบางตลาด อำเภอปากเกร็ด จังหวัดนนทบุรี 11120 (สถานที่สมมติ)",
    contact_uni_label: "เว็บไซต์สถาบันการศึกษา (Institute Website):",
    contact_role_label: "สายงานที่สนใจ (Target Role):",
    search_placeholder: "ค้นหาทักษะหรือเครื่องมือ (เช่น SQL, Linux, Python, HTML)..."
  },
  en: {
    nav_about: "About Me",
    nav_education: "Education",
    nav_employment: "Employment History",
    nav_skills: "Skills",
    nav_ai: "AI & Highlights",
    nav_contact: "Contact",
    btn_download_cv: "CV PDF",
    btn_print: "Print",
    full_name: "CHINNAKRIT PATTHUM",
    major_name: "Digital and Information Technology",
    faculty_name: "Faculty of Engineering and Technology",
    university_name: "Panyapiwat Institute of Management (PIM)",
    sec_about_title: "About Me",
    about_p1: "Detail-oriented Application Support Specialist with hands-on experience in production incident investigation, SQL query execution, and database operation monitoring at Gosoft (Thailand) Co., Ltd.",
    about_p2: "Proficient in Microsoft SQL Server and log analysis to identify root causes and deliver actionable technical support. Proven ability to analyze business data and collaborate effectively with cross-functional teams.",
    hl1_title: "Incident Investigation",
    hl1_desc: "Analyzed application and database logs to investigate production incidents.",
    hl2_title: "SQL & Data Verification",
    hl2_desc: "Executed SQL queries and verified receipt/transaction records in MS SQL Server.",
    hl3_title: "Root Cause Analysis",
    hl3_desc: "Investigated data inconsistencies and assisted in resolving application errors.",
    hl4_title: "AI-Assisted Dev",
    hl4_desc: "Expert in prompt engineering, code generation, debugging, and refactoring.",
    sec_education: "Education",
    pim_edu_title: "Panyapiwat Institute of Management (PIM)",
    edu_school: "Kalasin Vocational College",
    edu_major: "Digital Business Technology — GPA 3.6",
    edu_d1: "Focuses on digital technologies, software development, data analytics, and information systems to support and improve modern business operations.",
    edu_d2: "Focuses on programming, database management, business information systems, and the application of computer technology to support organizational and business processes.",
    cert_title: "Certification",
    cert_name: "Higher Vocational Certificate (HVC)",
    sec_experience: "Employment History",
    exp_period: "Oct 2024 - Present",
    exp_title: "APPLICATION SUPPORT - IT SYSTEM STORE SERVICE",
    exp_company: '<i class="bi bi-building me-1"></i>GOSOFT (THAILAND) CO., LTD.',
    exp_role: "Trainee Counter Service",
    exp_b1: "Analyzed application and database logs to investigate production incidents.",
    exp_b2: "Executed SQL queries to retrieve, validate, and analyze business data.",
    exp_b3: "Verified receipt and transaction records stored in Microsoft SQL Server.",
    exp_b4: "Investigated data inconsistencies and supported root cause analysis.",
    exp_b5: "Monitored database operations and assisted in resolving application errors.",
    exp_b6: "Prepared query results and technical findings for support teams.",
    sec_skills: "Skills & Tools",
    skills_sub: "Responsive Grid Layout: 4 columns on Desktop, 2 on Tablet, and 1 on Mobile",
    filter_all: "All (8)",
    filter_tech: "Technical Skills (4)",
    filter_tools: "Tools (4)",
    sec_ai: "AI-Assisted Development & Tools",
    ai_desc: "Expert in prompt engineering, code generation, debugging, and refactoring using Cursor, Windsurf, GitHub Copilot, ChatGPT, Claude, and Gemini.",
    sec_contact: "Contact Information",
    contact_sub: "Formatted using Ordered List (<ol>) with image replacement for @ and dummy details per IP1 specification",
    contact_email_label: "Institutional Email:",
    contact_email_note: "Uses image for @ and dummy address to prevent spam",
    contact_phone_label: "Phone Number:",
    contact_phone_note: "Dummy phone number for privacy",
    contact_addr_label: "Address:",
    contact_addr_val: "85/168 Chaengwattana Rd., Bang Talat, Pak Kret, Nonthaburi 11120 (Dummy Address)",
    contact_uni_label: "Institute Website:",
    contact_role_label: "Target Role:",
    search_placeholder: "Filter skills or tools (e.g. SQL, Linux, Python, HTML)..."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "th";
  let currentCategory = "all";
  let searchQuery = "";

  const skillsContainer = document.getElementById("skillsContainer");
  const aiToolsContainer = document.getElementById("aiToolsContainer");
  const skillSearchInput = document.getElementById("skillSearchInput");
  const filterBtns = document.querySelectorAll(".filter-skill-btn");
  const langToggleBtn = document.getElementById("langToggleBtn");
  const langLabel = document.getElementById("langLabel");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");
  const printBtn = document.getElementById("printBtn");

  // Requirement 11: Render Skills in Responsive Grid (col-12 col-md-6 col-lg-3)
  function renderSkills() {
    skillsContainer.innerHTML = "";
    const filtered = skillsData.filter(item => {
      const matchesCat = currentCategory === "all" || item.category === currentCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      skillsContainer.innerHTML = `
        <div class="col-12 text-center py-4 text-body-secondary">
          <i class="bi bi-inbox fs-3 d-block mb-2"></i>
          ไม่พบทักษะที่ค้นหา (No matching skills found)
        </div>
      `;
      return;
    }

    filtered.forEach(skill => {
      const col = document.createElement("div");
      // Requirement 11: Desktop 4 (col-lg-3), Tablet 2 (col-md-6), Mobile 1 (col-12)
      col.className = "col-12 col-md-6 col-lg-3";
      col.innerHTML = `
        <div class="p-3 rounded-3 border bg-body-tertiary h-100 d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex align-items-center justify-content-between mb-2">
              <i class="bi ${skill.icon} text-primary fs-3"></i>
              <span class="badge ${skill.badgeClass} rounded-pill">${skill.typeLabel}</span>
            </div>
            <h3 class="h6 fw-bold mb-1">${skill.name}</h3>
            <p class="small text-body-secondary mb-0">${skill.desc}</p>
          </div>
        </div>
      `;
      skillsContainer.appendChild(col);
    });
  }

  // Requirement 11: Render AI Tools in Responsive Grid (col-12 col-md-6 col-lg-3)
  function renderAiTools() {
    aiToolsContainer.innerHTML = "";
    aiToolsData.forEach(tool => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-3";
      col.innerHTML = `
        <div class="p-3 rounded-3 border bg-body-tertiary h-100 d-flex align-items-center gap-3">
          <i class="bi ${tool.icon} text-warning-emphasis fs-3"></i>
          <div>
            <div class="fw-bold small">${tool.name}</div>
            <div class="text-body-secondary small">${tool.role}</div>
          </div>
        </div>
      `;
      aiToolsContainer.appendChild(col);
    });
  }

  // Filter buttons event
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-filter");
      renderSkills();
    });
  });

  // Search input event
  skillSearchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderSkills();
  });

  // Language Toggle (TH / EN)
  function applyLanguage(lang) {
    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    skillSearchInput.placeholder = dict.search_placeholder;
    langLabel.textContent = lang === "th" ? "EN" : "TH";
  }

  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "th" ? "en" : "th";
    applyLanguage(currentLang);
  });

  // Dark / Light Theme Toggle using Bootstrap 5.3 data-bs-theme
  themeToggleBtn.addEventListener("click", () => {
    const htmlEl = document.documentElement;
    const currentTheme = htmlEl.getAttribute("data-bs-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-bs-theme", nextTheme);

    if (nextTheme === "dark") {
      themeIcon.className = "bi bi-sun-fill text-warning";
      themeLabel.textContent = "Light";
    } else {
      themeIcon.className = "bi bi-moon-stars-fill";
      themeLabel.textContent = "Dark";
    }
  });

  // Print Resume
  printBtn.addEventListener("click", () => {
    window.print();
  });

  // Requirement 9 & 10: Auto-collapse mobile Hamburger menu when clicking an anchor link
  const navLinks = document.querySelectorAll("#resumeNavbar .nav-link");
  const navbarCollapseEl = document.getElementById("resumeNavbar");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active", "fw-semibold"));
      link.classList.add("active", "fw-semibold");

      if (navbarCollapseEl.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseEl);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // Initial render
  renderSkills();
  renderAiTools();
});
