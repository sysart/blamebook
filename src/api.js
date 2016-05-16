import Firebase from 'firebase';
export const firebase = new Firebase('https://blamebook.firebaseio.com');


export const api = {

  firebase,

  _users: firebase.child('users'),

  users: [],

  init() {
    this._users.on('value', (snapshot) => {
      this.users = snapshot.val();
    });
  },

  blame(user) {
    this._users
      .child(user)
      .child('blame')
      .transaction((currentValue) => (currentValue || 0) + 1);
  },

  remove(user) {
    this._users.child(user).remove();
  },

  save(data) {
    this._users.push().set({ name: data });
  },
};

api.init();
