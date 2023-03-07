import { Component } from "react";
import { Text, Button, StyleSheet, View } from 'react-native';

export default class Counter extends Component {
    state = {
        count: 0,
    }
    incrementar() {
        this.setState({
            count: this.state.count + 1
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
    render() {
        return (
            <View style={styles.contador}>
                <Text>Contador: {this.state.count}</Text>
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