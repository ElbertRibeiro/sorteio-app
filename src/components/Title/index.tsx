import React from 'react';
import { View, Text } from 'react-native';
import { style } from './style';

export function Title() {

    return (
        <View style={style.boxTitle}>
            <Text style={style.title}>Sorteio NorteTec</Text>
            <Text style={style.subtitle}>Hora de ver quem é o vencedor</Text>
        </View>
    );
}