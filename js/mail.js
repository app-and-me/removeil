const selectAllCheckbox = document.getElementById('select-all-checkbox');
const mailCheckboxes = document.querySelectorAll('.mail-checkbox');

selectAllCheckbox.addEventListener('change', function() {
    const isChecked = selectAllCheckbox.checked;
    mailCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
});  

// AI 메뉴
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ai-menu').addEventListener('click', function() {
        setTimeout(function() {
            window.location.href = '/afterMail.html';
        }, 2000);
    });
});
