export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bangladeshi IT",
    "url": "https://bangladeshiit.com",
    "logo": "https://bangladeshiit.com/logo.png",
    "description": "Professional web development, e-commerce, and digital marketing services in Bangladesh",
    "sameAs": [
      "https://facebook.com/bangladeshi-it",
      "https://linkedin.com/company/bangladeshi-it"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "telephone": "+880-XXX-XXXX",
      "email": "contact@bangladeshiit.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BD",
      "addressLocality": "Dhaka",
      "postalCode": "1000"
    }
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bangladeshi IT",
    "image": "https://bangladeshiit.com/logo.png",
    "description": "Web development and e-commerce services",
    "telephone": "+880-XXX-XXXX",
    "email": "contact@bangladeshiit.com",
    "url": "https://bangladeshiit.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Address Here",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka",
      "postalCode": "1000",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.8103",
      "longitude": "90.4125"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  },

  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development & E-commerce Solutions",
    "description": "Custom web development and e-commerce platform development",
    "provider": {
      "@type": "Organization",
      "name": "Bangladeshi IT",
      "url": "https://bangladeshiit.com"
    },
    "areaServed": "BD",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://bangladeshiit.com/services/web-development"
    }
  },

  breadcrumb: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })
};

// Component to inject structured data into head
export const StructuredData = ({ data }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
};
