import React from 'react';
import { View } from 'react-native';

import { Title } from '../components/Title';
import { Screen } from '../components/Screen';

export default function HomePage () {
    return (
        <View>
            <Title />
            <Screen />
        </View>
    );
}