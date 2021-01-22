import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image,Dimensions,
    TouchableHighlight,
    ScrollView,Alert,Button} from 'react-native';
import {connect} from 'react-redux';
import {
    INCREMENT,
    DECREMENT
  } from '../redux/action/actionTypes';
  import {increaseCount ,decreaseCount} from '../redux/action/listAction'
//   import ButtonNew from './button'
  const deviceWidth = Dimensions.get("window").width;
  
  class CounterApp extends Component {
    state={
        fdScreen:false,
        counterScreen:false,
        FinancialYear:[1,2,3,4,5,6],
    }


    componentDidMount() {
      
        setTimeout(() => {
         this.setState({fdScreen:true});
        }, 3000);
      
      }  
    render() {
        return (
            <View style={styles.container}>
                {this.state.fdScreen? <View style={{flex:1}}>
                    <View style={{flex:1}}>
                    <View style={{ margin: 10,flex:1,}}>

                    <View
                        style={[
                          this_styles.shadow,
                          {
                              flex:1,
                            backgroundColor: "white",
                            margin: 20,
                            elevation: 12,
                            borderColor: "#0f000000",
                            borderRadius:5,
                            borderWidth: 0.5,
                          },
                        ]}
                      >
                        <View style={{ margin: 20 }}>
                          <Image
                            source={require("../res/Images/fd.png")}
                            style={{height:150,width:150}}
                          />
                          <Text
                            style={{
                              // fontFamily: "Interstate-Bold", //font_comment
                              fontSize: 16,
                              fontWeight: "bold",
                              marginTop: 5,
                              color: "#333333",
                            }}
                          >
                            Timely Notification
                          </Text>
                        </View>
                      </View>
                      </View>                
                    </View>
              <View style={{backgroundColor:"gray",color:'gray',flex:0,margin: 30,borderRadius:5}}>
               <Button
               color="white"
        title="Apply Now"
        onPress={() => Alert.alert('Simple Button pressed')}
      /></View>
                </View>
                :<Image style={styles.image} source={require('../res/Images/fd.png')} />

                }
       {this.state.counterScreen?
                <View style={styles.mainView}>
                    <TouchableOpacity style={styles.button}onPress={() => this.props.increaseCounter()}>
                        <Text style={styles.text}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{this.props.counterReducer.counter}</Text>
                    <TouchableOpacity style={styles.button}onPress={() => this.props.decreaseCounter()}>
                        <Text style={styles.text}>Decrease</Text>
                    </TouchableOpacity>
                </View>
                :null}
            </View>
        );
    }
}
function mapStateToProps(state) {
  return {
    counterReducer: state.counterReducer,
   
  };
}

function mapDispatchToProps(dispatch) {
  return {
  
    increaseCounter: () => dispatch({
        type: INCREMENT,
        value: 1,
      }),
    decreaseCounter: () => dispatch({
        type: DECREMENT,
        value: 1,
      }),
      // increaseCounter: () => dispatch(increaseCount()),
    // decreaseCounter: () => dispatch(decreaseCount()),

 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView:{ flex:1, justifyContent: 'space-around',marginTop:50,margin:10,alignItems:'center',justifyContent:'center',padding:20 },
  button:{backgroundColor:'gray',justifyContent:"center",alignItems:"center"},
  text:{ fontSize: 20,color:'white',padding:10 },
  image:{flex:1,height:"100%",width:'100%'},
});

const this_styles = StyleSheet.create({
    shadow: {
        flex:1,
      // shadowOffset:{  width: 10,  height: 10,  },
      // shadowColor: 'black',
      // shadowOpacity: 1.0,
  
      shadowColor: "#000",
    //   shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    clear20: {
      height: 70,
    },
    tabbtn: {
      backgroundColor: "#ffe600",
      borderColor: "#c4c4cd",
      borderWidth: 1,
    },
    ChatBox: {
      width: 60,
      height: 60,
      marginTop: 5,
      position: "absolute",
      bottom: 0,
      right: 0,
    },
  });
