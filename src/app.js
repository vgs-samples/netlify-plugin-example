const vgsForm = VGSCollect.create(
  process.env.VGS_VAULT_ID,
  'sandbox',
  (state) => {}).setRouteId(process.env.VGS_ROUTE_ID);

const css = {
  boxSizing: 'border-box',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"',
  color: '#000000',
  '&::placeholder': {
    color: '#bcbcbc'
  }
};

vgsForm.field('#email', {
  type: 'text',
  name: 'login_email',
  placeholder: 'e.g. test@example.com',
  validations: ['required'],
  css
});

vgsForm.field('#password', {
  type: 'password',
  name: 'login_password',
  validations: ['required'],
  placeholder: 'password',
  css
});

document.getElementById('vgs-collect-form').addEventListener('submit', (e) => {
  e.preventDefault();
  vgsForm.tokenize((status, response) => {
    if (status === 200) {
      /**
       * Retrieve tokens from the response and send them to your server.
       */
      console.log(response);
    }
  }, (error) => {
    console.log(error);
  });
});