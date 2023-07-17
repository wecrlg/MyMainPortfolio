import Table from "react-bootstrap/Table";
import { useAppContext } from "../contexts/AppContext";

const projects = [
  {
    name: "Budgetify Version 1.0",
    link: "https://budgetify1.netlify.app/",
    desc: "A todo application built with HTML, CSS & vanilla JS. Add, delete, calculate totals, IIFE, and other best practices.",
  },
  {
    name: "The Olive Properties",
    link: "http://theoliveproperties.com/",
    desc: "A real estate application built according to clients specification. Built with TypeScript, React, Node Js, MongoDb, CSS, Bootstrap, etc. Login Authentication, Admin Dashboard for performing CRUD operations",
  },
  {
    name: "Tearcher on point",
    link: "http://teacheronpoint.com/",
    desc: "A quiz application. Built with TypeScript, React, Node Js, MongoDb, CSS, Bootstrap, etc. Login Authentication, Admin Dashboard for performing CRUD operations",
  },
  {
    name: "Shopixia",
    link: "https://shopixia.netlify.app",
    desc: "An e-commerce cart system. Built with TypeScript, React, Bootstrap, Material UI, etc. Consumed https://fakestoreapi.com",
  },
  {
    name: "FriendyMe",
    link: "https://friendyme.netlify.app",
    desc: "A front end social media system. Built with TypeScript, React, Bootstrap, Material UI, etc.",
  },
  {
    name: "Williams IDE",
    link: "https://williams-ide.netlify.app",
    desc: "VsCode Clone File/Folder Structure. Built with TypeScript, React, Bootstrap, Material UI, etc.",
  },
  {
    name: "96 Champions FC",
    link: "https://96championsfc.netlify.app",
    desc: "Fotball club front end design with scores, results, fixtures, etc.  Built with Angular, Bootstrap, Material UI, etc.",
  },
];

export default function ProjectsTable() {
  const { isDarkMode } = useAppContext();
  return (
    <Table striped bordered variant={isDarkMode ? "dark" : "light"} responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Project Title</th>
          <th>Link</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(({ link, name, desc }, idx) => (
          <tr>
            <td className="table_desc">{idx + 1}</td>
            <td className="table_desc">{name}</td>
            <td className="table_desc">
              <a href={link} target="_blank">
                {link}
              </a>
            </td>
            <td className="table_desc">{desc}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
