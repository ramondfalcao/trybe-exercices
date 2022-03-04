import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form>
                <fieldset className='personal-data'>
                    <label htmlFor='name'>
                        Nome:
                        <input
                        type='text'
                        name='name'
                        maxLength={40}
                        required>  
                        </input>
                    </label>
                    <label htmlFor='email'>
                        Email:
                        <input
                        type='text'
                        name='email'
                        maxLength={50} 
                        required>
                        </input>
                    </label>
                    <label htmlFor='cpf'>
                        Cpf:
                        <input
                        type='text'
                        name='cpf'
                        maxLength={11} 
                        required>
                        </input>
                    </label>
                    <label htmlFor='adress'>
                        Endereço:
                        <input
                        type='text'
                        name='adress'
                        maxLength={200} 
                        required>
                        </input>
                    </label>
                    <label htmlFor='city'>
                        Cidade:
                        <input
                        type='text'
                        name='city'
                        maxLength={28} 
                        required>
                        </input>
                    </label>
                    <label htmlFor='state'>
                        Estado:
                        <input
                        name='state'
                        required>
                        </input>
                    </label>
                    <label htmlFor='radio'>
                        Casa
                        <input 
                        type='radio'
                        name='radio' 
                        required>
                        </input>
                        <input 
                        type='radio'
                        name='radio' 
                        required>
                        </input>
                    </label>
                </fieldset>
                <fieldset className='last-job'>
                    <label>
                        Resumo do currículo
                        <textarea
                        maxLength={1000}
                        required
                        >
                        </textarea>
                    </label>
                    <label>
                        Cargo
                        <textarea
                        maxLength={40}
                        required
                        >
                        </textarea>
                    </label>
                    <label>
                        Descrição do Cargo
                        <textarea
                        maxLength={500}
                        required
                        >
                        </textarea>
                    </label>
                </fieldset>
            </form>
        );
    }
}

export default Form;