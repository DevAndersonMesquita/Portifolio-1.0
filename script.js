/* ========================================================================
   Anderson Mesquita — Portfolio
   Menu mobile · Tema claro/escuro · Idioma PT/EN
   ======================================================================== */

const menuIcon = document.getElementById("menu-icon");
const itens = document.getElementById("itens");
const navLinks = document.querySelectorAll("#itens a");

function clickMenu() {
    itens.classList.toggle("active");
    menuIcon.textContent = itens.classList.contains("active") ? "close" : "menu";
}

if (menuIcon && itens) {
    menuIcon.addEventListener("click", clickMenu);

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            itens.classList.remove("active");
            menuIcon.textContent = "menu";
        });
    });

    document.addEventListener("click", (event) => {
        const isClickInsideMenu = itens.contains(event.target);
        const isClickOnIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnIcon) {
            itens.classList.remove("active");
            menuIcon.textContent = "menu";
        }
    });
}

//========== Modo Claro/Escuro ==========

const btnTema = document.getElementById("btn-tema");
const html = document.documentElement;

function aplicarTema(tema) {
    html.setAttribute("data-theme", tema);
    localStorage.setItem("tema", tema);
}

const temaSalvo = localStorage.getItem("tema");
const prefereClaroDoSistema = window.matchMedia("(prefers-color-scheme: light)").matches;
aplicarTema(temaSalvo || (prefereClaroDoSistema ? "light" : "dark"));

if (btnTema) {
    btnTema.addEventListener("click", () => {
        const temaAtual = html.getAttribute("data-theme");
        aplicarTema(temaAtual === "dark" ? "light" : "dark");
    });
}

//========== Idioma PT/EN ==========

const traducoes = {
    pt: {
        "nav.sobre": "GET /sobre",
        "nav.formacao": "GET /formação",
        "nav.projetos": "GET /projetos",
        "nav.tecnologias": "GET /tecnologias",
        "nav.contato": "POST /contato",

        "hero.eyebrow": "STATUS · 200 OK",
        "hero.titulo": "Olá, eu sou o Anderson.",
        "hero.subtitulo": "Desenvolvedor Full-Stack em formação, construindo interfaces e APIs com atenção a detalhes.",
        "hero.cta1": "Ver projetos",
        "hero.cta2": "Entrar em contato",
        "hero.json.role": "\"Full-Stack Developer (em formação)\"",
        "hero.json.status": "\"aberto_a_oportunidades\"",

        "sobre.eyebrow": "GET /sobre",
        "sobre.titulo": "Sobre mim",
        "sobre.paragrafo": "Sou apaixonado por tecnologia e desenvolvimento de software, com foco em criar soluções que unam funcionalidade, organização e uma boa experiência para o usuário. Atualmente estou em formação como Desenvolvedor Full Stack, sempre buscando evoluir por meio de estudos contínuos, prática constante e desenvolvimento de projetos reais. Acredito que boas soluções nascem da combinação entre código limpo, boas práticas e vontade de aprender. Meu objetivo é crescer profissionalmente na área de desenvolvimento de sistemas, contribuindo com projetos que gerem valor real e impacto positivo, enquanto evoluo como desenvolvedor e profissional de tecnologia.",

        "formacao.eyebrow": "GET /formação",
        "formacao.titulo": "Formação",
        "formacao.eng.titulo": "Engenharia de Software",
        "formacao.eng.periodo": "Em andamento · 2º período",
        "formacao.eng.desc": "Criação de sistemas web e back-end; participação em projetos e eventos acadêmicos.",
        "formacao.tec.titulo": "Técnico em Eletrotécnica",
        "formacao.tec.desc": "Automação, máquinas e eletricidade.",
        "formacao.idiomas": "Idiomas",
        "formacao.portugues": "Português (nativo)",
        "formacao.ingles": "Inglês (técnico)",

        "projetos.eyebrow": "GET /projetos",
        "projetos.titulo": "Projetos",
        "projetos.syncops.desc": "Dashboard operacional de checklists para padronizar rotinas de TI, com geração automática de relatórios para chamados (ITSM) e esteira de CI/CD.",
        "projetos.appnology.desc": "Aplicação web de cálculo de cashback para uma fintech fictícia, com backend em Python/FastAPI e banco PostgreSQL (Neon).",
        "projetos.starfilmes.desc": "Sistema web para gerenciamento e visualização de filmes, com cadastro e login de usuários.",
        "projetos.calc.desc": "Ótimo para melhorar o raciocínio lógico na programação.",
        "projetos.relogio.titulo": "Relógio Digital",
        "projetos.relogio.desc": "Projeto simples para o início de uma jornada.",
        "projetos.portfolio.titulo": "Portfólio",
        "projetos.portfolio.desc": "Projeto pessoal para demonstrar minhas habilidades e projetos desenvolvidos.",

        "tech.eyebrow": "GET /tecnologias",
        "tech.titulo": "Tecnologias",
        "tech.frontend": "Front-end",
        "tech.backend": "Backend",
        "tech.dados": "Banco de Dados",
        "tech.cloud": "Cloud & DevOps",
        "tech.ferramentas": "Ferramentas",

        "contato.eyebrow": "POST /contato",
        "contato.titulo": "Vamos conversar",
        "contato.subtitulo": "Aberto a oportunidades como desenvolvedor Full-Stack júnior.",

        "footer.frase": "\u201cTecnologia conecta ideias e constrói o futuro.\u201d",
        "footer.copy": "© 2026 Anderson Mesquita da Silva"
    },
    en: {
        "nav.sobre": "GET /about",
        "nav.formacao": "GET /education",
        "nav.projetos": "GET /projects",
        "nav.tecnologias": "GET /skills",
        "nav.contato": "POST /contact",

        "hero.eyebrow": "STATUS · 200 OK",
        "hero.titulo": "Hi, I'm Anderson.",
        "hero.subtitulo": "Full-Stack Developer in training, building interfaces and APIs with an eye for detail.",
        "hero.cta1": "View projects",
        "hero.cta2": "Get in touch",
        "hero.json.role": "\"Full-Stack Developer (in training)\"",
        "hero.json.status": "\"open_to_work\"",

        "sobre.eyebrow": "GET /about",
        "sobre.titulo": "About me",
        "sobre.paragrafo": "I'm passionate about technology and software development, focused on building solutions that combine functionality, structure and a good user experience. I'm currently training as a Full Stack Developer, always looking to grow through continuous study, hands-on practice and real projects. I believe good solutions come from clean code, good practices and a genuine will to learn. My goal is to grow professionally in software development, contributing to projects that create real value and a positive impact, while evolving as a developer and a technology professional.",

        "formacao.eyebrow": "GET /education",
        "formacao.titulo": "Education",
        "formacao.eng.titulo": "Software Engineering",
        "formacao.eng.periodo": "In progress · 2nd term",
        "formacao.eng.desc": "Building web and back-end systems; taking part in academic projects and events.",
        "formacao.tec.titulo": "Technical Degree in Electrical Engineering",
        "formacao.tec.desc": "Automation, machinery and electricity.",
        "formacao.idiomas": "Languages",
        "formacao.portugues": "Portuguese (native)",
        "formacao.ingles": "English (technical)",

        "projetos.eyebrow": "GET /projects",
        "projetos.titulo": "Projects",
        "projetos.syncops.desc": "Operational checklist dashboard to standardize IT routines, with automatic report generation for tickets (ITSM) and a CI/CD pipeline.",
        "projetos.appnology.desc": "Cashback calculation web app for a fictional fintech, with a Python/FastAPI backend and a PostgreSQL (Neon) database.",
        "projetos.starfilmes.desc": "Movie catalog web app with user sign-up and login.",
        "projetos.calc.desc": "A great way to sharpen logical reasoning in programming.",
        "projetos.relogio.titulo": "Digital Clock",
        "projetos.relogio.desc": "A simple project marking the start of a journey.",
        "projetos.portfolio.titulo": "Portfolio",
        "projetos.portfolio.desc": "Personal project to showcase my skills and the projects I've built.",

        "tech.eyebrow": "GET /skills",
        "tech.titulo": "Skills",
        "tech.frontend": "Front-end",
        "tech.backend": "Backend",
        "tech.dados": "Database",
        "tech.cloud": "Cloud & DevOps",
        "tech.ferramentas": "Tools",

        "contato.eyebrow": "POST /contact",
        "contato.titulo": "Let's talk",
        "contato.subtitulo": "Open to opportunities as a junior Full-Stack developer.",

        "footer.frase": "\u201cTechnology connects ideas and builds the future.\u201d",
        "footer.copy": "© 2026 Anderson Mesquita da Silva"
    }
};

const btnLang = document.getElementById("btn-lang");
const spanLangAtual = document.querySelector("[data-lang-atual]");
const elementosTraduziveis = document.querySelectorAll("[data-i18n]");

function aplicarIdioma(idioma) {
    elementosTraduziveis.forEach(el => {
        const chave = el.getAttribute("data-i18n");
        if (traducoes[idioma] && traducoes[idioma][chave]) {
            el.textContent = traducoes[idioma][chave];
        }
    });

    html.setAttribute("lang", idioma === "pt" ? "pt-br" : "en");
    if (spanLangAtual) {
        spanLangAtual.textContent = idioma === "pt" ? "EN" : "PT";
    }
    localStorage.setItem("idioma", idioma);
}

const idiomaSalvo = localStorage.getItem("idioma") || "pt";
aplicarIdioma(idiomaSalvo);

if (btnLang) {
    btnLang.addEventListener("click", () => {
        const idiomaAtual = localStorage.getItem("idioma") || "pt";
        aplicarIdioma(idiomaAtual === "pt" ? "en" : "pt");
    });
}
