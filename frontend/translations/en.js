export const en = {
  sections: {
    education: "EDUCATION",
    licenses: "CERTIFICATIONS",
    experience: "EXPERIENCES (2 YRS 9 MONS TOTAL)",
    awards: "AWARDS",
    leadership: "ACTIVITIES & STARTUP PROJECTS",
    skills: "TECHNICAL SKILLS",
    blog: "BLOG"
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
  ],
  blog: {
    posts: [
      {
        title: "What Do I Want to Become, and Why?",
        date: "2025-05-12",
        summary: "A personal reflection on my future career aspirations, why I want to become a venture capitalist, and my thoughts on personal growth.",
        content: `What do I want to become in 5–10 years? I want to be a competent venture capitalist in the US.

Why the US? Because it has the biggest VC and startup market.

And I want to invest in startups globally, not just in the States, because I believe that in 10 years, we'll see meaningful growth in emerging markets that seem stagnant right now — like Africa or South Asia.


Why do I want to become a venture capitalist?

I've done five internships across four different industries I could see myself building a career in, and the VC internship was by far the one I enjoyed the most.

Why did I enjoy it more than the others?

I thrive on learning new things. My biggest strength — and maybe also a weakness — is that I'm interested in a wide range of areas.

I'm not an expert in any one field. I'd like to become one, but I haven't found my niche yet. That's honestly one of my biggest insecurities.

Most jobs expect you to have a certain level of expertise. Right now, I'm in a vague state, which I feel a bit self-conscious about.

Then again, maybe it's right for me to focus on one thing for a while. But there are these startup ideas that keep popping into my head and pulling my attention. It's distracting, honestly.

If I had to specialize in one area, it would probably have been data science or coding.

But now with the rise of AI, I'm confused about what we really need to learn. Of course, understanding fundamental theories is always valuable — "But is it still worth learning to code from scratch?"

It kind of feels like learning how to ride a horse after cars were already invented.

That confusion is what led me — for now — to work on my startup.

Looking inward, I know I'm curious about many things and I learn quickly. But I also know I need to be more serious and focused when I work.

It's not that I take things lightly — I don't.

But if I'm being honest, sometimes, deep down, I think I can succeed even if I approach things a little playfully.

I realized I tend to prioritize curiosity and enjoyment, maybe too much at times.

So, I think I need to develop more discipline — but not by forcing myself. I want to stay aligned with what I want, what I'm doing, and why I'm doing it. That way, discipline can come more naturally.

On a different note, this might sound random, but I also want to spend some time in Japan before I actually move to the States.

Why? Because I genuinely love Japan — its culture, its aesthetics, maybe not every part of it, but enough that I really want to live there for a while and experience the work culture.

It might not help me go straight to the US within 5–10 years.

But then again, it's a 100-year life. I still have 70+ years ahead of me.

So now is the time to take risks and explore what I want — not just what I need.

Even if it's a detour, I believe it will shape who I am and teach me things I wouldn't have learned otherwise.

Also, I think learning languages activates different parts of the brain that wouldn't be triggered otherwise. I looked it up, and yeah — language learning can help you think things in broader ways as all languages express things differently. I think it is incredibly valuable if I want to understand people better.

So yeah, that's a little about what I want to become — at least career-wise. I'll write about what kind of person I want to become, because today's entry was more focused on career.

Also as a final side note, what I just learned is that the left hemisphere of the brain is generally associated with language, logic, and analytical thinking, while the right hemisphere is linked to creativity, intuition and spatial reasoning. People say seeking out challenges and cultivating curiosity can help you to be more creative.

What do you want to become in 10 years and why?`
      },
      {
        title: "How Kendrick Lamar Opened My Eyes to Social Problems",
        date: "2024-10-20",
        summary: "A personal reflection on how Kendrick Lamar's music and story changed my perspective on social issues and systemic problems.",
        content: `I've always been a tech enthusiast.

I'm not a deep engineer, but through building apps, working on startups, and interning as an engineer, I learned how technology works at a broad level. Maybe you could call me a tech generalist — someone who loves innovation, even if I don't know every detail under the hood.

For most of my life, though, I never thought seriously about social problems.

Homelessness, poverty, ESG issues — they were just distant headlines. To be blunt, I didn't really care.

I thought if people wanted to escape tough situations, they could. Wasn't it just a matter of willpower?

Then Kendrick Lamar changed everything for me.

Kendrick, one of my favorite artists, grew up in Compton — a city infamous for gang violence, drugs, poverty.

He wasn't the only one. Serena Williams came from Compton too.

How was it that such brutal environments could still produce people like Kendrick, Serena, and others?

It made me realize: the hood wasn't filled with people lacking willpower. It was filled with hidden talent — trapped by systemic forces far bigger than individual choice.

Kendrick or someone else once said that everyone in his neighborhood wanted to leave — because survival there was a daily battle.

Violence, addiction, despair — it wasn't that people lacked dreams.

It's that the system around them made dreaming almost impossible.

The more I thought about it, the more my curiosity grew — not just about homelessness, but about the deeper machinery behind it.

I started noticing how these social problems are interconnected.

And even with all the technological advancements — solar panels, AI, new drugs — the core issues often remain unsolved.

Why?

Because the system itself is broken.

Because incentives are misaligned.

Because technology, by itself, can't fix what culture, policy, and economics keep tangled.

This realization didn't kill my love for technology.

If anything, it made me want to use it better.

Whether as an entrepreneur or maybe someday as a venture capitalist, I want to back solutions that don't just build flashy apps — but actually repair the broken pipes underneath.

I want to see more Kendricks come into the world.

More Serenas.

More people whose genius and strength aren't buried by the zip code they're born into.

This is just the beginning of my journey.

I don't have all the answers yet.

But I know this much: we can't be swept away by new technologies and forget the real work — building systems where everyone, no matter where they start, has a real chance to rise.`
      }
    ]
  }
}; 