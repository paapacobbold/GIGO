import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
 const [isDarkMode, setIsDarkMode] = useState(false);

  const categories = [
    { id: 'faq', name: 'FAQs' },
    { id: 'contact', name: 'Contact Us' },
    { id: 'resources', name: 'Resources' },
    { id: 'services', name: 'Our Services' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'When is my collection day?',
      answer: 'Collection schedules vary by location. Please enter your address in our collection day finder tool to get your specific pickup schedule.'
    },
    {
      id: 2,
      question: 'What items can be recycled?',
      answer: 'We accept paper, cardboard, plastic bottles and containers (types 1-7), glass bottles and jars, and metal cans. All items should be clean and dry. Electronics, batteries, and hazardous materials require special disposal.'
    },
    {
      id: 3,
      question: 'How do I report a missed collection?',
      answer: 'If your waste was not collected on the scheduled day, please report it through our customer portal or contact our customer service within 24 hours of your scheduled collection.'
    },
    {
      id: 4,
      question: 'How do I dispose of large items?',
      answer: 'For bulky items like furniture or appliances, please schedule a special pickup through our customer portal or contact customer service. Additional fees may apply.'
    },
    {
      id: 5,
      question: 'What are the guidelines for yard waste disposal?',
      answer: 'Yard waste should be placed in biodegradable paper bags or dedicated yard waste bins. Branches should be bundled and not exceed 4 feet in length. Check your local guidelines for specific requirements.'
    }
  ];

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // CSS Styles
  const styles = {
    container: {
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem',
      marginLeft: '276px',
        '@media (max-width: 768px)': {
            marginLeft: '0'
        },
        width: 'calc(100% - 276px)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#2a813b',
      marginBottom: '1rem'
    },
    subtitle: {
      color: '#555',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.5'
    },
    searchContainer: {
      maxWidth: '700px',
      margin: '0 auto 2rem auto',
      position: 'relative'
    },
    searchInput: {
      width: '100%',
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      boxSizing: 'border-box'
    },
    searchIcon: {
      position: 'absolute',
      right: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#aaa'
    },
    categoriesNav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginBottom: '2rem',
      flexWrap: 'nowrap',
      overflowX: 'auto',
      padding: '0.5rem 0'
    },
    categoryButton: {
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '500',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap'
    },
    activeCategory: {
      backgroundColor: '#2a813b',
      color: 'white'
    },
    inactiveCategory: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #ddd'
    },
    contentContainer: {
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      maxWidth: '900px', // Keep it readable
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '1.5rem'
    },
    faqContainer: {
      marginBottom: '1rem'
    },
    faqItem: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      marginBottom: '0.5rem',
      overflow: 'hidden'
    },
    faqQuestion: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#f5f5f5',
      textAlign: 'left',
      fontSize: '1rem',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer'
    },
    faqAnswer: {
      padding: '1rem',
      color: '#555',
      lineHeight: '1.5'
    },
    noResults: {
      textAlign: 'center',
      padding: '2rem 0',
      color: '#777'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem'
    },
    card: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '1rem',
      transition: 'box-shadow 0.3s ease'
    },
    cardHover: {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    iconContainer: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem'
    },
    cardTitle: {
      fontSize: '1.1rem',
      fontWeight: '500',
      marginBottom: '0.5rem'
    },
    cardText: {
      color: '#555',
      marginBottom: '0.75rem',
      lineHeight: '1.4'
    },
    cardLink: {
      color: '#2a813b',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem'
    },
    contactInfo: {
      marginBottom: '1.5rem'
    },
    contactTitle: {
      fontSize: '1.1rem',
      fontWeight: '500',
      marginBottom: '0.5rem'
    },
    contactText: {
      color: '#555',
      marginBottom: '1rem',
      lineHeight: '1.4'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem'
    },
    contactIcon: {
      color: '#2a813b',
      marginRight: '0.5rem'
    },
    formInput: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      marginBottom: '1rem',
      boxSizing: 'border-box'
    },
    formTextarea: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      marginBottom: '1rem',
      minHeight: '120px',
      boxSizing: 'border-box'
    },
    formButton: {
      backgroundColor: '#2a813b',
      color: 'white',
      padding: '0.75rem 1rem',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500'
    },
    serviceItem: {
      backgroundColor: '#f9f9f9',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      borderLeft: '4px solid'
    },
    serviceList: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '0.5rem',
      marginTop: '1rem'
    },
    serviceListItem: {
      display: 'flex',
      alignItems: 'center',
      color: '#555',
      fontSize: '0.9rem'
    },
    serviceListIcon: {
      marginRight: '0.5rem'
    }
  };

  return (
    <div style={styles.container}>
        <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} activePage="help" />
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Help Center</h1>
          <p style={styles.subtitle}>
            Find answers to frequently asked questions about our waste management services, or contact our support team for personalized assistance.
          </p>
        </div>
        
        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for answers..."
            style={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div style={styles.searchIcon}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Category Navigation */}
        <div style={styles.categoriesNav}>
          {categories.map((category) => (
            <button
              key={category.id}
              style={{
                ...styles.categoryButton,
                ...(activeCategory === category.id ? styles.activeCategory : styles.inactiveCategory)
              }}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Content Container */}
        <div style={styles.contentContainer}>
          {/* FAQs */}
          {activeCategory === 'faq' && (
            <div>
              <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
              
              {searchQuery && filteredFaqs.length === 0 ? (
                <p style={styles.noResults}>
                  No results found for "{searchQuery}". Please try a different search or contact our support team.
                </p>
              ) : (
                <div style={styles.faqContainer}>
                  {filteredFaqs.map((faq) => (
                    <div key={faq.id} style={styles.faqItem}>
                      <button
                        style={styles.faqQuestion}
                        onClick={() => toggleFaq(faq.id)}
                      >
                        <span>{faq.question}</span>
                        <svg 
                          width="16" 
                          height="16" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          style={{
                            transform: expandedFaq === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease'
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFaq === faq.id && (
                        <div style={styles.faqAnswer}>
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Contact Us */}
          {activeCategory === 'contact' && (
            <div>
              <h2 style={styles.sectionTitle}>Contact Our Support Team</h2>
              
              <div style={{
                ...styles.contactGrid,
                '@media (min-width: 768px)': {
                  gridTemplateColumns: '1fr 1fr'
                }
              }}>
                <div>
                  <div style={styles.contactInfo}>
                    <h3 style={styles.contactTitle}>Customer Service</h3>
                    <p style={styles.contactText}>Our representatives are available Monday through Friday, 8am to 6pm.</p>
                    <div style={styles.contactItem}>
                      <span style={styles.contactIcon}>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      <span>(555) 123-4567</span>
                    </div>
                    <div style={styles.contactItem}>
                      <span style={styles.contactIcon}>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span>support@wastemanagement.com</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 style={styles.contactTitle}>Emergency Service</h3>
                    <p style={styles.contactText}>For urgent issues related to hazardous spills or unsafe conditions.</p>
                    <div style={styles.contactItem}>
                      <span style={{...styles.contactIcon, color: '#e53e3e'}}>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      <span>(555) 911-2345</span>
                    </div>
                    <p style={{fontSize: '0.8rem', color: '#777', marginTop: '0.5rem'}}>Available 24/7 for emergencies only</p>
                  </div>
                </div>
                
                <div>
                  <h3 style={styles.contactTitle}>Send Us a Message</h3>
                  <form>
                    <div>
                      <label style={{display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem'}}>Name</label>
                      <input type="text" style={styles.formInput} />
                    </div>
                    <div>
                      <label style={{display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem'}}>Email</label>
                      <input type="email" style={styles.formInput} />
                    </div>
                    <div>
                      <label style={{display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem'}}>Message</label>
                      <textarea style={styles.formTextarea}></textarea>
                    </div>
                    <button type="submit" style={styles.formButton}>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
          
          {/* Resources */}
          {activeCategory === 'resources' && (
            <div>
              <h2 style={styles.sectionTitle}>Helpful Resources</h2>
              
              <div style={styles.gridContainer}>
                <ResourceCard 
                  title="Recycling Guide" 
                  description="Comprehensive information on what can and cannot be recycled in your area."
                  linkText="View Guide →"
                  iconBgColor="#e8f5e9"
                  iconColor="#2a813b"
                  icon={
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  }
                  styles={styles}
                />
                
                <ResourceCard 
                  title="Collection Calendar" 
                  description="Download or subscribe to your local waste collection calendar with reminders."
                  linkText="Get Calendar →"
                  iconBgColor="#e3f2fd"
                  iconColor="#1565c0"
                  icon={
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  }
                  styles={styles}
                />
                
                <ResourceCard 
                  title="Hazardous Waste" 
                  description="Information on safely disposing of hazardous materials and special collection events."
                  linkText="Learn More →"
                  iconBgColor="#fff8e1"
                  iconColor="#f57f17"
                  icon={
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  styles={styles}
                />
                
                <ResourceCard 
                  title="Discount Programs" 
                  description="Information about available discounts for seniors, veterans, and low-income residents."
                  linkText="Check Eligibility →"
                  iconBgColor="#f3e5f5"
                  iconColor="#6a1b9a"
                  icon={
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  }
                  styles={styles}
                />
                
                <ResourceCard 
                  title="Bulk Pickup" 
                  description="Guidelines and scheduling information for large item and bulk waste collection."
                  linkText="Schedule Pickup →"
                  iconBgColor="#ffebee"
                  iconColor="#c62828"
                  icon={
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  }
                  styles={styles}
                />
                
                <ResourceCard 
                  title="Educational Materials" 
                  description="Downloadable resources for schools, community groups, and businesses."
                  linkText="Browse Materials →"
                  iconBgColor="#e8eaf6"
                  iconColor="#3949ab"
                  icon={
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                  styles={styles}
                />
              </div>
            </div>
          )}
          
          {/* Services */}
          {activeCategory === 'services' && (
            <div>
              <h2 style={styles.sectionTitle}>Our Services</h2>
              
              <div>
                <ServiceItem 
                  title="Residential Waste Collection"
                  description="Weekly curbside collection of household waste and recyclables for residential customers."
                  borderColor="#2a813b"
                  iconColor="#2a813b"
                  items={[
                    "Weekly trash pickup",
                    "Bi-weekly recycling",
                    "Seasonal yard waste",
                    "Holiday schedule adjustments"
                  ]}
                  styles={styles}
                />
                
                <ServiceItem 
                  title="Commercial Waste Services"
                  description="Customized waste management solutions for businesses, including front-load containers and compactors."
                  borderColor="#1565c0"
                  iconColor="#1565c0"
                  items={[
                    "Dumpster rental",
                    "Compactor services",
                    "Recycling programs",
                    "Waste audits"
                  ]}
                  styles={styles}
                />
                
                <ServiceItem 
                  title="Construction & Demolition"
                  description="Roll-off containers for construction projects, renovations, and site cleanups."
                  borderColor="#f57f17"
                  iconColor="#f57f17"
                  items={[
                    "10-40 yard roll-off containers",
                    "Same-day delivery available",
                    "Material sorting",
                    "LEED certification support"
                  ]}
                  styles={styles}
                />
                
                <ServiceItem 
                  title="Special Waste Services"
                  description="Safe disposal of hazardous, medical, and electronic waste in compliance with regulations."
                  borderColor="#6a1b9a"
                  iconColor="#6a1b9a"
                  items={[
                    "E-waste recycling",
                    "Medical waste disposal",
                    "Hazardous material management",
                    "Compliance documentation"
                  ]}
                  styles={styles}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Resource Card Component
const ResourceCard = ({ title, description, linkText, iconBgColor, iconColor, icon, styles }) => {
  return (
    <div style={styles.card}>
      <div style={{ ...styles.iconContainer, backgroundColor: iconBgColor, color: iconColor }}>
        {icon}
      </div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{description}</p>
      <a href="#" style={styles.cardLink}>{linkText}</a>
    </div>
  );
};

// Service Item Component
const ServiceItem = ({ title, description, borderColor, iconColor, items, styles }) => {
  return (
    <div style={{ ...styles.serviceItem, borderLeftColor: borderColor }}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{description}</p>
      <div style={{
        ...styles.serviceList,
        '@media (min-width: 768px)': {
          gridTemplateColumns: '1fr 1fr'
        }
      }}>
        {items.map((item, index) => (
          <div key={index} style={styles.serviceListItem}>
            <span style={{ ...styles.serviceListIcon, color: iconColor }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;