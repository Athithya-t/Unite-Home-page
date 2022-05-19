import {View,StyleSheet,Text,ScrollView} from 'react-native';
const ClubCard=()=>{
    const clubnames=[
        {name:'PodX',key:'1'},
        {name:'Infinitus',key:'2'},
        {name:'YRC',key:'3'},
        {name:'UBC',key:'4'},
        {name:'Photography',key:'5'},
        {name:'STEAM',key:'6'},
        {name:'AR VR',key:'7'},
        {name:'NSS',key:'8'},
        {name:'Japanese',key:'9'},
        {name:'Artist League',key:'10'},
        {name:'Yuva',key:'11'},
        {name:'TechSparks',key:'12'}]
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:300 }}>
            {clubnames.map((item,index)=>(
                <View key={index}>
                    <View style={{width:70,height:70,borderRadius:35,background:'white',marginLeft:20,marginBottom:100}}>
                        <Text style={{marginTop:70,marginLeft:10}}>{item.name}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
    }
export default ClubCard;