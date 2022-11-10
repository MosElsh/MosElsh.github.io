import ReactDOM from 'react-dom/client';
import './index.css';
import { TaskList } from './components/task_component';

const root = ReactDOM.createRoot(document.getElementsByClassName('tasks_section')[0]);
root.render(<TaskList />);