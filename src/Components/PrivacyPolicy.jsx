import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy flex flex-col items-center text-center">
      <h1 className="privacy-heading">Datenschutzerklärung</h1>
      <bR></bR>
      
      <h2 className="privacy-heading">1. Verantwortlicher</h2>
      <p>Kelrion Labs Ltd<br />
      Tasou Mitsopoulou 64B, Office 54<br />
      6028 Larnaca, Zypern</p>
      <p>E-Mail: <a href="mailto:office@netznavi.net">office@netznavi.net</a></p>
      <p>Diese Datenschutzerklärung gilt für die Website <a href="https://www.netznavi.net">www.netznavi.net</a> sowie die dazugehörige Web-App.</p>

      <bR></bR>

      <h2 className="privacy-heading">2. Allgemeines zur Datenverarbeitung</h2>
      <p>Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung unserer Website, Web-App und unserer Leistungen erforderlich ist.</p>
      <p>Rechtsgrundlagen der Verarbeitung:</p>
      <ul className="list-none">
        <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
        <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
        <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
      </ul>
      <bR></bR>

      <h2 className="privacy-heading">3. Hosting</h2>
      <p>Unsere Website wird auf Servern innerhalb der EU gehostet. Dabei werden automatisch Server-Logfiles gespeichert (z. B. IP-Adresse, Datum, Uhrzeit, Browsertyp), um die Stabilität und Sicherheit zu gewährleisten.</p>
      <bR></bR>

      <h2 className="privacy-heading">4. Cookies</h2>
      <p>Unsere Website verwendet Cookies, um Funktionen bereitzustellen und das Nutzerverhalten zu analysieren. Beim ersten Besuch erscheint ein Cookie-Hinweis mit der Möglichkeit, bestimmte Cookies abzulehnen.</p>
      <p>Arten von Cookies:</p>
      <ul className="list-none">
        <li>Technisch notwendige Cookies</li>
        <li>Analyse-/Tracking-Cookies (nur mit Einwilligung)</li>
      </ul>
      <bR></bR>

      <h2 className="privacy-heading">5. Google/Firebase Analytics</h2>
      <p>Wir nutzen Firebase Analytics (Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland) zur Analyse der App-Nutzung.</p>
      <p>Erhobene Daten: Geräteinformationen, Nutzungsdauer, Bildschirmaufrufe, App-Version, u. a.</p>
      <ul className="list-none">
        <li>IP-Anonymisierung ist aktiviert.</li>
        <li>Datenübertragung in Drittländer (z. B. USA) kann erfolgen.</li>
        <li>Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
      </ul>
      <p>Opt-out: Sie können in den App-Einstellungen oder mit Tools wie <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out</a> das Tracking deaktivieren.</p>
      <bR></bR>

      <h2 className="privacy-heading">6. Kontaktformular</h2>
      <p>Wenn Sie uns per Formular kontaktieren, verarbeiten wir Ihre Angaben (Name, E-Mail, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage.</p>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a oder b DSGVO</p>
      <bR></bR>

      <h2 className="privacy-heading">7. Nutzerkonto / Registrierung</h2>
      <p>Für den Zugriff auf die App kann ein Benutzerkonto erstellt werden. Dabei erheben wir folgende Daten:</p>
      <ul className="list-none">
        <li>Name (optional)</li>
        <li>E-Mail-Adresse</li>
        <li>Passwort (verschlüsselt gespeichert)</li>
      </ul>
      <p>Die Daten dienen ausschließlich der Nutzung der App. Eine Weitergabe an Dritte erfolgt nicht.</p>
      <bR></bR>

      <h2 className="privacy-heading">8. Ihre Rechte</h2>
      <p>Sie haben das Recht:</p>
      <ul className="list-none">
        <li>auf Auskunft über Ihre Daten (Art. 15 DSGVO)</li>
        <li>auf Berichtigung (Art. 16)</li>
        <li>auf Löschung (Art. 17)</li>
        <li>auf Einschränkung der Verarbeitung (Art. 18)</li>
        <li>auf Datenübertragbarkeit (Art. 20)</li>
        <li>auf Widerspruch (Art. 21)</li>
      </ul>
      <p>Widerruf: Eine erteilte Einwilligung können Sie jederzeit widerrufen.</p>
      <bR></bR>

      <h2 className="privacy-heading">9. Beschwerderecht</h2>
      <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.</p>
      <p>Für Zypern:</p>
      <p>Commissioner for Personal Data Protection<br />
      Iasonos 1, 1082 Nicosia<br />
      E-Mail: <a href="mailto:commissioner@dataprotection.gov.cy">commissioner@dataprotection.gov.cy</a><br />
      <a href="https://www.dataprotection.gov.cy">www.dataprotection.gov.cy</a></p>
      <bR></bR>

      <h2 className="privacy-heading">10. Änderungen dieser Erklärung</h2>
      <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder technische Änderungen anzupassen.</p>
      <p>Letzte Aktualisierung: März 2025</p>
    </div>
  );
};

export default PrivacyPolicy;