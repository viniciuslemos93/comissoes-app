const tarefas = window.document.getElementById('container-funcionarios')

function inserirNovoFuncionario() {
    const novoFuncionario = window.document.getElementById('novo-funcionario')
    const addFuncionario = novoFuncionario.value
    const funcionarios = window.document.getElementById('container-funcionarios')
    

    if (addFuncionario == "") {
        alert("Campo vazio, por favor insira um Funcionário.")

    } else {
        const cadaFuncionario = `
            <div class="cadaFuncionario">
            <p class="funcionario">
            ${addFuncionario}
            </p>            
            
            </div>
            `
funcionarios.insertAdjacentHTML('beforeend', cadaFuncionario);        
        novoFuncionario.value = ''
        novoFuncionario.focus()
    }
}