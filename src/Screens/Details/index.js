import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import pic_1 from '../../Assets/pic_1.jpg';
import pic_2 from '../../Assets/pic_2.png';
import pic_3 from '../../Assets/pic_3.jpg';
import pic_4 from '../../Assets/pic_4.jpg';
import pic_5 from '../../Assets/pic_5.jpg';
import pic_6 from '../../Assets/pic_6.jpg';
import pic_7 from '../../Assets/pic_7.jpg';
import pic_8 from '../../Assets/pic_8.jpg';
import pic_9 from '../../Assets/pic_9.jpg';
import StarRating from 'react-native-star-rating';


export default function Details({ navigation, route }) {
    // console.log('Params Data >>>>>>', route);
    const case_data = route?.params?.item;
    // console.log('Navigation Data ****>>>>>>', case_data)
    return (
        <>
            <View style={{ flex: 0.7 }}>
                <Image source={case_data.pic == 1 ?
                    pic_1 : case_data.pic == 2
                        ? pic_2 :
                        case_data.pic == 3 ? pic_3 : case_data.pic == 4 ? pic_4 :
                            case_data.pic == 5 ? pic_5 : case_data.pic == 6 ? pic_6 :
                                case_data.pic == 7 ? pic_7 : case_data.pic == 8 ? pic_8 : pic_9
                }
                    style={styles.pic_logo}
                    resizeMode='contain'
                />
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.scrollView}>
                    <View style={{ marginHorizontal: 20 }}>
                        <View style={{ justifyContent: 'center', alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>{case_data?.title}</Text>
                            <View style={{ marginTop: 15 }}>
                                <Text>{case_data?.date}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 15, marginHorizontal: 30 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 'bold', }}>Category</Text>
                                <Text>{case_data.category}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                <Text style={{ fontWeight: 'bold', }}>Status</Text>
                                <Text style={case_data.status === 'Verified' ? styles.statusStyle : styles.failedStatusStyle}>{case_data.status}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                <Text style={{ fontWeight: 'bold', }}>Rating</Text>
                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    starSize={20}
                                    // containerStyle={{
                                    //     marginHorizontal: 30
                                    // }}
                                    rating={case_data.case_rate === 'good' ? 3.2 : case_data.case_rate === 'excellent' ? 5 : 0}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                <Text style={{ fontWeight: 'bold', }}>Rating Title</Text>
                                <Text>{case_data.case_rate}</Text>
                            </View>
                        </View>
                        <View style={{marginTop:20,  justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{fontWeight:'bold', textDecorationLine:'underline'}}>Description</Text>
                        </View>
                        <View>
                            <Text style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                            <Text style={{textAlign:'center', marginTop:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                        </View>
                        <View style={{marginBottom:20}}/>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pic_logo: {
        height: '100%',
        width: '100%'
    },
    scrollView: {

    },
    statusStyle: {
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    failedStatusStyle: {
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    }
})
