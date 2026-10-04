export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  problem: string;
  built: string;
  howItWorks: string;
  tools: string[];
  repoUrl: string | null;
  imageSrc?: string | null;
  imageAlt?: string;
  featured?: boolean;
};

export const portfolio = {
  profile: {
    name: "Esraa",
    role: "AI Engineering student",
    photoSrc: `${import.meta.env.BASE_URL}images/esraa-portrait.webp`,
    photoAlt: "Esraa smiling outdoors in front of a modern building, wearing a light green hijab and dark jacket.",
    university: "Tanta University",
    graduation: "2027",
    introduction:
      "There's something special about starting with an idea you don't quite know how to bring to life, then slowly figuring it out, one problem at a time",
    direction:
      "I want to make AI systems that are useful, understandable, and grounded in the right context.",
  },
  focus: ["LLM apps", "RAG systems", "Agentic AI"],
  projects: [
    {
      id: "medseek",
      number: "01",
      title: "MedSeek",
      category: "Infant health · RAG assistant",
      problem: "Add a concise, specific description of the problem this project addresses.",
      built: "An infant health assistant using retrieval-augmented generation (RAG).",
      howItWorks:
        "Add the confirmed retrieval-to-answer flow, including the information sources it uses.",
      tools: [],
      repoUrl: "https://github.com/MedInfant-RAG/MedSeek-Infant-Health-Assistant",
      featured: true,
    },
    {
      id: "egypt-law-rag",
      number: "02",
      title: "Egypt Law RAG",
      category: "Arabic legal assistant",
      problem: "Add a concise, specific description of the legal-information problem it addresses.",
      built: "An Arabic legal assistant using RAG.",
      howItWorks:
        "Add the confirmed legal corpus, retrieval approach, and answer flow.",
      tools: [],
      repoUrl: "https://github.com/the-ever-shining-Manal/egypt-law-rag",
    },
    {
      id: "budgetly",
      number: "03",
      title: "Budgetly",
      category: "Project details to add",
      problem: "Add the problem Budgetly is intended to solve.",
      built: "Add what you built for Budgetly.",
      howItWorks: "Add a short, accurate explanation of how it works.",
      tools: [],
      repoUrl: null,
    },
    {
      id: "ag-news-intelligence-pipeline",
      number: "04",
      title: "AG News Intelligence Pipeline",
      category: "Project details to add",
      problem: "Add the problem this pipeline is intended to solve.",
      built: "Add what you built for this project.",
      howItWorks: "Add a short, accurate explanation of how it works.",
      tools: [],
      repoUrl: null,
    },
  ] satisfies Project[],
  contact: {
    linkedinUrl: null as string | null,
    whatsappNumber: "", // Country code + number digits only; no leading + or spaces.
    githubProfileUrl: null as string | null,
  },
};
