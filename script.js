document
.getElementById('formulario').addEventListener('submit',function(event){
    event.preventDefault();
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
   
        const data = { nome, email, senha }
      //  fetch('http://localhost:3000/cadastro', {
    //        method: 'POST',
     //       headers: {
    //            'Content-Type': 'application/json'
    //        },
    //        body: JSON.stringify(data)
   //     })
  //  }) 
//json-server --watch api.json
axios.post('http://localhost:3000/cadastro',data)
})