import { useEffect, useMemo, useState } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import Pagination from "../components/common/Pagination";

const ITEMS_PER_PAGE = 10;

const generateTasks = () =>
  Array.from({ length: 45 }, (_, i) => ({
    id: i + 1,
    title: `Task ${i + 1}`,
    assignedTo: `Employee ${((i % 10) + 1)}`,
    priority: ["Low", "Medium", "High"][i % 3],
    status: ["Pending", "In Progress", "Completed"][i % 3],
    dueDate: `2024-0${(i % 9) + 1}-15`,
  }));

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setTasks(generateTasks());
      setLoading(false);
    }, 500);
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task =>
      `${task.title} ${task.assignedTo} ${task.priority} ${task.status}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [tasks, search]);

  const totalPages = Math.ceil(
    filteredTasks.length / ITEMS_PER_PAGE
  );

  const paginatedTasks = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTasks.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredTasks, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <PageWrapper title="Tasks Management">
      <div className="filters">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <>
       <div className="table-wrapper">
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Task</th>
        <th>Assigned To</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Due Date</th>
      </tr>
    </thead>
    <tbody>
      {paginatedTasks.length ? (
        paginatedTasks.map(task => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.assignedTo}</td>
            <td>{task.priority}</td>
            <td>
              <span
                className={`badge ${
                  task.status === "Completed"
                    ? "completed"
                    : task.status === "In Progress"
                    ? "progress"
                    : "pending"
                }`}
              >
                {task.status}
              </span>
            </td>
            <td>{task.dueDate}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6">No tasks found</td>
        </tr>
      )}
    </tbody>
  </table>
</div>


          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </PageWrapper>
  );
};

export default Tasks;
