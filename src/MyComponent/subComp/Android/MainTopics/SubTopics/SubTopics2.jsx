import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/src/styles/hljs/a11y-dark";

const codeSting1 = `ACCESS_FINE_LOCATION
ACCESS_COARSE_LOCATION

  Public class MainActivity extends Activity 
    { 
      LocationManager lm = (LocationManager).getSystemService(context.LOCATION_SERVICE);
      Boolean gpsstatus = lm.isProviderEnabled(LocationManager.GPS_PROVIDER);
      Boolean networkstatus = lm.isProviderEnabled(LocationManager.NETWORK_PROVIDER);
         if ( !gpsstatus || !networkstatus ) {
             Intent in = new intent (android.Provider.settings.ACTION_LOCATION_SOURCE_SETTINGS); 
             startActivity(in);
           } 
    } `;

const codeSting2 = `< uses-permission android:name="android.permission.ACCESS_FILE_LOCATION"/>
< uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>`;

const space = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;

const subTopics2 = [
  {
    id: 1,
    title: <></>,
    descp: (
      <>
        <div>
          {space}
          If you have location based service application they relies on the{" "}
          <b>"GPS ( Global Positioning System )" </b> OR{" "}
          <b>"Network Trangulation"</b> you need to ensure that relevant
          settings in the location service page in the setting application are
          enabled & are turn on and if it is not how to direct the page to the
          user to enable the setting.
        </div>
        <b>eg.</b>
        <div>
          {space}
          To determine if location services are enabled on the device , you
          first obtain {`&`} instances of the location manager class using this
          instance , you can then check weather the GPS or network provider is
          enabled by using the <b>"ifProviderEnable()"</b> method as demonstrate
          in the following code;
        </div>
        <SyntaxHighlighter language="java" style={dark}>
          {codeSting1}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    id: 2,
    title: <></>,
    descp: (
      <>
        <div>
          {space}
          If a perticular setting is not enabled , you can use an intent object
          to direct the user to the setting page . You also need to ensure that
          you add the relevant permission in your AndroidMenifest.xml file.
        </div>
        <SyntaxHighlighter language="java" style={dark}>
          {codeSting2}
        </SyntaxHighlighter>
        <b>
          Note :- You are not allowed to Programatically turn on the GPS or
          Network Provider .
        </b>
      </>
    ),
  },
];
export default subTopics2;
