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
        "content": "Helle test",
        "time": new Date()
      },
      {
        "from": "krod",
        "to": "me",
        "content": "Helle test",
        "time": new Date()
      },
      {
        "from": "me",
        "to": "krod",
        "content": "Helle test",
        "time": new Date()
      },
      {
        "from": "me",
        "to": "krod",
        "content": "Helle test",
        "time": new Date()
      },
      {
        "from": "krod",
        "to": "me",
        "content": "Helle test",
        "time": new Date()
      },
      {
        "from": "me",
        "to": "woods",
        "content": "Helle test",
        "time": new Date()
      },
      {
        "from": "woods",
        "to": "me",
        "content": "Helle test",
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
