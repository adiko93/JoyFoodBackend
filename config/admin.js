module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b925fc869e708b468109165c83afb368'),
  },
});
