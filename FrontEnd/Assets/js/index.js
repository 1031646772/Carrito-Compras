//Traer elementos
const btn_login=document.getElementById("ingresarr");
const container=document.getElementById("Container_login");
const login=document.getElementById("loginForm");



formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const usu=document.getElementById('user').value;
  const con=document.getElementById('contra').value;
    try {
      const response = await fetch('http://127.0.0.1:3000/carrito/Tecno/Ingresar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: usu, contra: con }),
      }).then((response)=>response.json()).then((data)=>{
        message = data.message;
              if (message === 'Usuario no encontrado') {
                  document.getElementById('MensajeLogin').innerHTML=message
              } else {
                  window.location.href = 'Views/productos.html';
              }
              console.log(`GET ${usu} and ${con}`);
      })
    } catch (error) {
      console.error('Error en la solicitud fetch:', error);
    }
  });
