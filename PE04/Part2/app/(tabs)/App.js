import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const userImage = require('../../assets/images/user.png'); // Update path if needed

// Unique profiles
const data = [
  {
    image: userImage,
    name: 'Reema Kadechkar',
    occupation: 'React Native Developer',
    description: 'Reema is a really great JavaScript developer. She loves using JS to build React Native applications for iOS.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Chirag Jain',
    occupation: 'Full Stack Developer',
    description: 'Chirag builds modern web applications using React, Node.js, and cloud technologies.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Charan Shetty',
    occupation: 'Data Scientist',
    description: 'Charan transforms data into insights using Python, ML models, and visualization tools.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Varsha Madar',
    occupation: 'Mobile Developer',
    description: 'Varsha develops seamless mobile experiences on iOS and Android using React Native.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Apurva Rane',
    occupation: 'Cloud Engineer',
    description: 'Apurva designs scalable cloud solutions with AWS, Docker, and Kubernetes.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Prashant Hule',
    occupation: 'DevOps Specialist',
    description: 'Prashant automates deployments, monitors infrastructure, and ensures CI/CD efficiency.',
    showThumbnail: true
  }
];

const ProfileCard = ({ image, name, occupation, description, onPress, showThumbnail }) => {
  let containerStyles = [styles.cardContainer];
  if (showThumbnail) containerStyles.push(styles.cardThumbnail);

  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [index]: { showThumbnail: { $set: showThumbnail } }
      })
    });
  };

  render() {
    const list = this.state.data.map((item, index) => (
      <ProfileCard
        key={`card-${index}`}
        image={item.image}
        name={item.name}
        occupation={item.occupation}
        description={item.description}
        onPress={() => this.handleProfileCardPress(index)}
        showThumbnail={item.showThumbnail}
      />
    ));

    return <View style={styles.container}>{list}</View>;
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: '#f5f5f5'
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 160,
    height: 240,
    margin: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 5,
    paddingTop: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 5 },
        shadowOpacity: 1
      },
      android: {
        elevation: 10
      }
    })
  },
  cardImage: {
    width: 50,
    height: 50
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 5
  },
  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 5
  },
  cardDescription: {
    fontStyle: 'italic',
    fontSize: 11,
    textAlign: 'center',
    marginHorizontal: 5
  },
  cardThumbnail: {
    transform: [{ scale: 0.4 }]
  }
});
