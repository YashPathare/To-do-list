let add_button=document.querySelector('.add_button');
let input_task=document.querySelector('.in');
let task_list=document.querySelector('.task_list');



add_button.addEventListener('click',function()
{
    let task=document.createElement('div');
    task.classList.add('task');
    let li=document.createElement('li');
    li.innerText=`${input_task.value}`;
    task.appendChild(li);

    let check_button=document.createElement("button");
    check_button.classList.add('check_button');
    check_button.innerHTML='<i class="fa-solid fa-check"></i>'
    task.appendChild(check_button);

    let remove_button=document.createElement("button");
    remove_button.classList.add('remove_button');
    remove_button.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    task.appendChild(remove_button);

    if(li.innerText==='')
    {
        alert('Please enter a task');
    }
    else
    {
        task_list.appendChild(task);
        input_task.value='';
    }

    check_button.addEventListener('click',function()
    {
        check_button.parentElement.style.textDecoration='line-through';
    })

    remove_button.addEventListener('click',function()
    {
        remove_button.parentElement.remove();
    })
})