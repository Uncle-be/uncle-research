
import { Service, Book, Review } from './types';

export const SERVICES: Service[] = [
  {
    id: 'academic',
    title: 'Academic Research',
    description: 'Expert assistance with theses, dissertations, and academic papers across various disciplines.',
    icon: 'fa-graduation-cap',
    priceRange: 'Consult for Quote'
  },
  {
    id: 'market',
    title: 'Market Analysis',
    description: 'Deep-dive market trends, competitor analysis, and consumer behavior reports for your industry.',
    icon: 'fa-chart-line',
    priceRange: 'Consult for Quote'
  },
  {
    id: 'business',
    title: 'Business Consultation',
    description: 'Strategic planning, feasibility studies, and business model optimization for startups and SMEs.',
    icon: 'fa-briefcase',
    priceRange: 'Consult for Quote'
  },
  {
    id: 'data',
    title: 'Data Collection & Analysis',
    description: 'Quantitative and qualitative data processing using modern statistical tools and methodologies.',
    icon: 'fa-database',
    priceRange: 'Consult for Quote'
  }
];

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Mastering Academic Excellence',
    author: 'Uncle Blessing',
    description: 'A comprehensive guide to navigating research methodology in higher education.',
    imageUrl: 'https://picsum.photos/seed/book1/400/600'
  },
  {
    id: '2',
    title: 'The Entrepreneur\'s Research Bible',
    author: 'Uncle Blessing',
    description: 'How to use market data to build a sustainable and profitable business empire.',
    imageUrl: 'https://picsum.photos/seed/book2/400/600'
  },
  {
    id: '3',
    title: 'Statistical Logic in Modern Research',
    author: 'Uncle Blessing',
    description: 'Simplifying complex data analysis for researchers and business consultants.',
    imageUrl: 'https://picsum.photos/seed/book3/400/600'
  },
  {
    id: '4',
    title: 'The FUOYE Research Manual',
    author: 'Uncle Blessing',
    description: 'Proven strategies for academic success from a federal university perspective.',
    imageUrl: 'https://picsum.photos/seed/book4/400/600'
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
    content: 'The market research provided by the institute saved us months of trial and error. Highly recommended!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=olu'
  },
  {
    id: '3',
    name: 'Dr. Elizabeth Egbe',
    role: 'Researcher',
    content: 'A professional through and through. The data analysis was rigorous and well-presented.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=liz'
  }
];

export const CONTACT_INFO = {
  whatsapp: '09033597562',
  email: 'blessingomiyale@gmail.com',
  location: 'Nigeria',
  university: 'Federal University Oye Ekiti (FUOYE)'
};
