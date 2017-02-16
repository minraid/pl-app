import * as nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'miniraid2@gmail.com',
    pass: 'stigmata666'
  }
});

export class Mailer {

  static send(to, password): Promise<boolean> {
    let mailOptions = {
      to,
      subject: 'Welcome!',
      text: password,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) reject(error);
        console.log(`email send to: ${to}`);
        resolve(info);
      });
    })
  }
}
