export default class EntryForContact {
    name: string;
    email?: string;
    phone?: string;
    date?: Date;
    details?: string;
  
    constructor(
      name: string,
      email?: string,
      phone?: string,
      date?: Date,
      details?: string
    ) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.date = date;
      this.details = details;
    }
  }