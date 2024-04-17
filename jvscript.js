let id = 0;

document.addEventListener("DOMContentLoaded", function() {
    const regform = document.getElementById("regform");

    regform.addEventListener("submit", function(event) {
        event.preventDefault();

        append_values(event);
    });
    
    //Getting values
    function append_values(event) {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;

        const row = document.getElementById("tr").value;

        row.innerHTML = ` 
        <td style="px-6 py-4 whitespace-nowrap">${++id}</td>
        <td style="px-6 py-4 whitespace-nowrap">${username}</td>
        <td style="px-6 py-4 whitespace-nowrap">${email}</td>
        <td style="border-right: 2px solid #4b5563; text-align: center;">${role}</td>
        <td style="text-align: center;">
            <button class="edit" style="margin-right: 10px;">
                <i class="fas fa-edit" style="color: blue;"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash" style="color: red;"></i>
            </button>
        </td>
    `;

    //Append Row
    const tbody = document.querySelector(".table-auto tbody");
    tbody.appendChild(row);

    row.querySelector(".edit").addEventListener("click", editRow);
    row.querySelector(".delete").addEventListener("click", deleteRow);

    row.style.border = '2px solid #4b5563';
    row.style.borderRight = '2px solid #4b5563';

    }

    //Edit row
    function editRow(event){
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        const username = row.children[1];
        const email = row.children[2];
        const role = row.children[3];

        username.innerHTML = <input type="text" id="editUsername" value="${username.textContent}"></input>;
        email.innerHTML = <input type="text" id="editEmail" value="${email.textContent}"></input>;
        role.innerHTML = <input type="text" id="editRole" value="${role.textContent}"></input>;

        button.innerHTML = '<i class="fas fa-save" style="color: green;"></i>';
        button.removeEventListener('click', editRow);
        button.addEventListener('click', saveRow);
    }

    //Save Row
    function saveRow(event) {
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        const username = row.children[1].querySelector('input');
        const email = row.children[2].querySelector('input');
        const role = row.children[3].querySelector('input');

        username.parentNode.textContent = username.value;
        email.parentNode.textContent = email.value;
        role.parentNode.textContent = role.value;

        button.innerHTML = '<i class="fas fa-edit" style="color: blue;"></i>';
        button.removeEventListener('click', saveRow);
        button.addEventListener('click', editRow);
    }

    // Delete row 
    function deleteRow(event) {
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
})

