import { Building2, TrendingUp, Zap, LucideIcon } from "lucide-react"

export interface Product {
  id: number
  icon: string
  title: string
  description: string
  image: string
  pricing: string
  features: string[]
  iconColor: string
  fullDescription?: string
  technicalSpecs?: string[]
  integrations?: string[]
  useCases?: string[]
}

export interface Insight {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  type: string
  downloads: string
  image: string
  features: string[]
  iconColor: string
  fullContent?: string
  category?: string
  readTime?: string
  tags?: string[]
}

export interface NewsArticle {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  highlights: string[]
  iconColor: string
  fullContent?: string
  author?: string
  tags?: string[]
}

export const products: Product[] = [
  {
    id: 1,
    icon: "Building2",
    title: "CapEdge Analytics Platform",
    description: "Advanced business intelligence and data analytics platform for enterprise decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center",
    pricing: "Enterprise",
    features: ["Real-time data analytics", "Custom dashboard creation", "Advanced reporting tools", "API integrations"],
    iconColor: "text-blue-600",
    fullDescription: "CapEdge Analytics Platform is a comprehensive business intelligence solution designed for enterprise-level data analysis and decision-making. Our platform combines advanced analytics capabilities with intuitive user interfaces to help organizations unlock the full potential of their data.",
    technicalSpecs: ["Cloud-native architecture", "99.9% uptime SLA", "SOC 2 Type II certified", "GDPR compliant", "Multi-tenant infrastructure"],
    integrations: ["Salesforce", "Microsoft 365", "Google Workspace", "AWS", "Azure", "Snowflake"],
    useCases: ["Financial reporting", "Sales analytics", "Customer insights", "Operational efficiency", "Risk management"]
  },
  {
    id: 2,
    icon: "TrendingUp",
    title: "CapEdge Automation Suite",
    description: "Comprehensive workflow automation platform to streamline business operations and processes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center",
    pricing: "Custom",
    features: ["Workflow automation", "Process optimization", "Integration capabilities", "Performance monitoring"],
    iconColor: "text-blue-600",
    fullDescription: "Transform your business operations with CapEdge Automation Suite, a powerful platform that automates complex workflows and optimizes business processes across your organization.",
    technicalSpecs: ["Low-code/no-code interface", "REST API support", "Real-time monitoring", "Enterprise security", "Scalable architecture"],
    integrations: ["SAP", "Oracle", "ServiceNow", "Slack", "Microsoft Teams", "Jira"],
    useCases: ["HR onboarding", "Invoice processing", "Customer support", "Compliance workflows", "Data migration"]
  },
  {
    id: 3,
    icon: "Zap",
    title: "CapEdge Integration Hub",
    description: "Seamless integration platform connecting all your business tools and data sources.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop&crop=center",
    pricing: "Pro",
    features: ["API management", "Data synchronization", "Real-time connections", "Security protocols"],
    iconColor: "text-blue-600",
    fullDescription: "CapEdge Integration Hub serves as the central nervous system for your enterprise applications, enabling seamless data flow and communication between disparate systems.",
    technicalSpecs: ["GraphQL and REST APIs", "Event-driven architecture", "Message queuing", "Data transformation", "Rate limiting"],
    integrations: ["1000+ pre-built connectors", "Custom API development", "Webhook support", "Database connections", "Cloud services"],
    useCases: ["System integration", "Data synchronization", "Legacy modernization", "Multi-cloud connectivity", "Real-time data streaming"]
  },
  {
    id: 4,
    icon: "Building2",
    title: "CapEdge Cloud Solutions",
    description: "Scalable cloud infrastructure platform for modern enterprise applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center",
    pricing: "Scalable",
    features: ["Cloud infrastructure", "Auto-scaling capabilities", "Global deployment", "24/7 monitoring"],
    iconColor: "text-blue-600",
    fullDescription: "CapEdge Cloud Solutions provides enterprise-grade cloud infrastructure that scales with your business needs while maintaining the highest levels of security and performance.",
    technicalSpecs: ["Multi-cloud deployment", "Kubernetes orchestration", "Auto-scaling", "Load balancing", "Disaster recovery"],
    integrations: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Terraform", "Jenkins"],
    useCases: ["Application hosting", "Data storage", "Disaster recovery", "Development environments", "Global deployment"]
  },
  {
    id: 5,
    icon: "TrendingUp",
    title: "CapEdge AI Platform",
    description: "Artificial intelligence and machine learning platform for intelligent business automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&crop=center",
    pricing: "AI-Powered",
    features: ["Machine learning models", "Predictive analytics", "Natural language processing", "Computer vision"],
    iconColor: "text-blue-600",
    fullDescription: "Harness the power of artificial intelligence with CapEdge AI Platform, featuring advanced machine learning capabilities and pre-trained models for various business applications.",
    technicalSpecs: ["TensorFlow and PyTorch support", "GPU acceleration", "Model versioning", "A/B testing", "MLOps pipeline"],
    integrations: ["Python ecosystem", "R integration", "Jupyter notebooks", "Apache Spark", "NVIDIA CUDA", "OpenAI API"],
    useCases: ["Predictive maintenance", "Fraud detection", "Customer segmentation", "Document processing", "Chatbots and virtual assistants"]
  },
]

export const insights: Insight[] = [
  {
    id: 1,
    title: "Enterprise Software Market Outlook 2024: AI Integration Drives Growth",
    excerpt: "Comprehensive analysis of the enterprise software market, examining how AI integration is reshaping the industry landscape and creating new investment opportunities.",
    date: "2024-06-25",
    author: "Dr. Sarah Chen, Chief Investment Officer",
    type: "Market Report",
    downloads: "2.4k",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center",
    features: ["Market analysis", "AI integration trends", "Investment opportunities", "Growth projections"],
    iconColor: "text-blue-600",
    fullContent: "The enterprise software market is experiencing unprecedented transformation as artificial intelligence becomes deeply integrated into business applications...",
    category: "market-analysis",
    readTime: "12 min read",
    tags: ["AI", "Enterprise Software", "Market Analysis", "Investment"]
  },
  {
    id: 2,
    title: "The Rise of Vertical SaaS: Niche Markets, Big Opportunities",
    excerpt: "Exploring the growing trend of vertical SaaS solutions and why specialized software platforms are attracting significant investor attention.",
    date: "2024-06-20",
    author: "Michael Rodriguez, Senior Analyst",
    type: "Analysis",
    downloads: "1.8k",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center",
    features: ["Vertical SaaS trends", "Market opportunities", "Investment analysis", "Growth metrics"],
    iconColor: "text-green-600",
    fullContent: "Vertical SaaS solutions are revolutionizing industry-specific software markets by providing tailored solutions that address unique sector challenges...",
    category: "saas-analysis",
    readTime: "8 min read",
    tags: ["SaaS", "Vertical Markets", "Investment Strategy", "Growth"]
  },
  {
    id: 3,
    title: "Fintech Innovation Report: Digital Banking Transformation",
    excerpt: "Deep dive into the fintech sector, analyzing digital banking trends, regulatory changes, and emerging technologies shaping financial services.",
    date: "2024-06-18",
    author: "Jennifer Park, Sector Lead",
    type: "Sector Report",
    downloads: "3.1k",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop&crop=center",
    features: ["Digital banking trends", "Regulatory analysis", "Technology insights", "Market forecasts"],
    iconColor: "text-purple-600",
    fullContent: "The fintech sector continues to evolve rapidly, with digital banking transformation leading the charge in financial services innovation...",
    category: "fintech-analysis",
    readTime: "15 min read",
    tags: ["Fintech", "Digital Banking", "Regulatory", "Innovation"]
  },
  {
    id: 4,
    title: "Cloud Infrastructure Investment Trends 2024",
    excerpt: "Analysis of cloud infrastructure market dynamics and emerging investment opportunities in enterprise cloud solutions.",
    date: "2024-06-15",
    author: "David Kim, Technology Analyst",
    type: "Technology Report",
    downloads: "1.9k",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center",
    features: ["Cloud market analysis", "Infrastructure trends", "Investment insights", "Technology roadmap"],
    iconColor: "text-indigo-600",
    fullContent: "Cloud infrastructure continues to be a cornerstone of digital transformation, with new investment opportunities emerging across hybrid and multi-cloud environments...",
    category: "cloud-analysis",
    readTime: "10 min read",
    tags: ["Cloud", "Infrastructure", "Investment", "Technology"]
  }
]

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "CapEdge Group Announces $50M Investment in Enterprise AI Platform",
    excerpt: "Strategic investment in next-generation artificial intelligence platform serving Fortune 500 enterprises with advanced automation solutions.",
    date: "2024-06-25",
    readTime: "3 min read",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&crop=center",
    highlights: ["$50M investment", "Enterprise AI platform", "Fortune 500 clients", "Advanced automation"],
    iconColor: "text-blue-600",
    fullContent: "CapEdge Group today announced a strategic $50 million investment in an innovative enterprise AI platform that is transforming how Fortune 500 companies approach business automation...",
    author: "CapEdge Communications Team",
    tags: ["Investment", "AI", "Enterprise", "Automation"]
  },
  {
    id: 2,
    title: "Portfolio Company SecureFlow Achieves 200% Revenue Growth",
    excerpt: "Our cybersecurity portfolio company reports exceptional growth driven by enterprise demand for zero-trust security solutions.",
    date: "2024-06-20",
    readTime: "2 min read",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&crop=center",
    highlights: ["200% revenue growth", "Zero-trust security", "Enterprise demand", "Portfolio success"],
    iconColor: "text-green-600",
    fullContent: "SecureFlow, a key portfolio company in CapEdge Group's cybersecurity investment portfolio, has achieved remarkable 200% year-over-year revenue growth...",
    author: "Portfolio Management Team",
    tags: ["Portfolio", "Cybersecurity", "Growth", "Zero-Trust"]
  },
  {
    id: 3,
    title: "The Future of Enterprise Software: 2024 Market Analysis",
    excerpt: "Comprehensive analysis of emerging trends in enterprise software, including AI integration and cloud-native architectures.",
    date: "2024-06-18",
    readTime: "5 min read",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center",
    highlights: ["Market analysis", "AI integration", "Cloud-native", "Enterprise trends"],
    iconColor: "text-purple-600",
    fullContent: "The enterprise software landscape is undergoing a fundamental transformation, driven by artificial intelligence integration and the adoption of cloud-native architectures...",
    author: "Research Team",
    tags: ["Enterprise Software", "AI", "Cloud-Native", "Market Analysis"]
  },
  {
    id: 4,
    title: "CapEdge Group Expands Global Operations with New London Office",
    excerpt: "Strategic expansion into European markets with new London headquarters to serve growing international client base.",
    date: "2024-06-15",
    readTime: "4 min read",
    category: "Company",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=500&fit=crop&crop=center",
    highlights: ["Global expansion", "London office", "European markets", "International growth"],
    iconColor: "text-indigo-600",
    fullContent: "CapEdge Group today announced the opening of its new European headquarters in London, marking a significant milestone in the company's global expansion strategy...",
    author: "Corporate Communications",
    tags: ["Expansion", "London", "Europe", "Global Operations"]
  }
]

// Utility functions
export function findProductById(id: number): Product | undefined {
  return products.find(product => product.id === id)
}

export function findInsightById(id: number): Insight | undefined {
  return insights.find(insight => insight.id === id)
}

export function findNewsById(id: number): NewsArticle | undefined {
  return newsArticles.find(article => article.id === id)
}

export function getRelatedProducts(currentId: number, limit: number = 3): Product[] {
  return products.filter(product => product.id !== currentId).slice(0, limit)
}

export function getRelatedInsights(currentId: number, limit: number = 3): Insight[] {
  return insights.filter(insight => insight.id !== currentId).slice(0, limit)
}

export function getRelatedNews(currentId: number, limit: number = 3): NewsArticle[] {
  return newsArticles.filter(article => article.id !== currentId).slice(0, limit)
}

// Icon mapping utility
export function getIconComponent(iconName: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    Building2,
    TrendingUp,
    Zap,
  }
  return iconMap[iconName] || Building2
}
