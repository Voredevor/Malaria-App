import React from 'react';
import { View, StyleSheet, Image, ScrollView,} from 'react-native';


import AppHeaderText from '../components/AppHeaderText';
import AppText from '../components/AppText';
import AppUrl from '../components/AppUrl';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const listedItem = [
    // First List
    'A mosquito is infected by biting and collecting blood from a person that is already infected with malaria parasites.',
    'The next time the mosquito bites someone, the malaria parasites are injected into the new person through its saliva.',
    // Second List
    'Spray the rooms in the houses with insecticide to kill mosquitoes and prevent bites.',
    'Spray insecticide in bedrooms before going to bed.',
    'Sleep under treated mosquito nets.',
    'Use insect and mosquito repellant.',
    'Put screens on windows or doors.',
    // Third list (Has Title)
    `   Can be caused by all Plasmodium species; the patient has circulating parasites but no symptoms.`,
    `   Can be caused by all Plasmodium species. Symptoms generally occur 7-10 days after the initial mosquito bite. 
Symptoms are non-specific and can include fever, moderate to severe shaking chills, profuse sweating, headache, nausea, vomiting, diarrhoea and anaemia, with no clinical or laboratory findings of severe organ dysfunction.`,
    `   Is usually caused by infection with Plasmodium falciparum, though less frequently can also be caused by Plasmodium vivax or Plasmodium knowlesi.
Complications include severe anaemia and end-organ damage, including coma (cerebral malaria), pulmonary complications (for example, oedema and hyperpnoeic syndrome) and hypoglycaemia or acute kidney injury. Severe malaria is often associated with hyperparasitaemia and is associated with increased mortality.
Learn more about the epidemiological definition of severe malaria on the Severe Malaria Observatory.`,
    // Fourth List (Links )
        'https://healthtracka.com/everything-you-should-know-about-malaria-symptoms-causes-prevention-and-testing/?utm_term=&utm_campaign=Sales-Performance+Max-1&utm_source=adwords&utm_medium=ppc&hsa_acc=8702298642&hsa_cam=17571975806&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMIn8i1-q38-QIVI4xoCR1p3Q3bEAAYASAAEgJNXfD_BwE',
        'https://www.medicalaidfilms.org/film/how-to-diagnose-malaria/?gclid=EAIaIQobChMIn8i1-q38-QIVI4xoCR1p3Q3bEAAYAiAAEgJK5fD_BwE',
        'https://www.mmv.org/malaria-medicines/definitions-and-symptoms?gclid=EAIaIQobChMIhLbDyfT8-QIV_wIGAB00AwqCEAAYASAAEgJfVfD_BwE',
    
]

function AboutMalaria({ navigation }) {
    return (
        <ScrollView>
        <View style={styles.container}>
            <AppHeaderText>What is Malaria</AppHeaderText>
            <AppText style={styles.textBody}>
                {` Malaria is an infectious disease caused by a parasite that is transmitted through infected mosquitoes. Tropical and subtropical climates are where Malaria tends to spread the most.
Such weather allows transmission between infected mosquitoes and people all year round.
Due to many cases occurring in Africa, Malaria symptoms are commonly recognized, this can be both a good and bad thing. While it may prompt people to take medical action, they can also skip out on testing and go straight to treatment. `}
            </AppText>

            <AppHeaderText>Causes of Malaria?</AppHeaderText>
            <AppText style={styles.textBody}>
                {` Many people know that Malaria is brought on by mosquitoes. The sickness is actually caused by a parasite that infects a certain type of mosquito which then goes on to transmit it to people through bites.
There are different kinds of parasites that humans can be infected with;
Plasmodium falciparum (can cause severe infection and if not treated can lead to death) `}
            </AppText>

            <Image style={styles.image} source={require('../assets/malaria_life_cycle.jpg')} />

            <AppHeaderText>How is Malaria Transmitted?</AppHeaderText>
            <AppText style={styles.textBody}>
                {` When any type of mosquito bites you, its special mouthpart (proboscis) punctures your skin. During this process, the mosquito sucks up blood while at the same time injecting its saliva into your skin. Your body then reacts to the saliva leading to the bump and itching.
Malaria can only be transmitted through female Anopheles mosquitoes through the following process; `}
            </AppText>
            <ListItem text={listedItem[0]} />
            <ListItem text={listedItem[1]} />

            <AppHeaderText>Malaria Prevention</AppHeaderText>
            <AppText style={styles.textBody}>
                {` People bitten by mosquitoes infected by the plasmodium falciparum parasite are more likely to get severely sick or die from Malaria.
This includes those with little immunity like pregnant women, young children, and those traveling from areas without Malaria. `}
            </AppText>
            <ListItem text={listedItem[2]} />
            <ListItem text={listedItem[3]} />
            <ListItem text={listedItem[4]} />
            <ListItem text={listedItem[5]} />
            <ListItem text={listedItem[6]} />

            <AppHeaderText>Symptoms of Malaria</AppHeaderText>
            <AppText style={styles.textBody}>
                {` In humans, malaria parasites grow and multiply first in the liver cells and then exponentially in the red blood cells. It is the blood stage of the parasite lifecycle that causes the symptoms of malaria in humans.
Malaria is usually classified as asymptomatic, uncomplicated or severe.`}
            </AppText>
            <ListItem title='Asymptomatic malaria' text={listedItem[7]} />
            <ListItem title='Uncomplicated malaria' text={listedItem[8]} />
            <ListItem title='Severe malaria' text={listedItem[9]} />

            <AppText style={styles.textBody}>
                {` To read more about malaria please visit the following links:`}
            </AppText>
            <AppUrl children='Health Tracka' url={listedItem[10]} />
            <AppUrl children='Medical Aid Films' url={listedItem[11]} />
            <AppUrl children='Medicines for Malaria Ventures' url={listedItem[12]} />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1, 
        padding: 10,
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

export default AboutMalaria;