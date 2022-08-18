import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Home() {
  const deleteTodo = (idx) => {};

  const markTodo = (idx) => {};

  const moveUp = (idx) => {};

  const moveDown = (idx) => {};

  return (
    <div>
      {/* Entire App container (required for centering) */}
      <div style={{ maxWidth: "700px" }} className="mx-auto">
        {/* App header */}
        <p className="display-4 text-center fst-italic m-4">
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>
        {/* Input */}
        <input
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
        />
        {/* Todos */}
        {/* Example 1 */}
        <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
          <span className="me-auto">Todo</span>
        </div>
        {/* Example 2 */}
        <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
          <span className="me-auto">Todo with buttons</span>

          <button className="btn btn-success">
            <IconCheck />
          </button>
          <button className="btn btn-secondary">
            <IconArrowUp />
          </button>
          <button className="btn btn-secondary">
            <IconArrowDown />
          </button>
          <button className="btn btn-danger">
            <IconTrash />
          </button>
        </div>

        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All (2) </span>
          <span className="text-warning">Pending (2) </span>
          <span className="text-success">Completed (0)</span>
        </p>

        {/* Made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Chayanin Suatap 12345679
        </p>
      </div>
    </div>
  );
}
