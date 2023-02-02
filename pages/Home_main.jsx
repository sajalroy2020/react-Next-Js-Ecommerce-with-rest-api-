import Home from "../components/home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HomeMain() {
    return (
        <div>
            <Home />
            <ToastContainer />
        </div>
    )
}