import { Link, Outlet } from "@modern-js/runtime/router";
import "./index.css";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="sign-in">Sign In</Link>
          </li>
        </ul>
      </nav>
      <main className="container-box">
        <Outlet />
      </main>
    </div>
  );
}
