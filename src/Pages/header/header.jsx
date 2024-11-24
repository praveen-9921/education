import React from 'react';

const HomePage = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      margin: '0',
      padding: '0',
    },
    header: {
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#007bff',
      color: '#fff',
    },
    main: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    section: {
      marginBottom: '40px',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    
    testimonial: {
      fontStyle: 'italic',
      margin: '10px 0',
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1>Welcome to EduLearn</h1>
        <p>Your gateway to knowledge and skills</p>
      </header>

      {/* Main Content Section */}
      <main style={styles.main}>
        <section style={styles.section}>
          <h2>Featured Courses</h2>
          <p>Explore our wide range of courses designed to help you succeed.</p>
          <button style={styles.button}>View Courses</button>
        </section>

        <section style={styles.section}>
          <h2>Testimonials</h2>
          <p style={styles.testimonial}>"EduLearn has transformed my learning experience!" - Student A</p>
          <p style={styles.testimonial}>"The courses are well-structured and easy to follow." - Student B</p>
        </section>
      </main>

    </div>
  );
};

export default HomePage;