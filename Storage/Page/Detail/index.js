import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView, FlatList,Dimensions} from 'react-native';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datatampil: [],
			datanama:[],
			katagori:[],
			
    };
  }
  getData = async () => {
    try {
      const response = await fetch(
        `https://api2-dev.vobis.io/barang/barang/${this.props.route.params.ID}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this.props.route.params.IDtoken}`,
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await response.json();
      this.setState({
        datatampil: json,
				datanama:json.data,
				katagori:json.data.Kategori_Barang
      });
      console.log('datajson');
      console.log(this.state.datatampil.data.nama_barang);
			console.log(this.state.datanama)
      // console.log(this.state.datatampil.data.id);
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = () => {
    console.log(this.props.route.params.IDtoken);
		console.log('cek id')
		console.log(this.props.route.params.ID);
    this.getData();

    // console.log('get data film')
    // console.log(this.props.title)
  };
  render() {
    return (
      <SafeAreaView style={styles.page}>
				<SafeAreaView style={styles.header}>
					<Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Barang</Text>
				</SafeAreaView>
				<SafeAreaView style={styles.isi}>
					<View style={styles.kotak}>
					<Text style={styles.Text}>Nama Barang</Text>
					<Text style={styles.Text}>{this.state.datanama.nama_barang}</Text>
					</View>
				<View style={styles.kotak}>
				<Text style={styles.Text}>Deskripsi</Text>
					<Text style={styles.Text}>{this.state.datanama.deskripsi}</Text>
				</View>
				<View style={styles.kotak} >
				<Text style={styles.Text}>Berat</Text>
					<View style={{flexDirection:'row'}}>
					<Text style={styles.Text}>{this.state.datanama.berat}</Text>
					<Text style={styles.Text}> Gram</Text>
					</View>
				</View>
					<View style={styles.kotak}>
					<Text style={styles.Text}>Kode Barang</Text>
					<Text style={styles.Text}>{this.state.katagori.kode}</Text>
					</View>
				</SafeAreaView>
			</SafeAreaView>
    );
  }
}

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
	page:{
		flex: 1,
		backgroundColor:'white',
		paddingHorizontal:height*0.03
	},
	header:{
		flex:0.2,
		justifyContent: 'center',
		alignItems:'center',
		borderBottomWidth:1,
		borderColor:'lightblue'
	},
	isi:{
		flex:0.8,
		// flexDirection: 'row',
		// backgroundColor:'red'
	},
	kotakkatagori: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
	kotak:{
		paddingVertical:height*0.02
	},
	Text:{
		color:'black',
		marginBottom:height*0.005
	}
});
