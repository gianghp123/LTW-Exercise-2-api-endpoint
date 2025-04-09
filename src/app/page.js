"use client";
import { RefreshCcw } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/todo");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const refreshTodos = async () => {
    fetchTodos();
  };

  return (
    <div className="bg-white text-black min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-[32px] items-center">
        <div className="flex justify-center gap-4 items-center">
          <h1 className="text-4xl font-bold">
            A random read-only todos list with their status
          </h1>
          <button onClick={refreshTodos} className="cursor-pointer">
            <RefreshCcw size={30} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {loading && <p>Loading todos...</p>}
          {!loading &&
            todos.length > 0 &&
            todos.map((todo) => (
              <div
                key={todo.id}
                className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
              >
                <h2 className="text-lg font-semibold">{todo.todo}</h2>
                <input type="checkbox" checked={todo.completed} readOnly />
              </div>
            ))}
        </div>
        <h3>
          Bài tập thực hành môn Lập trình Web ngày 4/9 buổi thực hành 2 nhóm 1
        </h3>
      </main>
    </div>
  );
}
