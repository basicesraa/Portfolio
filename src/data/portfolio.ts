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
    name: "Esraa Ebeid",
    shortName: "Esraa",
    role: "AI Engineering student",
    photoSrc: `${import.meta.env.BASE_URL}images/esraa-portrait.webp`,
    photoAlt: "Esraa smiling outdoors in front of a modern building, wearing a light green hijab and dark jacket.",
    university: "Tanta University",
    graduation: "2027",
    introduction:
      "There’s something special about starting with an idea you don’t quite know how to bring to life, then slowly figuring it out, one problem at a time.",
    about: {
      intro:
        "I’m studying AI Engineering at Tanta University, and somewhere along the way, I became more interested in what happens after the model is trained.",
      question: "How do you turn an idea into something people can actually use?",
      direction:
        "That question has pulled me toward Generative AI, RAG, AI applications, and agentic systems. I’m still learning, still experimenting, and still figuring out what works.",
    },
  },
  focus: ["Generative AI", "RAG systems", "Agentic AI", "AI applications"],
  interests: [
    {
      title: "Building with AI",
      description: "Turning models and APIs into useful applications.",
    },
    {
      title: "Grounding AI",
      description: "Using retrieval and context to make answers more reliable.",
    },
    {
      title: "Making AI useful",
      description: "Exploring where agents and AI workflows can solve actual problems.",
    },
  ],
  projects: [
    {
      id: "medseek",
      number: "01",
      title: "MedSeek",
      category: "Infant health · RAG assistant",
      problem:
        "General-purpose AI models can produce confident answers without being grounded in reliable health information.",
      built:
        "A RAG-based infant health assistant that retrieves relevant information before generating an answer.",
      howItWorks:
        "User question → relevant information retrieval → context passed to the LLM → grounded response.",
      tools: ["Python", "RAG", "Embeddings", "Vector Search", "LLM API"],
      repoUrl: "https://github.com/MedInfant-RAG/MedSeek-Infant-Health-Assistant",
      featured: true,
    },
    {
      id: "egypt-law-rag",
      number: "02",
      title: "Egypt Law RAG",
      category: "Arabic legal assistant",
      problem:
        "Finding relevant information across Egyptian legal texts can be slow and difficult to navigate.",
      built:
        "An Arabic legal RAG system that retrieves relevant legal articles and uses them to generate answers with supporting citations.",
      howItWorks:
        "Legal documents → OCR & cleaning → chunking → embeddings → Qdrant → retrieval → LLM response.",
      tools: ["Python", "OpenAI Embeddings", "Qdrant", "RAG", "LLM API"],
      repoUrl: "https://github.com/the-ever-shining-Manal/egypt-law-rag",
    },
    {
      id: "budgetly",
      number: "03",
      title: "Budgetly",
      category: "Personal budgeting application",
      problem:
        "Managing personal expenses can become difficult when spending is scattered across different categories.",
      built: "A budgeting application for tracking and organizing expenses.",
      howItWorks: "User → expense management → database → budgeting interface.",
      tools: ["React", "Express", "MongoDB"],
      repoUrl: null,
    },
    {
      id: "ag-news-intelligence-pipeline",
      number: "04",
      title: "AG News Intelligence Pipeline",
      category: "News classification pipeline",
      problem:
        "News classification requires turning unstructured article text into meaningful categories automatically.",
      built:
        "An end-to-end news classification pipeline that predicts the category of an article and exposes the model through an API.",
      howItWorks:
        "News article → preprocessing → classification model → predicted category → API response.",
      tools: ["Python", "NLP", "FastAPI", "Pydantic", "Groq/OpenAI"],
      repoUrl: null,
    },
  ] satisfies Project[],
  contact: {
    linkedinUrl: null as string | null,
    whatsappNumber: "", // Country code + number digits only; no leading + or spaces.
    githubProfileUrl: null as string | null,
  },
};
