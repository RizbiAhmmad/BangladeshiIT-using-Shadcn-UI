/**
 * Utility function to update document head meta tags
 * for better SEO on different pages
 */

export const updateMetaTags = (seoData) => {
  const {
    title = "Bangladeshi IT - Web Development & E-commerce Solutions",
    description = "Professional web development, e-commerce, and digital marketing services in Bangladesh.",
    image = "https://bangladeshiit.com/og-image.png",
    url = "https://bangladeshiit.com",
    type = "website",
  } = seoData;

  // Update title
  document.title = title;

  // Update meta description
  updateOrCreateMetaTag("name", "description", description);

  // Update Open Graph tags
  updateOrCreateMetaTag("property", "og:title", title);
  updateOrCreateMetaTag("property", "og:description", description);
  updateOrCreateMetaTag("property", "og:image", image);
  updateOrCreateMetaTag("property", "og:url", url);
  updateOrCreateMetaTag("property", "og:type", type);

  // Update Twitter Card tags
  updateOrCreateMetaTag("name", "twitter:title", title);
  updateOrCreateMetaTag("name", "twitter:description", description);
  updateOrCreateMetaTag("name", "twitter:image", image);

  // Update canonical URL
  updateOrCreateCanonical(url);

  // Scroll to top
  window.scrollTo(0, 0);
};

const updateOrCreateMetaTag = (attribute, attributeValue, content) => {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute("content", content);
};

const updateOrCreateCanonical = (url) => {
  let canonical = document.querySelector("link[rel='canonical']");
  
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute("href", url);
};

// Structured data helper
export const addStructuredData = (schema) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};
