document
  .getElementById('formContato')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    //------------------------------------------------------------------------------ 
    function adicionarItem() {

      let input = document.getElementById("nome");
      let texto = input.value.trim();
      if (texto != "") {
        let p = document.createElement("p");
        p.textContent = texto;

        p.addEventListener("click", function (event) {

          event.target.remove();
        })

      }
    }





    //------------------------------------------------------------------------------ 



    const contato = {
      nome: document.getElementById('nome').value,
      fone: document.getElementById('fone').value,
      email: document.getElementById('email').value,
    };

    fetch('URL - api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contato),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Contato cadastrado com sucesso!');
        window.location.href = 'contatos.html';
      })
      .catch((error) => console.error('Erro ao cadastrar contato:', error));
  });
