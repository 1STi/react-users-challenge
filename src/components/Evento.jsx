export default function Evento({ num1, num2 }) {
  function meuEvento() {
    const soma = num1 + num2;
    console.log(`Opa fui ativado ${soma}`);
  }

  return (
    <>
      <p>Clique aqui para disparar o evento</p>
      <button onClick={meuEvento}>Ativar!</button>
    </>
  );
}
