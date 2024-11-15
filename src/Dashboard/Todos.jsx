import { useState, useEffect } from "react";
import { app } from "../firebase/FireBaseConfiq";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/FireBaseFunctions";
import '../pages/pages.css'
const Todos = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const todosCollection = collection(db, "todos");


  useEffect(() => {
    const fetchTodos = async () => {
      const snapshot = await getDocs(todosCollection);
      const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodoList(tasks);
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (isEditing) {

      const todoRef = doc(db, "todos", editId);
      await updateDoc(todoRef, { task: inputValue });
      setTodoList(prev => prev.map(todo => (todo.id === editId ? { ...todo, task: inputValue } : todo)));
      setIsEditing(false);
      setEditId(null);
    } else {

      const docRef = await addDoc(todosCollection, { task: inputValue });
      setTodoList(prev => [...prev, { id: docRef.id, task: inputValue }]);
    }
    setInputValue("");
  };

  const edit = (id, task) => {
    setInputValue(task);
    setIsEditing(true);
    setEditId(id);
  };

  const deleteTodo = async (id) => {
    const todoRef = doc(db, "todos", id);
    await deleteDoc(todoRef);
    setTodoList(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <>
      <div className=" h-screen flex justify-center">
        <div className="class flex gap-7 flex-col  mt-10   w-[40vw]">
          <h3 className="mx-10 text-3xl font-semibold">ToDo.List </h3>
          <span>
            <input
              type="text"
              placeholder="Enter Tasks ..."

              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="mx-10 op px-6 "

            />
            <button onClick={addTodo} className="btns">{isEditing ? "Save" : "Add"}</button>
          </span>
          <ul className="mx-10 gap-6">
            {todoList.map((todo) => (
              <div key={todo.id}>
                <li className="li mt-5 flex justify-between items-center">
                  <div>{todo.task}</div>
                  <div>
                    <button onClick={() => edit(todo.id, todo.task)} className="btns">Edit</button>
                    <button onClick={() => deleteTodo(todo.id)} className="btns mx-2">Delete</button>
                  </div>
                </li>
                <hr className="my-3 border-gray-300" />
              </div>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
};

export default Todos;
