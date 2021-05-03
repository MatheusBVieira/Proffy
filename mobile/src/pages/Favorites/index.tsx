import React from 'react';
import {View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';

function Favorites() {
    return <View style={styles.container}>
        <View >
            <PageHeader title="Meus proffys favoritos"/>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem /> 
                <TeacherItem /> 
                <TeacherItem /> 
                <TeacherItem /> 
            </ScrollView>
        </ View>
    </View>
}

export default Favorites;