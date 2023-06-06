const Route = require("../../router/Class.Router");

class SessionRouter extends Route {
  init() {
    this.get('/current', ['PUBLIC'], (req, res) => {
      try {
        if (req.session.user) {
          res.sendSuccess(req.session.user);
        }
        else {
          res.sendSuccess({ message: 'No estas Logueado' });
        }
      } 
      catch (error) {
        res.sendServerError(`something went wrong ${error}`)
      }
    })
  }
}

module.exports = SessionRouter;