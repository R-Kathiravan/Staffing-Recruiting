/* ==========================
   AGENCY DATA
   (Shared between Listings and Details)
=========================== */
const agencyJobs = [
    {
        id: 201,
        title: "Chief Technology Officer (CTO)",
        company: "FinTech Unicorn",
        location: "New York",
        type: "Retained",
        salary: "$350k + Equity",
        posted: "2 days ago",
        function: "C-Suite",
        logo: "F",
        description: "We are representing a Series-D FinTech unicorn looking for a visionary CTO to lead their 200+ engineering team. You will report directly to the CEO and drive the technical roadmap for their global expansion.",
        requirements: ["10+ years in Executive Leadership", "Experience scaling engineering teams from 50 to 200+", "Background in FinTech or High-Frequency Trading"],
        benefits: ["Significant Equity Package", "Full Relocation Support", "Private Health Concierge"]
    },
    {
        id: 202,
        title: "VP of Engineering",
        company: "HealthCare AI",
        location: "Remote",
        type: "Full Time",
        salary: "$250k - $300k",
        posted: "3 days ago",
        function: "Engineering",
        logo: "H",
        description: "Leading HealthTech firm seeks a VP of Engineering to oversee their AI diagnostics platform. You will manage distributed teams across three time zones.",
        requirements: ["Strong background in AI/ML infrastructure", "Previous VP-level experience", "HIPAA compliance knowledge"],
        benefits: ["Remote-First Culture", "Unlimited PTO", "Home Office Stipend"]
    },
    {
        id: 203,
        title: "Director of Product",
        company: "Global Logistics",
        location: "London",
        type: "Contract",
        salary: "£140k",
        posted: "5 days ago",
        function: "Product",
        logo: "G",
        description: "Spearhead the digital transformation of a logistics giant. We need a product leader who can navigate complex stakeholder environments.",
        requirements: ["7+ years Product Management", "Experience in Logistics or Supply Chain", "Agile Transformation expertise"],
        benefits: ["Performance Bonus", "Travel Allowance", "Pension Scheme"]
    },
    {
        id: 204,
        title: "Head of AI Research",
        company: "DeepTech Labs",
        location: "Bengaluru",
        type: "Full Time",
        salary: "₹80 LPA",
        posted: "1 week ago",
        function: "Engineering",
        logo: "D",
        description: "Join a well-funded research lab working on Generative AI models. You will lead a team of 15 PhD researchers.",
        requirements: ["PhD in Computer Science or related field", "Published research in top-tier conferences", "PyTorch mastery"],
        benefits: ["ESOPs", "Conference Budget", "Patenting Support"]
    },
    {
        id: 205,
        title: "Chief Financial Officer",
        company: "SaaS Scale-up",
        location: "Remote",
        type: "Retained",
        salary: "$300k Base",
        posted: "1 week ago",
        function: "C-Suite",
        logo: "S",
        description: "Pre-IPO SaaS company needs a CFO to prepare the company for public listing. Strong background in US GAAP and fundraising required.",
        requirements: ["CPA/MBA", "Experience taking companies public (IPO)", "SaaS metrics expertise"],
        benefits: ["Pre-IPO Stock Options", "Executive Coaching", "Comprehensive Healthcare"]
    },
    {
        id: 206,
        title: "VP of Sales",
        company: "Enterprise Cloud",
        location: "New York",
        type: "Full Time",
        salary: "$400k OTE",
        posted: "2 weeks ago",
        function: "Sales",
        logo: "E",
        description: "Drive revenue growth for an Enterprise Cloud platform. You will build and manage a high-velocity sales team targeting Fortune 500 accounts.",
        requirements: ["Track record of closing $1M+ deals", "Experience managing Sales Directors", "Enterprise Software background"],
        benefits: ["Uncapped Commission", "Car Allowance", "Club Memberships"]
    }
];

/* ==========================
   RENDER FUNCTION (For Careers Page)
=========================== */
// This function allows agency-careers.html to use this shared data
function getAgencyJobs() {
    return agencyJobs;
}

/* ==========================
   DETAILS PAGE LOGIC
=========================== */
function loadAgencyJobDetails() {
    const titleEl = document.getElementById('ag-job-title');
    if (!titleEl) return; // Not on details page

    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');
    const job = agencyJobs.find(j => j.id == jobId);

    if (job) {
        // Hero Data
        document.getElementById('ag-job-title').innerText = job.title;
        document.getElementById('ag-job-company').innerText = job.company;
        document.getElementById('ag-job-location').innerText = job.location;
        document.getElementById('ag-job-salary').innerText = job.salary;
        document.getElementById('ag-job-type').innerText = job.type;
        document.getElementById('ag-posted-date').innerText = job.posted;
        document.getElementById('ag-job-logo').innerText = job.logo;

        // Content
        document.getElementById('ag-job-desc').innerText = job.description;

        // Requirements
        const reqList = document.getElementById('ag-job-req');
        reqList.innerHTML = '';
        job.requirements.forEach(req => {
            reqList.innerHTML += `<li>${req}</li>`;
        });

        // Benefits
        const benList = document.getElementById('ag-job-ben');
        benList.innerHTML = '';
        job.benefits.forEach(ben => {
            benList.innerHTML += `<li>${ben}</li>`;
        });
    } else {
        document.querySelector('.container').innerHTML = "<h2 style='text-align:center; padding:100px; color:white;'>Job not found.</h2>";
    }
}

/* ==========================
   INIT
=========================== */
document.addEventListener("DOMContentLoaded", () => {
    loadAgencyJobDetails();
});
/* ==========================
   RENDER FUNCTION
=========================== */
function renderAgencyJobs() {
    const container = document.getElementById('job-list-container');
    if (!container) return;

    let html = '';

    agencyJobs.forEach(job => {
        html += `
            <div class="job-card" onclick="window.location.href='job-detail.html?id=${job.id}'"  data-aos='fade-up'>
                <div class="job-card-left">
                    <div class="company-logo">${job.logo}</div>
                    <div class="job-info">
                        <span class="job-title">${job.title}</span>
                        <span class="company-name">${job.company}</span>
                        <div class="job-meta">
                            <span>📍 ${job.location}</span>
                            <span>💰 ${job.salary}</span>
                            <span>⏰ ${job.posted}</span>
                        </div>
                    </div>
                </div>
                <div class="job-card-right">
                    <span class="badge">${job.type}</span>
                 </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

/* ==========================
   INITIALIZATION
=========================== */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Agency Theme Loaded");
    renderAgencyJobs();
});

/* ==========================
   RENDER FUNCTION (For Careers Page)
=========================== */
// This function allows agency-careers.html to use this shared data
function getAgencyJobs() {
    return agencyJobs;
}

/* ==========================
   DETAILS PAGE LOGIC
=========================== */
function loadAgencyJobDetails() {
    const titleEl = document.getElementById('ag-job-title');
    if (!titleEl) return; // Not on details page

    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');
    const job = agencyJobs.find(j => j.id == jobId);

    if (job) {
        // Hero Data
        document.getElementById('ag-job-title').innerText = job.title;
        document.getElementById('ag-job-company').innerText = job.company;
        document.getElementById('ag-job-location').innerText = job.location;
        document.getElementById('ag-job-salary').innerText = job.salary;
        document.getElementById('ag-job-type').innerText = job.type;
        document.getElementById('ag-posted-date').innerText = job.posted;
        document.getElementById('ag-job-logo').innerText = job.logo;

        // Content
        document.getElementById('ag-job-desc').innerText = job.description;

        // Requirements
        const reqList = document.getElementById('ag-job-req');
        reqList.innerHTML = '';
        job.requirements.forEach(req => {
            reqList.innerHTML += `<li>${req}</li>`;
        });

        // Benefits
        const benList = document.getElementById('ag-job-ben');
        benList.innerHTML = '';
        job.benefits.forEach(ben => {
            benList.innerHTML += `<li>${ben}</li>`;
        });
    } else {
        document.querySelector('.container').innerHTML = "<h2 style='text-align:center; padding:100px; color:white;'>Job not found.</h2>";
    }
}

/* ==========================
   INIT
=========================== */
document.addEventListener("DOMContentLoaded", () => {
    loadAgencyJobDetails();
});

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
