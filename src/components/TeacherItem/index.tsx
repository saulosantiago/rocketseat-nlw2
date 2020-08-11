import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/24280400?s=460&u=0707434872f8e27b9cfc86095d1d07fae47c7351&v=4" alt="Saulo Santiago"/>
                <div>
                    <strong>Saulo Santiago</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor lectus vel risus molestie sagittis. 
            <br/><br/>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent cursus pulvinar semper. Maecenas et ante placerat ipsum molestie cursus euismod auctor massa. Ut vel turpis mollis, placerat nunc sit amet, cursus elit.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80.00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;