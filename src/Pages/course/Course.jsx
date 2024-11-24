import React from 'react';
import Card from '../../component/card/Card';

const Course = () => {
    const courses = [
        {
            name: 'Mathematics',
            code: 'MAT101',
            about: 'An introduction to the fundamental concepts of mathematics.',
        },
        {
            name: 'Physics',
            code: 'PHY101',
            about: 'Study of matter, energy, and the interactions between them.',
        },
        {
            name: 'Chemistry',
            code: 'CHE101',
            about: 'Exploration of the properties, composition, and behavior of matter.',
        },
        {
            name: 'Biology',
            code: 'BIO101',
            about: 'Study of living organisms and their vital processes.',
        },
        {
            name: 'Computer Science',
            code: 'CS101',
            about: 'Introduction to the principles of computer science and programming.',
        },
        {
            name: 'History',
            code: 'HIS101',
            about: 'An overview of significant historical events and their impact.',
        },
        {
            name: 'Literature',
            code: 'LIT101',
            about: 'Study of literary texts and their cultural significance.',
        },
        {
            name: 'Economics',
            code: 'ECO101',
            about: 'Introduction to the principles of economics and market systems.',
        },
        {
            name: 'Psychology',
            code: 'PSY101',
            about: 'Exploration of the human mind and behavior.',
        },
        {
            name: 'Philosophy',
            code: 'PHI101',
            about: 'Study of fundamental questions regarding existence, knowledge, and ethics.',
        },
        {
            name: 'Art History',
            code: 'ART101',
            about: 'Examination of the history of art and its cultural significance.',
        },
        {
            name: 'Statistics',
            code: 'STA101',
            about: 'Introduction to statistical methods and data analysis.',
        },
        {
            name: 'Sociology',
            code: 'SOC101',
            about: 'Study of social behavior and society.',
        },
        {
            name: 'Environmental Science',
            code: 'ENV101',
            about: 'Study of the environment and solutions to environmental issues.',
        },
        {
            name: 'Music Theory',
            code: 'MUS101',
            about: 'Introduction to the fundamentals of music theory and composition.',
        },
    ];

    const handleAdd = (courseName) => {
        alert(`${courseName} has been added!`);
    };

    const handleBookmark = (courseName) => {
        alert(`${courseName} has been bookmarked!`);
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {courses.map((course, index) => (
                <Card
                    key={index}
                    courseName={course.name}
                    courseCode={course.code}
                    about={course.about}
                    onAdd={() => handleAdd(course.name)}
                    onBookmark={() => handleBookmark(course.name)}
                />
            ))}
        </div>
    );
};

export default Course;