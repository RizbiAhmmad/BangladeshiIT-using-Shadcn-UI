import { useEffect } from "react";
import { updateMetaTags } from "../utils/seoUtils";

/**
 * Custom hook to update SEO meta tags for any page
 * @param {Object} seoData - SEO configuration object
 * @param {string} seoData.title - Page title
 * @param {string} seoData.description - Meta description
 * @param {string} seoData.image - OG image URL
 * @param {string} seoData.url - Page canonical URL
 * @param {string} seoData.type - Schema type (website, article, etc)
 */
export const useSEO = (seoData) => {
  useEffect(() => {
    updateMetaTags(seoData);
  }, [seoData]);
};

export default useSEO;
