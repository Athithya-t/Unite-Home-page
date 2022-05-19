import {View,Text,ScrollView} from 'react-native';

const QuickiesCard=()=>{
    const quickies=[
        {name:'Blog',image:'./blog.png'},
        {name:'Clicks',image:'./photography.png'},
        {name:'Announcements',image:'./announcements.png'},
        {name:'Events',image:'event.png'}
    ]
    return(
        <View style={{position:'absolute',marginTop:450}}>
            <View>
                {quickies.map((item,index)=>(
                    <View style={{width:300,height:120,backgroundColor:'red',marginLeft:30,marginTop:30,borderRadius:8}}>
                        <Text style={{marginLeft:10,marginBottom:30,marginTop:90,fontWeight:'bold',fontSize:15}}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )}

export default QuickiesCard;