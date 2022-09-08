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
import Global from '../../Global';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Uninterrupted Supply of Oxygen Gas in the Country for Medical Purposes',
        pic: pic_1,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Medium',
        status: 'Verified',
        case_rate: 'good',
        detail: `WHEREAS it is expedient to consolidate and amend the law relating to income tax and to provide for matters ancillary thereto or connected therewith;
        NOW, THEREFORE, in pursuance of the Proclamation of Emergency of the fourteenth day of October, 1999, and the Provisional Constitution Order No. 1 of 1999, read with Provisional Constitutional Amendment Order No. 9 of 1999, and in exercise of all powers enabling him in that behalf, the President of the Islamic Republic of 
        Pakistan is pleased to make and promulgate the following Ordinance:—
        (a) any reserve made up wholly or partly of any allowance, deduction, or exemption admissible under this Ordinance;- .9230
        (b) for the purposes of 1[sub-clauses (a), (b) and (e) of clause (19)”] all profits of the company including income and gains of a trust up to the date of such distribution or such payment, as the case may be; and
        (c) for the purposes of 2[sub-clause (c) of clause (19)], includes all profits of the company including income and gains of a trust up to the date of its liquidation;

        `
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Amendment in SRO 840(I)/2021',
        pic: pic_2,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Low',
        status: 'Unverified',
        case_rate: 'failed',
        detail: `
        “Approved Income Payment Plan” means an Income Payment Plan approved by Securities and Exchange Commission of Pakistan (SECP) under Voluntary Pension System Rules, 2005 and offered by a Pension Fund Manager registered with the SECP under Voluntary Pension System Rules, 2005;
        Approved Pension Fund” means Pension Fund approved by Securities and Exchange Commission of Pakistan (SECP) under Voluntary Pension System Rules, 2005, and managed by a Pension.
        “Approved Annuity Plan” means an Annuity Plan approved by Securities and Exchange Commission of Pakistan (SECP) under Voluntary Pension System Rules, 2005 and offered by a Life Insurance Company registered with the SECP under Insurance Ordinance, 2000 (XXXIX of 2000);
        1[(3D) “Approved Employment Pension or Annuity Scheme” means any employment related retirement scheme approved under this Ordinance, which makes periodical payment to a beneficiary i.e. pension or annuity such as approved superannuation fund, public sector pension scheme and Employees Old-Age Benefit Scheme;]
        2[(3E) “Approved Occupational Savings Scheme” means any approved gratuity fund or recognized provident fund;]
        (4) “approved superannuation fund” means a superannuation fund, or any part of a superannuation fund, approved by the Commissioner in accordance with Part II of the Sixth Schedule;
        3[(5) “assessment” includes 4[provisional assessment,] re-assessment and amended assessment and the cognate expressions shall be construed accordingly;]
        `
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Waiver of penal surcharge',
        pic: pic_3,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'High',
        status: 'Verified',
        case_rate: 'excellent',
        detail: `
        1[(11B) “Chief Commissioner” means a person appointed as Chief Commissioner Inland Revenue under section 208 and includes a Regional Commissioner of Income Tax and a Director-General of Income Tax and Sales Tax;]
        2[(11C) “Collective Investment Scheme” shall have the same meanings as are assigned under the Non-Banking Finance Companies (Establishment and Regulation) Rules, 2003;]
        (12) “company” means a company as defined in section 80;
        3[(13) “Commissioner” means a person appointed as Commissioner Inland Revenue under section 208 and includes any other authority vested with all or any of the powers and functions of the Commissioner;]
        4[(13A) “Commissioner (Appeals)” means a person appointed as Commissioner Inland Revenue (Appeals) under section 208;]
        5[(13AA) concealment of income includes –
            (a) the suppression of any item of receipt liable to tax in whole or in
            part, or failure to disclose income chargeable to tax;
            (b) claiming any deduction or any expenditure not actually incurred; (c) any act referred to in sub-section (1) of section 111;

        `
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Levy of Regulatory Duty on luxury/essential items',
        pic: pic_4,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Medium',
        status: 'Verified',
        case_rate: 'good',
        detail: `
        1 Substituted by the Finance Act, 2010. The substituted provision has been made effective from 05.06.2010 by sub-clause (77) of clause 8 of the Finance Act, 2010. Earlier the substitution was made through Finance (Amendment) Ordinance, 2009 which was re-promulgated as Finance (Amendment) Ordinance, 2010 and remained effective till 05.06.2010. The substituted clause (11B) read as follows:
“(11B) “Chief Commissioner” means a person appointed as Chief Commissioner Inland Revenue under section 208 and includes a Regional Commissioner of Income Tax and a Director-General of Income Tax and Sales Tax.”
2Inserted by the Finance Act, 2011.
3Substituted by the Finance Act, 2010. The substituted provision has been made effective from 05.06.2010 by sub-clause (77) of clause 8 of the Finance Act, 2010. Earlier the substitution was made through Finance (Amendment) Ordinance, 2009 which was re-promulgated as Finance (Amendment) Ordinance, 2010 and remained effective till 05.06.2010. The substituted Clause (13) read as follows:
“(13) Commissioner” means a person appointed as Commissioner Inland Revenue under section 208, and includes any other authority vested with all or any of the powers and functions of the Commissioner;”.
4Substituted by the Finance Act, 2010. The substituted provision has been made effective from 05.06.2010 by sub-clause (77) of clause 8 of the Finance Act, 2010. Earlier the substitution was made through Finance (Amendment) Ordinance, 2009 which was re-promulgated as Finance (Amendment) Ordinance, 2010 and remained effective till 05.06.2010. The substituted Clause (13A) read as follows:
“(13A) “Commissioner (Appeals)” means a person appointed as Commissioner Inland Revenue (Appeals) under section 208;
 5 New clause (13AA) inserted by the Finance Act, 2021.
        `
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Levy of Additional Customs Duty',
        pic: pic_5,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Low',
        status: 'Unverified',
        case_rate: 'failed',
        detail: `
        58. Carry forward of speculation business losses.—(1) Where a person sustains a loss for a tax year in respect of a speculation business carried on by the person (hereinafter referred to as a “speculation loss”), the loss shall be set off only against the income of the person from any other speculation business of the person chargeable to tax for that year.
(2) If a speculation loss sustained by a person for a tax year is not wholly set off under sub-section (1), then the amount of the loss not set off shall be carried forward to the following tax year and applied against the income of any speculation business of the person in that year and applied as specified in sub-section (1) in that year, and so on, but no speculation loss shall be carried forward to more than six tax years immediately succeeding the tax year for which the loss was first computed.
(3) Where a person has a loss carried forward under this section for more than one tax year, the loss of the earliest tax year shall be set off first.
59. Carry forward of capital losses.— (1) Where a person sustains a loss for a tax year under the head “Capital Gains” (hereinafter referred to as a “capital loss”), the loss shall not be set off against the person’s income, if any, chargeable under any other head of income for the year, but shall be carried forward to the next tax year and set off against the capital gain, if any, chargeable under the head “Capital Gains” for that year.
(2) If a capital loss sustained by a person for a tax year under the head “Capital Gains” is not wholly set off under sub-section (1), then the amount of the loss not set off shall be carried forward to the following tax year, and so on, but no loss shall be carried forward to more than six tax years immediately succeeding the tax year for which the loss was first computed.

        `
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Exemption of Cryogenic Tanks (for oxygen gas)',
        pic: pic_6,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Medium',
        status: 'Verified',
        case_rate: 'good',
        detail: `
(3) In case of association of persons 4[any loss] shall be set off or carried forward and set off only against the income of the association.
(4) Nothing contained in section 56, 57, 58 or 59 shall entitle —
(a) any member of an association of persons 5[ ] to set off any loss sustained by such association of persons, as the case may be, or have it carried forward and set off, against his income; or
(b) any person who has succeeded, in such capacity, any other person carrying on any business or profession, otherwise than by inheritance, to carry forward and set off against his income, any loss sustained by such other person.
6[(5) Subjecttosub-section(4)ofsection57,sub-section(12)ofsection22and sub-section (6), where in computing the taxable income for any tax year, full effect cannot be given to the loss relating to deductions under section 22, 23, 24 or 25 owing to there being no profits or gains chargeable for that year or such profits or gains as mentioned in sub-section (4) of section 57, being less than the said loss, the loss or
1 Added by the Finance Act, 2003.
2Sub-section (1) omitted by the Finance Act, 2012. The omitted sub-section (1) read as follows:
“(1) In case of an association of persons to which sub-section (3) of section 92 applies, any loss which cannot be set off against any other income of the association of persons in accordance with section
56, shall be dealt with as provided under sub-section (2) of section 93.
3Sub-section (2) omitted by the Finance Act, 2012. The omitted sub-section (2) read as follows:
“(2) Nothing contained in section 57, section 58 or section 59 shall entitle an association of persons, to which sub-section (3) of section 92 applies to have its loss carried forward and set off thereunder.
4The words, figures, commas and brackets “, to which sub-section (3) of section 92 does not apply, any loss for such association” substituted by the Finance Act, 2012.
5 The words, figures, commas and brackets “to which sub-section (3) of section 92 does not apply,” omitted by the Finance Act, 2012.
        `
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: 'Removal of regulatory duty on import of cotton yarn till 30th June,2021',
        pic: pic_7,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Medium',
        status: 'Verified',
        case_rate: 'good',
        detail: `
        1[59B. Group relief.— (1) Subject to sub-section (2), any company, being a subsidiary 2[or] a holding company, may surrender its assessed loss3[“as computed in sub-section (1A)”] (excluding capital loss) for the tax year (other than brought forward losses and capital losses), in favour of its holding company or its subsidiary or between another subsidiary of the holding company:
Provided that where one of the company in the group is a public company listed on a registered stock exchange in Pakistan, the holding company shall directly hold fifty-five per cent or more of the share capital of the subsidiary company. Where none of the companies in the group is a listed company, the holding company shall hold directly seventy-five per cent or more of the share capital of the subsidiary company.
4[“(1A) The loss to be surrendered under sub-section (1) shall be allowed as per following formula, namely:-
    1Section 59B substituted by the Finance Act, 2007. The substituted section 59B read as follows: “59B. Group Relief.- (1) Subject to sub-section (2), any company, being a subsidiary of a public company listed on a registered stock exchange in Pakistan, owning and managing an industrial undertaking or an undertaking engaged in providing services, may surrender its assessed loss for the tax year other than brought forward losses, in favour of its holding company provided such holding company owns or acquires seventy-five per cent or more of the share capital of the subsidiary company.
(2) The loss surrendered by the subsidiary company may be claimed by the holding company for set off against its income under the head “income from Business” in the tax year and the following two tax years subject to the following conditions, namely:-
(a) there is continued ownership of share capital of the subsidiary company to the extent of seventy-five per cent or more for five years; and
(b) the subsidiary company continues the same business during the said period of five years.
(3) The subsidiary company shall not be allowed to surrender its assessed losses for set off against income of the holding company for more than three tax years.
(4) Where the losses surrendered by a subsidiary company are not adjusted against income of the holding company in the said three tax years, the subsidiary company shall carry forward the unadjusted losses in accordance with the provision of section 57.
(5) If there has been any disposal of shares by the holding company during the aforesaid period of five years to bring the ownership of the holding company to less than seventy-five per cent, the holding company shall, in the year of disposal, offer the amount of profit on which taxes have not been paid due to set off of losses surrendered by the subsidiary company.”
2 The word “of” substituted by the Finance Act, 2021.
        `
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d77',
        title: 'Exemption of Customs duties on import of drug Remdesivir',
        pic: pic_8,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Hiegh',
        status: 'Verified',
        case_rate: 'excellent',
        detail: `
        The loss surrendered by the subsidiary company may be claimed by the holding company or a subsidiary company for set off against its income under the head “Income from Business” in the tax year and the following two tax years subject to the following conditions, namely:—
(a) there is continued ownership for five years, of share capital of the subsidiary company to the extent of fifty-five per cent in the case of a listed company, or seventy-five per cent or more, in the case of other companies;
(b) a company within the group engaged in the business of trading shall not be entitled to avail group relief;
(c) holding company, being a private limited company with seventy- five per cent of ownership of share capital gets itself listed within three years from the year in which loss is claimed;
(d) the group companies are locally incorporated companies under the 1[Companies Act, 2017 (XIX of 2017)];
(e) the loss surrendered and loss claimed under this section shall have approval of the Board of Directors of the respective companies;
(f) the subsidiary company continues the same business during the said period of three years;
(g) all the companies in the group shall comply with such corporate governance requirements 2[and group designation rules or regulations] as may be specified by the Securities and Exchange Commission of Pakistan from time to time, and are designated as companies entitled to avail group relief; and
(h) any other condition as may be prescribed.
(3) The subsidiary company shall not be allowed to surrender its assessed losses for set off against income of the holding company for more than three tax years.
(4) Where the losses surrendered by a subsidiary company are not adjusted against income of the holding company in the said three tax years, the subsidiary company shall carry forward the unadjusted losses in accordance with section 57.

        `
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d78',
        title: 'Implementation of Device Registration Blocking System (DIRBS)',
        pic: pic_9,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        category: 'Low',
        status: 'Unverified',
        case_rate: 'failed',
        detail: `
        59C. Carry forward of business losses of sick industrial units.- (I) Subject to sub-section (2), where a company hereinafter referred to as acquiring company, acquires under a scheme of acquisition majority share capital of another company being a sick industrial unit, hereinafter referred to as acquired company, the acquiring company shall be entitled to adjust loss for the latest tax year and brought forward assessed business losses excluding capital loss of the acquired company subject to provisions of section 57 for a period of three years.
(2) Sub-section (I) shall apply subject to the following conditions, namely:– (a) there is continued ownership for five years starting from the 30th June, 2023 and there is no change in share capital of the acquiring company;
(b) the assets of the acquired company shall not be sold upto the 30" June, 2026; and
(c) the acquired company continues the same business till the 30th June, 2026.
(3) Where the losses surrendered by the acquired company are not adjusted against income of
the acquiring company in the said three tax years, the acquired company shall carry forward the unadjusted losses in accordance with section 57.
(4) The loss of the acquired company referred to in sub-section (1) shall be adjusted against income under the head "income from business" of the acquiring company as per following formula, namely:-
(A/I00) x B
where—
A is the percentage share capital held by the acquiring company of the acquired company; and B is the loss of the acquired company referred to in sub-section (I).
(5) If the acquiring company fails to revive the acquired company by tax year 2026, the
acquiring company shall, in tax year 2027 offer the amount of profit on which taxes have not been paid due to set off of losses surrendered by the acquired company.
(6) For the removal of doubt, this section shall not apply to any scheme of amalgamation or merger.
 (7) For the purposes of this section, -
        `
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
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 0.6 }}>
                    <Image source={item.pic} style={styles.pic_logo} resizeMode='cover' />
                </View>
                <View style={{ flex: 1, marginVertical: 15 }}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <Text>{item.date}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold' }}>Category :</Text>
                        <Text style={{ marginLeft: 8 }}>{item.category}</Text>
                    </View>
                    <View style={item.status === 'Verified' ? styles.statusStyle : styles.failedStatusStyle}>
                        <Text>{item.status}</Text>
                    </View>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        starSize={20}
                        containerStyle={{
                            marginHorizontal: 30
                        }}
                        rating={item.case_rate === 'good' ? 3.2 : item.case_rate === 'excellent' ? 5 : 0}
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );



    return (
        // <>
        // <Components.MyStatusBar backgroundColor={Global.statusbar_bg} barStyle="light-content"/>
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
        // </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flex: 1,
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
    statusStyle: {
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        margin: 8,
        padding: 3
    },
    failedStatusStyle: {
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        margin: 8,
        padding: 3
    }
});

export default Lists;