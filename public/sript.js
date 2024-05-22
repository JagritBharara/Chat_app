const socket = io();

$(`#send-btn`).on('click',function(){
    const msgText = $('#inp').val();

    //event Trigger
    socket.emit('send-msg',{msg:msgText});
    $('#inp').val("");
})

$(`#chat-box`).hide();

socket.on('received-msg',(data)=>{
    // ${'#chat'}.append(`<li class="border p-2 ms-0 mb-2 rounded-pill"><span class="fw-bold">${data.msg}</span></li>`)
    $('#chat').append(`<li class="border p-2 ms-0 mb-2 rounded-pill"><span class="fw-bold">${data.username}:${data.msg}</span></li>`)
})

$(`#login-btn`).on('click',function(){
    const username = $('#username').val();

    //event Trigger
    socket.emit('login',{username:username});
    $('#username').val("");

    $(`#chat-box`).show();
    $(`#loginP`).hide();
})






















// const socket = io();
// $('#send-btn').on('click' , function(){
//     const msgText = $('#inp').val();
//     // event trigger krdia
//     socket.emit('send-msg' , {msg:msgText});
//     $('#inp').val("")
// })
// socket.on('received-msg' , (data)=>{
//     // console.log(data,'data 2')
//     $('#chat').append(`<li class="border p-2 ms-0 mb-2 rounded-pill"><span class="fw-bold">${data.msg}</span></li>`)
// })