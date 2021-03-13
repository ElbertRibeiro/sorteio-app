import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import style from './style';


export default function Screen () {

    

    const [ numberSort, setNumberSort ] = useState(0);

    const gerateNumber = () => {
        const newNumber = Math.floor(Math.random() * (101 - 1 ) + 1);
        setNumberSort(newNumber);
    }

    return (
        <View style={style.screen}>
            <Text style={style.title}>Toque no botão e veja quem é o vencedor</Text>

            <View style={style.boxNumber}>
                <Text style={style.number}>
                    { numberSort }
                </Text>
            </View>

            <View style={style.boxButton}>
                <Button title="Sortear" onPress={gerateNumber} color="#1F4F66"/>
            </View>
        </View>
    );
}