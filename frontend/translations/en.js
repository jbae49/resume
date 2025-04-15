export const en = {
  sections: {
    education: "EDUCATION",
    licenses: "CERTIFICATIONS",
    experience: "EXPERIENCES (2 YRS 9 MONS TOTAL)",
    awards: "AWARDS",
    leadership: "ACTIVITIES & STARTUP PROJECTS",
    skills: "TECHNICAL SKILLS"
  },
  contact: {
    email: "Email: jooyoungmmm@gmail.com",
    mobile: "Mobile: +82-10-6435-6299",
    linkedin: "LinkedIn: https://www.linkedin.com/in/jybae0120/"
  },
  education: {
    title: "University of Wisconsin-Madison | Bachelor of Science in Statistics",
    period: "2021.12 - 2024.05",
    description: "Teaching Assistant for FINANCE 365/765 (Blockchain and Cryptocurrencies)"
  },
  licenses: [
    {
      title: "Securities Industry Essentials (Credential ID T0207379) | FINRA",
      period: "Jan 2023"
    },
    {
      title: "Tableau Certified Data Analyst (Credential ID T000134652) | Tableau",
      period: "Jan 2024"
    },
    {
      title: "TOEIC (985)",
      period: "Jul 2024"
    }
  ],
  skills: {
    comfortable: [
      { text: "PYTHON", keywords: [] },
      { text: "MySQL (Database)", keywords: [] },
      { text: "AWS (EC2 / S3 / RDS)", keywords: [] },
      { text: "FASTAPI (Development)", keywords: [] },
      { text: "TABLEAU (Data Visualization)", keywords: [] }
    ],
    familiar: [
      { text: "REACT / JAVASCRIPT / CSS", keywords: [] },
      { text: "DOCKER", keywords: [] },
      { text: "SWIFT (iOS)", keywords: [] }
    ]
  },
  experience: [
    {
      company: "Mirae Asset Capital",
      location: "Seoul, Korea",
      role: "Research Analyst",
      period: "2024.10 - Present",
      responsibilities: [
        { 
          text: "Conduct research on the market and company in AI, SpaceTech, Semiconductor, etc and prepare investment memo.", 
          keywords: ["research", "investment memo"]
        },
        { 
          text: "Create one-pager summaries and presentations for global portfolio companies and facilitated connections with potential Korean clients.",
          keywords: ["presentations"] 
        },
        { 
          text: "Expand networks to US-based VC associates to hear about active deal flows in the US and our fund-of-fund opportunities.",
          keywords: [] 
        }
      ]
    },
    {
      company: "Assembly Global",
      location: "Seoul, Korea",
      role: "Digital Marketing Intern",
      period: "2024.08 - 2024.09",
      responsibilities: [
        { 
          text: "Set up and tracked KPIs across multi-channel (Facebook, Reddit, LinkedIn, Google, Naver, etc) digital marketing campaigns for clients.",
          keywords: ["digital marketing campaigns"] 
        }
      ]
    },
    {
      company: "Cross River Bank",
      location: "Fort Lee, NJ",
      role: "Product Research Intern",
      period: "2023.06 - 2023.08",
      responsibilities: [
        { 
          text: "Conducted research on real-time payment networks and competitor research for better product pricing.",
          keywords: ["research"] 
        }
      ]
    },
    {
      company: "Factorial Funds",
      location: "Remote",
      role: "Venture Associate",
      period: "2021.11 - 2023.03",
      responsibilities: [
        { 
          text: "Led multiple end-to-end secondary transaction processes from finding potential sellers and buyers, closing deals with Carta.",
          keywords: ["secondary transaction"] 
        },
        { 
          text: "Created and managed fundraising campaigns with Salesforce and LP databases.",
          keywords: ["fundraising campaigns", "Salesforce"] 
        }
      ]
    },
    {
      company: "ComTrue Technologies",
      location: "Seoul, Korea",
      role: "AI Engineer Intern",
      period: "2021.03 - 2021.08",
      responsibilities: [
        { 
          text: "Implemented state-of-the-art machine learning papers including Transformer from scratch to workable codes in PyTorch improve the company's base Optical Character Recognition model.",
          keywords: ["PyTorch", "Optical Character Recognition model"] 
        },
        { 
          text: "Optimized data loading bottlenecks by using Lightning Memory-Mapped Database and applying multi-processing. Implemented Ray to find the best hyperparameters.",
          keywords: [] 
        }
      ]
    }
  ],
  awards: [
    {
      title: "ETH Seoul Hackathon",
      period: "2022.08",
      award: "First Prize on Polygon & Privacy Track, 6K USDC",
      description: { 
        text: "Developed a private cryptocurrency payroll solution upon Polygon Nightfall, an optimistic roll-up on Ethereum employing zero-knowledge proof for transaction encryptions. Received a subsequent grant from the Polygon team. (Team of 5)",
        keywords: ["Developed a private cryptocurrency payroll solution"] 
      },
      demoLabel: "Demo Video:",
      demoLink: "https://youtu.be/cM9kDD1reJ4?si=F0Qm3WqA1RaOSeTe",
      demoText: "Watch on YouTube"
    },
    {
      title: "DB Finance & Economics Contest",
      period: "2020.05",
      award: "Bronze Award, 6M KRW",
      description: { 
        text: "Presented a short-term intraday trading strategy leveraging multiple ML models including SVM and LSTM, focusing on biopharmaceutical stocks with its volatility, integrating real-time data and sentiment analysis for enhanced predictions. (Individual)",
        keywords: ["short-term intraday trading strategy"] 
      }
    },
    {
      title: "MIRAE ASSET Digital Finance Festival",
      period: "2019.11",
      award: "Bronze Award, 1M KRW",
      description: { 
        text: "Proposed a domain-adaptive sentiment dictionary for stock movement forecasting in the technology sector, combining technical and text data for better natural language processing. (Team of 3)",
        keywords: ["domain-adaptive sentiment dictionary", "natural language processing"] 
      }
    }
  ],
  leadership: [
    {
      title: "Build the Future With Chainlink event",
      period: "2024.09",
      description: { 
        text: "I spoke as one of the panelists at the Chainlink event during Korea Blockchain Week.",
        keywords: [] 
      },
      linkLabel: "Event Post:",
      link: "https://x.com/chainlink/status/1830585790667133320",
      linkText: "View on X"
    },
    {
      title: "BaeTos (TOEIC Speaking Practice Web App)",
      period: "2024.06 - 2024.09",
      description: { 
        text: "Developed a web application that provides questions for the TOEIC speaking exam, instant feedback on answers, realistic mock tests, and a template-based sentence-speaking feature to allow users to practice thoroughly by themselves. Got paid users! (up and running @baetos.com)",
        keywords: [] 
      },
      linkLabel: "Website:",
      link: "https://baetos.com",
      linkText: "baetos.com"
    },
    {
      title: "BaeTalk (English Speaking Practice App)",
      period: "2024.02 - 2024.06",
      description: { 
        text: "Developed a full-stack web app where people can have video calls with AI avatars and practice English using HeyGen, Whisper, ElevenLabs, and GPT APIs with FASTAPI backend in EC2 (no longer in production).",
        keywords: [] 
      },
      linkLabel: "Demo Video:",
      link: "https://www.youtube.com/watch?v=Cjni0TkboPw",
      linkText: "Watch on YouTube"
    },
    {
      title: "Sols on the Square (Restaurant Menu Web Page)",
      period: "2024.01 - 2024.02",
      description: { 
        text: "Volunteered to develop a customer-tracking webpage for a beloved Korean restaurant in Madison with a React frontend and a Flask backend in Docker on AWS EC2 and store user engagement in a MySQL on AWS RDS (no longer in production).",
        keywords: [] 
      },
      linkLabel: "Website:",
      link: "https://solsonthesquare.online",
      linkText: "solsonthesquare.online"
    }
  ]
}; 