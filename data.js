/*
 * ============================================================
 *  EDIT THIS FILE TO CHANGE THE SITE'S CONTENT.
 * ============================================================
 */
window.SITE = {
  name: "Prabhanjan Balakrishnan",
  handle: "prabhanjan_balakrishnan",              // shown in the nav as ~/handle
  role: "Business Analyst",
  tagline: "I build practical tools that solve real problems — usually ones I had first, and wished someone had solved for me earlier. Keen on mastering AI, SQL, Python and Analytics to improve financial decision-making.",
  location: "Based In: New York City Metropolitan Area, United States",

  // Lines typed out in the hero terminal, one after another.
  typedLines: [
    "turns messy data into clear decisions",
    "asks why until the numbers make sense",
    "builds tools for problems I've had myself"
  ],

  // About me: each "quoted string" is one paragraph. Separate paragraphs with a comma.
  about: [
    "I am a business analyst with experience translating financial and operational data into process and product improvements, now targeting Business Analyst and Product Analyst roles in Fintech.",
    "I care about the details, but I also care about the big picture. When it comes to analytics, the details matter more than most people realize. It's about sifting through the data and finding that number that doesn't make sense in the dataset, pointing it out and getting to the root cause. That's the fun part. But being a great analyst is about being able to paint the big picture and simplify your findings to help others make the right decisions. That's where I come in. I translate the nitty gritty details to showcase the analysis in a way that stands out and everyone can relate to and understand.",
    "In my free time outside of work, you might find me out and about in the streets just exploring different neighborhoods, working at local cafes, or you might run into me on a random hike with my wife somewhere in Upstate NY! I also love Basketball, building projects with Claude Code, and getting out of the house as much as possible and doing different types of activities, be it biking, indoor rock climbing, go-karting, golf, or trying out a new sport, I'm always in for an adventure!"
  ],

  currently: {
    building: "AI tools to help with planning finances and trips better!",
    learning: "SQL, Python, AI Engineering",
    reading:  "Dan Brown: Origin"
  },

  // Each line is one skill box: "Box title": ["skill", "skill", ...], (comma after every line but the last)
  skills: {
    "Data & Analytics":    ["SQL", "Tableau", "Microsoft Excel"],
    "Business Systems":    ["SAP", "Salesforce", "NetSuite", "BatchMetrics", "Black Knight"],
    "Productivity & Dev":  ["Claude Code", "Git", "GitHub", "VS Code", "Microsoft Word", "Microsoft PowerPoint"]
  },

  // featured: true puts a project at the top with a highlight.
  // image: path to a screenshot in assets/projects/ (optional).
  // description: one "string", or a list ["paragraph 1", "paragraph 2"] for several paragraphs.
  projects: [
    {
      title: "Multi-Bank SQL Database",
      description: "A SQL database I designed from scratch using SQLite to track customers' accounts and transactions across five banks, similar to how aggregators like Plaid or Mint work. It holds 424 sample transactions for 11 customers, stores money in cents to avoid rounding errors, and uses triggers to update balances automatically. I wrote analysis queries to find where the money goes each month, who the biggest spenders are, and which bank carries a concentration risk.",
      tags: ["SQL"],
      github: "https://github.com/prabhanjanbalakrishnan/Multi-Bank-SQL-Database",
      demo: "",
      image: "assets/projects/multi-bank-schema.svg",
      featured: true
    },
    {
      title: "Credit Card Churn Dashboard",
      description: "An interactive Tableau dashboard that answers one question: why do credit card customers leave? Using data on 10,127 bank customers, I found that 16% had left and tested five possible drivers. Churn was concentrated among disengaged customers: those making fewer than 60 transactions a year and those who contacted the bank 4 or more times. Income and card tier made little difference. Before trusting any percentage, I checked how many customers sat behind it, which kept me from reading too much into tiny groups. A Card Category filter updates every chart at once.",
      tags: ["Tableau"],
      github: "",
      demo: "https://public.tableau.com/app/profile/prabhanjan.balakrishnan/viz/BankChurners_17914266200100/ChurnDashboard",
      image: "assets/projects/bank-churn-dashboard.png",
      featured: true
    },
    {
      title: "ESG Sentiment by State",
      description: "A Tableau map I built in 2024 for an individual project with ERIA, showing where each U.S. state stands on ESG (environmental, social and governance) policy. States are classified as Pro-ESG, Anti-ESG, both, or no stance, and a highlight control lets viewers isolate each group. The map makes the regional pattern easy to see at a glance: Anti-ESG positions cluster across the South and much of the Midwest and Mountain West.",
      tags: ["Tableau"],
      github: "",
      demo: "https://public.tableau.com/app/profile/prabhanjan.balakrishnan/viz/ESGSentiment/ESGSentimentByState",
      image: "assets/projects/esg-sentiment.png",
      featured: false
    },
    {
      title: "Hotel Points Optimizer",
      description: "This is a website created with Claude Code that allows users to input all their membership information they have with hotels. This includes which hotel chains they have, membership status they have at each hotel, and how many points they have at each hotel chain. They then can explore options by destination, dates they plan to go, how many people are traveling and how many rooms they might need, which allows the users to see which hotel chains might be best suited for that specific location. It also gives a ranking system of which hotel chains gives the value for your money, while also categorizing within each hotel stay by property tier, with how many points you would need for each type of stay, with a cash value for each one, with how many nights it would cover given your points balance.",
      tags: ["AI-Directed Development"],
      github: "https://github.com/prabhanjanbalakrishnan/Hotel-Points-Optimizer",
      demo: "https://hotel-points-optimizer.vercel.app/",
      image: "assets/projects/hotel-points-optimizer.jpg",
      featured: true
    },
    {
      title: "Card Compare",
      description: "This is a website created with Claude Code that allows users to compare different credit cards across multiple banks. I created this because I wanted a place where I can compare different credit cards without having to open multiple bank sites to look at the perks and benefits of each card and the points system for each one. I genuinely believe that points strategy is going to be the next big thing when it comes to credit cards - how people use their points and how people would ideally like to use their points are not always aligned and I believe this is something that companies will observe more closely and try to create products based on this.",
      tags: ["AI-Directed Development"],
      github: "https://github.com/prabhanjanbalakrishnan/Card-Compare",
      demo: "https://card-compare-ashy.vercel.app/",
      image: "assets/projects/card-compare.jpg",
      featured: true
    },
    {
      title: "Pokepedia",
      description: [
        "This is my first project I used Claude Code to build. This is essentially a Pokemon database that covers all their stats and info for the first 8 generations of Pokemon. You can also build your own team across multiple generations, see where your team's strengths and exposures lie. I even made a special fun feature that gives out the cry of each Pokemon. Try it out and let me know if you think it's fun or not!",
        "I also created a SQL database for this to run analysis queries that showed rankings of pokemon by generation, which pokemon were the strongest of each generation, and the stat differences between legendary and non-legendary pokemon."
      ],
      tags: ["AI-Directed Development", "SQL"],
      github: "https://github.com/prabhanjanbalakrishnan/Pokepedia",
      demo: "https://pokepedia-ten.vercel.app/",
      image: "assets/projects/pokepedia.jpg",
      featured: false
    }
  ],

  // Work history, shown as a timeline. List the most recent role first.
  // A bullet can be "text", or { label: "Heading", items: ["sub-bullet", ...] } for grouped bullets.
  // Lines starting with // are notes for you and never appear on the site.
  // logo is optional: a square image in assets/logos/.
  experience: [
    {
      role: "Supply Chain Consultant (Contract)",
      company: "OnScent",
      logo: "assets/logos/onscent.png",
      location: "Norwood, NJ",
      dates: "Mar 2025 – Jul 2026",
      bullets: [
        { label: "Analysis", items: [
          "Created BatchMetrics reports across 70+ make-to-stock fragrances using SQL joins, aggregations, and data-validation queries to identify shortages, data discrepancies, and purchasing exceptions, supporting root-cause analysis, inventory decisions, and work order prioritization on the production floor.",
	  "Proactively flagged and resolved inventory discrepancies among 90+ West Coast fragrances; noticed mismatches in inventory reports that weren’t on anyone’s radar, took ownership of the reconciliation, and drove the fix end to end, coordinating with system-authorized staff to realign stock to the correct warehouses and restore accurate inventory visibility across sites.",
          // FILL IN: another analysis bullet, e.g. "Analyzed ... to ..., resulting in ..."
        ] },
        { label: "Planning", items: [
          "Led the team to a 28% increase in on-time customer shipments by analyzing demand, inventory, and replenishment data in NetSuite and BatchMetrics across customer and warehouse locations, optimizing safety stock levels.",
	  "Owned end-to-end process for West Coast orders; created work orders in BatchMetrics, and collaborated cross-functionally with Production, QC and Shipping teams to ensure that work orders would be completed on time to ship out to the customer.",
          // FILL IN: another planning bullet, e.g. "Planned ... for ..., which ..."
        ] },
        { label: "Procurement", items: [
          "Tracked $500K+ in non-stock expenditure by gathering requirements from Finance and Procurement to build a standardized approval workflow and department-level spend tracker, improving budget auditability and on-time vendor fulfillment.",
	  "Handled procurement of the 70+ fragrances I managed - bought raw materials as and when needed, analyzing quantity already in inventory vs. quantity needed to finish batches. Placed POs across 15+ vendors, followed up on lead times, ensuring timely delivery.",
	  "Ran the sample submission process end-to-end, from receipt of vendor samples to vendor outreach regarding the sample submission results.",
          // FILL IN: another procurement bullet, e.g. "Sourced / negotiated ... with ... vendors, saving ..."
        ] }
      ]
    },
    {
      role: "Pricing Analyst II (Contract)",
      company: "CertainTeed (Saint-Gobain)",
      logo: "assets/logos/certainteed.png",
      location: "Malvern, PA",
      dates: "May 2024 – Jul 2024",
      bullets: [
        "Drove the accurate, on-time delivery of $150K+ in rebate payments to 30+ regional customers by partnering with sales managers in Salesforce.",
        "Resolved $15K+ in customer payment discrepancies from geographic and contractual pricing variance by analyzing data in LOOKUPs/Pivot Tables and Salesforce, communicating root-cause findings directly to 6 customers monthly."
      ]
    },
    {
      role: "Finance Coordinator (Financial Analyst)",
      company: "Savencia Cheese USA",
      logo: "assets/logos/savencia.png",
      location: "New Holland, PA",
      dates: "Jan 2023 – Oct 2023",
      bullets: [
        "Reduced aged deductions by $4M by analyzing price, volume, mix, trade spend, and deduction data across top customer accounts and driving remediation plans.",
        "Cut reporting turnaround time 30% by building and automating financial and operational KPI reporting in SAP/BEX.",
        "Delivered clear, decision-ready insights for leadership by developing variance and bridge analyses of complex financial drivers."
      ]
    },
    {
      role: "New Acquisition Analyst (Implementation and Onboarding)",
      company: "Cenlar FSB",
      logo: "assets/logos/cenlar.svg",
      location: "Ewing Township, NJ",
      dates: "Aug 2021 – Oct 2022",
      bullets: [
        "Onboarded 11 bank and mortgage clients while meeting 100% of contractual SLA and regulatory/investor requirements.",
        "Headed the onboarding process for 10 additional clients by defining business requirements and creating a standardized client-onboarding workflow to transition their loan portfolios onto Cenlar's servicing platform, validated with cross-functional teams against regulatory/SLA requirements.",
        "Earned the True-Blue Award twice by improving onboarding visibility for internal and client stakeholders, building SQL and Excel-based reporting (LOOKUPs, Pivot Tables, Macros) to track progress and flag data outliers."
      ]
    }
  ],

  // The "personal side" section. emoji + title + short text and/or a bullet list.
  // A bullet can be "text", or { label: "Heading", items: ["sub-bullet", ...] } for sub-bullets.
  interests: [
    { emoji: "✈️", title: "Travel", text: "Next on my travel list:", list: [
      { label: "Oceania", items: ["New Zealand", "Australia"] },
      { label: "Asia", items: ["Malaysia", "Vietnam", "Thailand", "and more"] },
      { label: "South America", items: ["Peru", "Chile", "Argentina", "Ecuador", "Brazil"] }
    ] },
    { emoji: "🎮", title: "Games", list: [
      { label: "PS5", items: [
        "Ghost of Tsushima",
        "Ghost of Yotei",
        "GTA V (awaiting GTA VI!)"
      ] },
      { label: "Nintendo", items: [
        "Pokemon White",
        "Pokemon SoulSilver",
        "Pokemon Platinum",
        "Pokemon FireRed",
        "Pokemon Emerald"
      ] }
    ] },
    { emoji: "🍳", title: "Hobbies", list: [
      "Basketball",
      "Hiking",
      "Biking (bicycle)",
      "Singing",
      "Reading (Fiction AND Non-Fiction)",
      "Exploring new neighborhoods in cities",
      "Networking",
      "Traveling!"
    ] },
    { emoji: "💡", title: "Fun Fact", text: "I am extremely gifted in navigation. Ask anyone around me, they will tell you I am as close to a human navigational database as you could get without relying on technology. When I live somewhere, I find my way around very quickly. I did it when I was in Philly, and I could tell you how to get to almost any neighborhood without looking at Google Maps. I know which bus routes go where, which train lines go where. And now I'm doing the same thing in Jersey City. It's something I really enjoy doing and I take a lot of pride in it. Reach out for your navigational needs!" }
  ],

  // The opening line of the "say hello" section at the bottom of the page.
  contactText: "I enjoy networking with people, whether it's for an opportunity, a collaboration of any kind, or just to meet new people. Let's connect!",

  links: {
    email:    "prabhanjanb@outlook.com",
    github:   "https://github.com/prabhanjanbalakrishnan",
    linkedin: "https://www.linkedin.com/in/prabhanjan-balakrishnan/",
    resume:   ""   // e.g. "assets/resume.pdf" — leave empty to hide the button
  }
};
