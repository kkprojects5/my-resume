// cv data

const resume = {
    name: "Khadizhat KHIZRIEVA",
    location: "Montreal, Quebec",

    sections: {

        objective: {
            icon: "bi-bullseye",
            title: "OBJECTIVE",
            content: `
            Motivated Software Development graduate with hands-on experience in Java, JavaScript, HTML/CSS, and SQL, eager to build efficient, user-focused applications and contribute to collaborative development teams while continuously improving as a developer.
            `
        },

        skills: {
            icon: "bi-code-slash",
            title: "TECHNICAL SKILLS",
            content: `
            <strong>Programming Languages:</strong>
            <ul>
                <li>Java (OOP, core programming concepts, problem-solving)</li>
                <li>JavaScript (DOM manipulation, interactive features)</li>
                <li>HTML5 / CSS3 (responsive layouts, modern web structure)</li>
                <li>SQL (queries, relational databases, data management)</li>
            </ul>

            <strong>Web Development:</strong>
            <ul>
                <li>Frontend development (static and dynamic interfaces)</li>
                <li>Basic UI/UX principles and responsive design</li>
                <li>Familiar with frameworks (React / Vue / Angular – foundational knowledge)</li>
            </ul>

            <strong>Tools & Practices:</strong>
            <ul>
                <li>Debugging and troubleshooting</li>
                <li>Version control basics (Git)</li>
                <li>Team collaboration and project-based development</li>
            </ul>
            `
        },

        projects: {
            icon: "bi-lightbulb",
            title: "PROJECT EXPERIENCE",
            content: `
            <div class="section-card">
                <div class="role-title">Crowdfunding Platform – “Halallauncher”</div>
                <div class="role-sub">UI/UX Designer / Translator | Montreal, QC | May 2018 – Apr 2020</div>

                <ul>
                    <li>Designed user interface mockups and interactive prototypes</li>
                    <li>Contributed to website structure and content publication</li>
                    <li>Translated technical and business documentation (Russian ↔ English)</li>
                    <li>Supported development and communication between stakeholders</li>
                </ul>
            </div>
            `
        },

        experience: {
            icon: "bi-briefcase",
            title: "PROFESSIONAL EXPERIENCE",
            content: `
            <div class="section-card">
                <div class="role-title">Head of Translation Department</div>
                <div class="role-sub">Astrakhan Chamber of Commerce and Industry | 2008 – 2020</div>

                <ul>
                    <li>Managed and supervised a team of translators and language specialists</li>
                    <li>Coordinated translation projects from planning to final delivery</li>
                    <li>Reviewed, edited, and ensured accuracy of technical and legal translations</li>
                    <li>Assigned tasks and balanced workload across team members</li>
                    <li>Oversaw contract translators and supervised interns</li>
                </ul>
            </div>

            <div class="section-card">
                <div class="role-title">Translator – Foreign Economic Relations Division</div>
                <div class="role-sub">Astrakhan Chamber of Commerce and Industry | Nov 2006 – Feb 2008</div>

                <ul>
                    <li>Translated English–Russian documents</li>
                    <li>International business documents</li>
                    <li>Shipping and logistics paperwork</li>
                    <li>Legal and personal documents</li>
                    <li>Technical manuals and financial reports</li>
                    <li>Ensured accuracy in economic and legal terminology</li>
                </ul>
            </div>
            `
        },

        education: {
            icon: "bi-mortarboard",
            title: "EDUCATION",
            content: `
            <strong>Vanier College, Montreal, QC</strong><br>
            Software Development: Secure Desktop, Mobile and Web Applications | 2025 – Present<br><br>

            <strong>Dawson College, Montreal, QC</strong><br>
            Independent Studies | 2023 – 2026<br><br>

            <strong>McGill University, Montreal, QC</strong><br>
            Communication | 2021 – 2023<br><br>

            <strong>EMSB, Montreal, QC</strong><br>
            Business  | 2020 – 2021<br><br>

            <strong>Astrakhan State University, Russia</strong><br>
            LL.B., Civil Law | 2007 – 2011<br><br>

            <strong>Astrakhan State University, Russia</strong><br>
            B.A., Linguistics and Translation | 2001 – 2006
            `
        },

        additional: {
            icon: "bi-globe",
            title: "ADDITIONAL INFORMATION",
            content: `
            <ul>
                <li>Russian, English, French</li>
                <li>Strong background in translation, communication, and documentation</li>
                <li>Experienced in cross-cultural and professional environments</li>
            </ul>
            `
        },

        contact: {
            title: "CONTACT ME",
            content: `
            <div style="font-size: 1.2rem;">
                <p>📧 <strong>Email:</strong> <a href="mailto:kk@email.com">kk@email.com</a></p>
                <p>📱 <strong>Phone:</strong> 514-876-3456</p>
            </div>
            `
        }
    }
};

// render app

function renderApp() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="container mt-5">
            <div class="glass">

                <!-- HEADER -->
                <div class="top-bar d-flex justify-content-between align-items-center flex-wrap gap-2">

                    <div class="header-text">
                        <h1>${resume.name}</h1>
                        <p>${resume.location}</p>
                    </div>

                    <div class="d-flex gap-2">

                        <div class="contact-btn" id="contactBtn">
                            <i class="bi bi-envelope-fill"></i> Contact
                        </div>

                        <div class="download-btn" id="downloadBtn">
                            ⬇ CV
                        </div>

                    </div>
                </div>

                <!-- ICON MENU -->
                <div class="icon-grid" id="menu"></div>

                <!-- CONTENT -->
                <div class="content glass" id="content">
                    <h3>Click an icon to explore a section</h3>
                </div>

            </div>
        </div>
    `;

    renderMenu();

    document.getElementById("contactBtn").onclick = () => {
        showContent(resume.sections.contact);
    };

    document.getElementById("downloadBtn").onclick = downloadCV;
}

// menu

function renderMenu() {
    const menu = document.getElementById("menu");

    Object.keys(resume.sections).forEach(key => {

        if (key === "contact") return;

        const section = resume.sections[key];

        const card = document.createElement("div");
        card.className = "icon-card";

        card.innerHTML = `
            <i class="bi ${section.icon}"></i>
            <p>${section.title}</p>
        `;

        card.onclick = () => showContent(section);

        menu.appendChild(card);
    });
}

// show content with fade

function showContent(section) {
    const content = document.getElementById("content");

    content.innerHTML = `
        <div class="fade-in">
            <h2>${section.title}</h2>
            <div>${section.content}</div>
        </div>
    `;
}

// download cv function

function downloadCV() {

    let cvContent = `
        <html>
        <head>
            <title>${resume.name} CV</title>
        </head>
        <body>
            <h1>${resume.name}</h1>
            <p>${resume.location}</p>
            <hr>

            <h2>OBJECTIVE</h2>
            ${resume.sections.objective.content}
            <hr>

            <h2>SKILLS</h2>
            ${resume.sections.skills.content}
            <hr>

            <h2>PROJECTS</h2>
            ${resume.sections.projects.content}
            <hr>

            <h2>EXPERIENCE</h2>
            ${resume.sections.experience.content}
            <hr>

            <h2>EDUCATION</h2>
            ${resume.sections.education.content}
        </body>
        </html>
    `;

    const blob = new Blob([cvContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Claire_Mancini_CV.html";
    a.click();
}

// init

renderApp();