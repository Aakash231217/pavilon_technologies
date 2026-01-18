// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  author?: string;
  publishedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Pavion Technologies - Leading Software Development & AI Solutions Company',
  description = 'Transform your business with Pavion Technologies. Expert software development, AI/ML solutions, web & mobile apps, cloud computing, and digital transformation services. 50+ successful projects delivered.',
  keywords = 'software development, AI solutions, machine learning, web development, mobile app development, cloud solutions, digital transformation, IT consulting, custom software, React development, Node.js, Python, AWS, TypeScript',
  ogImage = 'https://paviontechnologies.com/og-image.png',
  ogUrl = 'https://paviontechnologies.com/',
  ogType = 'website',
  canonical = 'https://paviontechnologies.com/',
  author,
  publishedTime
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Pavion Technologies" />
      
      {/* Article specific meta tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@paviontechnologies" />
    </Helmet>
  );
};

export default SEO;
