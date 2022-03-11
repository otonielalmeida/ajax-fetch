fetch('pessoas.json')
    .then(answer => answer.json())
    .then(json => loadElements(json));

function loadElements(json) {
    const table = document.createElement('table');
    for (let person of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');

        td.innerHTML = person.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const result = document.querySelector('.result');
    result.appendChild(table);
}