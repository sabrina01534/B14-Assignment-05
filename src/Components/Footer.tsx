import logo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div className="mt-15 w-11/12 mx-auto">
           <div className="flex justify-between border-b border-gray-500 mt-4 mb-4">
             <div>
          <img src={logo} alt="" />
          <p className="text-gray-500">Curated tools, technologies, and resources for developers building<br/>
modern software.</p>
<div className="flex gap-5 font-bold mb-4">
    <h3>GitHub</h3>
    <h3>Twitter</h3>
    <h3>Linkedln</h3>
</div>
            </div>
           <div>
<h1>PRODUCTS</h1>
<p className="text-gray-500">Home</p>
<p className="text-gray-500">Techonologies</p>
<p className="text-gray-500">Projects</p>
            </div>
            <div>
<h1>COMPANY</h1>
<p className="text-gray-500">About</p>
<p className="text-gray-500">Contact</p>
<p className="text-gray-500">Careers</p>
            </div>
            <div>
<h1>LEGAL</h1>
<p className="text-gray-500">Privacy Policy</p>
<p className="text-gray-500">Team of Service</p>

            </div>
           </div>
   <div>
              <div className="flex justify-between">
                <p className="text-gray-500">© 2026 Dev Stack. All rights reserved.</p>
                 <div className="flex gap-4">
                     <p className="text-gray-500"> Privacy</p>
                     <p className="text-gray-500">Team</p>
                 </div>
             </div>
            </div>
          
        </div>
       
       
    );
};

export default Footer;