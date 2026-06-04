import { Helmet } from "react-helmet-async";

const SEOHelmet = ({ title, description, name = "Rakib Boshunia", type = "website" }) => {
  const siteTitle = title ? title : "Rakib Boshunia | Portfolio";
  const siteDescription = description
    ? description
    : "I am a passionate Frontend Developer focused on creating clean UI, high performance, and responsive Web experiences.";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={name} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
    </Helmet>
  );
};

export default SEOHelmet;
