const sgMail = require('@sendgrid/mail');
const moment = require('moment');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (reservation) => {
  const formattedTextContent = `\n
    \tNúmero de reservación: ${reservation.reservation}\n
    \tDía de entrada: ${moment(reservation.entryDate).format('DD/MM/YYYY')}\n
    \tDía de salida: ${moment(reservation.leavingDate).format('DD/MM/YYYY')}\n
    \tTotal de cuartos:\n
    \t\tSimples: ${reservation.rooms.simple}\n
    \t\tDobles: ${reservation.rooms.double}\n
    \t\tMatrimonial: ${reservation.rooms.master}\n
    \t\tSuite: ${reservation.rooms.suite}\n
  `;

  sgMail.send({
    to: reservation.email,
    from: 'l16330576@hermosillo.tecnm.mx',
    subject: 'Reservación en HOTEL-CASINO',
    text: formattedTextContent,
  });
}

module.exports = {
  sendEmail,
};
