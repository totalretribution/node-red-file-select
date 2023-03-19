
module.exports = function (RED) {
  const fs = require("fs")
  const path = require("path");

  function getFileList(folder) {
    return fs.readdirSync(folder, { withFileTypes: true })
      .filter(item => !item.isDirectory())
      .map(item => item.name);
  }

  function folderExists(folder) {
    try {
      fs.accessSync(folder);
      return true;
    } catch (err) {
      return false;
    }
  }

  function nodeRedFileSelect(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.config = config;
    node.filename = config.file;
    node.foldername = config.folder;

    node.on('input', function (msg) {
      node.send([msg, { payload: node.filename}, {payload: path.join(node.foldername, node.filename)}]);
    });
  }
  RED.nodes.registerType("file-select", nodeRedFileSelect);

  RED.httpAdmin.post("/node-red-file-select/files", function (req, res) {
    const folder = req.body.folder;
    if (folder == undefined || folder == '') {
      res.sendStatus(404);
    } else {
      res.json(getFileList(folder));
    }
  });

  RED.httpAdmin.post("/node-red-file-select/folder", function (req, res) {
    const folder = req.body.folder;
    if (folder != 'undefined' && folder != "") {
      res = folderExists(folder);
    }
  });
}