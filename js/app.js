const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Envoi...';

   const serviceID = 'default_service';
   const templateID = 'template_plqt4ft';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envoyer Message';
      alert('Message envoyer');
    }, (err) => {
      btn.value = 'Envoyer Message';
      alert(JSON.stringify(err));
    });
});