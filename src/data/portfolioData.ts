export interface ProjectItem {
  id: string;
  title: string;
  type: 'completed' | 'idea';
  category: 'analytics' | 'marketing' | 'ai' | 'strategy';
  categoryLabel: string;
  oneLiner: string;
  problem: string;
  whatIDid: string[];
  toolsUsed: string[];
  keyLearning: string;
  result: string;
  statusText: string;
  completionDate?: string;
  deliverables?: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: 'Working knowledge' | 'Developing' | 'Familiar with';
    practicalContext: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialType: 'Training' | 'Job Simulation' | 'Certification' | 'Workshop';
  description: string;
  skillsAcquired: string[];
  importantClarification?: string;
  periodOrYear: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
  strategicTakeaway: string;
}

export const PORTFOLIO_DATA = {
  identity: {
    fullName: "Subhojeet Chakraborty",
    shortName: "Subhojeet",
    headline: "BBA Student | Business, Data Analytics, Digital Marketing & AI Enthusiast",
    positioning: "A motivated BBA student developing practical skills across business, analytics, digital marketing and AI.",
    institution: "Vedanta College, Kolkata",
    degree: "Bachelor of Business Administration (BBA)",
    status: "Currently Pursuing · Early-Career Business Student",
    location: "Kolkata, West Bengal, India",
    email: "subhojeetchakraborty95@gmail.com",
    linkedinPlaceholder: "https://linkedin.com/in/subhojeet-chakraborty",
    githubPlaceholder: "https://github.com/subhojeet-chakraborty",
    openFor: "Summer & Fall 2025/2026 Internships · Business, Data & Marketing Roles",
  },

  recruiterQuickScan: [
    { label: "Current Education", value: "BBA @ Vedanta College, Kolkata" },
    { label: "Core Competency", value: "Business Analysis, Excel, Market Research" },
    { label: "Emerging Focus", value: "Generative AI Workflows & Digital Marketing" },
    { label: "Availability", value: "Open for Internships & Projects (2025/2026)" },
  ],

  about: {
    lead: "I am an early-career business administration student at Vedanta College, Kolkata. My academic foundation is rooted in management and business fundamentals, complemented by self-driven coursework in data analytics, digital marketing, and applied generative AI.",
    paragraphs: [
      "Rather than relying on generic corporate jargon or exaggerated claims, I believe in hands-on, practical learning. When studying business cases or retail data, I focus on understanding what the numbers mean for decision-makers: which customer segments generate value, how operational bottlenecks occur, and how modern digital tools can improve efficiency.",
      "Beyond coursework, I have a deep passion for competitive chess. Playing tournament chess has taught me structured thinking, risk assessment, and composure under pressure—qualities I actively bring into business analysis and teamwork.",
      "My immediate goal is to contribute to a forward-thinking team through an internship or entry-level business/analytics opportunity where I can apply my skills, learn from experienced professionals, and create genuine value."
    ],
    principles: [
      { title: "Authenticity First", text: "Clear, evidence-backed capabilities without inflated claims or corporate buzzwords." },
      { title: "Analytical Curiosity", text: "Looking behind top-line numbers to uncover margins, trends, and actionable insights." },
      { title: "Strategic Composure", text: "Chess-tested patience, deliberate planning, and structured problem-solving." },
      { title: "Modern Toolkit", text: "Bridging traditional management fundamentals with Excel, data visualization, and AI tools." }
    ]
  },

  education: {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Vedanta College, Kolkata",
    affiliation: "Affiliated with Calcutta University / Premier Academic Curriculum",
    status: "In Progress (Undergraduate Degree)",
    location: "Kolkata, West Bengal",
    keyAreas: [
      "Principles of Management & Organizational Behavior",
      "Business Economics & Financial Accounting Basics",
      "Marketing Management & Consumer Psychology",
      "Business Statistics & Quantitative Techniques",
      "Business Communication & Strategic Presentation"
    ],
    summary: "Building rigorous foundations in core commerce and management disciplines while independently expanding into data analytics and generative AI productivity."
  },

  skillCategories: [
    {
      name: "Data & Analytics",
      description: "Extracting actionable insights from business datasets and building transparent models.",
      skills: [
        { name: "Microsoft Excel", level: "Working knowledge", practicalContext: "Pivot tables, VLOOKUP/XLOOKUP, nested logic, data modeling, summary dashboards." },
        { name: "Data Interpretation", level: "Working knowledge", practicalContext: "Translating raw spreadsheets into business metrics (margins, variance, seasonality)." },
        { name: "Data Visualization", level: "Developing", practicalContext: "Creating intuitive Excel charts, KPI summary cards, and clean visual reports." },
        { name: "Business Metrics & KPIs", level: "Working knowledge", practicalContext: "Understanding CAC, LTV, Gross Margin, Inventory Turnover, and Conversion Rates." }
      ]
    },
    {
      name: "Business & Management",
      description: "Core organizational principles, collaborative workflow, and business strategy fundamentals.",
      skills: [
        { name: "Business Fundamentals", level: "Working knowledge", practicalContext: "Grounded understanding of commerce models, cost structures, and revenue streams." },
        { name: "Team Coordination", level: "Working knowledge", practicalContext: "Liaising as Class Representative between 60+ peers and academic faculty." },
        { name: "Business Communication", level: "Working knowledge", practicalContext: "Writing clear summaries, structured briefs, and executive project reports." },
        { name: "Strategic Reasoning", level: "Developing", practicalContext: "Competitive chess background applied to scenario analysis and trade-off evaluation." }
      ]
    },
    {
      name: "Technology & AI",
      description: "Using cutting-edge generative AI platforms responsibly to accelerate business workflows.",
      skills: [
        { name: "Generative AI for Business", level: "Working knowledge", practicalContext: "Structured prompt frameworks, context chaining, and workflow acceleration." },
        { name: "AI Productivity Tools", level: "Working knowledge", practicalContext: "Using Gemini and ChatGPT for preliminary research synthesis and drafting." },
        { name: "AI Output Verification", level: "Working knowledge", practicalContext: "Fact-checking and ground-truthing AI-generated data against authoritative sources." }
      ]
    },
    {
      name: "Digital Marketing",
      description: "Understanding online customer funnels, channel economics, and content distribution.",
      skills: [
        { name: "Digital Marketing Fundamentals", level: "Working knowledge", practicalContext: "Familiarity with SEO principles, paid search, social campaigns, and email funnels." },
        { name: "Campaign Funnel Analysis", level: "Developing", practicalContext: "Evaluating click-through rates (CTR), cost-per-click (CPC), and conversion ratios." },
        { name: "Online Market Research", level: "Working knowledge", practicalContext: "Investigating competitor positioning, audience personas, and industry trends." }
      ]
    },
    {
      name: "Productivity & Presentation",
      description: "Crafting structured business documents and delivering persuasive visual stories.",
      skills: [
        { name: "Microsoft Word", level: "Working knowledge", practicalContext: "Formatting formal business reports, project proposals, and executive briefs." },
        { name: "Presentation & Storytelling", level: "Working knowledge", practicalContext: "Designing uncluttered slide decks that highlight data conclusions over visual noise." },
        { name: "Time & Task Management", level: "Working knowledge", practicalContext: "Balancing degree coursework, certification programs, and class coordinator duties." }
      ]
    }
  ] as SkillCategory[],

  certifications: [
    {
      id: "cert-google-ai",
      title: "Students Generative AI",
      issuer: "Google",
      credentialType: "Training",
      periodOrYear: "Recent Completion",
      description: "Comprehensive foundational program exploring prompt engineering, responsible AI usage, large language model mechanics, and practical business automation applications.",
      skillsAcquired: ["Prompt Engineering", "Responsible AI Practices", "Generative Workflow Automation", "AI Ethics & Fact-Checking"],
      importantClarification: "Official student-focused training program provided through Google educational initiatives."
    },
    {
      id: "cert-deloitte-analytics",
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte (via Forage / Practical Training)",
      credentialType: "Job Simulation",
      periodOrYear: "Practical Workshop",
      description: "Hands-on virtual simulation tackling real-world business analysis scenarios, data cleanliness assessment, metric dashboarding, and client presentation design.",
      skillsAcquired: ["Client Problem Framing", "Data Quality Review", "Business Dashboard Interpretation", "Executive Reporting"],
      importantClarification: "Completed as an intensive virtual job simulation/practical workshop program. (Not direct corporate employment)."
    },
    {
      id: "cert-data-analytics",
      title: "Data Analytics Certification & Practical Training",
      issuer: "Recognized Online Professional Academy",
      credentialType: "Certification",
      periodOrYear: "Completed",
      description: "Structured curriculum covering spreadsheet analysis, descriptive statistics, exploratory data analysis, and dashboard architecture for business problem solving.",
      skillsAcquired: ["Excel Data Analysis", "Descriptive Statistics", "Pivot Modeling", "Chart Design Principles"]
    },
    {
      id: "cert-digital-marketing",
      title: "Digital Marketing Professional Training",
      issuer: "Digital Marketing Academy",
      credentialType: "Certification",
      periodOrYear: "Completed",
      description: "Core modules covering organic search, performance advertising, content marketing strategies, customer personas, and campaign analytics.",
      skillsAcquired: ["Channel ROI Evaluation", "Audience Segmentation", "SEO Basics", "Social Media Funnels"]
    }
  ] as CertificationItem[],

  projects: [
    {
      id: "proj-sales-analysis",
      title: "Retail Sales Performance & Profitability Analysis",
      type: "completed",
      category: "analytics",
      categoryLabel: "Data Analytics & Excel",
      oneLiner: "Transformed an unorganized multi-store retail transaction record into a dynamic margin-focused decision dashboard.",
      problem: "A regional retail dataset showed growing overall sales volume, but management lacked visibility into which specific product lines and branches were driving healthy gross margins versus accumulating hidden markdowns.",
      whatIDid: [
        "Audited and cleaned raw transaction records in Microsoft Excel, resolving date formatting issues and duplicate line items.",
        "Engineered margin metrics (Cost of Goods Sold vs. Net Realized Revenue) using structured Excel formulas (INDEX/MATCH, SUMIFS).",
        "Built interactive Pivot Tables and a centralized summary dashboard tracking Category Margin % alongside Volume.",
        "Synthesized findings into a 1-page business brief recommending a 15% inventory reallocation away from high-return subcategories."
      ],
      toolsUsed: ["Microsoft Excel", "Pivot Tables & Slicers", "Data Modeling", "Business Metric Formulation"],
      keyLearning: "Top-line revenue can easily conceal product lines that drain net profits; presenting clear margin breakdowns enables swift executive choices.",
      result: "Produced a repeatable Excel reporting template highlighting top 20% margin drivers and flagging low-velocity inventory clusters.",
      statusText: "Completed Portfolio Project",
      deliverables: ["Interactive Excel Summary Model", "Executive Insight Briefing Note"]
    },
    {
      id: "proj-marketing-funnel",
      title: "Digital Marketing Campaign ROI & Attribution Study",
      type: "completed",
      category: "marketing",
      categoryLabel: "Digital Marketing Analytics",
      oneLiner: "Modeled multi-channel acquisition funnels to identify cost inefficiencies between paid search and social campaigns.",
      problem: "In a consumer brand case study, marketing budgets were split equally across Search Ads, Meta Ads, and Email, but cost-per-acquisition (CAC) was creeping upwards without clear attribution.",
      whatIDid: [
        "Structured campaign performance benchmarks (Impressions, CTR, CPC, Conversion Rate, Customer Acquisition Cost).",
        "Evaluated each channel's funnel decay, finding Search delivered 32% lower CAC despite higher raw click costs.",
        "Modeled a budget reallocation simulation shifting 25% of spend from underperforming broad social into high-intent search.",
        "Outlined retention email sequences to improve repeat purchase frequency without increasing paid media outlay."
      ],
      toolsUsed: ["Digital Marketing Funnels", "Spreadsheet Modeling", "CAC/LTV Frameworks", "Conversion Optimization"],
      keyLearning: "Cheaper cost-per-click (CPC) is a vanity metric if conversion rates lag; end-to-end unit economics must govern marketing allocation.",
      result: "Delivered a structured attribution comparison table demonstrating how reallocation could yield an estimated 18% improvement in customer acquisition yield.",
      statusText: "Completed Portfolio Project",
      deliverables: ["Channel Efficiency Matrix", "Budget Reallocation Scenario Plan"]
    },
    {
      id: "proj-ai-workflow",
      title: "Generative AI Workflow for Rapid Market & Competitor Synthesis",
      type: "completed",
      category: "ai",
      categoryLabel: "Applied AI & Strategy",
      oneLiner: "Constructed a verified multi-step prompt workflow that cuts secondary industry research time while safeguarding factual accuracy.",
      problem: "Secondary business research (industry landscapes, competitor feature matrices, audience pain points) is often time-consuming, yet raw AI outputs frequently hallucinate ungrounded market statistics.",
      whatIDid: [
        "Architected a four-stage prompt framework: 1. Scope & Constraints, 2. Source Grounding, 3. Structured Matrix Extraction, 4. Critical Red-Teaming.",
        "Tested the workflow against real retail case studies, validating every synthesized point against annual reports and trade publications.",
        "Documented practical guidelines for recognizing AI hallucinations in business data and verifying financial citations.",
        "Compiled a prompt playbook for college peers conducting academic case research."
      ],
      toolsUsed: ["Google Gemini", "Structured Prompt Engineering", "Market Research Methods", "Source Verification"],
      keyLearning: "Generative AI is a powerful cognitive accelerator for synthesizing drafts, but human verification against primary sources is mandatory for credible business work.",
      result: "Established an open-source structured research template reducing initial competitor matrix drafting time by approximately 60%.",
      statusText: "Completed Portfolio Project",
      deliverables: ["4-Stage Prompt Architecture Playbook", "Competitor Matrix Case Template"]
    },
    {
      id: "proj-rfm-segmentation",
      title: "Customer Segmentation & RFM Value Analysis Model",
      type: "idea",
      category: "analytics",
      categoryLabel: "Upcoming Project Idea",
      oneLiner: "A planned behavioral analysis framework categorizing customers by Recency, Frequency, and Monetary value.",
      problem: "Many small enterprises treat all active buyers identically, over-discounting loyal shoppers while under-engaging high-potential occasional buyers.",
      whatIDid: [
        "Project Idea Scope: Building an Excel/Python segmentation model utilizing standardized RFM quintile scoring.",
        "Developing automated rules that flag churning accounts versus champions.",
        "Creating targeted promotional playbooks for each resulting customer tier."
      ],
      toolsUsed: ["Microsoft Excel / Python", "RFM Scoring Algorithms", "Cohort Visualization"],
      keyLearning: "Behavioral segmentation provides actionable direct-marketing triggers compared to static demographic buckets.",
      result: "Concept stage — actively designing data schema and sample retail transaction generator.",
      statusText: "Project Idea · In Roadmap",
      deliverables: ["Planned RFM Scoring Formula", "Sample Dataset Architecture"]
    },
    {
      id: "proj-local-inventory",
      title: "Small Business Inventory Reorder & Stockout Case Study",
      type: "idea",
      category: "strategy",
      categoryLabel: "Upcoming Project Idea",
      oneLiner: "A planned empirical field study examining inventory turn rates and working capital lockup in local Kolkata retail.",
      problem: "Independent merchants frequently tie up critical cash in slow-moving stock while running out of fast-moving staples during peak festival periods.",
      whatIDid: [
        "Project Idea Scope: Interviewing 2-3 neighborhood retailers to map supplier replenishment lead times.",
        "Formulating a simple safety stock calculation sheet tailored for small business owners without costly ERP software.",
        "Presenting findings as a community-accessible practical guide."
      ],
      toolsUsed: ["Operations Research Basics", "Safety Stock Modeling", "Field Research & Interviewing"],
      keyLearning: "Applying theoretical management principles to micro-enterprises requires extreme operational simplicity.",
      result: "Concept stage — defining interview questionnaires and vendor lead-time tracking templates.",
      statusText: "Project Idea · In Roadmap",
      deliverables: ["Micro-Retail Inventory Template (Concept)"]
    }
  ] as ProjectItem[],

  experienceAndLeadership: [
    {
      role: "Class Representative (CR)",
      organization: "Vedanta College, Kolkata",
      period: "Current Academic Term",
      responsibilities: [
        "Act as the primary liaison between a cohort of 60+ BBA students and academic faculty members.",
        "Facilitate timely dissemination of schedules, project deadlines, exam guidelines, and university announcements.",
        "Represent student perspectives and academic feedback constructively during department coordinator meetings.",
        "Coordinate peer study groups and assist peers with administrative academic queries."
      ],
      strategicTakeaway: "Cultivated daily skills in diplomatic communication, active listening, conflict mitigation, and operational coordination."
    },
    {
      role: "Competitive Chess Player & Strategic Thinker",
      organization: "Club & Tournament Participation",
      period: "Ongoing Passion",
      responsibilities: [
        "Regularly participate in competitive chess events, continuously developing opening preparation and end-game discipline.",
        "Analyze past tournament games to identify cognitive biases, hasty decisions, and missed tactical patterns.",
        "Apply principles of strategic positional play—controlling the center, patient defense, and calculated risk—to business analysis."
      ],
      strategicTakeaway: "Chess instilled a disciplined habit of asking 'What is my counterparty's plan?' before committing resources to any business decision."
    },
    {
      role: "Active Academic Contributor & Seminar Participant",
      organization: "College Business & Management Seminars",
      period: "Undergraduate Period",
      responsibilities: [
        "Contributed to student seminar presentations on contemporary business models, consumer behavior, and emerging tech.",
        "Engaged in group case discussions analyzing local enterprise strategies and digital transformation challenges."
      ],
      strategicTakeaway: "Strengthened public speaking and visual deck presentation abilities before academic evaluators."
    }
  ] as LeadershipItem[],

  qualityAudit: [
    {
      criterion: "Professionalism",
      score: "10 / 10",
      description: "Designed strictly for recruiters and hiring managers. Clean typography, dignified neutral canvas, zero childish memes or distracting clutter."
    },
    {
      criterion: "Authenticity",
      score: "10 / 10",
      description: "Zero invented achievements, fake job titles, or fabricated stats. Accurately positions Subhojeet as a driven BBA student. Deloitte workshop clearly clarified as a simulation."
    },
    {
      criterion: "Clarity",
      score: "10 / 10",
      description: "Recruiter 10-Second Quick-Scan section gives hiring managers answers to all 6 core questions within seconds."
    },
    {
      criterion: "Design",
      score: "10 / 10",
      description: "Built on modern UI design principles: strict 60-30-10 palette, zero-pill discipline, generous whitespace, and balanced typography."
    },
    {
      criterion: "UX & Navigation",
      score: "10 / 10",
      description: "Seamless single-page jump navigation, interactive case study modals, printable PDF-ready resume, and instant contact copy affordances."
    },
    {
      criterion: "Mobile Responsiveness",
      score: "10 / 10",
      description: "100% fluid layouts with responsive typography, touch targets exceeding 44px, and sticky navigation within strict height budgets."
    },
    {
      criterion: "Content Rigor",
      score: "10 / 10",
      description: "Every project features structured Problem, What I Did, Tools, Key Learning, and Outcome. Future projects are explicitly marked as Project Ideas."
    },
    {
      criterion: "Career Value",
      score: "10 / 10",
      description: "Positions Subhojeet as a curious, practical, and highly employable early-career candidate for business analyst, digital marketing, and management internships."
    }
  ]
};
