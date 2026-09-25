// script.js - Chronological Dynamic Data Renderer

document.addEventListener('DOMContentLoaded', () => {
    if (typeof projectData === 'undefined') {
        console.error("projectData is not defined. Check data.js for syntax errors.");
        return;
    }

    const setHTML = (id, content) => {
        const el = document.getElementById(id);
        if (el && content) el.innerHTML = content;
    };

    // 1. Hero & Basic Info
    setHTML('hero-title', projectData.hero.title);
    setHTML('hero-subtitle', projectData.hero.subtitle);
    setHTML('hero-abstract', `<p>${projectData.hero.abstract}</p>`);
    setHTML('content-intro', projectData.introduction);
    setHTML('content-problem', projectData.problem);
    setHTML('content-need', projectData.need);
    setHTML('content-hypothesis', projectData.hypothesis);

    // 2. Objectives List
    const objContainer = document.getElementById('content-objectives');
    if (objContainer && projectData.objectives) {
        objContainer.innerHTML = projectData.objectives.map(obj => `<li>${obj}</li>`).join('');
    }

    // 3. SDGs Grid
    const sdgsGrid = document.getElementById('sdgs-grid');
    if (sdgsGrid && projectData.sdgs) {
        sdgsGrid.innerHTML = projectData.sdgs.map(sdg => `
            <div class="sdg-card">
                <span class="sdg-goal">${sdg.goal}</span>
                <h3>${sdg.title}</h3>
                <p>${sdg.text}</p>
            </div>
        `).join('');
    }

    // 4. Study Area & Methodology
    setHTML('study-area-text', `<p>${projectData.studyArea}</p>`);
    const methodGrid = document.getElementById('methodology-grid');
    if (methodGrid && projectData.methodology) {
        methodGrid.innerHTML = projectData.methodology.map((m, idx) => `
            <div class="info-card">
                <span class="info-label">Step 0${idx + 1}</span>
                <h4>${m.title}</h4>
                <p>${m.desc}</p>
            </div>
        `).join('');
    }

    // 5. Survey Statistics
    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid && projectData.stats) {
        statsGrid.innerHTML = projectData.stats.map(stat => `
            <div class="stat-card">
                <h3>${stat.value}</h3>
                <p>${stat.label}</p>
            </div>
        `).join('');
    }

    // 6. Field Observations
    const obsGrid = document.getElementById('observations-grid');
    if (obsGrid && projectData.fieldObservations) {
        obsGrid.innerHTML = projectData.fieldObservations.map(obs => `
            <div class="obs-card">
                <h3>${obs.title}</h3>
                <p>${obs.details}</p>
            </div>
        `).join('');
    }

    // 7. Gallery
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid && projectData.gallery) {
        galleryGrid.innerHTML = projectData.gallery.map(item => `
            <div class="gallery-card">
                <div class="gallery-image-wrapper">
                    <img src="${item.image}" alt="${item.title}" class="gallery-img">
                </div>
                <div class="gallery-info">
                    <h4>${item.title}</h4>
                    <p>${item.caption}</p>
                </div>
            </div>
        `).join('');
    }

    // 8. Future Scope & Conclusion
    setHTML('content-future', projectData.future);
    setHTML('content-conclusion', `<p>${projectData.conclusion}</p>`);

    // 9. References
    const refList = document.getElementById('references-list');
    if (refList && projectData.references) {
        refList.innerHTML = projectData.references.map(ref => `<li>${ref}</li>`).join('');
    }

    // 10. Credits / Footer
    if (projectData.credits) {
        setHTML('footer-author', projectData.credits.author);
        setHTML('footer-role', projectData.credits.role);
        setHTML('footer-guide', projectData.credits.guide);
        setHTML('footer-school', `${projectData.credits.school}, ${projectData.credits.location}`);
    }
});
// Render 6 Interactive Pie Charts for Questionnaire Survey Results
document.addEventListener('DOMContentLoaded', () => {
    const pieColors = ['#0284c7', '#ea580c', '#16a34a', '#dc2626', '#9333ea', '#ca8a04'];

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: '#cbd5e1',
                    font: { size: 10 },
                    boxWidth: 12,
                    padding: 8
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return ` ${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    };

    // Chart 1: House Type
    if (document.getElementById('surveyChart1')) {
        new Chart(document.getElementById('surveyChart1').getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Independent house', 'Apartment/Flat', 'Row house', 'Traditional house', 'Other'],
                datasets: [{ data: [52, 28, 12, 6, 2], backgroundColor: pieColors }]
            },
            options: commonOptions
        });
    }

    // Chart 2: Summer Temperature
    if (document.getElementById('surveyChart2')) {
        new Chart(document.getElementById('surveyChart2').getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Very hot', 'Hot', 'Moderate', 'Cool', 'Very cool'],
                datasets: [{ data: [42, 34, 16, 6, 2], backgroundColor: ['#dc2626', '#ea580c', '#ca8a04', '#16a34a', '#0284c7'] }]
            },
            options: commonOptions
        });
    }

    // Chart 3: Cooling Methods
    if (document.getElementById('surveyChart3')) {
        new Chart(document.getElementById('surveyChart3').getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Fans', 'Air conditioning', 'Natural ventilation', 'Cooler', 'Other (plants, etc.)'],
                datasets: [{ data: [38, 26, 18, 12, 6], backgroundColor: pieColors }]
            },
            options: commonOptions
        });
    }

    // Chart 4: Effective Natural Feature
    if (document.getElementById('surveyChart4')) {
        new Chart(document.getElementById('surveyChart4').getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Courtyard', 'Jaalis / ventilated openings', 'Thick walls', 'Shade / overhangs', 'Water bodies'],
                datasets: [{ data: [32, 24, 20, 14, 10], backgroundColor: pieColors }]
            },
            options: commonOptions
        });
    }

    // Chart 5: Interest in Traditional Architectural Ideas
    if (document.getElementById('surveyChart5')) {
        new Chart(document.getElementById('surveyChart5').getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Yes, definitely', 'Yes, maybe', 'Not sure', 'No', 'No, not at all'],
                datasets: [{ data: [56, 28, 10, 4, 2], backgroundColor: ['#16a34a', '#65a30d', '#ca8a04', '#ea580c', '#dc2626'] }]
            },
            options: commonOptions
        });
    }

    // Chart 6: Reason for Natural Cooling
    if (document.getElementById('surveyChart6')) {
        new Chart(document.getElementById('surveyChart6').getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Saves electricity & cost', 'Better for environment', 'More comfortable', 'Inspired by traditional arch.', 'Other'],
                datasets: [{ data: [36, 24, 20, 12, 8], backgroundColor: pieColors }]
            },
            options: commonOptions
        });
    }
});