import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image 
                            style={styles.cardImage}
                            source={require('../../assets/images/user.png')}
                        />
                    </View>
                    <Text style={styles.nameText}>Reema Kadechkar</Text>
                    <Text style={styles.occupationText}>React Native Developer</Text>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>
                            Reema is a really great JavaScript developer. 
                            She loves using JS to build React Native applications 
                            for iOS.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        paddingTop: 30
    },
    cardImageContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    nameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 20
        
    },
    occupationText: {
        color: 'black',
        fontWeight: '600',
        textDecorationLine: 'underline',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 20
    },
    descriptionContainer: {
        paddingHorizontal: 20
    },
    descriptionText: {
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20
    }
});