import {MenuItem, Footer} from "./components/MenuItem";


export default function App() {
return (
<div className="page">
<h1>Campus Cafe</h1>
<p className="tagline">Fresh coffee between classes</p>
<h2>Today's Menu</h2>

<div>

<MenuItem></MenuItem>

</div>
<div>
  
<MenuItem></MenuItem>

</div>
<div>
  
<MenuItem></MenuItem>

</div>
<div>
  <Footer></Footer>
</div>
</div>
);
}