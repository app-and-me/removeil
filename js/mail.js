    // Select the "Select All" checkbox and all individual mail checkboxes
    const selectAllCheckbox = document.getElementById('select-all-checkbox');
    const mailCheckboxes = document.querySelectorAll('.mail-checkbox');

    // Add event listener to "Select All" checkbox
    selectAllCheckbox.addEventListener('change', function() {
        const isChecked = selectAllCheckbox.checked;
        // Loop through each mail checkbox and set its checked state
        mailCheckboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    });
