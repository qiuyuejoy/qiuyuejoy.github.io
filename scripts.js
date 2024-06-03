// scripts.js
const projects = [
    { name: "项目1", description: "这是项目1的描述..." },
    { name: "项目2", description: "这是项目2的描述..." },
    { name: "项目3", description: "这是项目3的描述..." },
  ];
  
  const projectList = document.getElementById("projectList");
  
  projects.forEach(project => {
    const li = document.createElement("li");
    li.textContent = `${project.name}: ${project.description}`;
    projectList.appendChild(li);
  });