// Capturar elementos JS a partir do HTML

const input = document.querySelector('input');
const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', async (event) => {
    event.preventDefault()

    const inputValue = input.value;
    input.value = '';

    // o await torna o JS assíncrono (faz o JS esperar)
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();

  let found = false;

  for (let i = 0; i < data.length; i++) {
    if (inputValue === data[i].email) {
      paragraph.textContent = `Usuário ${data[i].name} encontrado.`;
      found = true;
    }
  }

  if (!found) paragraph.textContent = `Usuário não encontrado.`;
});
