import { Tooltip } from 'bootstrap';
import { useEffect, useState } from 'react';
import './App.css';

export default function App() {

    const [table, setTable] = useState([<sup key={1} className="mt-3">Clique no botão acima e veja os números</sup>]);

    const defaultMessage = (num: number, tx: string | undefined) => {
        switch (tx) {
            case "X":
                return `O número <b>${num}</b> é divisível por <b>3</b>, <br> <b>${num}</b> / <b>3</b> = <b>${num / 3}</b>`;
            case "Y":
                return `O número <b>${num}</b> é divisível por <b>5</b>, <br> <b>${num}</b> / <b>5</b> = <b>${num / 5}</b>`;
            case "Z":
                return `O número <b>${num}</b> é divisível por <b>3</b> e <b>5</b>, <br> <u><b>${num}</b> / <b>3</b> = <b>${num / 3}</b></u> e <u><b>${num}</b> / <b>5</b> = <b>${num / 5}</b></u>`;
            default:
                return `${num}`;
        }
    }

    const getNumbers = () => {
        const data = [];
        let num = 1;

        for (let i = 0; i < 20; i++) {
            const row = [];
            for (let e = 0; e < 10; e++) {
                let tx;

                if (num % 3 === 0) tx = "X";
                if (num % 5 === 0) tx = "Y";
                if (num % 3 === 0 && num % 5 === 0) tx = "Z";

                row.push(<td key={e} data-bs-toggle="tooltip" data-bs-html="true" data-bs-title={defaultMessage(num, tx)} id={"lbl" + tx}>{(tx != null) ? tx : num}</td>);
                num++;
            }
            data.push(<tr key={i}>{row}</tr>);
        }

        setTable([<table id="tabela" key={1} className="table table-sm table-light shadow"><tbody>{data}</tbody></table>]);

    }

    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
    });

    return (
        <div className="app">
            <div className="app-header">
                <h1 className="mb-4">Teste Simix</h1>
                <button onClick={getNumbers} className='btn btn-primary shadow'>mostrar</button><hr />
                {table}
                <a href='https://github.com/msofteng/simix-test' className='mt-3 mb-3' data-bs-toggle="tooltip" data-bs-title="GitHub (Repositório)"><img alt='github' src="https://img.icons8.com/ios-filled/30/000000/github.png"/></a>
            </div>
        </div>
    );
}