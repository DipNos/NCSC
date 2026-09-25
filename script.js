// script.js - Logic and DOM manipulation

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. POPULATE DATA FROM data.js ---
    
    // Hero Section
    document.getElementById('hero-title').innerText = projectData.hero.title;
    document.getElementById('hero-subtitle').innerText = projectData.hero.subtitle;
    document.getElementById('hero-abstract').innerText = projectData.hero.abstract;
    
    // Text Blocks
    document.getElementById('content-intro').innerHTML = projectData.introduction;
    document.getElementById('content-problem').innerHTML = projectData.problem;
    document.getElementById('content-need').innerHTML = projectData.need;
    document.getElementById('content-area').innerText = projectData.studyArea;
    document.getElementById('content-future').innerHTML = projectData.future;
    document.getElementById('content-conclusion').innerText = `"${projectData.conclusion}"`;
    document.getElementById('content-hypothesis').innerHTML = projectData.hypothesis;

    // Objectives List
    const objContainer = document.getElementById('content-objectives');
    projectData.objectives.forEach(obj => {
        let li = document.createElement('li');
        li.innerText = obj;
        objContainer.appendChild(li);
    });

    // SDGs Grid
    const sdgContainer = document.getElementById('content-sdgs');
    projectData.sdgs.forEach(sdg => {
        let div = document.createElement('div');
        div.className = 'sdg-card';
        div.innerHTML = `
            <span class="section-number">${sdg.goal}</span>
            <h4>${sdg.title}</h4>
            <p>${sdg.text}</p>
        `;
        sdgContainer.appendChild(div);
    });

    // Methodology Timeline
    const methodContainer = document.getElementById('content-methodology');
    projectData.methodology.forEach((step, index) => {
        let div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <span class="section-number">Step 0${index + 1}</span>
            <h4>${step.title}</h4>
            <p>${step.desc}</p>
        `;
        methodContainer.appendChild(div);
    });

    // Statistics Highlights
    const statsContainer = document.getElementById('content-stats');
    projectData.stats.forEach(stat => {
        let div = document.createElement('div');
        div.className = 'stat-box';
        div.innerHTML = `
            <span class="stat-number">${stat.value}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        statsContainer.appendChild(div);
    });

    // References
    const refContainer = document.getElementById('content-references');
    projectData.references.forEach(ref => {
        let li = document.createElement('li');
        li.innerText = ref;
        refContainer.appendChild(li);
    });


    // --- 2. INTERACTION: SCROLL REVEAL ANIMATIONS ---
    
    // Add 'reveal' class to sections for the CSS transition
    const sections = document.querySelectorAll('section, .hero-content');
    sections.forEach(sec => sec.classList.add('reveal'));

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        });
    }, revealOptions);

    sections.forEach(sec => revealOnScroll.observe(sec));


    // --- 3. INTERACTION: SUBTLE NAVBAR SHADOW ON SCROLL ---
    
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

});