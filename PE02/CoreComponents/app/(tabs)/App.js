import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponents = () => {
  const [LikedCourse, setLikedCourse] = useState('');

  const coreCourses = [
    'CS 504 - Operating Systems',
    'CS 506 - Computer Architecture',
    'CS 515 - Algorithms',
    'CS 517 - Programming Languages',
    'CS 518 - Software Engineering',
    'CS 519 - Database Systems',
    'CS 533 - Computer Networks',
    'CS 542 - Artificial Intelligence',
  ];

  const depthCourses = [
    'CS 545 - Advanced Machine Learning',
    'CS 550 - Cloud Computing',
  ];

  const capstoneCourse = 'CS 590 - Capstone Project';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/icon.png')} style={styles.image} />


      <Text style={styles.title}>Which course did you like? </Text>

      <TextInput
        style={styles.input}
        placeholder="ex. CS 624"
        placeholderTextColor="#000000"
        value={LikedCourse}
        onChangeText={setLikedCourse}
      />
      {LikedCourse ? (
        <Text style={styles.Liked}>My most liked course is: {LikedCourse}</Text>
      ) : null}

      <Text style={styles.section}>Core Courses(24 Credits)</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.section}>Depth of Study(6 Credits)</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.section}>Capstone (3 Credits)</Text>
      <Text style={styles.course}>{capstoneCourse}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    
  container: {
    padding: 20,
    paddingBottom: 100,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
  },
  section: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: "yellow",
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  course: {
    fontSize: 16,
    marginVertical: 4,
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  Liked: {
    fontStyle: 'italic',
    marginBottom: 20,
  },
});

export default CoreComponents;
