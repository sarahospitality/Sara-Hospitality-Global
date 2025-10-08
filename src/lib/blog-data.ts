// Blog post data structure
export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
  shares: number;
}

// Mock blog post data - Replace with database/CMS when available
export const blogPosts: Record<string, BlogPost> = {
  "modern-hotel-furniture-trends-2024": {
    id: "modern-hotel-furniture-trends-2024",
    title: "Modern Hotel Furniture Trends for 2024: Sustainability Meets Luxury",
    subtitle: "Sustainable Luxury: The Future of Hotel Furniture Design",
    author: {
      name: "Sarah Mitchell",
      title: "Senior Interior Designer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=400",
      bio: "Sarah has over 12 years of experience in hospitality interior design, specializing in sustainable luxury furniture solutions."
    },
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Design Trends",
    tags: ["Sustainability", "Modern Design", "Hotel Decor", "2024 Trends", "Eco-Friendly"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1200",
    views: 2340,
    likes: 127,
    shares: 45,
  },
  "choosing-right-furniture-hotel-rooms": {
    id: "choosing-right-furniture-hotel-rooms",
    title: "How to Choose the Right Furniture for Different Hotel Room Types",
    subtitle: "A comprehensive guide to selecting appropriate furniture for various hotel accommodations",
    author: {
      name: "Michael Chen",
      title: "Hotel Design Consultant",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMGhlYWRzaG90fGVufDF8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=400",
      bio: "Michael is a seasoned hotel design consultant with 15 years of experience in hospitality interior design and furniture selection."
    },
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "Buying Guide",
    tags: ["Hotel Rooms", "Furniture Selection", "Interior Design"],
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1200",
    views: 1890,
    likes: 95,
    shares: 32,
  },
  "custom-furniture-guest-experience": {
    id: "custom-furniture-guest-experience",
    title: "The Impact of Custom Furniture on Guest Experience",
    subtitle: "Learn how personalized furniture solutions can enhance guest satisfaction",
    author: {
      name: "Emma Rodriguez",
      title: "Guest Experience Specialist",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=400",
      bio: "Emma specializes in guest experience optimization and has helped over 200 hotels improve their guest satisfaction scores through strategic furniture choices."
    },
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Guest Experience",
    tags: ["Custom Furniture", "Guest Satisfaction", "Hospitality"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1200",
    views: 1456,
    likes: 78,
    shares: 28,
  }
};

export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts[slug] || null;
}

export function getAllBlogPosts(): BlogPost[] {
  return Object.values(blogPosts);
}

