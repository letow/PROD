import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useState } from "react";
import { Modal } from "widgets/Modal";

const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="Loading...">
        <Navbar />
        <button onClick={() => setIsOpen(true)}>vruh</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          earum error vitae repellat inventore quis deserunt accusamus! In,
          cupiditate hic a, nesciunt laborum dolore labore consequuntur
          consequatur earum explicabo ipsa placeat enim. Perferendis hic dolore
          placeat rem sunt explicabo distinctio neque nostrum reprehenderit,
          harum quae cupiditate sit tenetur tempora delectus cum vitae nam
          dolorum eum voluptatum facere iusto! Pariatur ullam, dolorum nemo amet
          consectetur blanditiis debitis illum explicabo nisi, tempore modi
          maxime adipisci suscipit, omnis maiores inventore distinctio molestiae
          labore beatae nulla reprehenderit. Ex voluptas cumque voluptate quo
          illo dignissimos molestiae, quia, esse harum ipsum doloremque enim
          quos adipisci laudantium?
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
