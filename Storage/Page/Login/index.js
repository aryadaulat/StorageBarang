import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {logo} from '../../Assets';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      katasandi: '',
    };
  }
  ceklogin = () => {
    fetch('https://api2-dev.vobis.io/authentication/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body :
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.katasandi,
        token: 'testing',
      }),
    })
      .then(response => response.json())
      .then(response => {
        const data = response;
        console.log(response);
        console.log(data.data.token);
        //  console.log(response.json());
        this.props.navigation.navigate('Home', {token: data.data.token});
      })
      .done();
  };
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <SafeAreaView style={styles.header}>
          <Image source={logo} resizeMode="contain" style={styles.img} />
        </SafeAreaView>
        <SafeAreaView style={styles.middle}>
          <View style={{justifyContent: 'center', padding: 30}}>
            <Text style={styles.textvobis}>Masuk Ke Vobis</Text>
          </View>
          <SafeAreaView style={styles.isikotak}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.kotakisi}
              color="black"
              onChangeText={text => this.setState({email: text})}
              placeholder="Email"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.isikotak}>
            <Text style={styles.text}>Kata Sandi</Text>
            <TextInput
              style={styles.kotakisi}
              onChangeText={text => this.setState({katasandi: text})}
              placeholder="Kata Sandi"
            />
          </SafeAreaView>
          <TouchableOpacity style={{marginBottom: width * 0.1}}>
            <Text style={(styles.text, {color: 'darkblue'})}>
              Lupa Kata Sandi
            </Text>
          </TouchableOpacity>
          <Button title="Masuk" onPress={() => this.ceklogin()} />
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop:height * 0.1}}>
            <Text style={styles.text}>Belum Memiliki Akun?</Text>
            <TouchableOpacity
						style={{marginTop:height * 0.02}}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.text,{color:'darkblue'}}>Buat Akun Baru</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}
const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor:'white',
    backgroundColor: '#2F4F4F',
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: '#2F4F4F',
  },
  img: {
    alignSelf: 'center',
    height: height * 0.1,
    width: width * 0.3,
    // alignSelf:'center'
  },
  middle: {
    flex: 0.9,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.05,
  },
  text: {
    color: 'black',
  },
  textvobis: {
    fontSize: 25,
    color: 'black',
		fontWeight:'bold'
  },
  kotakisi: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  isikotak: {
    marginBottom: height * 0.03,
  },
});
