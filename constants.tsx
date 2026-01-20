
import { Service, Book, Review } from './types.ts';

export const SERVICES: Service[] = [
  {
    id: 'academic',
    title: 'Academic Research',
    description: 'Expert assistance with theses, dissertations, and academic papers.',
    icon: 'fa-graduation-cap',
    priceRange: 'Consult for Quote'
  },
  {
    id: 'market',
    title: 'Market Analysis',
    description: 'Deep-dive market trends and consumer behavior reports.',
    icon: 'fa-chart-line',
    priceRange: 'Consult for Quote'
  },
  {
    id: 'business',
    title: 'Business Consultation',
    description: 'Strategic planning and business model optimization.',
    icon: 'fa-briefcase',
    priceRange: 'Consult for Quote'
  },
  {
    id: 'data',
    title: 'Data Collection & Analysis',
    description: 'Quantitative and qualitative data processing.',
    icon: 'fa-database',
    priceRange: 'Consult for Quote'
  }
];

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Mastering Academic Excellence',
    author: 'Uncle Blessing',
    description: 'A comprehensive guide to research methodology.',
    imageUrl: 'https://picsum.photos/seed/book1/400/600'
  },
  {
    id: '2',
    title: 'Market Strategy Guide',
    author: 'Uncle Blessing',
    description: 'How to use market data to build a profitable business.',
    imageUrl: 'https://picsum.photos/seed/book2/400/600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Adekunle',
    role: 'MSc Student',
    content: 'Uncle Blessing was instrumental in my graduation. His attention to detail in my thesis was unmatched.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Oluwaseun James',
    role: 'CEO, TechPulse',
    content: 'The market research provided by the institute saved us months of trial and error.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=olu'
  }
];

export const CONTACT_INFO = {
  whatsapp: '09033597562',
  email: 'blessingomiyale@gmail.com',
  location: 'Nigeria',
  university: 'Federal University Oye Ekiti (FUOYE)'
};
