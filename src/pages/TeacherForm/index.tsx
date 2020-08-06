import React from 'react';

import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/image/icons/warning.svg';

import './styles.css';



function TeacherForm(){
    return (
        <div id="page-teacher-form" className="container">
        <PageHeader  title="Que incrível que voce quer dar aulas."
        descripition="O primeiro passo é preencher esse formulário de inscrição."
        />

        <main>
            <fieldset>
                <legend>Seus dados</legend>
                <Input name="name" label="Nome Completo"/>
                <Input name="avatar" label="Avatar"/>
                <Input name="whatsapp" label="Whatsapp"/>
                <Textarea name="bio" label="Biografia"/>
            </fieldset>

            <fieldset>
                <legend>Sobre a aula</legend>      
                <Select 
                name="subject" 
                label="Matéria"
                options={[
                    { value: 'Artes', label: 'Artes'},
                    { value: 'Ciências', label: 'Ciências'},
                    { value: 'Biologia', label: 'Biologia'},
                    { value: 'Quimica', label: 'Quimica'},
                    { value: 'Fisica', label: 'Fisica'},
                    { value: 'Historia', label: 'Artes'},
                    { value: 'Matematica', label: 'Matematica'},
                    { value: 'Geografia', label: 'Geografia'},
                    { value: 'Educação fisica', label: 'Educação fisica'},
                    { value: 'Português', label: 'Português'},

                ]}
                />

                <Input name="cost" label="Custo da sua hora por aula."/>
            </fieldset>



            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso Importante"/>
                    Importante! <br/>
                    Preencha todos os dados
                </p>
                <button type="button">Salvar Cadastro</button>
            </footer>
        </main>

    </div>
    )
}

export default TeacherForm;