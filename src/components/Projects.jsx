function Projects() {
  const projectList = [
    { id: 1, title: 'E-Commerce Inventory Management System', desc: 'A C++ OOP-based console application designed for managing products, carts, and orders in a simulated e-commerce environment.'},
    { id: 2, title: 'Used Car Price Prediction and Insights System', desc: 'A machine learning-based web application that predicts the price of used cars based on various features like brand, model, year, and fuel type.'},
    { id: 3, title: 'Personal Portfolio Website', desc: 'A responsive website showcasing my projects and skills built with HTML, CSS, and JavaScript.'},
  ];

  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projectList.map((proj) => (
          <li key={proj.id}>
            <strong>{proj.title}</strong> — {proj.desc} — — {proj.demo}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;