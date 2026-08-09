import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Contact {
  name: string;
  contact: string;
  message: string;
  captcha: string;
  consent: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

  constructor(private http: HttpClient) {}

  currentYear = new Date().getFullYear();
  successMessage = ''; 
  errorMessage = '';
  sending = false;

  contact: Contact = {
    name: '',
    contact: '',
    message: '',
    captcha: '',
    consent: false
  };

  captchaA = 3;
  captchaB = 4;

  sent = false;
  error = '';

  supportList = [
    'Erőfejlesztés és izomépítés',
    'Alakformálás és zsírcsökkentés',
    'Kezdő edzőtermi rutin felépítése',
    'Szabadsúlyos alapgyakorlatok technikája',
    'Tartható, személyre szabott edzésterv'
  ];

  boundaryList = [
    'Gyors, erőfeszítés nélküli átalakulás',
    'Orvosi vagy gyógytornászati rehabilitáció',
    'Versenydiéta vagy extrém színpadi felkészítés',
    'Illegális szerek használata vagy alkalmazása'
  ];

  submitForm(): void {
    this.successMessage = ''; 
    this.errorMessage = '';

    this.error = '';
    this.sent = false;

    if (
      !this.contact.name.trim() ||
      this.contact.name.trim().length < 2
    ) {
      this.error = 'Add meg a neved (legalább 2 karakter).';
      return;
    }

    if (!this.contact.contact.trim()) {
      this.error = 'Add meg az e-mail címed vagy telefonszámod.';
      return;
    }

    if (
      !this.contact.message.trim() ||
      this.contact.message.trim().length < 10
    ) {
      this.error =
        'Írj néhány szót a céljaidról (legalább 10 karakter).';
      return;
    }

    if (Number(this.contact.captcha) !== this.captchaA + this.captchaB) {
      this.error = 'Helytelen válasz — próbáld újra.';
      return;
    }

    if (!this.contact.consent) {
      this.error = 'Az adatkezelés elfogadása kötelező.';
      return;
    }

    const params = new HttpParams() .set('name', this.contact.name) .set('fromEmail', this.contact.contact) .set('subject', 'Kapcsolatfelvétel a czakonorbert.hu oldalról') .set('body', this.contact.message);

  const url =
    'https://api.idopontcenter.hu/Fitness/SendMail' +
    `?name=${encodeURIComponent(this.contact.name)}` +
    `&fromEmail=${encodeURIComponent('czakonorbert88@gmail.com')}` +
    `&subject=${encodeURIComponent('Kapcsolatfelvétel a weboldalról')}` +
    `&body=${encodeURIComponent(
      `Név: ${this.contact.name}\n\n` +
      `E-mail: ${this.contact.contact}\n\n` +
      `Üzenet:\n${this.contact.message}`
    )}`;
  
    this.http.get(url).subscribe({ 
     next: () => {
      this.sending = false;
      this.successMessage = 'Az üzenetet sikeresen elküldtük!';

      this.contact = {
        name: '',
        contact: '',
        message: '',
        captcha: '',
        consent: false
      };
    },
     error: (error) => { console.error('API hiba:', error); 
      this.sending = false; this.errorMessage = 'Az üzenet küldése sikertelen. Kérlek, próbáld újra később.'; 
    } });    

    /*
     * Ide kerülhet később az API-hívás.
     * Az eredeti Lovable oldal itt a sendContactMail
     * szerverfüggvényt használja.
     */
    this.sent = true;

    this.contact = {
      name: '',
      contact: '',
      message: '',
      captcha: '',
      consent: false
    };

    this.generateCaptcha();
  }

  generateCaptcha(): void {
    this.captchaA = Math.floor(Math.random() * 8) + 2;
    this.captchaB = Math.floor(Math.random() * 8) + 2;
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}