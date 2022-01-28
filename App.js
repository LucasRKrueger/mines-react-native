import { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/businessLayer';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = this.createState()
  }

   minesAmount = () =>{
     const cols = params.getColumnsAmount()
     const rows = params.getRowsAmount()
     return Math.ceil(cols * rows * params.difficultLevel)
   }

   createState = () => {
     const cols = params.getColumnsAmount()
     const rows = params.getRowsAmount()
     return {
       board: createMinedBoard(rows, cols, this.minesAmount())
     }
   }

  render (){
    return (
      <SafeAreaView style={styles.container}>
        <Text>Starting Mines...</Text>
        <Text style={styles.instructions}> Grid size:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
