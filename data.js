// data.js - Editable Project Information

const projectData = {
    hero: {
        title: "The Timeless Heritage of Sustainable Indian Architecture",
        subtitle: "A Study of Traditional Practices in Modern Durgapur",
        abstract: "This project studies the sustainable ideas found in traditional Indian Architecture and examines how these ideas can be useful in present-day buildings. Indian buildings were often designed according to the local climate, available materials, and everyday needs. The objective is to understand these practices and identify principles applicable today for reducing energy use."
    },

    introduction: `
        <p>Architecture plays an important role in shaping the way people live and interact with their environment. In recent years, increasing energy consumption, environmental degradation, and the effects of climate change have created a growing need for buildings that are more sustainable and energy-efficient.</p>
        <p>Traditional Indian architecture reflects a close relationship between buildings, climate, available resources, and the everyday needs of communities. Before the widespread use of mechanical cooling and artificial lighting, buildings were often designed to provide comfort through passive methods.</p>
        <p>Features such as courtyards, jaalis, verandas, thick walls, appropriate building orientation, natural ventilation, shading devices, and locally available materials helped regulate temperature, airflow, sunlight, and water use.</p>
    `,

    problem: `
        <p>Modern buildings are becoming more dependent on air conditioners, artificial lighting, and other electrical systems to provide comfort. In cities like Durgapur, most houses are built using modern concrete construction.</p>
        <p>While many houses still have features like large windows or balconies that help with ventilation, they are not always planned specifically to reduce energy use. The problem is how to effectively re-integrate traditional architectural ideas into modern buildings.</p>
    `,

    need: `
        <p>The way we build our houses has a direct effect on our comfort, electricity use, and the environment. This study is needed to understand whether traditional ideas are still useful in modern cities.</p>
        <p>Instead of choosing between traditional and modern construction, we can look at how both can work together. This study can increase awareness about climate-friendly building design and encourage better use of natural light and ventilation.</p>
    `,

    objectives: [
        "To understand traditional Indian architecture by studying features such as courtyards, verandahs, jaalis, and natural ventilation.",
        "To observe modern houses in Durgapur and see how shading and greenery are being used today.",
        "To compare traditional and modern designs and identify useful past ideas present in today's buildings.",
        "To study the role of natural elements in making houses comfortable and reducing unnecessary energy use.",
        "To identify practical ideas that can be included in modern buildings without giving up modern facilities."
    ],

    hypothesis: `
        <h4>H₀ — Null Hypothesis</h4>
        <p>Traditional Indian architectural features do not significantly improve indoor comfort or reduce dependence on artificial cooling and lighting in modern buildings.</p>
        <br>
        <h4>H₁ — Alternative Hypothesis</h4>
        <p>Traditional Indian architectural features such as natural ventilation, shading, courtyards, and open spaces can improve indoor comfort and reduce dependence on artificial cooling and lighting in modern buildings.</p>
    `,

    sdgs: [
        {
            goal: "SDG 7",
            title: "Affordable & Clean Energy",
            text: "Traditional buildings used natural light and fresh air instead of depending completely on electric lights and air conditioners, reducing energy consumption."
        },
        {
            goal: "SDG 11",
            title: "Sustainable Cities",
            text: "Traditional ideas such as open spaces, proper ventilation, and shading can make modern city housing better suited to the local climate."
        },
        {
            goal: "SDG 12",
            title: "Responsible Consumption",
            text: "Traditional architecture often used local materials. Learning from these practices encourages careful use of building materials today."
        },
        {
            goal: "SDG 13",
            title: "Climate Action",
            text: "Methods like natural ventilation and tree shade reduce the need for mechanical cooling, supporting environmentally responsible construction."
        }
    ],

    methodology: [
        { title: "Background Study", desc: "Collected information on traditional features like courtyards, jaalis, and climate-based design." },
        { title: "Selection of Study Area", desc: "Durgapur, West Bengal, was selected due to its mix of modern residential buildings and varying housing patterns." },
        { title: "Field Observation", desc: "Visited and observed residential buildings in Durgapur. Noted features like window size, shading, open spaces, and vegetation." },
        { title: "Survey of Residents", desc: "Conducted a questionnaire survey on Sept 4, 2026, among 30+ families and local people to understand public awareness." },
        { title: "Analysis & Conclusion", desc: "Compared field observations and survey responses with researched principles to evaluate the hypothesis." }
    ],

    methodologySteps: [
        {
            step: "STEP 01",
            title: "Selection of Topic",
            desc: "Chosen 'The Timeless Heritage of Sustainable Indian Architecture' to examine traditional passive cooling principles in modern housing."
        },
        {
            step: "STEP 02",
            title: "Background Study",
            desc: "Researched traditional features like courtyards, verandahs, jaalis, thick thermal walls, overhang shading, and natural ventilation."
        },
        {
            step: "STEP 03",
            title: "Selection of Study Area",
            desc: "Selected Durgapur, West Bengal due to its combination of modern planned residential developments and extensive local greenery."
        },
        {
            step: "STEP 04",
            title: "Field Observation",
            desc: "Personally visited residential areas in Durgapur, noting window dimensions, shading overhangs, open spaces, and taking photographs."
        },
        {
            step: "STEP 05",
            title: "Survey of Residents",
            desc: "Prepared and conducted a detailed questionnaire survey among 20+ local families on Sept 4, 2026, to assess public awareness."
        },
        {
            step: "STEP 06",
            title: "Data Collection & Prep",
            desc: "Organized field observations and questionnaire survey responses into structured datasets to identify common architectural patterns."
        },
        {
            step: "STEP 07",
            title: "Analysis of Findings",
            desc: "Compared field evidence and survey data against background literature to pinpoint which passive cooling methods remain effective."
        },
        {
            step: "STEP 08",
            title: "Drawing Conclusions",
            desc: "Evaluated core hypotheses and outlined practical design recommendations for integrating heritage architecture into modern builds."
        }
    ],

    studyArea: "The study focuses on Durgapur, West Bengal, a planned industrial city with hot summers and seasonal rainfall. Its climate makes natural ventilation, shading, courtyards, orientation, and thermal insulation critically important.",

    stats: [
        { value: "80%", label: "Had prior awareness of traditional methods" },
        { value: "100%", label: "Want to reduce dependence on artificial cooling" },
        { value: "93%", label: "Believe traditional methods can reduce energy use" },
        { value: "80%", label: "Prefer combining traditional methods with modern tech" }
    ],

    fieldObservations: [
        {
            title: "Wall Thickness & Thermal Mass",
            details: "Traditional brick masonry and thick walls (300–450mm) significantly delay heat transfer, keeping rooms noticeably cooler during peak afternoon hours."
        },
        {
            title: "Verandahs & Deep Shading",
            details: "Overhanging eaves and shaded outer corridors effectively prevent direct solar radiation from striking window glass and interior walls."
        },
        {
            title: "Cross-Ventilation Alignment",
            details: "Opposing window openings aligned with the prevailing South-East summer winds create continuous passive air movement across living areas."
        },
        {
            title: "High Ceilings & Stack Effect",
            details: "Vertical air space allows hot air to rise away from floor level, keeping the lower living zone comfortable without active mechanical cooling."
        }
    ],

    galleryItems: [
        {
            title: "Traditional House Architecture",
            desc: "Observing passive cooling, verandah overhangs, and thermal mass.",
            image: "images/house1.png"
        },
        {
            title: "Passive Ventilation & Courtyards",
            desc: "Central courtyard design facilitating natural stack ventilation.",
            image: "images/house2.png"
        },
        {
            title: "Shading & Overhang Design",
            desc: "Deep roof overhangs blocking direct summer solar radiation.",
            image: "images/house3.png"
        },
        {
            title: "Large Apartments around open spaces",
            desc: "Apartments designed around open spaces for better ventilation and community interaction.",
            image: "images/house4.png"
        },
        {
            title: "Greenery & Microclimate Control",
            desc: "Surrounding vegetation acting as a natural heat buffer.",
            image: "images/house5.png"
        },
        {
            title: "Thermal Mass & Wall Materials",
            desc: "Thick wall construction helping regulate indoor temperatures.",
            image: "images/house6.png"
        },
        {
            title: "Semi-Open Spaces & Verandahs",
            desc: "Transition spaces reducing heat gain before entering core living areas.",
            image: "images/house7.png"
        }
    ],

    future: `
        <p>In the future, we would like to explore how traditional Indian architectural ideas can be used more effectively in modern buildings. Features such as natural ventilation, shaded windows, balconies, courtyards, open spaces, and greenery can be included while designing new houses.</p>
        <p>We want to create more awareness among students, homeowners, and builders. As a further study, we can observe more buildings across Durgapur and collect actual data such as indoor temperature, airflow, and electricity consumption.</p>
    `,

    conclusion: "We conclude that traditional architecture should not be seen only as a part of the past. Its useful principles can be adapted to modern needs and contribute towards more comfortable, energy-conscious, and sustainable buildings. Sometimes looking back at the way people built in the past can help us find better ways to build for the future.",

    references: [
        "NCERT – Indian Art and Culture / relevant school resources on Indian architecture.",
        "United Nations Sustainable Development Goals (SDGs) – Information on SDG 7, 11, 12, 13.",
        "Bureau of Energy Efficiency (BEE), Government of India – Energy Conservation Building Code (ECBC) 2017.",
        "Bureau of Energy Efficiency (BEE) – Passive design strategies, shading and natural ventilation.",
        "Field Survey and Personal Observations – Houses and residential areas observed in Durgapur, West Bengal.",
        "Survey Responses – Primary information collected on 4 September 2026."
    ],

    credits: {
        author: "Dipenshu Sahoo & Arnab Bhattacharya",
        role: "Student Leads & Researchers",
        guide: "Mr. Samar Bahadur Mallah",
        grade: "Class XI",
        school: "PM SHRI KV CMERI, CITY CENTRE",
        location: "Durgapur, West Bengal"
    }
};