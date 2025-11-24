import Head from 'next/head';
import React from 'react';

export default function SEO({
  title,
  description,
  url,
  image,
  keywords = [],
  authorName,
  twitterHandle,
  canonical,
  jsonLd = {}
}) {
  const metaTitle = title || 'Shahidur Rahman Nayeem - Full Stack Developer';
  const metaDescription = description || 'Full-stack developer building modern web apps with React, Next.js, Node and Tailwind.';
  const metaUrl = url || 'https://msrnayeem.cloud';
  const metaImage = image || `${metaUrl}/og-image.png`;

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: authorName || 'Shahidur Rahman Nayeem',
    url: metaUrl,
    sameAs: [
      'https://github.com/msrnayeem',
      'https://www.linkedin.com/in/shahidur-rahman-nayeem-14b437181/'
    ],
    ...jsonLd,
  };

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={(keywords || []).join(', ')} />
      <meta name="author" content={authorName || 'Shahidur Rahman Nayeem'} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </Head>
  );
}
