import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,Dimensions,TextInput
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datatampil: [],
			dataasli:[],
			datatoken:'',
			search:'',
    };
  }
  getData = async () => {
    try {
      const response = await fetch('https://api2-dev.vobis.io/barang/barang', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.route.params.token}`,
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      this.setState({
        datatampil: json.data,
				dataasli:json.data,
      });
      console.log('datajson');
      // console.log(this.state.datatampil);
      // console.log(this.state.datatampil.data.id);
			console.log(this.state.datatoken)
    } catch (error) {
      // console.log(error);
    }
  };
  componentDidMount = () => {
    console.log(this.props.route.params.token);
		this.setState({
			datatoken : this.props.route.params.token
		})
    this.getData();

    // console.log('get data film')
    // console.log(this.props.title)
  };
	search = () => {
    if(this.state.search!=''){
			console.log(this.state.datatampil);
    let datastorage = this.state.dataasli.data;
    let search = this.state.search;
    datastorage = datastorage.filter(item =>
      item.nama_barang.toLowerCase().includes(search.toLowerCase()),
    );
    console.log(this.state.datatampil);
    this.setState({
      datatampil: datastorage,
    });
		}else{
			this.setState({
				datatampil: this.state.dataasli,
			});
		}
  };
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <SafeAreaView style={styles.header}>
          <Text style={styles.textheader}>Barang & SKU</Text>
					{/* <TextInput
                onChangeText={text =>
                  this.setState({search: text}, () => this.search())
                }
                placeholder="Cari File"
              /> */}
        </SafeAreaView>
        <SafeAreaView style={styles.isi}>
					
          <FlatList
            data={this.state.datatampil.data}
            renderItem={({item, index}) => (
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(
                      'Detail',
                      {ID: item.id,
												IDtoken : this.state.datatoken},
                      
                    )
                  }>
                  <View style={styles.kotakkatagori}>
                    <View style={styles.kotaknama}>
                      <Text style={styles.text}>{item.nama_barang}</Text>
											<View style={{flexDirection:'row'}}> 
											<Text style={styles.text}>{item.berat}</Text>
											<Text style={styles.text}> Gram</Text>
											</View>
                    </View>
                    <View style={styles.kotak}>
                      <Text style={styles.textkode}>
                        {item.Kategori_Barang.kode}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
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
		backgroundColor:'white'
  },
  header: {
    flex: 0.2,
		justifyContent: 'center',
		alignItems: 'center'
  },
	textheader:{
		color:'black',
		fontSize: 20,
		fontWeight: 'bold'
	},
	text:{
		color:'black'
	},
  isi: {
    flex: 0.8,
    flexDirection: 'row',
  },
  kotakkatagori: {
    flexDirection: 'row',
    justifyContent: 'space-between',
		paddingHorizontal:width*0.05,
		// marginHorizontal: width*0.05,
		marginBottom:height*0.01,
		borderBottomWidth:1,
		borderColor:'lightblue'
  },
  kotaknama: {
		width:width*0.8
		// backgroundColor:'lightblue'
	},textkode:{
		color:'blue',
		backgroundColor:'lightblue',
		paddingHorizontal:10,
		borderRadius:10,
	}
});
