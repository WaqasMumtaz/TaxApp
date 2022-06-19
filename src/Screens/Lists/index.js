import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image , TouchableOpacity} from 'react-native';
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


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Case',
        pic: pic_1,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        pic: pic_2,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        pic: pic_3,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Fourth Item',
        pic: pic_4,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Fifth Item',
        pic: pic_5,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Sixth Item',
        pic: pic_6,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: 'Seventh Item',
        pic: pic_7,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d77',
        title: 'Eigth Item',
        pic: pic_8,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d78',
        title: 'Ninth Item',
        pic: pic_9,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
];


const Lists = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <View style={{ flexDirection: 'row', alignItems:'flex-start', justifyContent:'flex-start' }}>
                <Image source={item.pic} style={styles.pic_logo} resizeMode='cover' />
                <View style={{marginLeft:20 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
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
        backgroundColor: '#fff',
        // paddingVertical: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:8,
        // height:60
    },
    title: {
        fontSize: 16,
        fontWeight:'bold'
    },
    pic_logo: {
        height: 100,
        width: 100,
        margin:10
    }
});

export default Lists;