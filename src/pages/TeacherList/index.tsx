import React from 'react';

import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';




function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
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
                
                <Select 
                name="week_day" 
                label="Dia da semana"
                options={[
                    { value: '0', label: 'Domingo'},
                    { value: '1', label: 'Segunda-feira'},
                    { value: '2', label: 'Terça-feira'},
                    { value: '3', label: 'Quarta-feira'},
                    { value: '4', label: 'Quinta-feira'},
                    { value: '5', label: 'Sexta-feira'},
                    { value: '6', label: 'Sabado'}

                ]}
                />

                <Input name="week_day" label="Dia da Semana"/>
                <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>  
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;