import { Component } from "react";
import { Text, Button, StyleSheet, View, TextInput } from 'react-native';

export default class Counter extends Component {
    state = {
        count: 1,
        step: 1,
        valor1: 0,
        valor2: 0,
        result: 0,
    }
    incrementar() {
        this.setState({
            count: this.state.count + this.state.step
        })
    }
    adicionarValores(){
        this.setState({
            result: this.state.valor1 + this.state.valor2
        })
    }
    dobrar() {
        this.setState({
            count: this.state.count + this.state.count
        })
    }
    quadratico() {
        this.setState({
            count: this.state.count * this.state.count
        })
    }
    limpar() {
        this.setState({
            count: this.state.count = 0
        })
    }
    reduzir() {
        if (this.state.count > this.props.min || this.props.min == undefined) {
            this.setState({
                count: this.state.count - 1
            })
        
        } else {

        }
    }
    alteraStep(text){
        this.setState({ step: parseInt(text)})
    }
    val1(text){
        this.setState({ valor1: parseInt(text)})
    }
    val2(text){
        this.setState({ valor2: parseInt(text)})
    }
    render() {
        return (
            <View style={styles.contador}>

                <Text>Valor 1: </Text>
                <TextInput
                    value={this.state.valor1.toString()}
                    onChange={(e) => {this.val1(e.nativeEvent.text)}}
                />
                <Text>Valor 2: </Text>
                <TextInput  
                    value={this.state.valor2.toString()}
                    onChange={(e) => {this.val2(e.nativeEvent.text)}}
                />

                <Text>Step: </Text>
                <TextInput
                    value={this.state.step.toString()}
                    onChange={(e) => {this.alteraStep(e.nativeEvent.text)}}
                />

                
                <Button onPress={() => this.adicionarValores()} title="=" />
                
                <Text>Resultado: {this.state.result} |</Text>
                <Text>Contador: {this.state.count} </Text>
                <Button onPress={() => this.incrementar()} title="+" />
                <Button onPress={() => this.reduzir()} title="-" />
                <Button onPress={() => this.dobrar()} title="2x" />
                <Button onPress={() => this.quadratico()} title="x²" />
                <Button onPress={() => this.limpar()} title="0" />
            </View>
        )
            
        }
}
const styles = StyleSheet.create({
    contador : {
        flexDirection: 'row',
        alignItems: 'center',
    }
}
    
)