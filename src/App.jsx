import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Formula from './pages/Formula.jsx'
import Kbis from './pages/Kbis.jsx'
import Search from './pages/Search.jsx'
import Faq from './pages/Faq.jsx'
import Contact from './pages/Contact.jsx'
import Cancel from './pages/Cancel.jsx'
import Claim from './pages/Claim.jsx'
import Legal from './pages/Legal.jsx'
import BankInfo from './pages/BankInfo.jsx'
import Hpy from './pages/Hpy.jsx'
import Admin from './pages/Admin.jsx'
import NotFound from './pages/NotFound.jsx'
import Connexion from './pages/Connexion.jsx'
import ConditionsFormula from './pages/ConditionsFormula.jsx'
import Signup from './pages/Signup.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/offre" element={<Formula />} />
        <Route path="/information-kbis" element={<Kbis />} />
        <Route path="/entreprises" element={<Search />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resiliation" element={<Cancel />} />
        <Route path="/reclamation" element={<Claim />} />
        <Route path="/mentions-legales" element={<Legal slug="mentions-legales" />} />
        <Route path="/conditions-generales-de-ventes" element={<Legal slug="conditions-generales-de-ventes" />} />
        <Route path="/conditions-generales-de-vente" element={<Legal slug="conditions-generales-de-vente" />} />
        <Route path="/politique-de-confidentialite" element={<Legal slug="politique-de-confidentialite" />} />
        <Route path="/cookies" element={<Legal slug="cookies" />} />
        <Route path="/conditions-de-la-formule" element={<ConditionsFormula />} />
        <Route path="/votre-releve-bancaire" element={<BankInfo />} />
        <Route path="/hpy-infoscte" element={<Hpy />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
