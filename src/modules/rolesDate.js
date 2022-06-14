export class RolesDate {
    _roles = [ 
        {
      id: 0,
      name: "Администратор проекта"
    },
    {
      id: 1,
      "name": "Программист"
    },
    {
      id: 2,
      "name": "Просматривающий"
    }
        
    ]

    get roles() {
        return this._users;
    }

    set roles(roles) {
        this._roles = roles;
    }

    logger() {
        console.log(this.roles);
    }
}