import {Text,View,Image, Touchable} from 'react-native';
import OngoingEvent from './ongoingevent';
import ClubCard from './clubcard';
import QuickiesCard from './quickiescard';
import Footer from './footer';
import { TouchableOpacity } from 'react-native';
const Home=()=>{
    return(
        <View style={{backgroundColor:'#F5F2FD',height:'100%'}}>
            <Text style={{marginLeft:30,marginTop:50,position:'absolute',fontWeight:'bold',fontSize:24}}>Welcome,Name!</Text>
            <Image source={require('./bell.png')} style={{width:30,height:30,position:'absolute',marginLeft:350,marginTop:50}}/>
            <Text style={{marginTop:100,marginLeft:30,position:'absolute',fontSize:18}}>Ongoing Events</Text>
            <OngoingEvent/>
            <QuickiesCard/>
            <Text style={{marginTop:270,marginLeft:30,position:'absolute',fontSize:18,fontWeight:'bold'}}>Clubs</Text>
            <ClubCard style={{position:'absolute'}}/>
            <Text style={{position:'absolute', marginTop:430,marginLeft:30,fontWeight:'bold',fontSize:18,height:70}}>Quickies</Text>
        </View>
    );
}


export default Home;
