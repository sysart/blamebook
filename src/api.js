import Firebase from 'firebase';
export const firebase = new Firebase('https://blamebook.firebaseio.com');


export const api = {

  firebase,

  _users: firebase.child('users'),
  _blames: firebase.child('blames'),

  users: [],

  init() {
    this._users.on('value', (snapshot) => {
      this.users = snapshot.val();
    });
  },


  /**
  * add blame to a user
  * @param  {string} user userid
  * @param  {object} data
  * @return {promise}
  */
  blame(user, data) {
    return this._users
      .child(user)
      .child('blame')
      .transaction((currentValue) => (currentValue || 0) + 1, () => {
        const f = {};

        Object.keys(data).forEach((key) => {
          if (!!data[key]) {
            f[key] = data[key];
          }
        });

        f.time = Firebase.ServerValue.TIMESTAMP;

        this.firebase
          .child('blames')
          .child(user)
          .push()
          .setWithPriority(f, 0 - Date.now());
      });
  },

  /**
   * get user blames
   * @param  {[type]} user [description]
   * @return {[type]}      [description]
   */
  userBlames(user) {
    return this._blames
      .child(user)
      .startAt()
      .limitToFirst(30);
  },

  /**
   * delete user data
   * @param  {string} user
   * @return {promise}
   */
  remove(user) {
    return this._users.child(user).remove().then(() => {
      this._blames.child(user).remove();
    });
  },

  save(data) {
    return this._users.push().set({ name: data });
  },
};

api.init();
