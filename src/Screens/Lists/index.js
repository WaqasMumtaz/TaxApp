import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, TurboModuleRegistry } from 'react-native';
import pic_1 from '../../Assets/pic_1.jpg';
import pic_2 from '../../Assets/pic_2.png';
import pic_3 from '../../Assets/pic_3.jpg';
import pic_4 from '../../Assets/pic_4.jpg';
import pic_5 from '../../Assets/pic_5.jpg';
import pic_6 from '../../Assets/pic_6.jpg';
import pic_7 from '../../Assets/pic_7.jpg';
import pic_8 from '../../Assets/pic_8.jpg';
import pic_9 from '../../Assets/pic_9.jpg';
import moment from 'moment';
import Components from '../../Components';
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Uninterrupted Supply of Oxygen Gas in the Country for Medical Purposes',
        pic: pic_1,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Medium',
        status: 'Verified',
        case_rate: 'good'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Amendment in SRO 840(I)/2021',
        pic: pic_2,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Low',
        status: 'Unverified',
        case_rate: 'failed'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Waiver of penal surcharge',
        pic: pic_3,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'High',
        status: 'Verified',
        case_rate: 'excellent'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Levy of Regulatory Duty on luxury/essential items',
        pic: pic_4,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Medium',
        status: 'Verified',
        case_rate: 'good'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Levy of Additional Customs Duty',
        pic: pic_5,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Low',
        status: 'Unverified',
        case_rate: 'failed'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Exemption of Cryogenic Tanks (for oxygen gas)',
        pic: pic_6,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Medium',
        status: 'Verified',
        case_rate: 'good'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: 'Removal of regulatory duty on import of cotton yarn till 30th June,2021',
        pic: pic_7,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Medium',
        status: 'Verified',
        case_rate: 'good'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d77',
        title: 'Exemption of Customs duties on import of drug Remdesivir',
        pic: pic_8,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Hiegh',
        status: 'Verified',
        case_rate: 'excellent'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d78',
        title: 'Implementation of Device Registration Blocking System (DIRBS)',
        pic: pic_9,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Low',
        status: 'Unverified',
        case_rate: 'failed'
    },
];


const Lists = () => {
    const navigation = useNavigation();
    const [authObj, setAuthObj] = useState({
        search: ''
    })

    function handleChange(name, value) {
        console.log('Name >>>>>>', name, 'Value >>>>>>', value);
        setAuthObj({
            ...authObj,
            [name]: value,
        });
    }

    function handleNavigate(item) {
        console.log('Itme >>>>>', item);
        navigation.navigate('Details', {
            item: item
          });
    }


    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => handleNavigate(item)}
            style={styles.item}
        >
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{flex:0.6}}>
                   <Image source={item.pic} style={styles.pic_logo} resizeMode='cover' />
                </View>
                <View style={{flex:1, marginVertical:15 }}>
                    <View style={{flex:1,flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <Text>{item.date}</Text>
                    <View style={{flexDirection:'row'}}>
                       <Text style={{fontWeight:'bold'}}>Category :</Text>
                       <Text style={{marginLeft:8}}>{item.category}</Text>
                    </View>
                    <View style={item.status === 'Verified' ? styles.statusStyle : styles.failedStatusStyle}>
                        <Text>{item.status}</Text>
                    </View>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        starSize={20}
                        containerStyle={{
                            marginHorizontal:30
                        }}
                        rating={item.case_rate === 'good' ? 3.2 : item.case_rate === 'excellent' ? 5 : 0}
                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );



    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginVertical: 8, marginHorizontal: 16 }}>
                <Components.InputText
                    placeholder="Search"
                    icon="search"
                    name={'search'}
                    handleChange={(name, value) => handleChange(name, value)}
                    value={authObj.search}
                // keyboardType={'email-address'}
                />

            </View>
            <FlatList
                data={DATA.filter(v => v.title.toLowerCase().includes(authObj.search.toLowerCase()) ||
                    v?.date?.toLowerCase().includes(authObj.search))}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flex:1,
        backgroundColor: '#fff',
        // paddingVertical: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        // height:60
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    pic_logo: {
        height: 100,
        width: 100,
        margin: 10
    },
    statusStyle:{
        borderWidth:2,
        borderColor:'green',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        margin:8,
        padding:3
    },
    failedStatusStyle:{
        borderWidth:2,
        borderColor:'red',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        margin:8,
        padding:3
    }
});

export default Lists;