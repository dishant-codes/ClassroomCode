import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/src/styles/hljs/a11y-dark";

const codeString1 = `SensorManager sm =(SensorManager)getSystemService(Contex.SENSOR_SERVICE);
sm.registerListener(mySensorListener,SensorManager.SENSOR_ACCELEROMETER,SensorManager.SENSOR_DELAY_UI);`;

const codeString2 = `SensorListener mySensorListener = new SensorListener(){
    Public void onSensorChanged( int Sensor,float[] values)
    {
      If(Sensor==SensorManager.SENSOR_ACCELEROMETER){
        Float xAxis=values[SensorManager.DATA_X];
        Float yAxis=values[SensorManager.DATA_Y];
        Float zAxis=values[SensorManager.DATA_Z];

        Float  raw_zAxis=values[SensorManager.RAW_DATA_X];
        Float  raw_yAxis=values[SensorManager.RAW_DATA_Y];
        Float  raw_zAxis=values[SensorManager.RAW_DATA_Z];
        }
    }
      Public void onAccuracyChanged(int sensor , int accuracy)
      {}
};`;
const space = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;
const subTopics3 = [
  {
    id: 1,
    title: <># Introduction Accelerometer :-</>,
    descp: (
      <div>
        {space}
        Accelerometer as there name suggest are use to measure acceleration ,
        acceleration is define as rate of change of velocity so they measure how
        quickly the speed of the device is changing in a given direction using
        an Accelerometer you can detect movement and more use of the rate of the
        change of the speed of that moment generally you will be intrested in
        acceleration changes relative to a rapid movement such as use for user
        input in the formal case you will often need to the device to calculate
        the initial orientation and acceleration to take effects ito in future
        result.
      </div>
    ),
  },
  {
    id: 2,
    title: <># Detecting Acceleration Changes :-</>,
    descp: (
      <>
        <div style={{ marginBottom: "3px" }}></div>
        <div>
          {space}
          Acceleration can be measured along there directional Axis forward ,
          backward , left , right and up-down the sensor manager report sensor
          changes in all three direction (in the three axis).
        </div>
        <br />
        <div>
          {space}
          Vertical upward or downward where positive represent upward moment
          such as device being lifted up.
        </div>
        <br />
        <div>
          {space}
          longitudinal forward or backward acceleration were forward
          acceleration is positive , these represent a device flat on its
          background facing up and in orientation being moved along the desk in
          the direction of the top of the device.
        </div>
        <br />
        <div>
          {space}
          Lateral Sideway acceleration where positive value represent moment
          forward the right of the device and negative value show moments
          forward the left in the same description aa describe in the
          longitudinal movement would be created by moving the device along
          surface to your right.
        </div>
        <br />
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
          The Sensor manager consider the device as rest when it is sitting face
          up on a flat surface in portrait orientation , you can monitor the
          changes in acceleration user sensor listener register an extension of
          the sensor listener class with the sensor manager using the
          <b> SENSOR_ACCELEROMETER </b> flat to request update to accelerometer,
          values & a sensor update rate as shown in the following code .
        </div>
        <div style={{ marginBottom: "1em" }}></div>
        <SyntaxHighlighter style={dark} language="java">
          {codeString1}
        </SyntaxHighlighter>
        <div>
          {space}
          Your Sensor Listener must implement the on sensor changes method that
          will be triggered when the changes in the Acceleration along any three
          axis are detected the onSensorChange() method receive a float array
          that contains the current acceleration along all three axis in raw
          formats . The sensor manager includes index constants that you can use
          to extracts the acceleration value you require as shown in the
          following code.
        </div>
        <div style={{ marginBottom: "1em" }}></div>
        <SyntaxHighlighter language="java" style={dark}>
          {codeString2}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    id: 4,
    title: <># Native Google Maps & location based services : -</>,
    descp: (
      <>
        <div>
          {space}Native maps support lets you create a range of map based
          application that mobility of android device lets you create activities
          that include interactive google maps as shown as a part of your
          interface with all access to map that you can control programatically
          & using android rich graphic library.
        </div>
        <br />
        <div>
          {space}
          Android location based services manage technology like gps & googleGSM
          call based location technology to determine the device's current
          position these service enforce an abstraction from specific location
          detecting technology & lets you specify minimum requirements rather
          than choosing a particular technology , it also means that your
          location based application will work, no matter what technology the
          host handset supports.
        </div>
        <br />
        <div>
          {space}
          To combine maps with location android includes an API for forward &
          reverse geocoding that lets you find map co-ordinates for an address &
          the address of map position.
        </div>
      </>
    ),
  },
];
export default subTopics3;
