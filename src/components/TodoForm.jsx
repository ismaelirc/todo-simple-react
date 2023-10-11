
import { useState } from "react";


const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value, category);
        setValue('');
        setCategory('');

    }

  return (
    <div className="todo-form">
        <h2>Criar tarefa</h2>
        <form onSubmit={event => handleSubmit(event)}>
            <input type="text" placeholder="Digite o titulo" value={value} onChange={ (evento) => setValue(evento.target.value)}/>
            <select value={category} onChange={ (evento) => setCategory(evento.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm