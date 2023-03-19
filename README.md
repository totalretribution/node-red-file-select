# @totalretribution/node-red-file-select
Node-RED node for selecting a file from a folder and sending file name on message received.

## Install
* From NPM: ```npm install @totalretribution/node-red-file-select```
* From source:
  * Clone the repository
  * In the node-red folder run ```npm install [path-to-repository-folder]```

## Usage
On received message, outputs the following messages:  
* **payload**: Original message.  
* **file name**: The selected file name.  
* **path**: The full path containing both the folder and file.  

The file-select-node comprises the following options:

* **folder**: The folder to use for the selectable file list.  
* **file**: The file name to output on received message.  

## License
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
