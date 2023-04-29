import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import AppButton from '../components/AppButton';
import AppHeaderText from '../components/AppHeaderText';
import AppText from '../components/AppText';

import Screen from '../components/Screen';
import colors from '../config/colors';
import ResultScreen from './ResultScreen';


const questionsArray = [ 
    'Do you Experience shaking shills that range from moderate to severe?', 
    'Do you have fever above 101 F (38 C)?', 
    'Do you experience incessant sweating?', 
    'Are you having headaches?', 
    'Are you feeling nauseous?',
    'Do you vomit?', 
    'Are you experiencing abdominal pain?', 
    'Are you having diarrhea?', 
    'Do you have anaemia?', 
    'Are you having muscle pain?', 
    'Do you feel your health deteriorating?', 
]

const imagesArray = [
    require('../assets/0.jpg'), 
    require('../assets/1.jpg'), 
    require('../assets/2.jpg'), 
    require('../assets/3.jpg'), 
    require('../assets/4.jpg'), 
    require('../assets/5.jpg'), 
    require('../assets/6.jpg'), 
    require('../assets/7.jpg'), 
    require('../assets/8.jpg'), 
    require('../assets/9.jpg'), 
    require('../assets/10.jpg'), 
]

function CheckMalaria(props) {
    const [selectedImage, setSelectedImage] = React.useState(0);
    const [selectedQuestion, setSelectedQuestion] = React.useState(0);
    const [yesCount, setYesCount] = React.useState(0);
    const [noCount, setNoCount] = React.useState(0);
    const totalClicks = 11;
    let message 

    const testResult = () => {
        const percent = ( yesCount / totalClicks) * 100
        if (percent > 80) {
            message = 'You have symptoms of SEVERE MALARIA. Please visit the nearest hospital as soon as possible.' 
        } else if (percent > 59) {
            message = 'You have symptoms of UNCOMPLICATED MALARIA. Please visit the nearest hospital .' 
        } else if ( percent > 39) {
            message = 'You have symptoms of ASYMPTOMATIC MALARIA. Please visit the nearest hospital .' 
        } else if ( percent > 0) {
            message = 'You have MILD SYMPTOMS. Can be common cold or stress related defects.' 
        }else {
            message = 'You have no MALARIA'
        }
        console.log(message)
    }
    
    const handleNextItem = () => {
        setSelectedImage(prev => prev+1);
        setSelectedQuestion(prev => prev+1); 
        
        //  setNoCount(nCount+1)
    }
    if (selectedImage >= imagesArray.length) {
        
        console.log('Thanks')
         testResult()
         console.log(yesCount)
         console.log(noCount)

         return <ResultScreen children={message} />
        }
        

    return (
       <View style={styles.container}>
            <AppHeaderText style={styles.headerText} children='Review in Progress' />

            
            <View style={styles.questionContainer}>
            <Image style={styles.image}  source={imagesArray[selectedImage]} />

                <AppText style={styles.text} children={questionsArray[selectedQuestion]} />
            </View>
            
            <View style={styles.buttonContainer}>
                <AppButton title='Yes' color='secondary' onPress={() => {   handleNextItem(yesCount) 
                                                                            setYesCount(yesCount+1)}} />
                <AppButton title='No' color='danger' onPress={() => {   handleNextItem() 
                                                                        setNoCount(noCount+1)}}/>
            </View>
            
       </View>

    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        flex: 1,
        width: '80%',
        // backgroundColor: colors.white,
        // borderRadius: 15,
        // margin: 15,
    },  
    container: { 
        alignItems: 'center',
        flex: 1, 
        backgroundColor: colors.primary,
    },
    headerText: {
        color: colors.white,
    }, 
    image: {
        marginTop: 20,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 10,
    }, 
    text: {
        textAlign: 'center',
        marginTop: 20,
        paddingTop: 30,
    }, 
    questionContainer: {
        alignItems: 'center',
        flex: 2, 
        margin: 15,
    }
});
export default CheckMalaria;