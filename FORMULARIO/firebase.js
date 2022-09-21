const firebaseConfig = {
    apiKey: "AIzaSyC9H0rA5H9VFWr9VcO-QZz2ZxJP9aYJN48",
    authDomain: "fir-webapp-78369.firebaseapp.com",
    databaseURL: "https://fir-webapp-78369-default-rtdb.firebaseio.com",
    projectId: "fir-webapp-78369",
    storageBucket: "fir-webapp-78369.appspot.com",
    messagingSenderId: "508139553615",
    appId: "1:508139553615:web:ad80a94e89d33ee1d4fb3a",
    measurementId: "G-B90DEQ28CX"
};

firebase.initializeApp(firebaseConfig)

db = firebase.database()

function EnviarDados{
    try{
        db.ref('enviar').set({
            valor: 1
        })
        console.log("sucesso ao enviar dados")
    }
    catch(error){
        alert("Problema ao enviar dados ao firebase")
    }

}