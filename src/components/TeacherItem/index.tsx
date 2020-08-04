import React from 'react';

import whatsappIcon from '../../assets/image/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/63884086?s=460&u=1c446ea8e01f4ff410f3fe8198d22eb3520ab6a8&v=4" alt="Bruno de Abreu"/>
        <div>
            <strong>Bruno A.</strong>
            <span>Matematica</span>
        </div>
        </header>

        <p>
            Aulas de Matemática bem estruturadas e expositiva.
            <br /> <br />
            Estude para o ENEM e Vestibulares no Melhor Cursinho com o Melhor Preço.
             Pague em até 12x. ENEM com a melhor preparação. Parcelas por menos de R$
             150 reais.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 150,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;