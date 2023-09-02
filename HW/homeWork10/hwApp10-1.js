// Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. При зникненні фокуса - так само пропадає
document.getElementById('field').addEventListener('focus', (event) => {
    const inputParent = event.target.parentNode;
    const div = document.createElement('div');
    div.textContent = 'Focus on';
    div.id = 'focusText'
    inputParent.appendChild(div);
});

document.getElementById('field').addEventListener('blur', (event) => {
    document.getElementById('focusText').remove();
})