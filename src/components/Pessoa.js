
import fdr from './img/fdr.jpg'


function Pessoa(nome, idade, profissao, fdr) {
    return <div>
        <img src={fdr} alt='fdr' title='fdr' style={{height: 100, width: 100}}/>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>

    </div>
}
export default Pessoa