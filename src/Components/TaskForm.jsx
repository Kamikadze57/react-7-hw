import React, { useState } from "react";

// Компонент форми для додавання нового завдання
function TaskForm({ onAddTask }) {
  // Локальний стан для зберігання тексту, який вводить користувач
  const [taskText, setTaskText] = useState("");

  // Обробник подання форми
  const handleSubmit = (e) => {
    // Зупиняємо стандартну поведінку браузера (перезавантаження сторінки)
    e.preventDefault();

    // Перевіряємо, чи є текст і чи він не складається лише з пробілів
    if (taskText.trim() === "") {
      return;
    }

    // Викликаємо функцію, передану з App.js, для додавання завдання
    // Передаємо очищений текст
    onAddTask(taskText.trim());

    // Очищуємо поле введення після додавання
    setTaskText("");
  };

  return (
    <form className="task__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введіть нове завдання..."
        className="task__input"
        // Значення поля керується станом taskText
        value={taskText}
        // Оновлюємо стан при кожній зміні в полі введення
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit" className="task-add__btn">
        Додати
      </button>
    </form>
  );
}

export default TaskForm;
