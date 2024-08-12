// criando promises

// const user = new Promise((resolve, reject) => {
//     const nome = "paulo";
  
//     if (nome === "paulo") {
//       setTimeout(() => {
//         resolve("USUÁRIO LOGADO COM SUCESSO");
//       }, 1200);
//       console.log("rgwegt")
//     } else {
//       reject("USUARIO NÃO LOGADO!");
//     }
//   });
  
//   user
//     .then((dados) => {
//       return dados
//       // [0].toLowerCase().split(" ").reverse().join(" ");
//     })
//     .then((n) => {
//       console.log(n);
//     })
//     .catch((error) => {
//       console.log({ error });
//     });
  

    const novo_usuario = new Promise((resolve, reject) => {
      let nome = "Nelson"

      if(nome == "Nelson"){
        setTimeout(() =>{
          resolve("Usuario Logado com sucesso")
        },1500)
      }else{
        reject("Erro ao logar")
      }

      console.log("ghnhhgv")
    })

    novo_usuario.then((dados) => {
      return dados
    }).then((n) => {
      console.log(n)
    }).catch((error) => {
      console.log({error})
    })

    novo_usuario