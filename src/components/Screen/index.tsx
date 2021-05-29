import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import style from './style';

export default function Screen() {

    const [numberSort, setNumberSort] = useState(0);
    const [varMin, setVarMin] = useState("0");
    const [varMax, setVarMax] = useState("10");

    const [flagInputFocus, setFlagInputFocus] = useState("");

    function validarCampos(min: number, max: number){
        if (isNaN(min) || isNaN(max)) {
            alert('Digite os valores');
            return false;
        } else if (min > max) {
            alert('O valor mínimo deve ser menor que o valor máximo');
            return false;
        }
        return true;
    }

    function gerateNumber() {
        const min = parseInt(varMin);
        const max = parseInt(varMax);

        if (!validarCampos(min, max)) {
            return;
        }

        const newNumber = Math.floor(Math.random() * (max + 1 - min) + min);
        setNumberSort(newNumber);
    }

    return (
        <View style={style.screen}>
            <Text style={style.title}>Escolha os valores Minimo e Máximo para realizar o sorteio</Text>

            <View style={style.lineInput}>
                <Text>Valor Minimo: </Text>
                <TextInput
                    value={varMin.toString()}
                    onChangeText={value => setVarMin(value)}
                    textAlign="center"
                    keyboardType="number-pad"
                    maxLength={5}
                    autoFocus={true}
                    style={flagInputFocus === "txt_min" ? style.inputFocus : style.inputNormal}
                    onFocus={() => setFlagInputFocus("txt_min")}
                    onBlur={() => setFlagInputFocus("")} />
            </View>

            <View style={style.lineInput}>
                <Text>Valor Máximo: </Text>
                <TextInput
                value={varMax.toString()}
                onChangeText={value => setVarMax(value)}
                    textAlign="center"
                    keyboardType="number-pad"
                    maxLength={5}
                    style={flagInputFocus === "txt_max" ? style.inputFocus : style.inputNormal}
                    onFocus={() => setFlagInputFocus("txt_max")}
                    onBlur={() => setFlagInputFocus("")} />
            </View>

            <View style={style.boxButton}>
                <Button title="Sortear" onPress={gerateNumber} color="#1F4F66" />
            </View>

            <View style={style.boxNumber}>
                <Text style={style.number}>
                    {numberSort}
                </Text>
            </View>
        </View>
    );
}