import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false);
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.date}>{data.date}</Text>
                <View style={styles.content}>
                    <Text style={styles.label}>{data.label}</Text>
                    <Text
                        style={data.type === 1 ? styles.value : styles.espenses}
                    >
                        {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 10,
        marginBottom: 3,
        borderRadius: 5,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,

    },
    date: {
        color: '#dadada',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2ecc71'
    },
    espenses: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e74c3c'
    }
})