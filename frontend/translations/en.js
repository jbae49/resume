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
        title: "Why Did I Start Writing?",
        date: "2025-05-16",
        summary: "Reflections on my journey into writing, personal growth, and the desire to positively influence others through better communication.",
        content: `<p>It's been a week since I seriously began learning Japanese, and I already feel like I'm getting the hang of it–though there are countless kanji to tackle.</p>

<p>In my previous writing, I talked about what I want to achieve career-wise, but didn't delve into the kind of person I aspire to become. Briefly put, I aspire to be influential–but not in terms of fame or power.</p>

<p>I want more people to be happier. But is happiness a zero-sum game? Does one person's joy necessitate another's sadness? I'm not sure. And let me get this straight, I don't think my motivation to inspire others comes from selflessness. Far from it–I'm a selfish person. My happiness always comes first.</p>

<p>And why exactly do I want to inspire others? It's not about selfless volunteering or altruism–it's genuinely enjoyable. I find joy in uncovering people's talents and contributing to their growth whenever I get the opportunities to do so. Interestingly, that's also one of the responsibilities of venture capitalists.</p>

<p>This motivation might not stem from compassion or generosity, but it's kind of thrilling for me, making my life feel purposeful that way, in a way I enjoy. Ultimately, being surrounded by good people is rewarding, and if I can either discover more of to-be these individuals or become one myself, all the better. Delivering messages or creating products that positively transform lives isn't gaslighting, though I unconsciously thought it could be misunderstood as such.</p>

<p>Returning to the initial question: why have I started writing? Primarily, because I'm currently unemployed and, despite working on my startup and studying Japanese, I do have more free time than usual. Secondly, and perhaps more significantly, I've recently recognized that to become someone who positively influences others, I need really good communication skills. It sounds random but some people, say Kendrick Lamar or Mike Tyson, seem naturally gifted with words.</p>

<div style="text-align: center; margin: 20px 0;">
  <img src="/images/blog/tyson.jpg" alt="Mike Tyson" style="max-width: 100%; height: auto; border-radius: 8px;" />
</div>

<p>Do you remember the interview where the interviewer asks Muhammad Ali and Mike Tyson who would win if they fought in their prime? Ali points to Mike, saying he(Ali) was a dancing master, that he could avoid punches because he was so fast—but if Mike landed even one punch, he was so strong that Ali would pass out. Then Mike goes, "I know I'm great, but let me tell you something—in this situation, every head must bow, every tongue must confess: this is the greatest of all time."</p>

<p>It might sound random, but if you know, you know. Just listening to these two legends respecting each other and being humble humbles me.</p>

<p>Back to the topic again– It's embarrassing, but I've read fewer than five books since turning 16—I'm now 26. Reading would undoubtedly enhance my vocabulary and clarity. If I disliked conversations, this path wouldn't have appealed to me.</p>

<p>But I genuinely love meeting new people and engaging in meaningful discussions. Aspiring to become an influential, or more plainly put, "attractive" person, I now realize that being articulate is crucial. That's one of the main reasons I've begun writing. Additionally, writing helps me structure and deepen my thoughts. I frequently have interesting but fleeting ideas; writing them down allows me to expand on them progressively.</p>

<p>One rule I've strictly implemented is drafting each piece within 20 minutes. This constraint has been an important role because previously I'd strive for perfection, and nothing ever got finished. So, here I am, practicing writing!</p>

<p>I will be 10x better with words in a year—this is today's affirmation to myself.</p>`
      },
      {
        title: "What's Happening in Crypto in 5 Charts",
        date: "2023-09-07",
        summary: "Crypto isn't dead (but has become boring), but when's the next cycle?",
        content: `<p>Web3 was one of the hottest sectors for VC investments in 2021, but the tides apparently have shifted. Let's explore the current state of crypto with 5 charts. It's 839 words, a 4 mins read.</p>

<h3>Blockchain/Cryptocurrency Companies Raising $2.8B+ Each Quarter in 2023</h3>

<p>VC investments in crypto for Q1 and Q2 plummeted from an average of $10.68B in 2022 to $2.68B – a 73.22% drop. (*As of August 2023, Q3 data is not yet available)</p>

<div style="text-align: center; margin: 20px 0;">
  <img src="/images/blog/crypto-charts/figure1.jpg" alt="Figure 1: Cryptocurrencies/Blockchain Vertical Capital Invested & Deal Count" style="max-width: 100%; height: auto;" />
  <p style="font-style: italic; margin-top: 8px;">Figure 1: Cryptocurrencies/Blockchain Vertical Capital Invested & Deal Count</p>
</div>

<p>But crypto isn't the lone player grappling with downturns. SaaS investments also dropped from an average of $43.86B in the first half of 2022 to $20.28B in the first half of 2023 – a 53.74% drop. Although the trends in both sectors seem to move in parallel (with some exceptions like the sharp drop in crypto during 2022 Q4, likely from the FTX collapse), crypto investments have been experiencing a steeper descent.</p>  

<p>This fundraising downturn is largely due to the macro environment. Unlike during 2020 and 2021 when capital was abundant and cheap from low interest rates, since 2022 with the Federal Reserve raising interest rates multiple times, it has led investors to be more cautious and reserved when approaching the deals and due diligence.</p>

<div style="text-align: center; margin: 20px 0;">
  <img src="/images/blog/crypto-charts/figure2.jpg" alt="Figure 2: SaaS Vertical Capital Invested & Deal Count" style="max-width: 100%; height: auto;" />
  <p style="font-style: italic; margin-top: 8px;">Figure 2: SaaS Vertical Capital Invested & Deal Count</p>
</div>

<h3>Later Stage VC Deals Never Exceeds 10%</h3>

<p>Unlike most sectors where there's a balanced deal distribution across deal stages, crypto shows a different trend (as an emerging technology sector, but until when?). Consider the 2021 deal type proportions segmented into Seed, Early Stage, and Later Stage as a reference:</p>

<p>In the Blockchain/Cryptocurrencies vertical, the distribution was:</p>
<ul>
  <li>Seed: 33.6%</li>
  <li>Early Stage: 40.2%</li>
  <li>Later Stage: 7.72%</li>
</ul>

<div style="text-align: center; margin: 20px 0;">
  <img src="/images/blog/crypto-charts/figure3.jpg" alt="Figure 3: Cryptocurrencies/Blockchain Deals by Deal Type" style="max-width: 100%; height: auto;" />
  <p style="font-style: italic; margin-top: 8px;">Figure 3: Cryptocurrencies/Blockchain Deals by Deal Type</p>
</div>

<p>In SaaS, the distribution was:</p>
<ul>
  <li>Seed: 36.2%</li>
  <li>Early Stage: 30.8%</li>
  <li>Later Stage: 35.4%</li>
</ul>

<div style="text-align: center; margin: 20px 0;">
  <img src="/images/blog/crypto-charts/figure4.jpg" alt="Figure 4: SaaS Deals by Deal Type" style="max-width: 100%; height: auto;" />
  <p style="font-style: italic; margin-top: 8px;">Figure 4: SaaS Deals by Deal Type</p>
</div>

<p>Companies in the early stages seem to face challenges progressing further in the company lifecycle from regulation uncertainty, limited scalable use cases, and price volatility in cryptocurrencies. This low proportion of later stage deals tend to happen in emerging areas; however, crypto has been like this over a decade.</p>

<h3>Growing Interest in M&A</h3>

<div style="text-align: center; margin: 20px 0;">
  <img src="/images/blog/crypto-charts/figure5.jpg" alt="Figure 5: Cryptocurrencies/Blockchain Exit Trend" style="max-width: 100%; height: auto;" />
  <p style="font-style: italic; margin-top: 8px;">Figure 5: Cryptocurrencies/Blockchain Exit Trend</p>
</div>

<p>The overarching trajectory in M&A activity in crypto over the past decade has been on an upward trend. Starting as early as 2014 with 18 M&A deals, this figure nearly doubled by 2015. A sharp YoY growth was witnessed in 2017, with the number of deals skyrocketing to 128 by 2018 – a 132.73% growth from the 55 deals in 2017.</p>

<p>While there was a slight dip in subsequent years until 2020, by 2021, the number of deals had reached 225, marking a YoY growth of 86.12% from 2020. Although the growth rate from 2021 to 2022 was relatively flat, it remained high.</p>

<p>Interestingly, even both deal count and capital investment in crypto have been declining in recent years, M&A activity trend in the opposite direction. This may suggest that within the industry, the technology is maturing and many projects present value for strategic consolidation.</p>

<h3>Ethereum Total Transaction Value</h3>
<p>From mid to late 2020 and into early 2021, Ethereum experienced a huge boom, largely driven by what we call "DeFi summer" with the rise of yield farming platforms like Yearn and DeFi apps like Compound and Uniswap. Additionally, NFT projects like BAYC turned out to be very successful, boosting Ethereum's transaction volume even more.</p>

<div style="text-align: center; margin: 20px 0;">
  <img src="/images/blog/crypto-charts/ethereum-transactions.jpg" alt="Ethereum Total Transaction Value" style="max-width: 100%; height: auto;" />
  <p style="font-style: italic; margin-top: 8px;">Ethereum Total Transaction Value (Source: Dune Analytics)</p>
</div>

<p>In January 2021, Ethereum reached a peak transaction value of 133M ETH (≈$183B), but this figure declined by 77.41% over 2.5 years, settling at about 30M ETH (≈$57B) in July 2023. Throughout this period, there have been sporadic upswings such as in May 2021 and May 2022, however, these transient surges are not enough to counter argue the overarching declining trend.</p>

<p>In Q1 of 2023, Ethereum's transaction value was approximately 121M ETH—a 62.7% decrease from its Q1 2021 levels and a 24% decline from Q1 2022. By Q2 2023, the transaction value hovered around 122M ETH, which was a 59.1% decrease from Q2 2021 and a 38.6% decline compared to Q2 2022.</p>

<h3>30 Largest VC-backed Companies and 5 Major Sub Verticals in Crypto</h3>

<p>The crypto landscape is vast, encompassing numerous subcategories such as trading, derivatives, lending, yield generation, metaverse, gaming, NFT platforms, blockchain networks (L1, L2, etc), bridges, scaling solutions, institutional services, security, compliance, data storage, development platforms, asset management, exchanges, asset tokenization, among others.</p>

<p>While many of these segments have garnered attention, not all have proven profitability and sustainability. Nevertheless, we've observed 5 major segments that have scaled impressively and achieved profitability.</p>

<div style="text-align: center; margin: 20px 0;">
  <img src="/images/blog/crypto-charts/crypto-verticals.jpg" alt="Crypto Verticals and Top Companies" style="max-width: 100%; height: auto;" />
  <p style="font-style: italic; margin-top: 8px;">Major Crypto Verticals and Leading Companies</p>
</div>

<p>Infrastructure and developer tool companies such as Alchemy and ConsenSys have attracted significant funding. Cryptocurrency exchanges like Kraken and Gemini have maintained their positions given their roles as market facilitators and liquidity providers.</p>

<p>Institution-oriented platforms, like FalconX and Fireblocks, are bridging traditional financial firms into the crypto realm. There's also a surge in Ethereum's scaling solutions like StarkWare and Immutable. Lastly, major NFT related platforms like Opensea and Autograph have made solid strides.</p>`
      },
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
        content: `<div style="text-align: center; margin: 20px 0;">
  <img src="/images/blog/crypto-charts/kendricklamar.jpeg" alt="Kendrick Lamar" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <p style="font-weight: bold; margin-top: 8px; font-size: 1.1rem;">this my goat!!</p>
</div>

<p>I've always been a tech enthusiast.</p>

<p>I'm not a deep engineer, but through building apps, working on startups, and interning as an engineer, I learned how technology works at a broad level. Maybe you could call me a tech generalist — someone who loves innovation, even if I don't know every detail under the hood.</p>

<p>For most of my life, though, I never thought seriously about social problems.</p>

<p>Homelessness, poverty, ESG issues — they were just distant headlines. To be blunt, I didn't really care.</p>

<p>I thought if people wanted to escape tough situations, they could. Wasn't it just a matter of willpower?</p>

<p>Then Kendrick Lamar changed everything for me.</p>

<p>Kendrick, one of my favorite artists, grew up in Compton — a city infamous for gang violence, drugs, poverty.</p>

<p>He wasn't the only one. Serena Williams came from Compton too.</p>

<p>How was it that such brutal environments could still produce people like Kendrick, Serena, and others?</p>

<p>It made me realize: the hood wasn't filled with people lacking willpower. It was filled with hidden talent — trapped by systemic forces far bigger than individual choice.</p>

<p>Kendrick or someone else once said that everyone in his neighborhood wanted to leave — because survival there was a daily battle.</p>

<p>Violence, addiction, despair — it wasn't that people lacked dreams.</p>

<p>It's that the system around them made dreaming almost impossible.</p>

<p>The more I thought about it, the more my curiosity grew — not just about homelessness, but about the deeper machinery behind it.</p>

<p>I started noticing how these social problems are interconnected.</p>

<p>And even with all the technological advancements — solar panels, AI, new drugs — the core issues often remain unsolved.</p>

<p>Why?</p>

<p>Because the system itself is broken.</p>

<p>Because incentives are misaligned.</p>

<p>Because technology, by itself, can't fix what culture, policy, and economics keep tangled.</p>

<p>This realization didn't kill my love for technology.</p>

<p>If anything, it made me want to use it better.</p>

<p>Whether as an entrepreneur or maybe someday as a venture capitalist, I want to back solutions that don't just build flashy apps — but actually repair the broken pipes underneath.</p>

<p>I want to see more Kendricks come into the world.</p>

<p>More Serenas.</p>

<p>More people whose genius and strength aren't buried by the zip code they're born into.</p>

<p>This is just the beginning of my journey.</p>

<p>I don't have all the answers yet.</p>

<p>But I know this much: we can't be swept away by new technologies and forget the real work — building systems where everyone, no matter where they start, has a real chance to rise.</p>`
      }
    ]
  }
}; 