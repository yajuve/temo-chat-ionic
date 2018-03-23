import { Injectable } from '@angular/core';

import { Message } from '../models/message';

@Injectable()
export class MessageMocks {
  public items: Message[] = [];

  constructor() {
    let items = [
      {
        "from": "me",
        "to": "krod",
        "content": "Hello",
        "time": new Date()
      },
      {
        "from": "krod",
        "to": "me",
        "content": "Hi how are you ?",
        "time": new Date()
      },
      {
        "from": "me",
        "to": "krod",
        "content": "Fine",
        "time": new Date()
      },
      {
        "from": "me",
        "to": "krod",
        "content": "And you ?",
        "time": new Date()
      },
      {
        "from": "krod",
        "to": "me",
        "content": "Good",
        "time": new Date()
      },
      {
        "from": "me",
        "to": "woods",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "kay",
        "to": "me",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "JTS",
        "to": "me",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "harodez",
        "to": "me",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "eam",
        "to": "me",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "paden",
        "to": "me",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "woods",
        "to": "me",
        "content": "Hi",
        "time": new Date()
      }
    ];

    for (let item of items) {
      this.items.push(item);
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Message) {
    this.items.push(item);
  }

}
