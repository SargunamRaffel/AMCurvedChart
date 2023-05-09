## Description

Integrating a Curved chart with Mendix can be done through a pluggable widget. A pluggable widget is a reusable component that can be added to a Mendix application to add custom functionality or user interface elements.


## Features

  1. Allows you to pass custom variables are Chart id (Mandatory),ChartValue, Width and Height.
  
  2. Define the input parameters that the widget will use to receive JSON data and settings for the chart. These parameters can include in the data source.
  
## Usage

    •	Insert the widget into any layout where you want to include a Curved Chart
    
    •	We must configure the chartID and ChartValue.
    
    •	Insert "DSMicroflow" and pass the JSON object to show the Donutchart.
   
## Example
'[{
  "country": "USA",
  "value": 2025
}, {
  "country": "China",
  "value": 1882
},
 {
  "country": "India",
  "value": 2000
},
 {
  "country": "Russia",
  "value": 1500
}]'
    
    •	Find the below attached screenshots

## Issues, suggestions, and feature requests

https://github.com/SargunamRaffel/AMCurvedChart/issues
      




