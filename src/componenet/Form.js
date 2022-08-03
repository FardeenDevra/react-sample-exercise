import Starting from './Starting';
import './Form.css';
function hexJenrator() {
  let str = '0123456789abcdef'
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor((Math.random() * str.length));
    color += str[index];
  }
  return (`#${color}`);
}
function Form() {
  return (
    <div className="form">
      <h1>SUBSCRIBE</h1>
      <label>Sign Up Your Email Address To Receive News And Updates</label>
      <div>
        <input type='text' placeholder='First Name'></input >
        <input type='text' placeholder='Last Name'></input >
        <input type='text' placeholder='Email Name'></input >
      </div>
      <button>Subscribe</button>
      {/* <Starting color={hexJenrator()}></Starting> */}
    </div>
  );
}
export default Form;