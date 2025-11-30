 
const jobs = [
    {
        id: 1,
        title: "Senior UI/UX Designer",
        company: "Tata Consultancy Services (TCS)",
        location: "Bengaluru, Karnataka",
        type: "Full Time",
        work_mode: "Hybrid",
        category: "Design",
        salary: "₹12 LPA - ₹18 LPA",
        posted: "2 days ago",
        deadline: "15 Feb 2025",
        openings: 3,
        logo: "TCS",
        description: "We are looking for a creative UI/UX designer to design enterprise dashboards.",
        requirements: ["5+ years experience", "Strong portfolio", "Figma, Adobe XD"],
        skills: ["Figma", "Wireframing", "Prototyping"],
        education: "Bachelor’s degree in Design/Related field",
        benefits: ["Health Insurance", "Hybrid work", "L&D Programs"],
        tags: ["UX", "UI", "Designer"]
    },
    {
        id: 2,
        title: "Frontend React Developer",
        company: "Infosys",
        location: "Hyderabad, Telangana",
        type: "Full Time",
        work_mode: "On-site",
        category: "Development",
        salary: "₹8 LPA - ₹14 LPA",
        posted: "5 hours ago",
        deadline: "20 Jan 2025",
        openings: 5,
        logo: "INFY",
        description: "Build scalable frontend applications using React.",
        requirements: ["Strong JS skills", "React & Redux", "REST API"],
        skills: ["React", "JavaScript", "Redux"],
        education: "Any Computer Science Degree",
        benefits: ["PF", "Medical Insurance", "Cab Facility"],
        tags: ["React", "Frontend", "Developer"]
    },
    {
        id: 3,
        title: "Digital Marketing Manager",
        company: "Zomato",
        location: "Gurugram, Haryana",
        type: "Full Time",
        work_mode: "Hybrid",
        category: "Marketing",
        salary: "₹6 LPA - ₹10 LPA",
        posted: "1 day ago",
        deadline: "22 Jan 2025",
        openings: 2,
        logo: "Z",
        description: "Lead digital marketing campaigns to increase user engagement.",
        requirements: ["SEO knowledge", "Content Strategy"],
        skills: ["SEO", "Google Analytics", "Social Media"],
        education: "MBA or relevant degree",
        benefits: ["Free Meals", "Health Insurance"],
        tags: ["Marketing", "SEO", "Manager"]
    },
    {
        id: 4,
        title: "Backend Node.js Developer",
        company: "Wipro",
        location: "Pune, Maharashtra",
        type: "Full Time",
        work_mode: "Remote",
        category: "Development",
        salary: "₹10 LPA - ₹16 LPA",
        posted: "3 days ago",
        deadline: "10 Feb 2025",
        openings: 4,
        logo: "W",
        description: "Develop backend services using Node.js & MongoDB.",
        requirements: ["Node.js", "MongoDB", "AWS"],
        skills: ["Node.js", "Express", "API Development"],
        education: "Any Technical Degree",
        benefits: ["Work From Home", "Flexible Hours"],
        tags: ["Backend", "Node.js", "Developer"]
    },
    {
        id: 5,
        title: "HR Recruiter",
        company: "HCL Technologies",
        location: "Chennai, Tamil Nadu",
        type: "Full Time",
        work_mode: "On-site",
        category: "HR & Recruitment",
        salary: "₹3 LPA - ₹5 LPA",
        posted: "4 hours ago",
        deadline: "25 Jan 2025",
        openings: 6,
        logo: "HCL",
        description: "Hiring IT and Non-IT candidates for various roles.",
        requirements: ["Good communication", "Interview coordination"],
        skills: ["Screening", "Sourcing", "Communication"],
        education: "Any Degree",
        benefits: ["Incentives", "Weekly Off"],
        tags: ["HR", "Recruiter", "Hiring"]
    },
    {
        id: 6,
        title: "Financial Analyst",
        company: "ICICI Bank",
        location: "Mumbai, Maharashtra",
        type: "Full Time",
        work_mode: "On-site",
        category: "Finance",
        salary: "₹7 LPA - ₹12 LPA",
        posted: "6 days ago",
        deadline: "30 Jan 2025",
        openings: 2,
        logo: "ICICI",
        description: "Analyze financial data and prepare performance reports.",
        requirements: ["Excel", "Financial modeling"],
        skills: ["Excel", "Forecasting", "Auditing"],
        education: "B.Com / MBA Finance",
        benefits: ["Annual Bonus", "Medical Coverage"],
        tags: ["Finance", "Analyst"]
    },
    {
        id: 7,
        title: "Cybersecurity Engineer",
        company: "Reliance Jio",
        location: "Mumbai, Maharashtra",
        type: "Full Time",
        work_mode: "Hybrid",
        category: "Security",
        salary: "₹12 LPA - ₹18 LPA",
        posted: "10 hours ago",
        deadline: "12 Feb 2025",
        openings: 3,
        logo: "JIO",
        description: "Monitor and secure digital infrastructure.",
        requirements: ["Network security", "Threat monitoring"],
        skills: ["SIEM", "Firewalls", "Cloud Security"],
        education: "B.Tech / M.Tech",
        benefits: ["Health coverage", "Certifications"],
        tags: ["Security", "Cybersecurity"]
    },
    {
        id: 8,
        title: "Mechanical Engineer",
        company: "Ashok Leyland",
        location: "Chennai, Tamil Nadu",
        type: "Full Time",
        work_mode: "On-site",
        category: "Engineering",
        salary: "₹5 LPA - ₹9 LPA",
        posted: "5 days ago",
        deadline: "18 Feb 2025",
        openings: 4,
        logo: "AL",
        description: "Work on automobile components and testing.",
        requirements: ["CAD/AutoCAD", "Mechanical degree"],
        skills: ["CAD", "Product Testing"],
        education: "BE Mechanical",
        benefits: ["Travel Allowance", "PF"],
        tags: ["Mechanical", "Engineer"]
    },
    {
        id: 9,
        title: "Registered Nurse",
        company: "Apollo Hospitals",
        location: "Chennai, Tamil Nadu",
        type: "Full Time",
        work_mode: "On-site",
        category: "Healthcare",
        salary: "₹25,000 - ₹45,000 / month",
        posted: "8 hours ago",
        deadline: "10 Feb 2025",
        openings: 10,
        logo: "AP",
        description: "Provide patient care and medical assistance.",
        requirements: ["Valid RN license", "Experience preferred"],
        skills: ["Patient Care", "Vitals Monitoring"],
        education: "B.Sc Nursing",
        benefits: ["Accommodation", "Shift Allowances"],
        tags: ["Nurse", "Healthcare"]
    },
    {
        id: 10,
        title: "Customer Support Executive",
        company: "Swiggy",
        location: "Work From Home (India)",
        type: "Full Time",
        work_mode: "Remote",
        category: "Customer Support",
        salary: "₹3 LPA - ₹4.5 LPA",
        posted: "Just now",
        deadline: "18 Jan 2025",
        openings: 20,
        logo: "SW",
        description: "Resolve customer issues through chat and call.",
        requirements: ["Good communication", "Basic computer skills"],
        skills: ["English/Hindi", "Typing", "Support Handling"],
        education: "Any Degree",
        benefits: ["Incentives", "Internet Allowance"],
        tags: ["Support", "Customer Care"]
    }
];
const categoryList = [
    { name: "Development", icon: "💻" },
    { name: "Design", icon: "🎨" },
    { name: "Marketing", icon: "📊" },
    { name: "Finance", icon: "💰" },
    { name: "Health", icon: "🩺" },
    { name: "Education", icon: "🎓" },
    { name: "Engineering", icon: "🔧" },
    { name: "Management", icon: "👔" }
];

document.addEventListener("DOMContentLoaded", () => {

    const jobContainer = document.getElementById('job-list-container');
    const sidebar = document.querySelector('.sidebar');

    if (jobContainer && sidebar) {
        handleListingPage();

    } else if (jobContainer) {
        const recentJobs = jobs.slice(0, 5);
        console.log("Job for home:", recentJobs)
        renderJobs(recentJobs);
    }

    const jobTitleElement = document.getElementById('detail-title');
    if (jobTitleElement) {
        loadJobDetails();
    }
    renderCategories();
    if (document.getElementById('comp-name')) {
        loadCompanyProfile();
    }
    renderBlogGrid();
    loadSingleBlog();
});

function renderJobs(jobList) {
    const container = document.getElementById('job-list-container');
    let htmlContent = '';

    jobList.forEach(job => {
        htmlContent += `
            <div class="job-card" onclick="window.location.href='job-detail.html?id=${job.id}'" data-aos='fade-up'> 
                <div class="job-card-left">
                    <div class="company-logo">${job.logo}</div>
                    <div class="job-info">
                        <a href="job-detail.html?id=${job.id}" class="job-title">${job.title}</a>
<a href="company-profile.html?name=${encodeURIComponent(job.company)}" class="company-name" style="display:block; margin-bottom:8px; color:#6B7280; font-size:14px;">
    ${job.company}
</a>                        <div class="job-meta">
                            <span>📍 ${job.location}</span>
                            <span>💰 ${job.salary}</span>
                            <span>⏰ ${job.posted}</span>
                        </div>
                    </div>
                </div>
                <div class="job-card-right">
                    <span class="badge ${job.type.toLowerCase().replace(' ', '-')}">${job.type}</span>
                 </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}


function loadJobDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');
    const job = jobs.find(j => j.id == jobId);

    if (job) {
        document.getElementById('detail-title').innerText = job.title;
        document.getElementById('detail-company').innerText = job.company;
        document.getElementById('detail-location').innerText = job.location;
        document.getElementById('detail-salary').innerText = job.salary;
        document.getElementById('detail-type').innerText = job.type;
        document.getElementById('detail-logo').innerText = job.logo;

        document.getElementById('detail-desc').innerText = job.description;

        const reqList = document.getElementById('detail-req');
        reqList.innerHTML = '';
        job.requirements.forEach(req => reqList.innerHTML += `<li>${req}</li>`);

        const benList = document.getElementById('detail-ben');
        benList.innerHTML = '';
        job.benefits.forEach(ben => benList.innerHTML += `<li>${ben}</li>`);

        document.getElementById('detail-category').innerText = job.category;
        document.getElementById('detail-posted').innerText = job.posted;
        document.getElementById('detail-deadline').innerText = job.deadline;
        document.getElementById('detail-openings').innerText = job.openings;
        document.getElementById('detail-workmode').innerText = job.work_mode;
        document.getElementById('detail-education').innerText = job.education;

        const skillsContainer = document.getElementById('detail-skills');
        skillsContainer.innerHTML = '';
        job.skills.forEach(skill => {
            skillsContainer.innerHTML += `<span class="skill-tag">${skill}</span>`;
        });

        const breadcrumbTitle = document.getElementById('breadcrumb-title');
        if (breadcrumbTitle) breadcrumbTitle.innerText = job.title;

    } else {
        document.querySelector('.container').innerHTML = "<h2 style='text-align:center; margin-top:50px;'>Job not found!</h2>";
    }
}
function handleListingPage() {

    const keywordInput = document.getElementById('keyword-input');
    const keyword = keywordInput ? keywordInput.value.toLowerCase() : "";


    const urlParams = new URLSearchParams(window.location.search);
    let category = urlParams.get('category');

    const categorySelect = document.getElementById('category-select');
    if (categorySelect && categorySelect.value !== "") {
        category = categorySelect.value;
    }
    const urlKeyword = urlParams.get('keyword');

    if (keywordInput && urlKeyword) {
        keywordInput.value = urlKeyword;
    }

    const checkedBoxes = document.querySelectorAll('.filter-widget input[type="checkbox"]:checked');
    const selectedTypes = Array.from(checkedBoxes).map(box => box.value);

    let filteredJobs = jobs.filter(job => {
        const matchKeyword = job.title.toLowerCase().includes(keyword) ||
            job.company.toLowerCase().includes(keyword);

        const matchCategory = !category || job.category === category;

        const matchType = selectedTypes.length === 0 || selectedTypes.some(type => job.type.includes(type));
        // console.log("edwc", matchType)
        // console.log("edwc", matchKeyword)
        // console.log("edwc", matchCategory)
        return matchKeyword && matchCategory && matchType;
    });

    const countElement = document.getElementById('result-count');
    if (countElement) countElement.innerText = `Showing ${filteredJobs.length} jobs`;

    displayPaginatedList(filteredJobs, currentPage);
    setupPagination(filteredJobs, document.getElementById('pagination-wrapper'));
}

function applyFilters() {
    currentPage = 1;
    handleListingPage();
}
function renderCategories() {
    const container = document.getElementById('category-grid-container');

    if (!container) return;

    let html = '';

    categoryList.forEach(cat => {
        const count = jobs.filter(job => job.category === cat.name).length;

        if (count > 0) {

            const link = `job-listing.html?category=${encodeURIComponent(cat.name)}`;

            html += `
            <a href="${link}" class="cat-card" data-aos='fade-down'>
                <div class="cat-icon">${cat.icon}</div>
                <h3>${cat.name}</h3>
                <p>${count} Jobs Open</p>
            </a>
        `;
        }
    });

    container.innerHTML = html;
}


let currentPage = 1;
const rowsPerPage = 5;

function displayPaginatedList(items, page) {
    const container = document.getElementById('job-list-container');
    container.innerHTML = "";

    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);

    renderJobs(paginatedItems);
}

function setupPagination(items, wrapper) {
    wrapper.innerHTML = "";

    let pageCount = Math.ceil(items.length / rowsPerPage);

    if (pageCount < 2) return;

    let prevBtn = document.createElement('button');
    prevBtn.innerText = '<';
    prevBtn.classList.add('page-btn');
    if (currentPage === 1) prevBtn.disabled = true;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            refreshPagination(items);
        }
    });
    wrapper.appendChild(prevBtn);

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
    }

    let nextBtn = document.createElement('button');
    nextBtn.innerText = '>';
    nextBtn.classList.add('page-btn');
    if (currentPage === pageCount) nextBtn.disabled = true;
    nextBtn.addEventListener('click', () => {
        if (currentPage < pageCount) {
            currentPage++;
            refreshPagination(items);
        }
    });
    wrapper.appendChild(nextBtn);
}

function paginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    button.classList.add('page-btn');

    if (currentPage == page) button.classList.add('active');

    button.addEventListener('click', function () {
        currentPage = page;
        refreshPagination(items);
    });

    return button;
}

function refreshPagination(items) {
    displayPaginatedList(items, currentPage);
    setupPagination(items, document.getElementById('pagination-wrapper'));
    window.scrollTo(0, 0);
}

function applyFilters() {
    currentPage = 1;
    handleListingPage();
}

const companies = [
    {
        name: "Tata Consultancy Services (TCS)",
        industry: "Information Technology",
        website: "https://www.tcs.com",
        founded: "1968",
        size: "600,000+ Employees",
        hq: "Mumbai, India",
        description: "TCS is a global leader in IT services, consulting, and business solutions, serving enterprises in their digital transformation.",
        logo: "TCS",
        contact: "contact@tcs.com"
    },
    {
        name: "Infosys",
        industry: "Information Technology",
        website: "https://www.infosys.com/careers",
        founded: "1981",
        size: "320,000+ Employees",
        hq: "Bengaluru, India",
        description: "Infosys provides next-generation digital services and consulting, enabling clients across 50+ countries to navigate digital transformation.",
        logo: "INFY",
        contact: "contact@infosys.com"
    },
    {
        name: "Zomato",
        industry: "Food Delivery & Technology",
        website: "https://www.zomato.com/careers",
        founded: "2008",
        size: "5,000+ Employees",
        hq: "Gurugram, India",
        description: "Zomato is India’s leading food delivery and restaurant discovery platform with a strong presence across major cities.",
        logo: "Z",
        contact: "contact@zomato.com"

    },
    {
        name: "Wipro",
        industry: "Information Technology",
        website: "https://careers.wipro.com",
        founded: "1945",
        size: "250,000+ Employees",
        hq: "Bengaluru, India",
        description: "Wipro is a global IT, consulting, and business process services company delivering innovative solutions worldwide.",
        logo: "W",
        contact: "contact@wipro.com"
    },
    {
        name: "HCL Technologies",
        industry: "Information Technology",
        website: "https://www.hcltech.com/careers",
        founded: "1976",
        size: "225,000+ Employees",
        hq: "Noida, India",
        description: "HCLTech empowers global enterprises through digital engineering, cloud, AI solutions, and a strong workforce.",
        logo: "HCL",
        contact: "contact@hcl.com"
    },
    {
        name: "ICICI Bank",
        industry: "Banking & Finance",
        website: "https://www.icicicareers.com",
        founded: "1994",
        size: "130,000+ Employees",
        hq: "Mumbai, India",
        description: "ICICI Bank is one of India’s largest private sector banks offering banking, financial, and investment services.",
        logo: "ICICI",
        contact: "contact@icici.com"
    },
    {
        name: "Reliance Jio",
        industry: "Telecom & Technology",
        website: "https://careers.jio.com",
        founded: "2007",
        size: "50,000+ Employees",
        hq: "Mumbai, India",
        description: "Jio is India’s largest 4G/5G network provider, revolutionizing digital connectivity and broadband services.",
        logo: "JIO",
        contact: "contact@jio.com"
    },
    {
        name: "Ashok Leyland",
        industry: "Automobile & Engineering",
        website: "https://www.ashokleyland.com/careers",
        founded: "1948",
        size: "12,000+ Employees",
        hq: "Chennai, India",
        description: "Ashok Leyland is a major commercial vehicle manufacturer involved in automotive engineering and mobility solutions.",
        logo: "AL",
        contact: "contact@ashok.com"
    },
    {
        name: "Apollo Hospitals",
        industry: "Healthcare & Medical Services",
        website: "https://www.apollohospitals.com/careers",
        founded: "1983",
        size: "70,000+ Employees",
        hq: "Chennai, India",
        description: "Apollo Hospitals is India’s largest healthcare group providing world-class medical services across the country.",
        logo: "AP",
        contact: "contact@appolo.com"
    },
    {
        name: "Swiggy",
        industry: "Food Delivery & Technology",
        website: "https://careers.swiggy.com",
        founded: "2014",
        size: "6,000+ Employees",
        hq: "Bengaluru, India",
        description: "Swiggy is a leading on-demand delivery platform offering food, groceries, and convenience services across India.",
        logo: "SW",
        contact: "contact@swiggy.com"
    }
];


function loadCompanyProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    let compName = urlParams.get('name');

    if (!compName) return;

    let company = companies.find(c => c.name === compName) || companies.find(c => c.name === "Generic");

    if (company.name === "Generic") {
        company = { ...company, name: compName, logo: compName.charAt(0) };
    }

    document.getElementById('comp-name').innerText = company.name;
    document.getElementById('comp-logo').innerText = company.logo;
    document.getElementById('comp-desc').innerText = company.description;
    document.getElementById('comp-web').href = company.website;
    document.getElementById('comp-industry').innerText = `🏭 ${company.industry}`;
    document.getElementById('comp-location').innerText = `📍 ${company.hq}`;
    document.getElementById('comp-cover').innerText = compName;

    document.getElementById('comp-founded').innerText = company.founded;
    document.getElementById('comp-size').innerText = company.size;
    document.getElementById('comp-hq').innerText = company.hq;
    document.getElementById('comp-contact').innerText = company.contact;

    const companyJobs = jobs.filter(j => j.company === compName);
    const jobContainer = document.getElementById('company-job-list');

    if (companyJobs.length > 0) {
        let html = '';
        companyJobs.forEach(job => {
            html += `
                <div style="border-bottom:1px solid #eee; padding:15px 0;">
                    <a href="job-detail.html?id=${job.id}" style="font-weight:700; color:#1F2937; font-size:16px;">${job.title}</a>
                    <div style="display:flex; gap:15px; font-size:13px; color:#6B7280; margin-top:5px;">
                        <span>${job.location}</span>
                        <span>${job.type}</span>
                        <span>${job.salary}</span>
                    </div>
                </div>
            `;
        });
        jobContainer.innerHTML = html;
    } else {
        jobContainer.innerHTML = "<p>No open positions currently.</p>";
    }
}


//Blog
const blogPosts = [
    {
        id: 1,
        title: "Top 10 Interview Questions for 2025",
        category: "Career Advice",
        author: "Sarah Jenkins",
        date: "Oct 24, 2024",
        image: "📝",
        excerpt: "Preparing for an interview? Here are the most common questions recruiters are asking this year.",
        content: `
            <p><strong>Preparation is key.</strong> In today's competitive market, being ready for behavioral questions is just as important as technical skills.</p>
            <h3>1. Tell me about yourself.</h3>
            <p>This classic opener sets the tone. Keep it professional and focus on your career journey.</p>
            <h3>2. What is your greatest weakness?</h3>
            <p>Don't say 'I work too hard'. Be genuine and explain how you are overcoming a real challenge.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        `
    },
    {
        id: 2,
        title: "How AI is Changing Recruitment",
        category: "Trends",
        author: "Mike Ross",
        date: "Nov 02, 2024",
        image: "🤖",
        excerpt: "From resume parsing to chatbots, artificial intelligence is reshaping how companies find talent.",
        content: `
            <p>AI is not replacing recruiters, but it is making them faster. Tools like ATS scanners can read thousands of resumes in seconds.</p>
            <h3>The Human Touch</h3>
            <p>Despite the tech, the human connection remains vital. Candidates still want to talk to a real person.</p>
        `
    },
    {
        id: 3,
        title: "Remote Work: The New Normal?",
        category: "Work Culture",
        author: "Emily Blunt",
        date: "Nov 15, 2024",
        image: "🏠",
        excerpt: "Is hybrid work here to stay? We analyze the latest data from Fortune 500 companies.",
        content: "<p>Remote work offers flexibility, but some companies are calling employees back to the office...</p>"
    }
];

function renderBlogGrid() {
    const container = document.getElementById('blog-grid-container');
    if (!container) return;

    let html = '';
    blogPosts.forEach(post => {
        html += `
            <article class="blog-card" data-aos='fade-down' >
                <div class="blog-img-placeholder">${post.image}</div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span class="blog-cat">${post.category}</span>
                        <span class="blog-date">${post.date}</span>
                    </div>
                    <a href="blog-article.html?id=${post.id}">
                        <h3 class="blog-title">${post.title}</h3>
                    </a>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="blog-article.html?id=${post.id}" class="read-more">Read Article →</a>
                </div>
            </article>
        `;
    });
    container.innerHTML = html;
}

function loadSingleBlog() {
    const titleEl = document.getElementById('post-title');
    if (!titleEl) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const post = blogPosts.find(p => p.id == id);

    if (post) {
        document.getElementById('post-title').innerText = post.title;
        document.getElementById('post-meta-text').innerText = `By ${post.author} • ${post.date} • ${post.category}`;
        document.getElementById('post-body').innerHTML = post.content;
        document.getElementById('post-icon').innerText = post.image;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
});

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav');
    const closeBtn = document.querySelector('.btn-close');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {

            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}
