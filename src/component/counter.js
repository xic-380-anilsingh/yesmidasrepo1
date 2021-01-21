import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import {connect} from 'react-redux';
import {
    INCREMENT,
    DECREMENT
  } from '../redux/action/actionTypes';
  import {increaseCount ,decreaseCount} from '../redux/action/listAction'

class CounterApp extends Component {
    state={
        fdScreen:false,
        counterScreen:false
    }


    componentDidMount() {
      
        setTimeout(() => {
         this.setState({fdScreen:true});
        }, 3000);
      
      }
    render() {
        return (
            <View style={styles.container}>
                {this.state.fdScreen? <View style={styles.mainView}>
                    <TouchableOpacity style={styles.button}onPress={() => this.props.increaseCounter()}>
                        <Text style={styles.text}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{this.props.counterReducer.counter}</Text>
                    <TouchableOpacity style={styles.button}onPress={() => this.props.decreaseCounter()}>
                        <Text style={styles.text}>Decrease</Text>
                    </TouchableOpacity>
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
  image:{flex:1,height:"100%",width:'100%'}
});
