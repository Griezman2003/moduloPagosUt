const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

//Esto me permite recibir solicitudes de otros origenes
app.use(cors());
app.use(bodyParser.json());


const Base_de_Datos = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'pagout' 
});

// Aquui solo valido la conexion de la base de datos
Base_de_Datos.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    } else {
        console.log('Conectado a la base de datos MySQL');
    }
});

// Ruta para registrar un usuario que me llega desde el fetch
app.post('/registro', (req, res) => {
    const { nombre, correo, contraseña } = req.body;
    console.log('Datos recibidos:', nombre, correo, contraseña);
    if (!nombre || !correo || !contraseña) {
        return res.status(400).send('Todos los campos son obligatorios');
    }
    const sql = 'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)';
    Base_de_Datos.query(sql, [nombre, correo, contraseña],(error) => {
        if (error) {
            console.error('Error al registrar usuario:', error);
            return res.status(500).send('Error al registrar el usuario');
        }
        res.status(200).send('Usuario registrado con éxito');
    });
});

// Ruta para iniciar sesión importante pedimos correo y contrasena
app.post('/login', (req, res) => {
    const { correo, contraseña } = req.body;

    if (!correo || !contraseña) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    const sql = 'SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?';
    
    Base_de_Datos.query(sql, [correo, contraseña], (error, results) => {
        if (error) {
            console.error('Error al verificar usuario:', error);
            return res.status(500).send('Error en el servidor de node');
        }
        if (results.length > 0) {
            return res.status(200).send('Inicio de sesión exitoso');
        } else {
            return res.status(401).send('Credenciales incorrectas');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
