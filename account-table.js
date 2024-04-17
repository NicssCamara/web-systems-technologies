let ID = 0;
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("regisForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        appendValues(event);
    });

    function appendValues(event) {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;

        const row = document.createElement('tr');

        row.innerHTML = `
        <td style="text-align: left; padding-left: 22px;">${++ID}</td>
        <td style="text-align: left; padding-left: 22px;">${username}</td>
        <td style="text-align: left; padding-left: 22px;">${email}</td>
        <td style="text-align: left; padding-left: 22px;">${role}</td>
        <td style="text-align: left; padding-left: 22px;">
            <button class="edit" style="margin-right: 10px;">
                <i class="fas fa-edit" style="color: blue;"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash" style="color: red;"></i>
            </button>
        </td>`;

    const tbody = document.querySelector('.table-auto tbody');
    tbody.appendChild(row);

    // Reset the form fields to their default placeholders
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("role").value = "";

    row.querySelector('.edit').addEventListener('click', editRow);
    row.querySelector('.delete').addEventListener('click', deleteRow);

    //Styles
    row.style.borderTop = '1px solid #cccccc';
    const cells = row.querySelectorAll('td');
    cells.forEach(cell => {
        cell.style.paddingTop = '25px';
        cell.style.paddingBottom = '25px';
    });
    }

    function editRow(event) {
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        const username = row.children[1];
        const email = row.children[2];
        const role = row.children[3];

        username.innerHTML = '<input type="text" id="editUsername" value="' + username.textContent + '"></input>';
        email.innerHTML = '<input type="text" id="editEmail" value="' + email.textContent + '"></input>';
        role.innerHTML = '<input type="text" id="editRole" value="' + role.textContent + '"></input>';

        button.innerHTML = '<i class="fas fa-save" style="color: green;"></i>';
        button.removeEventListener('click', editRow);
        button.addEventListener('click', saveRow);
    }

    function saveRow(event) {
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        const username = row.children[1].querySelector('input');
        const email = row.children[2].querySelector('input');
        const role = row.children[3].querySelector('input');
    
        username.parentNode.innerHTML = username.value;
        email.parentNode.innerHTML = email.value;
        role.parentNode.innerHTML = role.value;
    
        button.innerHTML = '<i class="fas fa-edit" style="color: blue;"></i>';
        button.removeEventListener('click', saveRow);
        button.addEventListener('click', editRow);
    }

    function deleteRow(event) {
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
});