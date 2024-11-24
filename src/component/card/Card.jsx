import React from 'react';

const CourseCard = ({ courseName, courseCode, about, onAdd, onBookmark }) => {
  const styles = {
    card: {
      width: '300px', // Fixed width for the card
      height: '170px', // Fixed height for the card
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Space between elements
      overflow: 'hidden', // Hide overflow content
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between', // Space out buttons
    },
    button: {
      margin: '5px',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
      flex: '1', // Make buttons take equal space
    },
    addButton: {
      backgroundColor: '#28a745',
      color: '#fff',
    },
    bookmarkButton: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={{ fontSize: '18px', margin: '0' }}>{courseName}</h3>
      <p style={{ margin: '5px 0' }}><strong>Course Code:</strong> {courseCode}</p>
      <p style={{ margin: '5px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{about}</p>
      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, ...styles.addButton }} onClick={onAdd}>
          Add
        </button>
        <button style={{ ...styles.button, ...styles.bookmarkButton }} onClick={onBookmark}>
          Bookmark
        </button>
      </div>
    </div>
  );
};

export default CourseCard;