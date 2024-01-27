import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="locomoco">

      <div id="mc_embed_signup" className='col right'>
        <form action="https://locomocosec.us15.list-manage.com/subscribe/post?u=d5dd58a923aa2f50c0394612e&amp;id=c356e93d5c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            {/* <h2>Sign Up For Our Mailing List</h2> */}
            <div style={{"position": "absolute", "left": "-5000px"}} aria-hidden="true">
              <input type="text" name="b_d5dd58a923aa2f50c0394612e_c356e93d5c" tabindex="-1" value="" />
            </div>
            <div className="clear">
              <input type="submit" value="Subscribe to Mail List" name="subscribe" id="mc-embedded-subscribe" className="button sub-btn"/>
            </div>
          </div>
        </form>
      </div>


    </div>
  );
}

export default App;
