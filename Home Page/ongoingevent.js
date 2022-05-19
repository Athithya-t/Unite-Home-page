import { View,Text,Image } from 'react-native';
import  {ScrollView}  from 'react-native';
const events=[
    {
        text:'Event 1'
    },
    {
        text:'Event 2'
    },
    {
        text:'Event3'
    }
];
const OngoingEvent=()=>{
    return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {events.map((item,index)=>(
            <View key={index}>
                <Image source={require('./event.png')} key={index} style={{marginLeft:30,height:100,marginTop:150,width:160,borderRadius:8}}>
                </Image> 
                <Text style={{marginLeft:40,fontWeight:'bold', fontSize:20,color:'white',position:'absolute',marginTop:220}}>{item.text}</Text>
            </View>
        ))}
    </ScrollView>
    );
}


export default OngoingEvent;