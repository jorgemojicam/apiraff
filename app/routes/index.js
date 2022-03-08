module.exports = app => {

const auth =   require('./app/routes/auth.routes');
const user =require('./app/routes/user.routes');

app.use(`/api/v1/auth`, auth);
app.use(`/api/v1/user`, user);

};