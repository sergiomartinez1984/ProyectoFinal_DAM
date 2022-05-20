
    // crea la variable que hace referencia al contenedor de listaUsuarios.html
    const tableRows = document.getElementById('tableContent');
   
    const firebaseConfig = {
        apiKey: "AIzaSyD8uqrpXxrbMDh-BG2JdfoDDgmcDb7s4JI",
        authDomain: "articfox-3e2f9.firebaseapp.com",
        databaseURL: "https://articfox-3e2f9-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "articfox-3e2f9",
        storageBucket: "articfox-3e2f9.appspot.com",
        messagingSenderId: "457074701772",
        appId: "1:457074701772:web:5ddb60398a8546d039d969"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var userDataRef = firebase.database().ref("users").orderByKey();

    //Para generar la lista de usuarios llamamos a la base de datos y rellenamos un div por cada elemento
    //que haya en la base de datos

    window.addEventListener('DOMContentLoaded', async (e) => {
        userDataRef.once("value").then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                tableRows.innerHTML += 
                `
                    <tr>
                        <td style="width: 60%">${childSnapshot.val().username}</td>
                        <td style="width: 20%">${childSnapshot.val().gemas}</td>
                        <td style="width: 20%">${childSnapshot.val().puntos}</td>  
                    </tr>
                `
            });
        });
    })

