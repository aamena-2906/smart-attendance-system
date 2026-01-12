let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

function render() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        let total = student.present + student.absent;
        let percent = total === 0 ? 0 : ((student.present / total) * 100).toFixed(1);

        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td><button onclick="markPresent(${index})">P</button></td>
                <td><button onclick="markAbsent(${index})">A</button></td>
                <td>${percent}%</td>
            </tr>
        `;
    });
}

function addStudent() {
    let name = document.getElementById("studentName").value;
    if (name === "") return;

    students.push({ name, present: 0, absent: 0 });
    document.getElementById("studentName").value = "";

    saveData();
    render();
}

function markPresent(index) {
    students[index].present++;
    saveData();
    render();
}

function markAbsent(index) {
    students[index].absent++;
    saveData();
    render();
}

render();
