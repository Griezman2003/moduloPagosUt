import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
    const { confirmPayment } = useStripe();
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState('');  // Monto en centavos
    const [name, setName] = useState('');
    const [cardDetails, setCardDetails] = useState('');

    const handlePayment = async () => {
        if (!amount || !name) {
            Alert.alert('Por favor, ingrese el monto y el nombre.');
            return;
        }

        setLoading(true);

        try {
            // Llamamos a nuestro backend para crear un PaymentIntent
            const response = await fetch('http://localhost:3000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: parseInt(amount),  // Asegúrate de pasar el monto en centavos
                }),
            });

            const { clientSecret } = await response.json();

            // Confirmamos el pago usando los detalles de la tarjeta
            const { error, paymentIntent } = await confirmPayment(clientSecret, {
                type: 'Card',
                billingDetails: {
                    name,
                },
            });

            if (error) {
                Alert.alert(`Error: ${error.message}`);
            } else if (paymentIntent) {
                Alert.alert('¡Pago realizado con éxito!');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Hubo un problema al procesar el pago');
        }

        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pagar con tarjeta</Text>

            <Text style={styles.label}>Monto (en centavos):</Text>
            <TextInput
                style={styles.input}
                placeholder="Monto en centavos"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Nombre del titular de la tarjeta:</Text>
            <TextInput
                style={styles.input}
                placeholder="Tu nombre"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Detalles de la tarjeta:</Text>
            {/* Aquí integrarías el componente de tarjeta de Stripe */}
            <TextInput
                style={styles.input}
                placeholder="Detalles de la tarjeta (futuro campo)"
                value={cardDetails}
                onChangeText={setCardDetails}
            />

            <Button
                title={loading ? 'Procesando...' : 'Pagar ahora'}
                onPress={handlePayment}
                disabled={loading}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 5,
    },
});

export default PaymentScreen;
