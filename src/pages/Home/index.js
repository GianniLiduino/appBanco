// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
    {
        id: 1,
        label: 'Conta de Luz',
        value: '290,00',
        date: '17/07/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Bar do Lúcio',
        value: '78,40',
        date: '13/07/2022',
        type: 0 // despesas
    },
    {
        id: 3,
        label: 'PIX de Elisa Adriana',
        value: '3.900,00',
        date: '10/07/2022',
        type: 1 // receitas / entradas
    },
    {
        id: 4,
        label: 'PIX de Bianca',
        value: '3.200,00',
        date: '09/07/2022',
        type: 1 // receitas / entradas
    },
    {
        id: 5,
        label: 'PIX para Bianca',
        value: '3.200,00',
        date: '09/07/2022',
        type: 0 // receitas / entradas
    },
    {
        id: 6,
        label: 'PIX de Bianca',
        value: '3.200,00',
        date: '09/07/2022',
        type: 1 // receitas / entradas
    },
    {
        id: 7,
        label: 'PIX de Bianca',
        value: '3.200,00',
        date: '09/07/2022',
        type: 1 // receitas / entradas
    },
    {
        id: 8,
        label: 'PIX de Bianca',
        value: '3.200,00',
        date: '09/07/2022',
        type: 1 // receitas / entradas
    },
    {
        id: 9,
        label: 'PIX de Bianca',
        value: '200,00',
        date: '09/07/2022',
        type: 1 // receitas / entradas
    },
    {
        id: 10,
        label: 'PIX de Bianca',
        value: '220,00',
        date: '10/07/2022',
        type: 1 // receitas / entradas
    },
    {
        id: 11,
        label: 'PIX de Bianca',
        value: '220,00',
        date: '10/07/2022',
        type: 1 // receitas / entradas
    },
    {
        id: 12,
        label: 'PIX de Bianca',
        value: '220,00',
        date: '10/07/2022',
        type: 1 // receitas / entradas
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Gianni Liduino Ciuldin" />

            <Balance saldo="15.990,00" gastos="2.475,90" />
            <Text style={styles.title}>Últimas Movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={ ({item}) => <Movements data={item} /> }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        marginHorizontal: 20,
    },
    list: {
        marginHorizontal: 14,

    }
});
