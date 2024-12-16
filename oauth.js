const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id); // Guardamos el ID del usuario en la sesión
});

passport.deserializeUser((user, done) => {
  done(null, user); // Restauramos el usuario desde la sesión
});

// Configuramos la estrategia de Google
passport.use(
  new GoogleStrategy(
    {
      clientID:
        '1055902233091-daiane9n0cujvn1fpok3eooni06vo5si.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Perfil recibido:', profile);
      done(null, profile); // Puedes guardar el perfil en una base de datos si lo necesitas
    },
  ),
);

module.exports = passport;
