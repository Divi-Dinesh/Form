document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('data-form');
    const tableBody = document.querySelector('#data-table tbody');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const foodSelected = formData.getAll('food[]');

        if (foodSelected.length < 2) {
            alert('Select at least 2 food options.');
            return;
        }

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${formData.get('firstName')}</td>
            <td>${formData.get('lastName')}</td>
            <td>${formData.get('address')}</td>
            <td>${formData.get('pincode')}</td>
            <td>${formData.get('gender')}</td>
            <td>${foodSelected.join(', ')}</td>
            <td>${formData.get('state')}</td>
            <td>${formData.get('country')}</td>
        `;

        tableBody.appendChild(newRow);

        // Clear the form
        form.reset();
    });
});
