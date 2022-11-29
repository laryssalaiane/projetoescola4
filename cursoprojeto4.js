var dataRef = new Firebase('https://escola-50aae-default-rtdb.firebaseio.com');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'cursos') {

            var _itemsKey = Object.entries(valor);
    
           
    
    
            for (const [key2, value2] of _itemsKey) { count++;
    
                $("#tbCursos tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.email}</td> +
    
                        <td>${value2.ch}</td> +
    
                        <td>${value2.professor}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }
});
