import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';


import AppHeaderText from '../components/AppHeaderText';
import AppText from '../components/AppText';
import AppUrl from '../components/AppUrl';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const DiagnosisListedItem = [
    // Diagnosis [0 - 5]
    'To diagnose malaria, your doctor will likely review your medical history and recent travel, conduct a physical exam, and order blood tests. Blood tests can indicate:',
        //Lists
    'The presence of the parasite in the blood, to confirm that you have malaria',
    'Which type of malaria parasite is causing your symptoms',
    'If your infection is caused by a parasite resistant to certain drugs',
    'Whether the disease is causing any serious complications',
    // Paragraphs
    `Some blood tests can take several days to complete, while others can produce results in less than 15 minutes.
Depending on your symptoms, your doctor may order additional diagnostic tests to assess possible complications.`,
    
    //Treatment [ 6 - 10]
    'Malaria is treated with prescription drugs to kill the parasite. The types of drugs and the length of treatment will vary, depending on:',
        //Lists
    'Which type of malaria parasite you have',
    'The severity of your symptoms',
    'Your age',
    "Whether you're pregnant",

    // Medication [ 11 - 17]
    'The most common antimalarial drugs include:', 
    // Lists
    `Chloroquine is the preferred treatment for any parasite that is sensitive to the drug.
But in many parts of the world, parasites are resistant to chloroquine, and the drug is no longer an effective treatment.`,
    `ACT is a combination of two or more drugs that work against the malaria parasite in different ways.
This is usually the preferred treatment for chloroquine-resistant malaria. Examples include artemether-lumefantrine (Coartem) and artesunate-mefloquine.`,
    'Other common antimalarial drugs include:', // Break Text 
    // Lists
    'Atovaquone-proguanil (Malarone)',
    'Quinine sulfate (Qualaquin) with doxycycline (Oracea, Vibramycin, others)',
    'Primaquine phosphate', 

    // Links  [18 - 20]
    'To read more about malaria please visit the following links:',
    'https://healthtracka.com/everything-you-should-know-about-malaria-symptoms-causes-prevention-and-testing/?utm_term=&utm_campaign=Sales-Performance+Max-1&utm_source=adwords&utm_medium=ppc&hsa_acc=8702298642&hsa_cam=17571975806&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMIn8i1-q38-QIVI4xoCR1p3Q3bEAAYASAAEgJNXfD_BwE',
    'https://www.mayoclinic.org/diseases-conditions/malaria/diagnosis-treatment/drc-20351190',
    

]

function DiagnosisOfMalaria({ navigation }) {

    return (
       <ScrollView style={styles.container}>

            <AppHeaderText>Diagnosis</AppHeaderText>
            <AppText style={styles.textBody} children={DiagnosisListedItem[0]}/>
            <ListItem text={DiagnosisListedItem[1]} />
            <ListItem text={DiagnosisListedItem[2]} />
            <ListItem text={DiagnosisListedItem[3]} />
            <ListItem text={DiagnosisListedItem[4]} />
            <AppText style={styles.textBody} children={DiagnosisListedItem[5]}/>
            
            <Image style={styles.image} source={require('../assets/symptops.jpg')} />
            
            <AppHeaderText>Treatment</AppHeaderText>
            <AppText style={styles.textBody} children={DiagnosisListedItem[6]}/>
            <ListItem text={DiagnosisListedItem[7]} />
            <ListItem text={DiagnosisListedItem[8]} />
            <ListItem text={DiagnosisListedItem[9]} />
            <ListItem text={DiagnosisListedItem[10]} />
            
            <Image style={styles.image} source={require('../assets/gr1.jpg')} />
            
            <AppHeaderText>Medication</AppHeaderText>
            <AppText style={styles.textBody} children={DiagnosisListedItem[11]}/>
            <ListItem title='Chloroquine phosphate.' text={DiagnosisListedItem[12]} />
            <ListItem title='Artemisinin-based combination therapies (ACTs).' text={DiagnosisListedItem[13]} />
            <AppText style={styles.textBody} children={DiagnosisListedItem[14]}/>
            <ListItem text={DiagnosisListedItem[15]} />
            <ListItem text={DiagnosisListedItem[16]} />
            <ListItem text={DiagnosisListedItem[17]} />
            
            <AppText style={styles.textBody} children={DiagnosisListedItem[18]}/>
            <AppUrl children='Health Tracka' url={DiagnosisListedItem[19]} />
            <AppUrl children='Mayo Clinic' url={DiagnosisListedItem[20]} />

       </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1, 
        padding: 10,
        marginBottom: 20,
    }, 
    textBody: {
        color: colors.black,
        lineHeight: 40,
    },
    image: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        resizeMode: 'contain',
        
    }
});

export default DiagnosisOfMalaria;