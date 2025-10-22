// Aufgabenliste
const tasks = [
  "Spawn gebaut",
  "Farm fertiggestellt",
  "Shop eingerichtet"
];

// Container für Aufgaben erzeugen
const container = document.createElement('div');

// Jede Aufgabe durchgehen und Checkbox + Label erzeugen
tasks.forEach((task, i) => {
  const div = document.createElement('div');
  div.className = 'task';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'task' + i;

  const label = document.createElement('label');
  label.htmlFor = 'task' + i;
  label.textContent = task;

  // Checkbox-Status aus localStorage laden
  checkbox.checked = localStorage.getItem('task' + i) === 'true';
  checkbox.addEventListener('change', () => {
    localStorage.setItem('task' + i, checkbox.checked);
  });

  div.appendChild(checkbox);
  div.appendChild(label);
  container.appendChild(div);
});

document.body.appendChild(container);
