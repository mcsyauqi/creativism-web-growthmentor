import {
  Target,
  Search,
  Share2,
  BarChart3,
  TrendingUp,
  Users,
  Rocket,
  ShoppingCart,
  Palette
} from 'lucide-react';

export const topics = [
  {
    id: 'performance-marketing',
    name: 'Performance Marketing',
    icon: Target,
    color: 'purple',
    shortDescription: 'Meta Ads, Google Ads, TikTok Ads',
    description: 'Master paid advertising across all major platforms. Learn to optimize campaigns, manage budgets, and drive ROI.',
    subtopics: [
      'Meta Ads (Facebook & Instagram)',
      'Google Ads (Search, Display, YouTube)',
      'TikTok Ads',
      'LinkedIn Ads',
      'Attribution & measurement',
      'Budget allocation & optimization'
    ],
    mentorCount: 15
  },
  {
    id: 'seo-content',
    name: 'SEO & Content',
    icon: Search,
    color: 'green',
    shortDescription: 'Organic growth, content strategy',
    description: 'Grow organic traffic and build a content moat. Learn technical SEO, content strategy, and sustainable growth.',
    subtopics: [
      'Technical SEO',
      'Content strategy',
      'Link building',
      'Local SEO',
      'Content operations',
      'Keyword research'
    ],
    mentorCount: 12
  },
  {
    id: 'social-media',
    name: 'Social Media',
    icon: Share2,
    color: 'blue',
    shortDescription: 'Strategy, community, influencer',
    description: 'Build engaged communities and leverage social platforms for brand growth and customer acquisition.',
    subtopics: [
      'Social media strategy',
      'Community building',
      'Influencer marketing',
      'Content creation',
      'Social commerce',
      'Crisis management'
    ],
    mentorCount: 10
  },
  {
    id: 'marketing-analytics',
    name: 'Marketing Analytics',
    icon: BarChart3,
    color: 'amber',
    shortDescription: 'Data, attribution, optimization',
    description: 'Make data-driven decisions. Learn analytics tools, attribution models, and optimization frameworks.',
    subtopics: [
      'Google Analytics 4',
      'Marketing attribution',
      'A/B testing',
      'Dashboard & reporting',
      'Customer analytics',
      'Predictive modeling'
    ],
    mentorCount: 8
  },
  {
    id: 'career-growth',
    name: 'Career Growth',
    icon: TrendingUp,
    color: 'purple',
    shortDescription: 'Promotions, job search, salary',
    description: 'Navigate your marketing career. Get guidance on promotions, job transitions, and salary negotiations.',
    subtopics: [
      'Career planning',
      'Job search strategy',
      'Interview preparation',
      'Salary negotiation',
      'Personal branding',
      'Networking'
    ],
    mentorCount: 20
  },
  {
    id: 'marketing-leadership',
    name: 'Marketing Leadership',
    icon: Users,
    color: 'green',
    shortDescription: 'Team building, strategy, stakeholders',
    description: 'Level up as a marketing leader. Learn team management, strategic planning, and stakeholder communication.',
    subtopics: [
      'Team building & hiring',
      'Strategic planning',
      'Stakeholder management',
      'Budget management',
      'Agency relationships',
      'Executive communication'
    ],
    mentorCount: 10
  },
  {
    id: 'startup-marketing',
    name: 'Startup Marketing',
    icon: Rocket,
    color: 'amber',
    shortDescription: 'Growth hacking, product-market fit',
    description: 'Build marketing for early-stage startups. Learn growth experimentation and go-to-market strategies.',
    subtopics: [
      'Go-to-market strategy',
      'Growth experimentation',
      'Product-market fit',
      'Startup branding',
      'Fundraising marketing',
      'Lean marketing'
    ],
    mentorCount: 14
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: ShoppingCart,
    color: 'blue',
    shortDescription: 'Conversion, retention, marketplace',
    description: 'Grow your e-commerce business. Learn marketplace optimization, conversion strategies, and retention.',
    subtopics: [
      'Marketplace optimization',
      'Conversion rate optimization',
      'Customer retention',
      'Email marketing',
      'Loyalty programs',
      'Product marketing'
    ],
    mentorCount: 11
  },
  {
    id: 'brand-marketing',
    name: 'Brand Marketing',
    icon: Palette,
    color: 'purple',
    shortDescription: 'Positioning, campaigns, creative',
    description: 'Build memorable brands. Learn positioning, campaign development, and creative strategy.',
    subtopics: [
      'Brand positioning',
      'Campaign development',
      'Creative strategy',
      'Brand guidelines',
      'Rebranding',
      'Brand research'
    ],
    mentorCount: 9
  }
];

export const getTopicById = (id) => topics.find(topic => topic.id === id);
