import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { COLORS, SIZES } from '../constants';
//import data from '../data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
    {
        question: "What’s the biggest planet in our solar system?",
        options: ["Jupiter","Saturn","Neptune","Mercury"],
        correct_option: "Jupiter"
    },
    {
        question: "What attraction in India is one of the famus in the world?",
        options: ["Chand Minar","Taj Mahal","Stadium"],
        correct_option: "Taj Mahal"
    },
    {
        question: "What land animal can open its mouth the widest?",
        options: ["Alligator","Crocodile","Baboon","Hippo"],
        correct_option: "Hippo"
    },
    {
        question: "What is the largest animal on Earth?",
        options: ["The African elephant","The blue whale","The sperm whale","The giant squid"],
        correct_option: "The blue whale"
    },
    {
        question: "What is the only flying mammal?",
        options: ["The bat","The flying squirrel","The bald eagle","The colugo"],
        correct_option: "The bat"
    }
]

const allQuestions = data;
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
const [correctOption, setCorrectOption] = useState(null);
const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
const [score, setScore] = useState(0)
const [showNextButton, setShowNextButton] = useState(false)
const [showScoreModal, setShowScoreModal] = useState(false)


const Quiz = () => {

    return (
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
           
       </SafeAreaView>
    )
}

export default Quiz
