import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/src/styles/hljs/a11y-dark";

const codeString1 = `<Button
   android:id="@+id/b1"
   android:text="Take_Picture"
   android::onClick="btn"/>`;
const codeString2 = `public class MainActivity extends Activity  
{ 
  Static int Picture = 1 ;
  Uri output; 
  public void btn(View v ) { 
    intent i = new intent (MediaStore.ACTION_IMAGE_CAPTURE); 
    File f = new ;
    File(Environment.getExternalStorageDirectory(),"MyPhoto.jpg");
         output= Uri.fromFile(f);
         i.putExtra(MediaStore.EXTRA_OUTPUT,output);
         StartActivityForResult(i,Picture);
    } 
    Protected void onActivityResult(int request, int result, Intent data) { 
       If(request==Picture && Result==RESULT_OK) { 
           Toast.makeText(this.output.toString().Toast.LENGTH_LONG).show();
         } 
    } 
  }`;
const codeString3 = `AndroidMenifest.xml

  <user-sdk > 
  <uses-feature 
      android:name="android.hardware.camera"
      android:text="Take_Picture"
      android::onClick="btn"/>`;
const space = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;

const subTopics1 = [
  {
    id: 1,
    title: <></>,
    descp: (
      <>
        <div>
          {space}
          Most Android phones nowadays include built-in camera one at the front
          and one at the back . Following example shows how to programatically
          invoke the camera to take a picture & then save the picture to
          external storage.
        </div>
        <div>
          eg. 1{`)`} Add a button in your Application UI such as
          ActivityMain.xml
        </div>
        <div style={{ marginBottom: "2px" }}></div>
        <SyntaxHighlighter style={dark} language="java">
          {codeString1}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    id: 2,
    title: <></>,
    descp: (
      <>
        <div>In the MainActivity.java code the following lines.</div>
        <b>MainActivity.java</b>
        <div style={{ marginBottom: "2px" }}></div>
        <SyntaxHighlighter style={dark} language="java">
          {codeString2}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    id: 3,
    title: <></>,
    descp: (
      <>
        <div>
          {space}
          Essentially you are using an intent object to invoke the camera using
          the{" "}
          <span
            style={{ backgroundColor: "black", padding: "0px 6px 1px 6px" }}
          >
            MediaStore.ACTION_IMAGE_CAPTURE
          </span>{" "}
          at the same time, you are turning the camera that you want to save the
          capture picture to external storage & name the saved picture
          "myphoto.jpg" , finally you call the{" "}
          <span
            style={{ backgroundColor: "black", padding: "0px 6px 1px 6px" }}
          >
            StartActivityForResult()
          </span>{" "}
          method to fire the intent object . This ensures the once the picture
          has been it's path will be displayed using the{" "}
          <span
            style={{ backgroundColor: "black", padding: "0px 6px 1px 6px" }}
          >
            "Toast"
          </span>
          class , this is done through{" "}
          <span
            style={{ backgroundColor: "black", padding: "0px 6px 1px 6px" }}
          >
            onActivityResult()
          </span>{" "}
          call back function to ensure that your application only be installed
          on devices with a camera .
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: <></>,
    descp: (
      <>
        <div>
          You need to add the {`<uses-feature>`} element to your
          androidMenifest.xml file
        </div>
        <SyntaxHighlighter style={dark} language="java">
          {codeString3}
        </SyntaxHighlighter>
        <div>
          {space}
          After running the program the toast class displaying the location of
          image , saved on external storage. Specify the uses feature element in
          your AndroidMenifest.xml file ensure that your application can only be
          installed on a device with a built-in camera .
        </div>
      </>
    ),
  },
];
export default subTopics1;
