import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'What is 2 + 2?',
        answer: '4',
        options: ['2', '3', '4', '5']
    },
    {
        id: 2,
        question: 'Hi',
        answer: 'Hello',
        options: ['Hello', 'a', 'b', 'c']
    }
];

const Flashcard = ({ flashcard, onAnswerSelected }) => {
    return (
        <View style={styles.fc_container}>
            <Text>{flashcard.question}</Text>
            {flashcard.options.map((option) => (
                <TouchableOpacity key={option} onPress={() => onAnswerSelected(option)}>
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const Quiz = () => {
    const [currentFlashcardIndex, setCurrentFlashcardIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);

    const handleAnswerSelected = (selectedOption) => {
        const currentFlashcard = SAMPLE_FLASHCARDS[currentFlashcardIndex];
        if (selectedOption === currentFlashcard.answer) {
            setScore(score + 1);
        }
        const nextFlashcardIndex = currentFlashcardIndex + 1;
        if (nextFlashcardIndex < SAMPLE_FLASHCARDS.length) {
            setCurrentFlashcardIndex(nextFlashcardIndex);
        } else {
            // Quiz is over, do something here
        }
    };

    const currentFlashcard = SAMPLE_FLASHCARDS[currentFlashcardIndex];

    return (
        <View>
            <Flashcard flashcard={currentFlashcard} onAnswerSelected={handleAnswerSelected} />
            <Text>Score: {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    fc_container: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        borderColor: 'gray',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        width: width * 0.9, // 90% of screen width
        height: height * 0.3, // 30% of screen height
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
    },
});

export default Quiz;
