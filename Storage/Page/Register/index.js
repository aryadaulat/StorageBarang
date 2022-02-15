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
	ScrollView,
} from 'react-native';
import {logo} from '../../Assets';

export default class Register extends Component {
	constructor(props) {
    super(props);
    this.state = {
      email: '',
			namadepan: '',
			namabelakang:'',
			katasandi:'',
			konfirmasikatasandi:'',
			username: '',
    };
  }
	Registerakun=()=>{
		fetch('https://api2-dev.vobis.io/authentication/auth/register',{
			method:'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body:JSON.stringify({
				first_name: this.state.namadepan,
				last_name: this.state.belakang,
				username: this.state.username,
				email: this.state.email,
				password: this.state.katasandi,
				token: "testing"

			})
		})
		.then((response) => response.json())
		.then((response) => {

			console.log(response);
					
					 if (response.status != 'fail') {
						 alert("Berhasil tambah Akun");
						 this.props.navigation.navigate('Login')
					}else{
						alert(response.pesan);
					}
				 // this.setState({success : response.success});

	}).done();
	}
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <SafeAreaView style={styles.header}>
          <Image source={logo} resizeMode="contain" style={styles.img} />
        </SafeAreaView>
        <SafeAreaView style={styles.middle}>
          <ScrollView>
					<View style={{padding:30}}>
					<Text style={{fontSize:20,color:'black',}}>Buat Akun Baru</Text>
					</View>
          <SafeAreaView>
            <Text style={styles.text}>Email</Text>
            <TextInput
						style={styles.kotaktext}
						color='black'
              onChangeText={text =>
                this.setState({email: text})
              }
              placeholder="Email"
            />
          </SafeAreaView>
					<SafeAreaView>
            <Text style={styles.text}>Nama Depan</Text>
            <TextInput
						style={styles.kotaktext}
						color='black'
              onChangeText={text =>
                this.setState({namadepan: text})
              }
              placeholder="Nama Depan"
            />
          </SafeAreaView>
					<SafeAreaView>
            <Text style={styles.text}>Nama Belakang</Text>
            <TextInput
						style={styles.kotaktext}
						color='black'
              onChangeText={text =>
                this.setState({namabelakang: text})
              }
              placeholder="Nama Belakang"
            />
						<SafeAreaView>
            <Text style={styles.text}>Username</Text>
            <TextInput
						style={styles.kotaktext}
						color='black'
              onChangeText={text =>
                this.setState({username: text})
              }
              placeholder="Username"
            />
						</SafeAreaView>
          </SafeAreaView>
					<SafeAreaView>
            <Text style={styles.text}>Kata Sandi</Text>
            <TextInput
						style={styles.kotaktext}
						color='black'
						secureTextEntry={true}
              onChangeText={text =>
                this.setState({katasandi: text})
              }
              placeholder="Kata Sandi"
            />
          </SafeAreaView>
					<SafeAreaView>
            <Text style={styles.text}>Konfirmasi Kata Sandi</Text>
            <TextInput
						style={styles.kotaktext}
						
						color='black'
						secureTextEntry={true}
              onChangeText={text =>
                this.setState({konfirmasikatasandi: text})
              }
              placeholder="Konfirmasi Kata Sandi"
            />
          </SafeAreaView>
					
					<Button title = 'Buat Akun' onPress={()=>this.Registerakun()} />
					<Text style={styles.text} style={{marginVertical:20,color:'black'}}>Sudah Memiliki Akun?</Text>
					<TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('Login')
                  }>
						<Text style={{marginVertical:20,color:'black'}}>Masuk ke vobis</Text>
					</TouchableOpacity>
					</ScrollView>
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
    flex: 0.8,
		backgroundColor:'white',
		borderTopStartRadius: 30,
    borderTopEndRadius: 30,
		paddingHorizontal: width * 0.05,
  },
	text:{
		color:'black'
	},
	kotaktext:{
		borderWidth: 1,
		borderColor:'lightblue',
		marginVertical:height * 0.02,
	}
});
