/**
 * SEO Configuration for all pages
 */

export const seoConfig = {
  home: {
    title: "Bangladeshi IT - Web Development & E-commerce Solutions",
    description: "Professional web development, e-commerce, and digital marketing services in Bangladesh. Expert team delivering custom solutions for your business.",
    image: "https://bangladeshiit.com/og-image.png",
    url: "https://bangladeshiit.com",
    type: "website"
  },

  about: {
    title: "About Bangladeshi IT - Professional Web Development Team",
    description: "Learn about Bangladeshi IT's mission, team, and expertise in web development, e-commerce, and digital solutions since establishment.",
    image: "https://bangladeshiit.com/og-image.png",
    url: "https://bangladeshiit.com/about",
    type: "website"
  },

  services: {
    title: "Our Services - Bangladeshi IT | Web, Apps & Digital Solutions",
    description: "Explore our comprehensive range of services: web development, e-commerce, app development, digital marketing, SEO, graphic design, and business consulting.",
    image: "https://bangladeshiit.com/og-image.png",
    url: "https://bangladeshiit.com/services",
    type: "website"
  },

  contact: {
    title: "Contact Bangladeshi IT - Get in Touch with Our Team",
    description: "Have a project in mind? Contact our team at Bangladeshi IT to discuss your web development, e-commerce, or digital marketing needs.",
    image: "https://bangladeshiit.com/og-image.png",
    url: "https://bangladeshiit.com/contact",
    type: "website"
  },

  blogs: {
    title: "Blog - Bangladeshi IT | Web Development Tips & Tutorials",
    description: "Read our latest articles and tutorials on web development, e-commerce, digital marketing, and technology trends.",
    image: "https://bangladeshiit.com/og-image.png",
    url: "https://bangladeshiit.com/blogs",
    type: "website"
  },

  servicePages: {
    "ecommerce": {
      title: "E-commerce Solutions - Bangladeshi IT",
      description: "Launch your online store with secure, scalable, and user-friendly e-commerce solutions by Bangladeshi IT.",
      image: "https://bangladeshiit.com/og-image.png",
      url: "https://bangladeshiit.com/services/ecommerce",
      type: "service"
    },
    "web-development": {
      title: "Web Development Services - Bangladeshi IT",
      description: "Fast, responsive websites built with cutting-edge technologies and optimal user experience by our expert team.",
      image: "https://bangladeshiit.com/og-image.png",
      url: "https://bangladeshiit.com/services/web-development",
      type: "service"
    },
    "apps-development": {
      title: "Mobile App Development - Bangladeshi IT",
      description: "Powerful mobile apps for Android & iOS tailored to your business needs and user requirements.",
      image: "https://bangladeshiit.com/og-image.png",
      url: "https://bangladeshiit.com/services/apps-development",
      type: "service"
    },
    "digital-marketing": {
      title: "Digital Marketing Services - Bangladeshi IT",
      description: "Grow your brand reach with targeted ads, email marketing, and comprehensive online campaigns.",
      image: "https://bangladeshiit.com/og-image.png",
      url: "https://bangladeshiit.com/services/digital-marketing",
      type: "service"
    },
    "seo": {
      title: "SEO & Content Writing - Bangladeshi IT",
      description: "Improve your search rankings and drive organic traffic with proven SEO techniques and quality content.",
      image: "https://bangladeshiit.com/og-image.png",
      url: "https://bangladeshiit.com/services/seo",
      type: "service"
    },
    "graphic-design": {
      title: "Graphic Design Services - Bangladeshi IT",
      description: "Eye-catching designs for branding, social media, packaging, and all your visual communication needs.",
      image: "https://bangladeshiit.com/og-image.png",
      url: "https://bangladeshiit.com/services/graphic-design",
      type: "service"
    },
    "consulting": {
      title: "Business Consulting - Bangladeshi IT",
      description: "Get expert advice and strategic guidance to grow and transform your business with our consulting services.",
      image: "https://bangladeshiit.com/og-image.png",
      url: "https://bangladeshiit.com/services/consulting",
      type: "service"
    },
    "social-media-marketing": {
      title: "Social Media Marketing - Bangladeshi IT",
      description: "Boost visibility and connect with your audience across all major social media platforms effectively.",
      image: "https://bangladeshiit.com/og-image.png",
      url: "https://bangladeshiit.com/services/social-media-marketing",
      type: "service"
    }
  }
};

/**
 * Get SEO config for a service page
 */
export const getServiceSEO = (serviceName) => {
  return seoConfig.servicePages[serviceName] || seoConfig.services;
};
