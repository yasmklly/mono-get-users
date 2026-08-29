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

  const user = data.find(user => user.email === inputValue);

  if (!user) {
    return paragraph.textContent = `Usuário não encontrado.`;
  }
  paragraph.textContent = `Usuário ${user.name} encontrado.`;
});
