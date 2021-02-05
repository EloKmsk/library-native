import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Fontisto } from '@expo/vector-icons';

export default function LibraryScreen({navigation}) {

    const [book, setBook] = useState([
        {id: 1, title: "Train d'enfer pour ange rouge", author: "Franck Thilliez", summary: "Un cadavre en morceaux artistiquement répartis est retrouvé aux environs de Paris. La victime a été décapitée et son corps martyrisé a fait l'objet d'une mise en scène défiant l'imagination. Le commissaire Franck Sharko est dépêché sur les lieux. Les ténèbres, il connaît : sa femme a disparu depuis six mois. Aucun signe de vie, aucune demande de rançon. Et cette nouvelle affaire, en réveillant le flic qui dormait en lui, va l'emmener au cœur de la nuit, loin, beaucoup trop loin...", image: require('./img/1.jpg')}, 
        {id: 2, title: "La chambre des morts", author: "Franck Thilliez", summary: "Imaginez… Vous roulez en pleine nuit avec votre meilleur ami, tous feux éteints. Devant vous, un champ d’éoliennes désert. Soudain le choc, d’une violence inouïe. Un corps gît près de votre véhicule. A ses côtés, un sac de sport. Dedans, deux millions d’euros, à portée de la main. Que feriez-vous ? Vigo et Sylvain, eux, ont choisi. L’amitié a parfois le goût du sang : désormais le pire de leur cauchemar a un nom… La Bête.", image: require('./img/2.jpg')}, 
        {id: 3, title: "Deuils de miel", author: "Franck Thilliez", summary: "Après le décès accidentel de sa femme et de sa fille, le commissaire Sharko est un homme brisé. Insomnies, remords, chagrin... Difficile dans ces conditions de reprendre du service. Mais une macabre découverte va brutalement le ramener à la réalité : une femme est retrouvée morte, agenouillée, nue, entièrement rasée dans une église. Sans blessures apparentes, ses organes ont comme implosé. Amateur d'énigmes, le tueur est aussi un orfèvre de la souffrance. Et certainement pas prêt à s'arrêter là. Pour Sharko, déjà détruit par sa vie personnelle, cette enquête ne ressemblera à aucune autre, car elle va l'entraîner au plus profond de l'âme humaine : celle du tueur... et la sienne.", image: require('./img/3.jpg')},
        {id: 4, title: "La forêt des ombres", author: "Franck Thilliez", summary: "Paris, hiver 2006. Arthur Doffre, milliardaire énigmatique, est sur le point de réaliser un rêve vieux de vingt-cinq ans: ressusciter un tueur en série, le Bourreau 125, dans un livre. Un thriller que David Miller, embaumeur de profession et auteur d'un premier roman remarqué, a un mois pour écrire contre une forte somme d'argent. Reclus dans un chalet en pleine Forêt-Noire, accompagné de sa femme et de sa fille, de Doffre et de sa jeune compagne, David se met aussitôt au travail. Mais il est des fantômes que l'on ne doit pas rappeler, et la psychose saisit un à un tous les occupants de la ténébreuse demeure cernée par la neige...", image: require('./img/4.jpg')},
        {id: 5, title: "La mémoire fantôme", author: "Franck Thilliez", summary: "Quatre minutes. C'est le temps d'un souvenir pour Manon. Après, tout s'efface. Dans ces conditions, pas facile pour Lucie Hennebelle, lieutenant à la brigade criminelle de Lille, de trouver par qui la jeune femme vient d'être agressée. Et de comprendre la signification des mots gravés au creux de sa paume : 'Pr de retour'. Lucie le pressent, la clé de cette affaire jamais résolue réside dans la mémoire fragmentée de Manon. Une mémoire à laquelle plus personne n'a accès…", image: require('./img/5.jpg')},
        {id: 6, title: "L'anneau de Moebius", author: "Franck Thilliez", summary: "Pour sa première enquête, Victor Marchal aborde son métier de flic par sa face la plus noire : une ex-star du porno torturée, une mise en scène macabre, et une plongée dans le monde interlope des déviants sexuels et des monstres de la nature. Depuis toujours, Stéphane Kismet est hanté par des images prémonitoires mais cette fois elles obéissent à une indéchiffrable et terrifiante logique. Dans ses rêves, Stéphane possède une arme, il est recherché par la police, une petite fille est morte... Les trajectoires de Victor et Stéphane vont se rejoindre. C'était écrit. L'un n'a encore rien vu, l'autre ignore qu'il sait déjà tout...", image: require('./img/6.jpg')},
        {id: 7, title: "Fractures", author: "Franck Thilliez", summary: "Alice sait que quelque chose ne tourne pas rond dans sa tête. A l'hôpital de Lille, son psychiatre doit lui révéler le résultat d'un an de traitement, lui apporter cette lumière qu'elle recherche depuis si longtemps. Mais les événements étranges qui se multiplient autour de la jeune femme vont l'en empêcher : cette photo récente de sa sœur jumelle, pourtant morte dix ans auparavant, qu'elle récupère des mains d'un immigré clandestin ; son père, agressé chez lui à l'arme blanche, et qui prétend avoir tenté de se suicider ; ce chemisier ensanglanté qu'elle découvre dans sa douche et à propos duquel elle n'a pas le moindre souvenir ; cet homme retrouvé nu dans un abribus et qui semble avoir vu le diable en personne. En un mot, Alice vient de prendre un aller simple vers la folie…", image: require('./img/7.jpg')},
        {id: 8, title: "Le syndrôme E", author: "Franck Thilliez", summary: "Un film mystérieux et malsain qui rend aveugle... Voilà de quoi gâcher les vacances de Lucie Henebelle, lieutenant de police à Lille. Cinq cadavres retrouvés atrocement mutilés... Il n'en fallait pas plus à la Criminelle pour rappeler le commissaire Franck Sharko en congé forcé. Deux pistes pour une seule et même affaire qui va réunir Henebelle et Sharko. Des bidonvilles du Caire aux orphelinats du Canada, les deux nouveaux équipiers vont mettre le doigt sur un mal inconnu, d'une réalité effrayante et qui révèle que nous pourrions tous commettre le pire. Ceux qui ne connaissent pas le syndrome [E[ ne savent pas encore de quoi ils sont capables...", image: require('./img/8.jpg')},
    ]);


  return (
    <View style={styles.container}>
        <View style={styles.search}>
            <Fontisto name="search" style={styles.icon} size={24} color="#88c5cc" />
            <TextInput
            type="text"
            placeholder="Search"
            style={styles.input}
            />
            <Button color='#88c5cc' title="Search"/>
        </View>
            <FlatList
            data={book}
            style={styles.list}
            renderItem={({ item }) => {
              return <View style={styles.base}><View style={styles.emplacement}><Image style={styles.image} source={item.image}/><View><Text style={styles.text}>{item.title}</Text><View style={styles.button}><Button title="En savoir plus" onPress={() => navigation.navigate("Details", {title: `${item.title}`, summary: `${item.summary}`, author: `${item.author}`, image: `${item.image}`})} color='#88c5cc'/></View></View></View></View>
            }}
            keyExtractor={item => item.id.toString()}
            />
    </View>
  );
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        marginTop: 10
    },
    input: {
        backgroundColor: 'white',
        color: 'grey',
        width: 250,
        paddingLeft: 10,
        borderColor: '#88c5cc',
        borderWidth: 2,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    container: {
        backgroundColor: '#fce9ff',
        alignItems: 'center',
    },
    icon: {
        marginTop: 5,
        marginRight: 5
    },
    image: {
        width: 50,
        height: 75,
        marginTop: 12,
        marginLeft: 7
    },
    base: {
        backgroundColor: 'white',
        width: 300,
        marginTop: 20, 
        height: 100,
        borderRadius: 10,
        borderColor: '#88c5cc',
        borderWidth: 1,
    },
    text: {
        color: '#BCBCBC',
        fontSize: 17,
        marginTop: 20,
        marginLeft: 10,

    },
    emplacement: {
        flexDirection: 'row',
    },
    list: {
        marginBottom: 50
    },
    button: {
        marginTop: 10,
        marginLeft: 80,
        width: 150
    }
})
