#include <ESP8266WiFi.h>                                                    // esp8266 library
#include <FirebaseArduino.h>                                                // firebase library
#include <DHT.h>           
#define FIREBASE_HOST "farmiculture-d7029.firebaseio.com"                          // the project name address from firebase id
#define FIREBASE_AUTH "tgoqoXwLlSFyVOsHi0E4pzg1yt52ByhIIWkSKqJg"            // the secret key generated from firebase
int sensorPin = A0;
int sensorValue = 0;
int percentValue = 0;

#define WIFI_SSID "Lucifer"                                             // input your home or public wifi name 
#define WIFI_PASSWORD "Madhur01"                                    //password of wifi ssid
 
#define DHTPIN D3                                                           // what digital pin we're connected to
#define DHTTYPE DHT11                                                       // select dht type as DHT 11 or DHT22
DHT dht(DHTPIN, DHTTYPE);                                                     

void setup() {
  Serial.begin(9600);
  delay(1000);                
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);                                     //try to connect with wifi
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());                                            //print local IP address
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);                              // connect to firebase
  dht.begin();                                                               //Start reading dht sensor
}

void loop() { 
  float h = dht.readHumidity();                                              // Reading temperature or humidity takes about 250 milliseconds!
  float t = dht.readTemperature();                                           // Read temperature as Celsius (the default)
    
  if (isnan(h) || isnan(t)) {                                                // Check if any reads failed and exit early (to try again).
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }
  
  Serial.print("Humidity: ");  Serial.print(h);
  String fireHumid = String(h) + String("%");                                         //convert integer humidity to string humidity 
  Serial.print("%  Temperature: ");  Serial.print(t);  Serial.println("Â°C ");
  String fireTemp = String(t) + String("°C");                                                     //convert integer temperature to string temperature
  
  sensorValue = analogRead(sensorPin);                         // soil moisture sensor
  Serial.print("\n\nAnalog Value: ");
  Serial.print(sensorValue);
  
  percentValue = map(sensorValue, 1023, 200, 0, 100);
  Serial.print("\nPercentValue: ");
  Serial.print(percentValue);
  Serial.print("%");
  String soilmoist = String(percentValue)+String("%");
  delay(5000);
  
  Firebase.setString("/Humidity", fireHumid);                                  //setup path and send readings
  Firebase.setString("/Temperature", fireTemp);                                //setup path and send readings
  Firebase.setString("/Soilmoisture", soilmoist);
   
}
